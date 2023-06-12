import React from "react";

type StarProps = {
  size: number;
  hasGradient?: boolean;
};

const StarIcon: React.FC<StarProps> = ({ size, hasGradient = false }) => {
  const fill = hasGradient ? "url(#star-gradient)" : "none";
  const border = hasGradient ? "none" : "gray";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      stroke={border}
      strokeWidth={1}
      fill={fill}
    >
      {hasGradient && (
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a8620a" />
          <stop offset="20%" stopColor="#e09519" />
          <stop offset="48%" stopColor="#ffe581" />
          <stop offset="52%" stopColor="#fcdc75" />
          <stop offset="60%" stopColor="#f6c755" />
          <stop offset="71%" stopColor="#eca522" />
          <stop offset="75%" stopColor="#e8980f" />
          <stop offset="100%" stopColor="#feb838" />
        </linearGradient>
      )}
      <path d="M12 2L9.514 8.472L2 9.556l5.472 4.189L5.944 22L12 17.917L18.056 22l-1.528-8.255L22 9.556l-7.514-1.084L12 2z" />
    </svg>
  );
};

export default StarIcon;
