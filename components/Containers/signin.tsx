import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Signin = () => {
  return (
    <Tabs defaultValue="signin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Signin</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardHeader className="w-full text-center text-3xl">
            Signin
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="username" type="password" placeholder="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Signin</Button>
          </CardFooter>
          <Separator className="my-4" />
          <CardFooter className="flex flex-col gap-2">
            <Button variant="destructive" className="w-full">
              Continue with Google
            </Button>
            <Button className="w-full">Continue with Github</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader className="w-full text-center text-3xl">
            Signup
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input id="username" type="password" placeholder="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Signup</Button>
          </CardFooter>
          <Separator className="my-4" />
          <CardFooter className="flex flex-col gap-2">
            <Button variant="destructive" className="w-full">
              Signup with Google
            </Button>
            <Button className="w-full">Signup with Github</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
