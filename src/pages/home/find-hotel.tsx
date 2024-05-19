/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import Pagination from "../../components/pagination";
import Seperator from "../../components/seperator";

import SearchHotel from "../../components/hotel_search";
import HotelCard from "../../components/hotel_card";

const hotelList = [
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle.png",
    key: 0,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-1.png",
    key: 1,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-2.png",
    key: 2,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-3.png",
    key: 3,
  },

  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-4.png",
    key: 4,
  },

  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-5.png",
    key: 5,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-6.png",
    key: 6,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-7.png",
    key: 8,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-8.png",
    key: 9,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-9.png",
    key: 10,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-10.png",
    key: 11,
  },
  {
    title: "The Aston Vill Hotel",
    rating: 5,
    tags: ["Dubai"],
    cover_img: "/images/Rectangle-11.png",
    key: 12,
  },
];

const HotelSelectionPage: FC = function () {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "130px",
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
      <section>
        <Slider {...settings}>
          <div className="w-fit mx-auto">
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/PBTtgIZOQTs?si=MEqFo39b8ueY6Xfd"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div>
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/PBTtgIZOQTs?si=MEqFo39b8ueY6Xfd"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div>
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/PBTtgIZOQTs?si=MEqFo39b8ueY6Xfd"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div>
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/PBTtgIZOQTs?si=MEqFo39b8ueY6Xfd"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div>
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/PBTtgIZOQTs?si=MEqFo39b8ueY6Xfd"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div>
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/uztV7G83sB0?si=lrxMDNsRg5-Nc4y-"
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </Slider>
      </section>
      <Seperator text="LUXURY HOTEL SELECTION" />
      <div className="container mx-auto">
        <div className="my-10">
          <SearchHotel />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {hotelList.map((hotel) => (
	    <div className="flex justify-center align-center">
            <HotelCard
              title={hotel.title}
              rating={hotel.rating}
              tags={hotel.tags}
              cover_img={hotel.cover_img}
            />
	    </div>
          ))}
        </div>
        <div className="mx-auto w-fit my-6">
          <Pagination
            currentPage={1}
            lastPage={5}
            setCurrentPage={() => console.log("Hello")}
          />
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

export default HotelSelectionPage;
