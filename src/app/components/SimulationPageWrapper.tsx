import React, { createContext, useContext, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ConversionFab, ConversionScenario } from './ConversionFab';

// Global Simulation Context
interface SimulationContextType {
  isTriggered: (pageId: string) => boolean;
  markTriggered: (pageId: string) => void;
}

const SimulationContext = createContext<SimulationContextType | undefined>(undefined);

export function SimulationProvider({ children }: { children: React.ReactNode }) {
  const [triggeredPages, setTriggeredPages] = useState<Set<string>>(new Set());

  const isTriggered = useCallback((pageId: string) => {
    return triggeredPages.has(pageId);
  }, [triggeredPages]);

  const markTriggered = useCallback((pageId: string) => {
    setTriggeredPages(prev => {
      const newSet = new Set(prev);
      newSet.add(pageId);
      return newSet;
    });
  }, []);

  return (
    <SimulationContext.Provider value={{ isTriggered, markTriggered }}>
      {children}
    </SimulationContext.Provider>
  );
}

export const useSimulationGlobal = () => {
  const context = useContext(SimulationContext);
  if (!context) {
    // Return dummy implementation if provider is missing (e.g. real app)
    return { isTriggered: () => false, markTriggered: () => {} };
  }
  return context;
};

// Page Trigger Context
interface PageTriggerContextType {
  trigger: () => void;
}
const PageTriggerContext = createContext<PageTriggerContextType | undefined>(undefined);

export const useSimulationTrigger = () => {
  const context = useContext(PageTriggerContext);
  return context || { trigger: () => {} };
};

export const SimulationPageWrapper = ({ 
  children, 
  scenario = 'default',
  onNavigate,
  pageId: propPageId
}: { 
  children: React.ReactNode, 
  scenario?: ConversionScenario,
  onNavigate: (page: string, question?: string) => void,
  pageId?: string
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isTriggered, markTriggered } = useSimulationGlobal();
  const location = useLocation();
  
  // Use prop pageId or current pathname
  const pageId = propPageId || location.pathname;

  const trigger = useCallback(() => {
    if (isTriggered(pageId)) return;
    
    setIsOpen(true);
    markTriggered(pageId);
  }, [pageId, isTriggered, markTriggered]);

  return (
    <PageTriggerContext.Provider value={{ trigger }}>
      {children}
      <ConversionFab 
        onNavigate={(page) => onNavigate(page)} 
        scenario={scenario} 
        triggerOpen={isOpen}
        onClose={() => setIsOpen(false)}
        autoCloseDelay={10000}
      />
    </PageTriggerContext.Provider>
  );
};
