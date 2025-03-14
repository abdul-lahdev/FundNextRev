import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      <style>
        {`
body{
    background-color: #fff !important;
}
    .setTopRightCOlor{
display:none !important;}

footer{
    background-color: rgba(16, 10, 40, 1) !important;
}
    .settingHeaderColor{
     background-color: #000 !important;
    }

   

`}
      </style>

      <Layout headerStyle={1} footerStyle={1}>
        <section style={{ marginTop: "13rem" }}>
          <Container className="containerSetting">
            <Row>
              <Col xxl={12}>
                <div className="aboutUsContainer">
                  <div>
                    <h4 className="text-center aboutSmHeading">About Us</h4>
                    <h1 className="text-center aboutUsMainHeading">
                      Meet the Team Behind{" "}
                      <span className="d-block">FundedNext</span>
                    </h1>
                    <p className="text-center aboutUsText">
                      FundedNext is a leading trading firm committed to
                      providing unparalleled opportunities and resources for
                      traders to excel in the financial market. Our team of
                      industry veterans, financial experts, and technology
                      enthusiasts work tirelessly to deliver innovative
                      solutions that push boundaries and set benchmarks in the
                      trading world.
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center my-5">
                    <img
                      src="/assets/img/about/about-us-hero-slider_1.webp"
                      alt=""
                      style={{ width: "379px", height: "361px" }}
                    />
                    <img
                      src="/assets/img/about/about-us-hero-slider_2.webp"
                      alt=""
                      style={{ width: "439px", height: "477px" }}
                    />
                    <img
                      src="/assets/img/about/about-us-hero-slider_3.webp"
                      alt=""
                      style={{ width: "379px", height: "361px" }}
                    />
                    <img
                      src="/assets/img/about/about-us-hero-slider_4.webp"
                      alt=""
                      style={{ width: "439px", height: "477px" }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="missionContainer">
          <Container>
            <Row>
              <Col xxl={12}>
                <div className="d-flex align-items-center py-5 gap-5">
                  <div className="ourMissionCard">
                    <div className="d-flex align-items-center gap-3">
                      <span>
                        <svg
                          viewBox="0 0 56 56"
                          width="53"
                          height="53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.8872 10.8245L18.7889 16.317L29.2343 26.7624C29.9179 27.446 29.9179 28.5534 29.2343 29.2369C28.8924 29.5787 28.4458 29.7495 27.9969 29.7495C27.548 29.7495 27.1014 29.5787 26.7595 29.2369L16.3141 18.7915L10.8219 19.89C10.4395 19.9665 10.044 19.8466 9.76819 19.571L5.21773 15.0206C4.55879 14.3619 4.90016 13.2344 5.81389 13.0517L11.0802 11.9984C11.542 11.906 11.903 11.5451 11.9954 11.0833L13.0486 5.81672C13.2313 4.90299 14.3588 4.56185 15.0177 5.22055L19.568 9.77102C19.8438 10.0468 19.9637 10.4421 19.8872 10.8245Z"
                            fill="#3B82F6"
                          ></path>
                          <path
                            opacity="0.4"
                            d="M2.91406 27.9994C2.91406 25.9815 3.1796 24.0287 3.63156 22.1476L6.62593 25.142C6.5011 26.0793 6.41406 27.0285 6.41406 27.9996C6.41406 39.901 16.096 49.5829 27.9974 49.5829C39.8988 49.5829 49.5807 39.901 49.5807 27.9996C49.5807 16.0982 39.8988 6.41602 27.9974 6.41602C27.0265 6.41602 26.0773 6.50282 25.1398 6.62788L22.1454 3.63352C24.0265 3.18155 25.9793 2.91602 27.9972 2.91602C41.8285 2.91602 53.0805 14.168 53.0805 27.9994C53.0805 41.8307 41.8285 53.0827 27.9972 53.0827C14.1659 53.0827 2.91406 41.8307 2.91406 27.9994ZM27.9974 40.2494C21.2902 40.2494 15.8368 34.8258 15.7612 28.1363L13.2248 25.6L12.4252 25.7603C12.3202 26.4937 12.2472 27.2375 12.2472 27.9996C12.2472 36.6836 19.3132 43.7496 27.9972 43.7496C36.6811 43.7496 43.7472 36.6836 43.7472 27.9996C43.7472 19.3156 36.6811 12.2496 27.9972 12.2496C27.2351 12.2496 26.4915 12.3224 25.7579 12.4276L25.5976 13.2272L28.1339 15.7636C34.8233 15.839 40.2469 21.2927 40.2469 27.9998C40.2469 34.7537 34.7512 40.2494 27.9974 40.2494Z"
                            fill="#3B82F6"
                          ></path>
                        </svg>
                      </span>
                      <h1 className="p-0 m-0 ourMainHeading">Our Mission</h1>
                    </div>
                    <p className="ourMainParagraph mt-3">
                      FundedNext is on an ambitious mission to change the lives
                      of 50 million traders around the world. Our commitment to
                      providing cutting-edge strategies, innovative
                      technologies, and exceptional support aims to
                      revolutionize the trading experience for individuals and
                      organizations alike. As we embark on this journey, we
                      remain steadfast in our dedication to empowering traders,
                      shaping a brighter financial future, and making a lasting
                      impact on the global trading community.
                    </p>
                    <div className="position-relative">
                      <div className="position-absolute setBottomBar"></div>
                    </div>
                  </div>
                  <div className="ourVisionCard">
                    <div className="d-flex align-items-center gap-3">
                      <span>
                        <svg
                          width="53"
                          height="53"
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1797 24.3779C5.0233 24.3779 0 29.3637 0 35.5576C0 41.7221 5.01523 46.7373 11.1797 46.7373C17.3441 46.7373 22.3594 41.7221 22.3594 35.5576C22.3594 29.3932 17.3441 24.3779 11.1797 24.3779Z"
                            fill="#B1CDFB"
                          ></path>
                          <path
                            d="M22.361 12.2204C22.361 10.6377 22.3786 10.6121 22.3022 10.3422C21.6213 7.94027 19.3996 6.2627 16.8995 6.2627C14.6752 6.2627 12.5297 7.57476 11.6445 9.86794C15.4054 8.92419 19.3552 9.81069 22.361 12.2204Z"
                            fill="#B1CDFB"
                          ></path>
                          <path
                            d="M22.3605 16.7626C18.1046 10.3689 8.51361 11.6676 5.9221 18.6003L4.21875 23.0829C5.35338 22.448 6.56089 21.9729 7.81654 21.6711V21.6701C13.5426 20.2959 19.0938 22.5714 22.3605 26.6761C22.3605 25.5534 22.3605 17.694 22.3605 16.7626Z"
                            fill="#B1CDFB"
                          ></path>
                          <path
                            d="M28.6646 28.8555C27.624 31.3036 27.3254 33.9803 27.633 36.3086H25.3636C25.6697 33.9918 25.3772 31.3145 24.332 28.8555H28.6646Z"
                            fill="#B1CDFB"
                          ></path>
                          <path
                            d="M27.5352 17.7793H25.4648V25.75H27.5352V17.7793Z"
                            fill="#B1CDFB"
                          ></path>
                          <path
                            d="M53 35.5576C53 29.3932 47.9848 24.3779 41.8203 24.3779C35.6559 24.3779 30.6406 29.3932 30.6406 35.5576C30.6406 41.7221 35.6559 46.7373 41.8203 46.7373C48.0069 46.7373 53 41.7248 53 35.5576Z"
                            fill="#B1CDFB"
                          ></path>
                          <path
                            d="M30.6424 12.2203C30.6424 10.6376 30.6248 10.612 30.7012 10.3421C31.3821 7.94017 33.6038 6.2627 36.1038 6.2627C38.3281 6.2627 40.4736 7.57476 41.3587 9.86794C37.598 8.92408 33.6482 9.81059 30.6424 12.2203Z"
                            fill="#B1CDFB"
                          ></path>
                          <path
                            d="M30.6406 16.7626C34.8965 10.3689 44.4875 11.6676 47.079 18.6003L48.7824 23.0829C47.6477 22.448 46.4402 21.9729 45.1846 21.6711V21.6701C39.4585 20.2959 33.9073 22.5714 30.6406 26.6761C30.6406 25.5534 30.6406 17.694 30.6406 16.7626Z"
                            fill="#B1CDFB"
                          ></path>
                        </svg>
                      </span>
                      <h1 className="p-0 m-0 ourMainHeading">Our Vision</h1>
                    </div>
                    <p className="ourMainParagraph mt-3">
                      At FundedNext, we believe in pushing boundaries and
                      setting the highest benchmarks in everything we do. Our
                      vision is to be the absolute best at creating value for
                      our customers, people, and stakeholders. We strive for
                      excellence in every aspect, fostering a culture that
                      encourages growth, innovation, and commitment to
                      delivering top-notch results for all those involved with
                      FundedNext.With unwavering commitment, we unlock limitless
                      potential and push boundaries.
                    </p>

                    <div className="position-relative">
                      <div className="position-absolute setBottomBar"></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
}
