"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useBrand } from "@/app/contexts/brand-context";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { brandData } = useBrand();

  // Estilos para botones con colores dinámicos
  const primaryButtonStyle = {
    backgroundColor: brandData.primary_color,
    color: "#FFFFFF",
    borderColor: brandData.primary_color,
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Recupera tu contraseña</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Ingresa tu correo electrónico y te enviaremos instrucciones para
          restablecer tu contraseña
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer"
          style={primaryButtonStyle}
        >
          Enviar instrucciones
        </Button>
      </div>
      <div className="text-center text-sm">
        ¿Recuerdas tu contraseña?{" "}
        <Link
          href="/login"
          className="underline underline-offset-4 cursor-pointer"
          style={{ color: brandData.primary_color }}
        >
          Volver al inicio de sesión
        </Link>
      </div>
    </form>
  );
}
