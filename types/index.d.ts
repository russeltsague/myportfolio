import { ReactNode } from 'react';

declare global {
  // Project metadata types
  interface Project {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
  }

  interface Skill {
    name: string;
    level: number;
    icon: string;
    category: 'frontend' | 'backend' | 'devops' | 'other';
  }

  interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
  }

  // Component props
  interface ChildrenProps {
    children: ReactNode;
  }

  interface ClassNameProps {
    className?: string;
  }

  // Theme types
  type Theme = 'light' | 'dark' | 'system';

  // Utility types
  type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
  type Nullable<T> = T | null;
  type ValueOf<T> = T[keyof T];
}

// Add global type declarations for CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';
  
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

// Extend Window interface if needed
declare global {
  interface Window {
    // Add any global window properties here
    gtag?: (...args: any[]) => void;
  }
}

export {};
