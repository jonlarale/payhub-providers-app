"use client";

import * as React from "react";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Restaurant } from "./restaurant-data-table";

// Función para generar clave de restaurante (6 caracteres)
const generateRestaurantKey = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Esquema de validación para el formulario
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre del restaurante debe tener al menos 2 caracteres.",
  }),
  ownerEmail: z
    .string()
    .email({ message: "Por favor, introduce un correo electrónico válido." }),
  ownerPhone: z
    .string()
    .min(10, { message: "Por favor, introduce un número de teléfono válido." }),
  status: z.enum(["active", "pending", "deleted", "blocked"], {
    required_error: "Por favor, selecciona un estado.",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface NewRestaurantFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onAddRestaurant: (restaurant: Restaurant) => void;
}

export function NewRestaurantForm({
  open,
  setOpen,
  onAddRestaurant,
}: NewRestaurantFormProps) {
  // Configuración del formulario
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      ownerEmail: "",
      ownerPhone: "",
      status: "pending",
    },
  });

  // Manejar envío del formulario
  function onSubmit(values: FormData) {
    const newRestaurant: Restaurant = {
      id: Date.now().toString(), // Usar timestamp como ID único
      name: values.name,
      ownerEmail: values.ownerEmail,
      ownerPhone: values.ownerPhone,
      restaurantKey: generateRestaurantKey(),
      registerDate: new Date().toISOString().split("T")[0],
      status: values.status,
    };

    onAddRestaurant(newRestaurant);
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="ml-4" variant="default">
          <PlusCircle className="mr-2 h-4 w-4" />
          Añadir restaurante
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir nuevo restaurante</DialogTitle>
          <DialogDescription>
            Introduce los detalles del nuevo restaurante. Haz clic en guardar
            cuando hayas terminado.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del restaurante</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Introduce el nombre del restaurante"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ownerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email del propietario</FormLabel>
                  <FormControl>
                    <Input placeholder="propietario@ejemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ownerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono del propietario</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      {...field}
                    >
                      <option value="active">Activo</option>
                      <option value="pending">Pendiente</option>
                      <option value="blocked">Bloqueado</option>
                      <option value="deleted">Eliminado</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Enviar invitación</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
