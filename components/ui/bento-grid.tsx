"use client";

import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid = ({
  className,
  children,
}: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const BentoGridItem = ({
  title,
  description,
  header,
  icon,
  className,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card border border-border dark:border-neutral-800 flex flex-col space-y-4",
        className
      )}
    >
      {header && (
        <div className="rounded-lg aspect-square overflow-hidden relative">
          {header}
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex items-center gap-3">
        {icon && icon}
        {title && (
          <h3 className="font-bold text-xl text-foreground">{title}</h3>
        )}
      </div>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
}; 