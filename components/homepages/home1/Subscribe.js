"use client";
import Link from "next/link";
import { Col } from "react-bootstrap";
import UniversalSlider from "./UniversalSlider";
import { SwiperSlide } from "swiper/react";
import BadgeButton from "@/app/evaluation-model/component/BadgeBtn";
import ModelVideo from "./ModalVideo";
import { useState } from "react";

export default function Subscribe() {
  const sliderImageUrl = [
    {
      image: "/assets/img/about/1707391656.webp",
    },
    {
      image: "/assets/img/about/1707391674.webp",
    },
    {
      image: "/assets/img/about/1707391689.webp",
    },
    {
      image: "/assets/img/about/1707391702.webp",
    },
    {
      image: "/assets/img/about/1707391719.webp",
    },
    {
      image: "/assets/img/about/1707391732.webp",
    },
    {
      image: "/assets/img/about/1707391745.webp",
    },
    {
      image: "/assets/img/about/1707391758.webp",
    },
    {
      image: "/assets/img/about/1707391656.webp",
    },
    {
      image: "/assets/img/about/1707391674.webp",
    },
    {
      image: "/assets/img/about/1707391689.webp",
    },
    {
      image: "/assets/img/about/1707391702.webp",
    },
    {
      image: "/assets/img/about/1707391719.webp",
    },
    {
      image: "/assets/img/about/1707391732.webp",
    },
    {
      image: "/assets/img/about/1707391745.webp",
    },
    {
      image: "/assets/img/about/1707391758.webp",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModelVideo
        handleClose={handleClose}
        show={show}
        videoUrl="https://youtu.be/0f2RTcz9Dho"
      />
      <div className="subscribe2 section-padding pt-0 traderLoveContainer">
        <div className="container ">
          <div className="row">
            <Col xxl={12}>
              <div>
                <div>
                  <div className="d-flex justify-content-center">
                    {/* <button className="traderLoveBtn">
                      Trader Feedback & Analysis
                    </button> */}
                    <BadgeButton title="Trader Feedback & Analysis" />
                  </div>
                  <h1 className="text-center traderLoveHeading mt-4">
                    Our Traders L❤️ve Us
                  </h1>
                  <p className="text-center traderLovePara">
                    FundedNext shines with traders like you! See what real
                    traders have to say about <br /> our best-in-class prop
                    trading firm.
                  </p>
                  <div className="d-flex justify-content-center mt-3">
                    <img src="/assets/img/about/reviewTotal.png" />
                  </div>
                </div>

                <div className="reviewSectionSetting mt-4">
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                  <img src="/assets/img/about/Review.png" />
                </div>
              </div>
            </Col>
            <Col xxl={12} className="mt-5">
              <div>
                <div className="globalEventSection">
                  <div className="inngerGlobalEvent">
                    <div className="innerBoxSet">
                      <h1 className="globalEventHeading">Global Events</h1>
                      <p className="globalEventPara">
                        Dive into FundedNext's global events, where trading
                        enthusiasts connect, engage, and grow. We’re more than
                        the best prop firm, we’re a community of new and
                        experienced traders committed to learning, growing, and
                        finding success.
                      </p>
                      <Link href="" className="learnMoreSet">
                        Learn more
                      </Link>
                    </div>

                    <div className="sliderImageSetting">
                      <UniversalSlider>
                        {sliderImageUrl.map((ele, index) => (
                          <SwiperSlide
                            key={index}
                            className="single-testimonial movingLogoSetting"
                          >
                            <div>
                              <img src={`${ele.image}`} alt="" />
                            </div>
                          </SwiperSlide>
                        ))}
                      </UniversalSlider>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xxl={12} className="mt-5">
              <div className="colaborativeVenture">
                <div>
                  <h1 className="colaborativeHeading">
                    Collaborative Venture <br /> Powered by Expertise
                  </h1>
                  <p className="colaborativePara">
                    Take a tour and step inside our dynamic workspace, and
                    Experience the place where the magic happens for prop
                    traders around the world.
                  </p>
                  <div className="d-flex gap-5 mt-4">
                    <div className="firstLeftOpt">
                      <h3 className="subSmallHeading">350+</h3>
                      <p className="subSmallPAra">
                        Dedicated <br /> professionals
                      </p>
                    </div>
                    <div className="secondLeftOpt">
                      <h3 className="subSmallHeading">24/7</h3>
                      <p className="subSmallPAra">
                        Customer <br /> Support
                      </p>
                    </div>
                    <div className="thirdLeftOpt">
                      <h3 className="subSmallHeading">4 Offices</h3>
                      <p className="subSmallPAra">
                        Around <br /> the world
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="position-relative">
                    <div
                      className="position-absolute setVideoPlayerBtn"
                      onClick={handleShow}
                    >
                      <svg
                        width="67"
                        height="67"
                        viewBox="0 0 67 67"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_b_2151_12027)">
                          <rect
                            x="0.890625"
                            y="1.47656"
                            width="65"
                            height="65"
                            rx="32.5"
                            fill="#000"
                          ></rect>
                          <rect
                            x="0.640625"
                            y="1.22656"
                            width="65.5"
                            height="65.5"
                            rx="32.75"
                            stroke="white"
                            stroke-opacity="0.2"
                            stroke-width="0.5"
                          ></rect>
                          <path
                            d="M45.3789 32.6775C46.3789 33.2549 46.3789 34.6982 45.3789 35.2756L28.5215 45.0082C27.5215 45.5856 26.2715 44.8639 26.2715 43.7092L26.2715 24.2439C26.2715 23.0892 27.5215 22.3675 28.5215 22.9449L45.3789 32.6775Z"
                            fill="white"
                            stroke="white"
                            stroke-width="3"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_2151_12027"
                            x="-9.60938"
                            y="-9.02344"
                            width="86"
                            height="86"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="5"
                            ></feGaussianBlur>
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_2151_12027"
                            ></feComposite>
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_2151_12027"
                              result="shape"
                            ></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="/assets/img/about/tour-guide-cover-photo.webp"
                      style={{ width: "323px", height: "202px" }}
                      className="bottomVideoSetImg"
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col xxl={12} className="mt-5">
              <div className="tradeSmartContainer mt-5">
                <h1 className="tradeSmartHeading">Trade Smart & Win</h1>
                <p className="tradeSmartText">
                  Join FundedNext today and experience a trading community
                  unlike any other.
                </p>
                <div className="d-flex align-items-center gap-3 justify-content-center mt-4">
                  <button className="btn btn-discorBtn">
                    <span>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M20.4705 5.53861C19.0046 4.88638 17.4326 4.40581 15.789 4.13055C15.759 4.12524 15.7291 4.13852 15.7137 4.16505C15.5115 4.51376 15.2876 4.96862 15.1308 5.32617C13.363 5.06951 11.6042 5.06951 9.87261 5.32617C9.71574 4.96069 9.48367 4.51376 9.28058 4.16505C9.26517 4.13939 9.23526 4.12611 9.20534 4.13055C7.56263 4.4049 5.99064 4.88546 4.52375 5.53861C4.51104 5.54393 4.50017 5.55277 4.49294 5.56427C1.5112 9.884 0.69434 14.0976 1.09504 18.2589C1.09684 18.2792 1.10866 18.2987 1.12496 18.3111C3.09223 19.712 4.99791 20.5625 6.86814 21.1263C6.89806 21.1351 6.92977 21.1246 6.94882 21.1006C7.39121 20.5148 7.78558 19.8971 8.12371 19.2474C8.14365 19.2094 8.12461 19.1642 8.08382 19.1492C7.45828 18.9191 6.86266 18.6385 6.28968 18.32C6.24435 18.2943 6.24072 18.2315 6.28245 18.2014C6.40302 18.1138 6.52363 18.0226 6.63877 17.9305C6.65961 17.9137 6.68863 17.9102 6.71312 17.9208C10.4772 19.5873 14.5523 19.5873 18.272 17.9208C18.2965 17.9093 18.3255 17.9129 18.3472 17.9296C18.4624 18.0217 18.583 18.1137 18.7044 18.2013C18.7461 18.2314 18.7434 18.2943 18.6981 18.3199C18.1251 18.6447 17.5295 18.9191 16.9031 19.1483C16.8623 19.1633 16.8441 19.2094 16.8641 19.2474C17.2095 19.8961 17.6039 20.5138 18.0381 21.0997C18.0563 21.1245 18.0889 21.1351 18.1188 21.1263C19.9981 20.5625 21.9038 19.712 23.871 18.311C23.8883 18.2987 23.8992 18.2801 23.901 18.2597C24.3806 13.4488 23.0977 9.26979 20.5004 5.56514C20.4941 5.55277 20.4832 5.54393 20.4705 5.53861ZM8.68591 15.725C7.55266 15.725 6.61887 14.7162 6.61887 13.4771C6.61887 12.2381 7.53451 11.2292 8.68591 11.2292C9.84628 11.2292 10.771 12.247 10.7529 13.4771C10.7529 14.7162 9.83721 15.725 8.68591 15.725ZM16.3283 15.725C15.1951 15.725 14.2613 14.7162 14.2613 13.4771C14.2613 12.2381 15.177 11.2292 16.3283 11.2292C17.4888 11.2292 18.4135 12.247 18.3954 13.4771C18.3954 14.7162 17.4888 15.725 16.3283 15.725Z"
                          fill="white"
                        />{" "}
                      </svg>
                    </span>
                    Join Discord Community
                  </button>
                  <button className="btn btn-xCommunityBtn">
                    <span>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M14.6468 10.4686L21.9321 2H20.2057L13.8799 9.3532L8.82741 2H3L10.6403 13.1193L3 22H4.72649L11.4068 14.2348L16.7425 22H22.57L14.6468 10.4686ZM12.2821 13.2173L11.508 12.1101L5.34857 3.29967H8.00037L12.9711 10.4099L13.7452 11.5172L20.2066 20.7594H17.5548L12.2821 13.2173Z"
                          fill="white"
                        />{" "}
                      </svg>
                    </span>
                    Join X Community
                  </button>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}
