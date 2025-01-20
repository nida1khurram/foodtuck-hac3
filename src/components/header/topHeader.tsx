
"use client"

import { RootState } from "@/app/redux/Store"; 
import { useSelector } from "react-redux";
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Search, UserRound, ShoppingBag, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Container } from '../container';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "/pages" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contactUs" },
]

export function TopHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const item = useSelector((state: RootState) => state.cart);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
<Container>

    <header className={cn(
      "sticky top-0 z-50  transition-all duration-300",
      isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black"
    )}>
      <div className="mx-auto max-w-[69%]">
        <div className="h-[90px] flex items-center px-4 md:px-6">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="mr-2 px-2 lg:hidden">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-black">
              <nav className="flex flex-col px-[300px] space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-bold transition-colors hover:text-[#FF9F0D]",
                      pathname === item.href ? "text-[#FF9F0D]" : "text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Food<span className="text-[#FF9F0D]">tuck</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-[#FF9F0D]",
                      pathname === item.href ? "text-[#FF9F0D]" : "text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 pl-4 lg:pl-8">
            <button className="group p-0">
              <Search className="h-6 w-6 text-white group-hover:text-[#FF9F0D]" />
            </button>
          
           <button className="group p-0">
           <Link href={'/signIn'}>
              <UserRound className="h-6 w-6 text-white group-hover:text-[#FF9F0D]" />
              </Link>
            </button>
          
            <button className="group p-0 relative">
              <Link href={'/cart'} >
              <ShoppingBag className="h-6 w-6 text-white group-hover:text-[#FF9F0D]" />
              </Link>
              {item.length}
            </button>
            
          </div>
        </div>
      </div>
    </header>
    </Container>
  )
}

