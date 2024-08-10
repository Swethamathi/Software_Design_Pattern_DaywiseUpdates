// export default function App() {
//     return (
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     )
//   }
import React from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "./components/mode-toggle";
import GridPattern from "./components/magicui/animated-grid-pattern";
 
const App =()=>{
    return (
      <>
      <GridPattern/>
      <div className="h-screen w-screen flex justify-center items-center">
      <ModeToggle />

      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
       
        <DialogTitle>WELCOME BACK!</DialogTitle>
       
          <DialogTitle>Please enter your details</DialogTitle>
          {/* <DialogDescription>
            Enter the UserName & Password
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input
              id="name"
              placeholder="Email or Username"
              className="col-span-3"
              />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              id="username"
             placeholder="Enter your password"
              className="col-span-3"
              />
          </div>
          <div className="grid grid-cols-4 items-center gap-5">
            <Label htmlFor="remember" className="text-right">
              Remember Me
            </Label>
            <Input
              id="remember"
              type="checkbox"
              className="col-span-1"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-5">
          <Label htmlFor="remember" className="text-left">
              Forgot Password?
            </Label>
            {/* <Input
              id="remember"
              type="line"
              className="col-span-1"
            /> */}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">SignIn</Button>
          
         
        </DialogFooter>
      </DialogContent>
    </Dialog> 
     <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register Here!</DialogTitle>
          {/* <DialogDescription>
            Enter your Username, Password, and Email
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
             Name
            </Label>
            <Input
              id="username"
              placeholder="Enter your name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
             City
            </Label>
            <Input
              id="city"
              type="text"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
             Country
            </Label>
            <Input
              id="name"
              type="text"
         
              className="col-span-3"
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit">Register Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
              </div>
              </>
      )

}
export default App;