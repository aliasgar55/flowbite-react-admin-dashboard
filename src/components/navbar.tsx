import type { FC } from "react";
import { Button, Dropdown, Navbar } from "flowbite-react";


const ExampleNavbar: FC = function () {
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3 border-b border-gray-200">
        <div className="flex items-center justify-end">
          <Navbar.Collapse className="mr-5">
            <Navbar.Link href="#">List your hotel</Navbar.Link>
            <Navbar.Link href="#">Publish News</Navbar.Link>
            <Navbar.Link href="#">Login</Navbar.Link>
          </Navbar.Collapse>
          <Button color="failure" href="#">
              FindHotel
          </Button>
        </div>
      </div>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Button className="mr-5 " ><i></i></Button>
            <Navbar.Brand href="/">
              <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                LuxuryHotels
              </span>
            </Navbar.Brand>
          </div>
          

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">Luxury Hotels & Resorts</Navbar.Link>
            <Dropdown label="News" className="dropdown-menu-right" inline>
              <Dropdown.Item>Hotel News</Dropdown.Item>
              <Dropdown.Item>General News</Dropdown.Item>
            </Dropdown>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default ExampleNavbar;
