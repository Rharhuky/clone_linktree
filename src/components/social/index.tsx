import { ReactNode } from "react";

interface SocialMediaProps {
  url: string;
  children: ReactNode;
}

export function SocialMedia({ url, children }: SocialMediaProps) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}
