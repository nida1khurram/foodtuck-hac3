
"use client";

import { RootState } from "@/app/redux/Store";
import { useSelector } from "react-redux";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, UserRound } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "../container";
import { useSession, signIn, signOut } from "next-auth/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "/pages" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contactUs" },
];

export function TopHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false); // Track if the page is scrolled
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false); // Toggle user dropdown
  const { data: session } = useSession(); // Get user session from NextAuth.js
  const item = useSelector((state: RootState) => state.cart); // Get cart items from Redux store

  React.useEffect(() => {
    // Detect scrolling to apply sticky header effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black"
        )}
      >
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
              <span className="text-2xl font-bold text-white">
                Food<span className="text-[#FF9F0D]">tuck</span>
              </span>
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
              {/* Search Icon */}
              <button className="group p-0">
                <Search className="h-6 w-6 text-white group-hover:text-[#FF9F0D]" />
              </button>

              {/* User Icon or Profile Picture */}
              <div className="relative">
                <button
                  className="group p-0"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
                >
                  {session?.user?.image ? (
                    // Show user's profile picture if logged in
                    <img
                      src={session.user.image}
                      alt="User"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    // Placeholder if not logged in
                    <UserRound className="h-6 w-6 rounded-full bg-white"/>
                    
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md z-10">
                    {session?.user ? (
                      <div className="p-4">
                        {/* Show user's email if logged in */}
                        <p className="text-sm">
                          Signed in as {session.user.email}
                        </p>
                        <button
                          onClick={() => signOut()} // Sign out the user
                          className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="p-4">
                        {/* Show sign-in button if not logged in */}
                        <p className="text-sm">Not signed in</p>
                        <button
                          onClick={() => signIn()} // Redirect to sign-in page
                          className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Sign In
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Cart Icon */}
              <button className="group p-0 relative">
                <Link href={"/cart"}>
                  <ShoppingBag className="h-6 w-6 text-white group-hover:text-[#FF9F0D]" />
                </Link>
                {/* Show the number of cart items */}
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                  {item.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}

