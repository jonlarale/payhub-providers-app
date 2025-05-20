import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BrandProvider, BrandData } from "@/app/contexts/brand-context";
import { BrandStyler } from "@/app/(platform)/brand-styler";

// Datos de marca por defecto (podrían venir de una API en un caso real)
const defaultBrandData: BrandData = {
  id: "default",
  logo_url: "/logo.png",
  primary_color: "#0070f3",
  secondary_color: "#ff4081",
  welcome_message_title: "Bienvenido a PayHub",
  welcome_message_description: "La plataforma para gestionar todos tus pagos",
  welcome_message_color: "#ffffff",
  welcome_image_url: "/welcome.jpg",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BrandProvider brandData={defaultBrandData}>
      <BrandStyler>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" />
          <SidebarInset>
            <div className="flex flex-1 flex-col">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </BrandStyler>
    </BrandProvider>
  );
}
