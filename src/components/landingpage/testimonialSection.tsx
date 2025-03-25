"use client"

import React from "react";
import Slider from "react-slick";
import { IoMdStar } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vector from '../../../public/Vector.svg'
import Image from "next/image";

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: (dots: React.ReactNode) => (
            <div>
                <ul className="absolute -top-[390px] md:-top-[330px] lg:top-0 lg:-left-[105%] lg:-translate-y-[54px] space-x-2">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="h-2 w-2 rounded-full transition-colors duration-300 slick-dot"></div>
        )
    };

    const testimonials = [
        {
            name: "Jole Scob",
            role: "Student",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            rating: 5
        },
        {
            name: "John Doe",
            role: "Developer",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            rating: 4
        },
        {
            name: "Sarah Smith",
            role: "Designer",
            image: "https://randomuser.me/api/portraits/women/24.jpg",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            rating: 5
        }
    ];

    return (
        <section className="bg-white py-16 px-6 font-raleway">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative">
                <div className="space-y-10">
                    <div className="font-semibold text-[32px] leading-tight">
                        <h1 className="text-black">Apa Kata Orang</h1>
                        <h1 className="text-[#0067D0]"><i>Tentang Kami</i></h1>
                    </div>
                    <p className="font-medium text-base text-[#787777]">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Eu aenean tortor ut, tempor bibendum maecenas lacinia. Dictumst pharetra euismod elit convallis ligula; eu ex.
                    </p>
                </div>
                <div>
                    <Slider {...settings} className="absolute">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="mt-[80px] lg:mt-0">
                                <div className="bg-white rounded-lg p-6 border border-[#B9DCFC] w-full lg:max-w-md mx-auto">
                                    <Image src={vector} alt="vector logo" width={26} height={26} className="mb-4" />
                                    <p className="text-[#787777] text-base italic">“{testimonial.review}”</p>
                                    <div className="flex items-center mt-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div className="ml-3">
                                            <h3 className="text-sm font-semibold text-black">{testimonial.name}</h3>
                                            <p className="text-xs text-black/50">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-2 text-blue-500">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <IoMdStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;