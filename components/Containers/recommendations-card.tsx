import Image from "next/image"
import { BellRing, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "../icons"

type CardProps = React.ComponentProps<typeof Card>

export const Container = ({ className, ...props }: CardProps) => {
  return (
    <Card
      className={cn("min-w-min cursor-pointer hover:shadow-lg mt-2", className)}
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
              <Icons.gitHub className="w-4 h-4" />
            </div>
            <div className="flex w-full items-center justify-between">
              <CardTitle className="text-sm">UG</CardTitle>
              <Icons.logo className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

Container.displayName = "CardContainer"
