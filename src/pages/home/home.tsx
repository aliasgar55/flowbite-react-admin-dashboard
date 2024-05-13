/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Button,
    Card,
    Carousel,
} from "flowbite-react";
import type { FC } from "react";

import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

import Image from "../../components/image";

//export default Carousel;

const HomePage: FC = function () {
    return (
        <NavbarSidebarLayout isFooter={true}>
            <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
                <div className="w-full h-full">
                    <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            <div className="bg-red-700 p-4 h-20 relative">
                <span className="bg-white text-yellow-500 px-4 py-2 bottom-0 left-20 h-10 text-lg absolute ">
                    NEWLY LISTED HOTELS
                </span>
            </div>

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel indicators={false}>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://via.placeholder.com/400x250?text=Slide+1"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://via.placeholder.com/400x250?text=Slide+1"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://via.placeholder.com/400x250?text=Slide+1"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </Carousel>
            </div>

            <div className="bg-red-700 p-4 h-20 relative">
                <span className="bg-white text-yellow-500 px-4 py-2 bottom-0 left-20 h-10 text-lg absolute ">
                    EXPLORE MAGAZINES
                </span>
            </div>

            <div className="flex">
                <div className="w-1/3">
                    <Card className="p-6">
                        <p>
                            Luxury Hotels, a renowned global brand founded in England 17 years ago, is currently present in 89 countries. We provide Luxury Hotels for affluent travellers through our online platform and in print and digital formats. Each Edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.Through our Printed Edition Rotation Program, your hotel will be featured as one of the top Luxury Hotels and will ensure a continuous influx of bookings and a consistent occupancy rate of 800,000 to 1 million tourists throughout the year, all without any commission fees.
                        </p>
                        <Button color="failure">EXPLORE MAGAZINES</Button>
                    </Card>
                </div>
                <div className="w-2/3">
                    <Card className="p-6">
                    <Image src="https://via.placeholder.com/400x250?text=Example+Image" alt="Example Alt Text" />
                    </Card>
                </div>
            </div>

            <div className="bg-red-700 p-4 h-20 relative">
                <span className="bg-white text-yellow-500 px-4 py-2 bottom-0 left-20 h-10 text-lg absolute ">
                    Unveil New Luxe Getaways Every Week
                </span>
            </div>
        </NavbarSidebarLayout>
    );
};

export default HomePage;
