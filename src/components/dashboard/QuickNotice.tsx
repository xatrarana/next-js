import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import db from '@/lib/prisma'
import { Textarea } from "../ui/textarea"
import toast from "react-hot-toast"

export function QuickNotice() {
 
  
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Quick News</CardTitle>
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input name="title" className=" outline-none  focus:outline-green-500 dark:focus:outline-green-500" id="name" placeholder="" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Message</Label>
                <Textarea name="message" placeholder="Type your message here."/>
            </div>
          </div>
          <Button variant="outline">Cancel</Button>
        <Button  type="submit" className="bg-green-500" >Deploy</Button>
        </form>
      </CardContent>
    </Card>
  )
}
