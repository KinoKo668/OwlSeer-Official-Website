import React, { useState, useCallback } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  onLoadComplete?: () => void;
  onLoadError?: () => void;
}

/**
 * OptimizedImage - A performance-optimized image component
 * 
 * Features:
 * - Default lazy loading for better performance
 * - Async decoding to avoid blocking the main thread
 * - Error handling with fallback support
 * - Loading state management
 */
export const OptimizedImage = ({
  src,
  alt,
  fallbackSrc,
  loading = 'lazy',
  decoding = 'async',
  className = '',
  onLoadComplete,
  onLoadError,
  ...props
}: OptimizedImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoadComplete?.();
  }, [onLoadComplete]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    onLoadError?.();
  }, [onLoadError]);

  // If error and no fallback, render a placeholder
  if (hasError && !fallbackSrc) {
    return (
      <div
        className={`bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
        {...props}
      >
        <span className="text-gray-400 dark:text-gray-500 text-xs">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <img
      src={hasError && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;
