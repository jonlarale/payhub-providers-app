import Logo from "@/components/logo";
import Image from "next/image";
import { BrandProvider, BrandData } from "@/app/contexts/brand-context";

// Simulación de respuesta de la API
interface ApiResponse {
  success: boolean;
  data: BrandData;
}

// Mock de la respuesta de la API
const mockApiResponse: ApiResponse = {
  success: true,
  data: {
    id: "123e4567-e89b-12d3-a456-426614174000",
    logo_url:
      "https://img.freepik.com/premium-vector/abstract-fintech-digital-data-payment-modern-overlapping-color-vector-logo-design-illustration_216988-2491.jpg?semt=ais_hybrid&w=740",
    primary_color: "#3fb6d1",
    secondary_color: "#000000",
    welcome_message_title: "Bienvenido a Fintech",
    welcome_message_description:
      "El agregador de pagos más rápido y seguro de LATAM",
    welcome_message_color: "#FFFFFF",
    welcome_image_url:
      "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // En una aplicación real, este objeto vendría de una llamada a la API
  const apiData = mockApiResponse.data;

  // Aplicar colores dinámicos desde la API
  const dynamicStyles = {
    "--primary-color": apiData.primary_color,
    "--secondary-color": apiData.secondary_color,
    "--welcome-color": apiData.welcome_message_color,
  } as React.CSSProperties;

  return (
    <BrandProvider brandData={apiData}>
      <div
        className="grid min-h-svh lg:grid-cols-[2fr_3fr]"
        style={dynamicStyles}
      >
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <Logo />
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">{children}</div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
          {/* Overlay para mejorar la visibilidad */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Logo del restaurante */}
          <div className="absolute top-48 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <Image
              src={apiData.logo_url}
              alt="Restaurant logo"
              width={192}
              height={192}
              className="rounded-md"
            />
          </div>

          {/* Contenido de bienvenida */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-10 mt-48 text-center">
            <h2
              className="text-5xl font-bold drop-shadow-md"
              style={{ color: apiData.welcome_message_color }}
            >
              {apiData.welcome_message_title}
            </h2>
            <p
              className="mt-4 max-w-lg text-2xl drop-shadow-md"
              style={{ color: apiData.welcome_message_color }}
            >
              {apiData.welcome_message_description}
            </p>
          </div>

          {/* Imagen de fondo */}
          <Image
            src={apiData.welcome_image_url}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </BrandProvider>
  );
}
