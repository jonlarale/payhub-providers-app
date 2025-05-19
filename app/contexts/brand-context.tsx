"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Definición de la interface de datos de la API
export interface BrandData {
  id: string;
  logo_url: string;
  primary_color: string;
  secondary_color: string;
  welcome_message_title: string;
  welcome_message_description: string;
  welcome_message_color: string;
  welcome_image_url: string;
}

interface BrandContextValue {
  brandData: BrandData;
}

// Creación del contexto
const BrandContext = createContext<BrandContextValue | undefined>(undefined);

// Proveedor del contexto
export function BrandProvider({
  children,
  brandData,
}: {
  children: ReactNode;
  brandData: BrandData;
}) {
  return (
    <BrandContext.Provider value={{ brandData }}>
      {children}
    </BrandContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error("useBrand debe ser usado dentro de un BrandProvider");
  }
  return context;
}
