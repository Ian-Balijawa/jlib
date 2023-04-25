import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Card from "@/components/Containers/Card"
import DropDownMenu from "@/components/Containers/DropDownMenu"

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex col-span-2 justify-between">
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
          <DropDownMenu />
        </div>
        <div className="hidden lg:flex flex-wrap justify-between col-span-1">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            Recommended for You
          </Link>
          <DropDownMenu />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 col-span-2">
          {Array.from({ length: 5 }).map((tag) => (
            <>
              <Card />
            </>
          ))}
        </div>

        <div className="col-span-1 sm:col-span-3 md:col-span-2 lg:col-span-1">
          <div className="flex flex justify-between items-center col-span-2 lg:hidden">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              Recommended for You
            </Link>
            <DropDownMenu />
          </div>
          <Card />
        </div>
      </div>
    </section>
  )
}
