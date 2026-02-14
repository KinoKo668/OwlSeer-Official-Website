import React from 'react';

interface SocialLinksProps {
  className?: string;
}

const tiktokLogoPath = "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0h88a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.58a121.43,121.43,0,0,0,67,20.14Z";
const telegramCirclePath = "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8z";
const telegramPlanePath = "M369.8 177.5l-40.7 191.5c-3 13.6-11.1 17-22.4 10.6l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.7z";
const linkedinLogoPath = "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 1 1 53.79 108.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448H158.56V148.9h88.98v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z";
const discordLogoPath = "M397.8 81.7c-29.2-13.4-60.3-23-92.8-28.5-4 7.2-8.7 16.9-11.9 24.5-34.9-5.2-69.5-5.2-103.8 0-3.2-7.6-8-17.3-12-24.5-32.5 5.5-63.6 15.1-92.9 28.5-58.5 88.1-74.4 173.9-66.5 258.5 38.8 28.8 76.4 46.4 113.4 58.1 9.2-12.7 17.4-26.2 24.6-40.5-13.5-5.1-26.5-11.3-38.9-18.4 3.2-2.4 6.3-4.9 9.3-7.5 75 35.3 156.5 35.3 230.5 0 3.1 2.6 6.2 5.1 9.3 7.5-12.4 7.1-25.5 13.3-38.9 18.4 7.2 14.3 15.4 27.8 24.6 40.5 37.1-11.7 74.7-29.3 113.5-58.1 9.2-98.1-15.7-183.1-66.6-258.5zM171.7 309.2c-22.5 0-41-20.7-41-46.1s18.1-46.1 41-46.1c23 0 41.5 20.7 41 46.1 0 25.4-18.1 46.1-41 46.1zm152.6 0c-22.5 0-41-20.7-41-46.1s18.1-46.1 41-46.1c23 0 41.5 20.7 41 46.1 0 25.4-18 46.1-41 46.1z";

export function SocialLinks({ className = "flex items-center gap-5" }: SocialLinksProps) {
  const baseLinkClassName = "text-gray-400 hover:text-[#1AAE82] dark:hover:text-[#1AAE82] transition-colors";
  const iconLinkClassName = `${baseLinkClassName} inline-flex items-center justify-center leading-none align-middle`;
  const externalProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <div className={className}>
      <a href="https://www.tiktok.com/@owlseerai" className={iconLinkClassName} aria-label="TikTok" {...externalProps}>
        <span className="sr-only">TikTok</span>
        <svg viewBox="0 0 448 512" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
          <path d={tiktokLogoPath} />
        </svg>
      </a>

      <a href="https://x.com/owlseer_ai" className={iconLinkClassName} aria-label="X" {...externalProps}>
        <span className="sr-only">X</span>𝕏
      </a>

      <a href="https://www.instagram.com/owlseerai/" className="inline-flex items-center justify-center leading-none align-middle transition-opacity hover:opacity-90" aria-label="Instagram" {...externalProps}>
        <span className="sr-only">Instagram</span>
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
          <defs>
            <linearGradient id="instagramGradientOwlseer" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#F58529" />
              <stop offset="32%" stopColor="#DD2A7B" />
              <stop offset="68%" stopColor="#8134AF" />
              <stop offset="100%" stopColor="#515BD4" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instagramGradientOwlseer)" />
          <circle cx="12" cy="12" r="4.25" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.15" fill="#FFFFFF" />
        </svg>
      </a>

      <a href="https://t.me/owlseerai" className="inline-flex items-center justify-center leading-none align-middle transition-opacity hover:opacity-90" aria-label="Telegram" {...externalProps}>
        <span className="sr-only">Telegram</span>
        <svg viewBox="0 0 496 512" className="h-[17px] w-[17px]" aria-hidden="true">
          <path fill="#24A1DE" d={telegramCirclePath} />
          <path fill="#FFFFFF" d={telegramPlanePath} />
        </svg>
      </a>

      <a href="https://www.linkedin.com/company/owlseer/" className={iconLinkClassName} aria-label="LinkedIn" {...externalProps}>
        <span className="sr-only">LinkedIn</span>
        <svg viewBox="0 0 448 512" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
          <path d={linkedinLogoPath} />
        </svg>
      </a>

      <a href="https://discord.gg/HRE4Q7RGS7" className={iconLinkClassName} aria-label="Discord" {...externalProps}>
        <span className="sr-only">Discord</span>
        <svg viewBox="0 0 640 512" className="block h-[25px] w-[25px] translate-y-[1px]" fill="currentColor" aria-hidden="true">
          <path d={discordLogoPath} />
        </svg>
      </a>
    </div>
  );
}
