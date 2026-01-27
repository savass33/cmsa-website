import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  orientation?: "vertical" | "horizontal";
  reversed?: boolean; // Only applies if orientation is horizontal
}

export default function Card({
  title,
  description,
  image,
  children,
  className = "",
  orientation = "vertical",
  reversed = false,
}: CardProps) {
  const isHorizontal = orientation === "horizontal";

  // Base container classes
  const containerClasses = [
    "bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200 transition-all hover:shadow-md hover:-translate-y-1",
    isHorizontal ? "flex flex-col md:flex-row md:h-80" : "flex flex-col h-full",
    reversed && isHorizontal ? "md:flex-row-reverse" : "",
    className,
  ].join(" ");

  // Image container classes
  const imageContainerClasses = [
    "overflow-hidden relative group shrink-0",
    isHorizontal ? "w-full md:w-2/5 h-64 md:h-full" : "w-full h-64",
  ].join(" ");

  return (
    <div className={containerClasses}>
      {image && (
        <div className={imageContainerClasses}>
          <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      <div className={`flex flex-col justify-center p-8 flex-1 overflow-hidden`}>
        <h3 className="text-2xl font-heading text-primary-800 mb-3">{title}</h3>
        <p className="text-neutral-600 text-base leading-relaxed line-clamp-4 md:line-clamp-5">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}