import { RestaurantDataTable } from "./_components/restaurant-data-table";
import { SiteHeader } from "@/components/site-header";
export default function Home() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <SiteHeader title="Restaurantes" />
      <div className="p-6">
        <RestaurantDataTable />
      </div>
    </div>
  );
}
