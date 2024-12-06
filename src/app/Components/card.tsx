// src/components/ui/card.tsx
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className="border-b pb-2 mb-4">{children}</div>;
};

interface CardTitleProps {
  children: ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
};

interface CardContentProps {
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return <div className={`pt-4 ${className}`}>{children}</div>;
};
