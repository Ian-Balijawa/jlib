import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Container as Card } from "@/components/containers/card"
import { Container as DropdownMenu } from "@/components/containers/dropdown-menu"

export default function BrowsePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-4xl">
          Welcome to the Job Search
          <br className="hidden sm:inline" />
          Platform for Developers
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Tuesday, 25 Apr 2023
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 flex justify-between">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className: "font-bold",
            })}
          >
            Latest Jobs
          </Link>
          <DropdownMenu />
        </div>
        <div className="col-span-1 hidden flex-wrap justify-between lg:flex">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            Recommended for You
          </Link>
          <DropdownMenu />
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-2 md:grid-cols-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Card />
          ))}
        </div>

        <div className="col-span-1 sm:col-span-3 md:col-span-2 lg:col-span-1">
          <div className="col-span-2 mb-2 flex items-center justify-between lg:hidden">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              Recommended for You
            </Link>
            <DropdownMenu />
          </div>
          <Card />
        </div>
      </div>
    </section>
  )
}
