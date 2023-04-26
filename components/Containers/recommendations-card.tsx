import Image from "next/image"
import { BellRing, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

import { Icons } from "../icons"

type CardProps = React.ComponentProps<typeof Card>

export const Container = ({ className, ...props }: CardProps) => {
  return (
    <Card
      className={cn("mt-2 min-w-min cursor-pointer hover:shadow-lg", className)}
      {...props}
    >
      <CardHeader>
        <div className="flex w-full items-start space-x-2 rounded-md">
          <Image
            src="/logo.png"
            alt="company-logo"
            width={50}
            height={50}
            className="rounded"
          />
          <div className="flex w-full flex-col items-start justify-between">
            <div className="flex w-full items-center justify-between">
              <CardTitle className="text-sm">FullStack Developer</CardTitle>
              <Icons.gitHub className="h-4 w-4" />
            </div>
            <div className="flex w-full items-center justify-between">
              <CardTitle className="text-sm">UG</CardTitle>
              <Icons.logo className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

Container.displayName = "CardContainer"
