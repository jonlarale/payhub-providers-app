// Tipo base para todas las entidades
export interface BaseEntity {
  id: string;
}

// Tipo para restaurantes
export interface Restaurant extends BaseEntity {
  name: string;
  ownerEmail: string;
  ownerPhone: string;
  restaurantKey: string;
  registerDate: string;
  status: "active" | "pending" | "deleted" | "blocked";
}

// Tipo para usuarios
export interface User extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  role: "admin" | "user" | "support";
  createdAt: string;
  status: "active" | "inactive" | "blocked";
}

// Tipo para dispositivos
export interface Device extends BaseEntity {
  serialNumber: string;
  model: string;
  assignedTo?: string;
  restaurantId?: string;
  lastPing?: string;
  status: "active" | "inactive" | "maintenance";
}

// Función para generar claves aleatorias (útil para diferentes entidades)
export const generateRandomKey = (length: number = 6) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
