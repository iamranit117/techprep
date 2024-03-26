"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "Google",
    heading2: "",
    name: "",
    imgSrc: "../../../public/assets/courses/google_.png",
    students: 30,
    classes: 5,
    price: 800,
    rating: 4.7,
  },
  {
    heading: "Facebook",
    heading2: "",
    name: "",
    imgSrc: "../../../public/assets/courses/netflix_.png",
    students: 30,
    classes: 5,
    price: 800,
    rating: 4.7,
  },
  {
    heading: "Apple",
    heading2: "",
    name: "",
    imgSrc: "../../../public/assets/courses/microsoft_.png",
    students: 30,
    classes: 5,
    price: 800,
    rating: 4.7,
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div id="courses">
        <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
          <div className="sm:flex justify-between items-center">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">
              Dedicated coaching.
            </h3>
            <Link
              href={"/"}
              className="text-Blueviolet text-lg font-medium space-links"
            >
              Explore more&nbsp;&gt;&nbsp;
            </Link>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl">
                  <div className="relative rounded-3xl">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={389}
                      height={262}
                      className="object-contain h-48 w-full"
                    />
                    {/* <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                      <h3 className="text-white uppercase text-center text-sm font-medium">
                        best <br /> seller
                      </h3>
                    </div> */}
                  </div>

                  <div className="px-3">
                    <h4 className="text-2xl font-bold pt-6 text-black">
                      {items.heading}
                    </h4>
                    <h4 className="text-2xl font-bold pt-1 text-black">
                      {items.heading2}
                    </h4>

                    <div>
                      <h3 className="text-base font-normal pt-6 opacity-75">
                        {items.name}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center py-6">
                      <div className="flex gap-4">
                        <h3 className="text-red text-22xl font-medium">
                          {items.rating}
                        </h3>
                        <div className="flex">
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-medium">${items.price}</h3>
                      </div>
                    </div>

                    <hr style={{ color: "#C4C4C4" }} />

                    <div className="flex justify-between pt-6">
                      <div className="flex gap-4">
                        <Image
                          src={"../../../public/assets/courses/book-open.svg"}
                          alt="users"
                          width={24}
                          height={24}
                          className="inline-block m-auto"
                        />
                        <h3 className="text-base font-medium text-black opacity-75">
                          {items.classes} classes
                        </h3>
                      </div>
                      <div className="flex gap-4">
                        <Image
                          src={"../../../public/assets/courses/users.svg"}
                          alt="users"
                          width={24}
                          height={24}
                          className="inline-block m-auto"
                        />
                        <h3 className="text-base font-medium text-black opacity-75">
                          {items.students} hours
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
