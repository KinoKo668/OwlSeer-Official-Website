import React from 'react';
import { IPhoneFrame } from './IPhoneFrame';
import { useIsMobile } from '../ui/use-mobile';

interface IPhoneWrapperProps {
  children: React.ReactNode;
}

export const IPhoneWrapper = React.memo(function IPhoneWrapper({ children }: IPhoneWrapperProps) {
  const isMobile = useIsMobile();

  // If in mobile viewport, wrap with iPhone frame
  if (isMobile) {
    return <IPhoneFrame>{children}</IPhoneFrame>;
  }

  // Otherwise, render children directly
  return <>{children}</>;
});