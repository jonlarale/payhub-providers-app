"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconShoppingCart,
  IconUsers,
  IconDeviceMobile,
  IconUserCog,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavMerchant } from "@/components/nav-merchant";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Logo from "@/components/logo";

const data = {
  user: {
    name: "Juan Perez",
    email: "juan.perez@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Administradores",
      url: "#",
      icon: IconUserCog,
    },
    {
      title: "Facturas",
      url: "#",
      icon: IconFileDescription,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configuraciones",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Ayuda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Buscar",
      url: "#",
      icon: IconSearch,
    },
  ],
  restaurants: [
    {
      name: "Restaurantes",
      url: "/restaurants",
      icon: IconListDetails,
    },
    {
      name: "Usuarios",
      url: "#",
      icon: IconUsers,
    },
    {
      name: "Compras",
      url: "#",
      icon: IconShoppingCart,
    },
    {
      name: "Dispositivos",
      url: "#",
      icon: IconDeviceMobile,
    },
    {
      name: "Comisiones",
      url: "#",
      icon: IconChartBar,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <Logo />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMerchant items={data.restaurants} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
