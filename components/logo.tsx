import { Handshake } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex justify-center gap-2 md:justify-start">
      <Link href="/" className="flex items-center gap-2 font-medium">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Handshake className="size-4" />
        </div>
        Aliados
      </Link>
    </div>
  );
}
