"use client";

import * as React from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { NewRestaurantForm } from "./new-restaurant-form";
import { DataTable } from "../../_components/data-table/data-table";
import { Restaurant } from "../../_components/data-table/types";

// Datos de ejemplo para restaurantes
const data: Restaurant[] = [
  {
    id: "1",
    name: "Pasta Paradise",
    ownerEmail: "mario@pastaparadise.com",
    ownerPhone: "(555) 123-4567",
    restaurantKey: "AB12CD",
    registerDate: "2023-01-15",
    status: "active",
  },
  {
    id: "2",
    name: "Burger Bliss",
    ownerEmail: "john@burgerbliss.com",
    ownerPhone: "(555) 234-5678",
    restaurantKey: "EF34GH",
    registerDate: "2023-02-20",
    status: "active",
  },
  {
    id: "3",
    name: "Sushi Supreme",
    ownerEmail: "akira@sushisupreme.com",
    ownerPhone: "(555) 345-6789",
    restaurantKey: "IJ56KL",
    registerDate: "2023-03-10",
    status: "pending",
  },
  {
    id: "4",
    name: "Taco Time",
    ownerEmail: "maria@tacotime.com",
    ownerPhone: "(555) 456-7890",
    restaurantKey: "MN78OP",
    registerDate: "2023-04-05",
    status: "blocked",
  },
  {
    id: "5",
    name: "Pizza Palace",
    ownerEmail: "tony@pizzapalace.com",
    ownerPhone: "(555) 567-8901",
    restaurantKey: "QR90ST",
    registerDate: "2023-05-12",
    status: "deleted",
  },
];

// Define status badge colors
const getStatusColor = (status: Restaurant["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "pending":
      return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    case "deleted":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    case "blocked":
      return "bg-slate-100 text-slate-800 hover:bg-slate-200";
    default:
      return "";
  }
};

// Definición de columnas para la tabla de restaurantes
const columns: ColumnDef<Restaurant>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre del restaurante
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "ownerEmail",
    header: "Email del propietario",
    cell: ({ row }) => <div>{row.getValue("ownerEmail")}</div>,
  },
  {
    accessorKey: "ownerPhone",
    header: "Teléfono del propietario",
    cell: ({ row }) => <div>{row.getValue("ownerPhone")}</div>,
  },
  {
    accessorKey: "restaurantKey",
    header: "Clave del restaurante",
    cell: ({ row }) => (
      <div className="font-mono text-sm">{row.getValue("restaurantKey")}</div>
    ),
  },
  {
    accessorKey: "registerDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha de registro
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      // Format the date
      const date = new Date(row.getValue("registerDate"));
      const formatted = new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(date);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as Restaurant["status"];

      let statusText = "";
      if (status === "active") statusText = "activo";
      else if (status === "pending") statusText = "pendiente";
      else if (status === "deleted") statusText = "eliminado";
      else if (status === "blocked") statusText = "bloqueado";
      else statusText = status;

      return (
        <Badge className={`${getStatusColor(status)} capitalize`}>
          {statusText}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const restaurant = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 hover:cursor-pointer"
            >
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(restaurant.id)}
              className="hover:cursor-pointer"
            >
              Copiar ID del restaurante
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer">
              Ver detalles del restaurante
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Editar restaurante
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Ver información del propietario
            </DropdownMenuItem>
            {restaurant.status !== "blocked" &&
              restaurant.status !== "deleted" && (
                <DropdownMenuItem className="text-yellow-600 hover:cursor-pointer">
                  Bloquear restaurante
                </DropdownMenuItem>
              )}
            {restaurant.status === "blocked" && (
              <DropdownMenuItem className="text-green-600 hover:cursor-pointer">
                Desbloquear restaurante
              </DropdownMenuItem>
            )}
            {restaurant.status !== "deleted" && (
              <DropdownMenuItem className="text-red-600 hover:cursor-pointer">
                Eliminar restaurante
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function RestaurantDataTable() {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>(data);
  const [open, setOpen] = React.useState(false);

  // Función para añadir un nuevo restaurante
  const handleAddRestaurant = (newRestaurant: Restaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  // Renderizar sección superior de la tabla (formulario de nuevo restaurante)
  const renderTopSection = () => {
    return (
      <NewRestaurantForm
        open={open}
        setOpen={setOpen}
        onAddRestaurant={handleAddRestaurant}
      />
    );
  };

  return (
    <DataTable
      columns={columns}
      data={restaurants}
      filterColumn="name"
      filterPlaceholder="Buscar restaurante..."
      renderTopSection={renderTopSection}
    />
  );
}
