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

type CardProps = React.ComponentProps<typeof Card>

export const Container = ({ className, ...props }: CardProps) => {
  return (
    <Card
      className={cn(
        "min-w-min min-height cursor-pointer hover:shadow-lg",
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex items-start space-x-4 rounded-md">
          <Image
            src="/logo.png"
            alt="company-logo"
            width={90}
            height={90}
            className="rounded"
          />
          <div className="flex-1">
            <CardTitle className="text-2xl">FullStack Developer</CardTitle>
            {Array.from({ length: 5 }).map((_, idx) => (
              <Badge className="mr-1" key={idx.toString()} variant="secondary">
                Sql
              </Badge>
            ))}
          </div>
          <MoreHorizontal />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          delectus nobis explicabo illum odio est earum blanditiis excepturi
          incidunt, molestias eum iste repellat nisi veniam sunt tenetur iure
          tempora, nostrum asperiores aspernatur? Officiis, iste quasi, fugiat
          iure dolorem eos vitae, iusto deleniti amet consectetur fugit! veniam
          totam deleniti!
        </CardDescription>
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Badge
              key={idx.toString()}
              variant="secondary"
              className="mt-2 gap-2 py-1 pl-2"
            >
              <BellRing />
              Full-Time
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter
        className="flex items-center justify-between"
        style={{ marginBottom: "-10px" }}
      >
        <CardTitle>TBD</CardTitle>
        <div className="flex items-center gap-4">
          <Button variant="secondary">View Details</Button>
          <Button variant="default">Apply</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

Container.displayName = "CardContainer"
