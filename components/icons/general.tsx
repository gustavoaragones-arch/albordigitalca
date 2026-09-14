import type { SVGProps } from "react";

import { SiteIcon } from "@/components/ui/site-icon";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  size?: number;
};

function createIcon(name: string, defaultSize = 20, defaultClassName?: string) {
  return function Icon({ className, size = defaultSize }: IconProps) {
    return (
      <SiteIcon
        name={name}
        size={size}
        className={cn(defaultClassName, className)}
      />
    );
  };
}

export const MicIcon = createIcon("voice-scan", 16, "text-muted-foreground");
export const ThunderIcon = createIcon("flash", 14, "text-muted-foreground");
export const FlashIcon = createIcon("circle-spark", 27, "text-primary");
export const ChevronRightIcon = createIcon(
  "arrow-right",
  16,
  "text-muted-foreground",
);
export const ArrowRightLongerIcon = createIcon(
  "maps-go-straight",
  20,
  "text-natural-black",
);
const CopyRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2623_9646)">
        <path
          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
          stroke="#8B8B8B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.41343 7.415C7.13363 7.69448 6.77726 7.88474 6.38936 7.96173C6.00146 8.03872 5.59944 7.99899 5.23412 7.84755C4.8688 7.69611 4.55657 7.43976 4.33691 7.11091C4.11724 6.78206 4 6.39547 4 6C4 5.60453 4.11724 5.21794 4.33691 4.88909C4.55657 4.56024 4.8688 4.3039 5.23412 4.15245C5.59944 4.00101 6.00146 3.96128 6.38936 4.03827C6.77726 4.11526 7.13363 4.30552 7.41343 4.585"
          stroke="#8B8B8B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2623_9646">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const XformerlyTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 1200 1227">
    <path
      fill="currentColor"
      d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
    />
  </svg>
);

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="currentColor"
    />
  </svg>
);

const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="265"
    height="265"
    viewBox="0 0 265 265"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2623_9670)">
      <path
        d="M132.512 0C96.528 0 92.0104 0.157707 77.8772 0.800656C63.7723 1.44765 54.1446 3.67977 45.7183 6.95652C37.0038 10.3397 29.6119 14.8687 22.247 22.235C14.8767 29.5999 10.3483 36.9918 6.95412 45.7046C3.66765 54.1317 1.43177 63.7624 0.798718 77.8628C0.165668 91.9969 0 96.5151 0 132.5C0 168.485 0.16028 172.987 0.800064 187.12C1.44928 201.225 3.68246 210.855 6.95546 219.279C10.343 227.993 14.8699 235.387 22.2376 242.752C29.5998 250.122 36.993 254.659 45.7008 258.044C54.1325 261.32 63.7629 263.554 77.8665 264.199C91.9996 264.842 96.5131 265 132.496 265C168.484 265 172.986 264.842 187.12 264.199C201.225 263.552 210.866 261.32 219.295 258.044C228.007 254.66 235.388 250.122 242.75 242.752C250.121 235.387 254.649 227.993 258.043 219.282C261.301 210.855 263.537 201.223 264.199 187.124C264.834 172.99 265 168.485 265 132.5C265 96.5151 264.834 91.9996 264.2 77.8655C263.537 63.7598 261.301 54.1317 258.045 45.7073C254.649 36.9918 250.121 29.5999 242.75 22.235C235.38 14.8647 228.01 10.3371 219.287 6.95652C210.841 3.67977 201.206 1.4463 187.1 0.800656C172.967 0.157707 168.467 0 132.472 0H132.512ZM120.626 23.8781C124.155 23.8727 128.09 23.8781 132.512 23.8781C167.89 23.8781 172.084 24.0048 186.055 24.6396C198.973 25.23 205.985 27.3893 210.655 29.2023C216.838 31.6042 221.247 34.4753 225.882 39.112C230.519 43.7488 233.391 48.1659 235.798 54.3501C237.611 59.0138 239.772 66.0269 240.361 78.9452C240.994 92.9135 241.133 97.1082 241.133 132.47C241.133 167.83 240.995 172.026 240.361 185.994C239.768 198.912 237.611 205.924 235.798 210.589C233.396 216.772 230.519 221.176 225.882 225.81C221.244 230.448 216.841 233.318 210.655 235.72C205.99 237.542 198.973 239.696 186.055 240.286C172.087 240.92 167.89 241.059 132.512 241.059C97.1314 241.059 92.9398 240.921 78.9709 240.286C66.0513 239.689 59.0406 237.531 54.3669 235.717C48.1845 233.316 43.7666 230.445 39.1292 225.807C34.4918 221.17 31.6215 216.764 29.2132 210.578C27.4003 205.913 25.2398 198.902 24.6512 185.983C24.0155 172.015 23.8889 167.819 23.8889 132.437C23.8889 97.0543 24.0155 92.8798 24.6512 78.9115C25.2412 65.9932 27.3989 58.9814 29.2132 54.3123C31.6148 48.1281 34.4918 43.7111 39.1292 39.0743C43.7666 34.4362 48.1832 31.5665 54.3669 29.1578C59.038 27.3368 66.0513 25.1828 78.9709 24.5898C91.1942 24.0371 95.9313 23.8727 120.626 23.8444V23.8781ZM203.241 45.8785C194.462 45.8785 187.341 52.9914 187.341 61.773C187.341 70.5505 194.462 77.6728 203.241 77.6728C212.019 77.6728 219.14 70.5505 219.14 61.773C219.14 52.9941 212.019 45.8731 203.24 45.8731L203.241 45.8785ZM132.512 64.4553C94.9332 64.4553 64.4674 94.9219 64.4674 132.5C64.4674 170.078 94.9346 200.53 132.513 200.53C170.092 200.53 200.546 170.078 200.546 132.5C200.546 94.9219 170.088 64.4553 132.509 64.4553H132.512ZM132.512 88.3333C156.905 88.3333 176.68 108.107 176.68 132.5C176.68 156.892 156.903 176.667 132.512 176.667C108.12 176.667 88.3455 156.892 88.3455 132.5C88.3455 108.106 108.118 88.3333 132.512 88.3333Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2623_9670">
        <rect width="264.583" height="264.583" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export const RightArrow = createIcon("arrow-right", 20, "text-foreground");
export const QuoteIcon = createIcon("chat-lines", 24, "text-heading");
export const DoorsOpenIcon = createIcon("home", 24, "text-heading");
export const DocsIcon = createIcon("reports", 24, "text-heading");
export const HandsIcon = createIcon("single-tap-gesture", 24, "text-heading");
export const DimondIcon = createIcon("crown", 24, "text-heading");
export const ChipIcon = createIcon("component", 24, "text-heading");
export const NodeLines = createIcon("sine-wave", 24, "text-heading");
export const CubeIcon = createIcon("extrude", 24, "text-heading");
export const MessageIcon = createIcon("multi-bubble", 24, "text-heading");
export const MessageSend = createIcon("mail-out", 24, "text-heading");
export const HandShakeIocn = createIcon("unity", 24, "text-heading");
export const CallIcon = createIcon("mobile-voice", 20, "text-heading");
export const GreenCheckIcon = createIcon("badge-check", 20, "text-dusty-green");
export const WarningIcon = createIcon("warning-hexagon", 24, "text-[#FFBC00]");
export const UpArrowIcon = createIcon("priority-up", 20, "text-natural-white");
export const PaperClipIcon = createIcon(
  "attachment",
  20,
  "text-muted-foreground",
);
export const PlusIcon = createIcon("plus", 20, "text-muted-foreground");

export {
  CopyRightIcon,
  XformerlyTwitter,
  LinkedIn,
  Instagram,
};
