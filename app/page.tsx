import Link from "next/link";
import "./animations.css"; // Importamos el archivo CSS para las animaciones

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-end w-full">
        <Link
          href="/login"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 cursor-pointer"
        >
          Iniciar sesión
        </Link>
      </header>
      <main className="flex flex-col gap-[32px] items-center justify-center w-full">
        <div className="text-center fade-in">
          <h1 className="text-4xl font-bold">Bienvenido a Portal Aliados</h1>
          <span className="text-sm text-muted-foreground font-light mt-2 block fade-in-delayed">
            Por PayHub
          </span>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/terms" className="hover:underline cursor-pointer">
          Términos y condiciones
        </Link>
        <Link href="/privacy" className="hover:underline cursor-pointer">
          Política de privacidad
        </Link>
      </footer>
    </div>
  );
}
