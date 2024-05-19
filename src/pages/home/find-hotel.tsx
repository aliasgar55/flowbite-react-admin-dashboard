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
    centerPadding: "130px"
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
      <section>
        <Slider {...settings}>
          <div className="w-fit mx-auto">
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/uztV7G83sB0?si=lrxMDNsRg5-Nc4y-"
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
          <div>
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/uztV7G83sB0?si=lrxMDNsRg5-Nc4y-"
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
          <div>
            <iframe
              width="1440"
              height="900"
              src="https://www.youtube.com/embed/uztV7G83sB0?si=lrxMDNsRg5-Nc4y-"
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
        <div className="flex gap-8">
          <HotelCard
            name="The Aston Vill Hotel"
            rating={5}
            tags={["Dubai"]}
            cover_img="/images/users/jese-leos.png"
          />
          <HotelCard
            name="The Aston Vill Hotel"
            rating={5}
            tags={["Dubai"]}
            cover_img="/images/users/jese-leos.png"
          />
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
