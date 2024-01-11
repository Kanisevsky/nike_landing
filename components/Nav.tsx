"use client"
import Link from "next/link"
import Image from "next/image"

import { navLinks } from "@/constants"

function Nav() {
  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/" >
          <Image src="/images/header-logo.svg" alt="logo"
          width={130} height={29} priority className="object-contain"/>
        </Link> 
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} 
                className="font-montserrat leading-normal text-lg text-slate-gray">
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src="/icons/hamburger.svg" alt="hamburger icon" height={25} width={25}/>
        </div>       
      </nav>
    </header>
  )
}

export default Nav
