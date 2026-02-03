import React from 'react';

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export const IPhoneFrame = React.memo(function IPhoneFrame({ children }: IPhoneFrameProps) {
  const [currentTime, setCurrentTime] = React.useState('');
  const [batteryLevel] = React.useState(87); // Mock battery level

  // Update time every minute
  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      setCurrentTime(`${displayHours}:${displayMinutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      {/* iPhone Outer Frame */}
      <div 
        className="relative bg-[#1c1c1e] overflow-hidden"
        style={{
          width: '390px',
          height: '844px',
          borderRadius: '60px',
          boxShadow: '0 0 0 14px #1c1c1e, 0 0 0 16px #2c2c2e, 0 20px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Inner Screen Bezel */}
        <div 
          className="absolute inset-0 bg-black overflow-hidden"
          style={{
            borderRadius: '47px',
            margin: '2px',
          }}
        >
          {/* Dynamic Island */}
          <div 
            className="absolute top-[14px] left-1/2 -translate-x-1/2 z-50"
            style={{
              width: '126px',
              height: '37px',
              background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
              borderRadius: '19px',
              boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Camera */}
            <div 
              className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '7px',
                height: '7px',
                background: 'radial-gradient(circle, #1a3a52 0%, #0d1f2d 100%)',
                borderRadius: '50%',
                boxShadow: '0 0 2px rgba(100, 150, 200, 0.3)',
              }}
            />
          </div>

          {/* Status Bar - Left Side (Time) */}
          <div className="absolute top-[23px] left-[40px] z-40 flex items-center">
            <span 
              className="text-black font-semibold tracking-tight"
              style={{
                fontSize: '17px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                letterSpacing: '-0.4px',
                lineHeight: '1',
              }}
            >
              {currentTime}
            </span>
          </div>

          {/* Status Bar - Right Side (Signal, WiFi, Battery) */}
          <div className="absolute top-[23px] right-[28px] flex items-center gap-[7px] z-40"
            style={{
              height: '17px', // Match time height for perfect alignment
            }}
          >
            {/* Cellular Signal */}
            <div className="flex items-end gap-[2.5px]">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className="bg-black rounded-[1px]"
                  style={{
                    width: '3.5px',
                    height: `${bar * 2.5 + 3}px`,
                    opacity: bar <= 3 ? 1 : 0.3,
                  }}
                />
              ))}
            </div>

            {/* WiFi Icon */}
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" className="mt-0.5">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 13.5C9.82843 13.5 10.5 12.8284 10.5 12C10.5 11.1716 9.82843 10.5 9 10.5C8.17157 10.5 7.5 11.1716 7.5 12C7.5 12.8284 8.17157 13.5 9 13.5Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.364 9.636C11.0502 8.32225 9.15076 7.67926 7.24998 8C7.24998 8 8.5 9 9 9C9.5 9 11.364 8.636 12.364 9.636Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.92893 7.22183C7.55684 4.59392 11.6421 4.59392 14.2711 7.22183C14.6616 7.61235 15.2947 7.61235 15.6853 7.22183C16.0758 6.8313 16.0758 6.19814 15.6853 5.80761C12.3137 2.43603 6.88629 2.43603 3.51472 5.80761C3.12419 6.19814 3.12419 6.8313 3.51472 7.22183C3.90524 7.61235 4.5384 7.61235 4.92893 7.22183Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.686291 3.97919C5.42326 -0.757635 12.8767 -0.757635 17.6137 3.97919C18.0042 4.36972 18.6374 4.36972 19.0279 3.97919C19.4184 3.58867 19.4184 2.95551 19.0279 2.56498C13.5473 -2.91562 4.75269 -2.91562 -0.727906 2.56498C-1.11843 2.95551 -1.11843 3.58867 -0.727906 3.97919C-0.337382 4.36972 0.295766 4.36972 0.686291 3.97919Z"
                fill="black"
                opacity="0.3"
              />
            </svg>

            {/* Battery Icon */}
            <div className="flex items-center gap-[1.5px]">
              <div 
                className="relative rounded-[3px] flex items-center justify-end pr-[2px]"
                style={{
                  width: '27px',
                  height: '13px',
                  border: '1.8px solid black',
                  backgroundColor: 'transparent',
                }}
              >
                {/* Battery Fill */}
                <div
                  className="absolute left-[1px] top-[1px] bottom-[1px] bg-black rounded-[1.5px]"
                  style={{
                    width: `calc(${batteryLevel}% - 2px)`,
                    transition: 'width 0.3s ease',
                  }}
                />
                {/* Battery Percentage Text */}
                <span 
                  className="relative z-10 font-bold"
                  style={{
                    fontSize: '9px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                    lineHeight: '1',
                    color: batteryLevel > 50 ? 'white' : 'black',
                  }}
                >
                  {batteryLevel}
                </span>
              </div>
              {/* Battery Cap */}
              <div 
                className="bg-black rounded-r-[1.5px]"
                style={{
                  width: '2.5px',
                  height: '6px',
                }}
              />
            </div>
          </div>

          {/* Screen Content */}
          <div 
            className="absolute inset-0 bg-[#fafafa] overflow-hidden"
            style={{
              paddingTop: '59px', // Space for status bar + dynamic island
            }}
          >
            {children}
          </div>

          {/* No bottom safe area or home indicator here - handled by MobileTabBarWithIndicator */}
        </div>
      </div>
    </div>
  );
});