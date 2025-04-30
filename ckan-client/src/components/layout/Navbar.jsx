import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  return (
    <header className=" px-4 my-4 bg-white h-full">
      <div className="bg-white h-10 container mx-auto flex items-center justify-between position: fixed z-100">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          CKAN Cliente
        </Link>

        {/* Links centrados */}
        <div className="hidden md:flex flex-1 justify-center gap-12">
          <Link
            to="/datasets"
            className={`text-base  hover:text-primary ${
              location.pathname.startsWith('/datasets')
                ? 'text-primary font-bold'
                : 'font-semibold'
            }`}
          >
            Datasets
          </Link>
          <Link
            to="/organizaciones"
            className={`text-base hover:text-primary ${
              location.pathname.startsWith('/organizaciones')
                ? 'text-primary font-bold'
                : 'font-semibold'
            }`}
          >
            Organizaciones
          </Link>
          <Link
            to="/grupos"
            className={`text-base hover:text-primary ${
              location.pathname.startsWith('/grupos')
                ? 'text-primary font-bold'
                : 'font-semibold'
            }`}
          >
            Grupos
          </Link>
          <Link to="/" className="text-base font-semibold hover:text-primary">
            Acerca de
          </Link>
        </div>

        {/* Botón derecho */}
        <div className="hidden md:flex">
          <Button className="rounded-3xl bg-primary text-white hover:bg-primary-hover transition duration-300 ease-in-out">
            <Link to="/login" className="text-sm font-semibold">
              Iniciar Sesión
            </Link>
          </Button>
        </div>

        {/* Menú mobile con Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <nav className="flex flex-col gap-8">
                <Link
                  to="/datasets"
                  className="mt-12 text-sm font-semibold hover:text-primary"
                >
                  Datasets
                </Link>
                <Separator />
                <Link
                  to="/organizaciones"
                  className="text-sm font-semibold hover:text-primary"
                >
                  Organizaciones
                </Link>
                <Separator />
                <Link
                  to="/grupos"
                  className="text-sm font-semibold hover:text-primary"
                >
                  Grupos
                </Link>
                <Separator />
                <Link
                  to="/"
                  className="text-sm font-semibold hover:text-primary"
                >
                  Acerca de
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
