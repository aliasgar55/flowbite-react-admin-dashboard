/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Carousel, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

const SignInPage: FC = function () {
  return (
    <NavbarSidebarLayout isFooter={true}>
      <div className="flex h-screen">
        <div className="flex-1 flex justify-center items-center" >
         {/* <div className="flex justify-center"> */}
            <form className="flex max-w-md w-full flex-col gap-4">
              <p>WELCOME TO</p>
              <h1>LUXURY HOTELS</h1>
              <p>Please create an account </p>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
              </div>
              <Button type="submit">Login</Button>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Forgot password</Label>
              </div>
              <Button type="submit" outline>Register</Button>
            </form>
          {/* </div> */}
        </div>
        <div className="flex-1 bg-gray-400">
          <img src="/static/image.png" alt="Image description" className="w-full h-auto mx-auto" />
        </div>
      </div>
    </NavbarSidebarLayout>

  );
};

export default SignInPage;
