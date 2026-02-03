import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <svg 
                  className="w-6 h-6 text-red-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#111827] mb-2">
                  Something went wrong
                </h2>
                <p className="text-[#6B7280] mb-4">
                  The application encountered an error and couldn't render properly.
                </p>
                {this.state.error && (
                  <div className="bg-[#F8F9FA] rounded-lg p-4 mb-4 font-mono text-sm text-[#374151] overflow-auto">
                    <div className="font-semibold mb-2">Error Details:</div>
                    <div className="text-red-600">{this.state.error.message}</div>
                    {this.state.error.stack && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-[#6B7280] hover:text-[#111827]">
                          Stack trace
                        </summary>
                        <pre className="mt-2 text-xs whitespace-pre-wrap">
                          {this.state.error.stack}
                        </pre>
                      </details>
                    )}
                  </div>
                )}
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-[#0F766E] text-white rounded-lg hover:bg-[#0F766E]/90 transition-colors font-medium"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
