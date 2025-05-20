"use client";

import React from "react";
import { useBrand } from "@/app/contexts/brand-context";

export function BrandStyler({ children }: { children: React.ReactNode }) {
  const { brandData } = useBrand();

  return (
    <div
      style={
        {
          "--primary-color": brandData.primary_color,
          "--secondary-color": brandData.secondary_color,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
