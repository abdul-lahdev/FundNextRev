"use client";
import Link from "next/link";
import { useState } from "react";
import { Col } from "react-bootstrap";
import LogoSlider from "@/components/homepages/home1/LogoSlider";
import BadgeButton from "@/app/evaluation-model/component/BadgeBtn";

export default function Pricing() {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <>
      <div className="pricing-area pricing2 section-padding2 pt-3">
        <div className="container ">
          <div className="row">
            <Col xxl="12">
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                {/* <button className="challengeBtn">Start a Challenge</button> */}
                <BadgeButton title="Start a Challenge" />
                <h1 className="pricingMainHeading mt-4">
                  FundedNext Challenges
                </h1>
              </div>
              <div className="pricingContainerSetting">
                <div
                  className="stellarPricePricing"
                  data-aos="zoom-in"
                  data-aos-duration={800}
                >
                  <h2 className="text-center popularPlanSet">POPULAR PLAN</h2>
                  <div className="innerContainerSetting">
                    <div>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M27.7185 16.4887C28.5468 16.0112 29.3721 15.5354 30.1971 15.059C31.1947 14.4833 32.1915 13.907 33.1891 13.3317C33.4479 13.1823 33.719 13.2383 33.8545 13.4665C33.9944 13.7013 33.9101 13.972 33.6437 14.1257C31.2739 15.4947 28.9037 16.8627 26.5334 18.2313C23.6806 19.8787 20.8285 21.5264 17.9756 23.1731C15.4444 24.634 12.9124 26.0932 10.3812 27.5537C9.30332 28.1759 8.22578 28.7992 7.14824 29.4225C6.71795 29.6714 6.45556 29.5718 6.31092 29.0928C5.75852 27.2685 5.60589 25.4128 5.88972 23.5256C6.6042 18.7706 9.77286 14.9082 14.276 13.3139C16.0477 12.6866 17.8735 12.4569 19.7458 12.6488C22.8131 12.9635 25.4319 14.2253 27.6182 16.3942C27.6484 16.4251 27.6807 16.4534 27.7185 16.4887Z"
                          fill="url(#paint0_radial_201_3271)"
                        />{" "}
                        <path
                          d="M9.0398 33.6594C7.77183 34.3913 6.5442 35.1 5.3162 35.8086C4.71001 36.1582 4.10492 36.5093 3.49728 36.8571C3.32684 36.9545 3.15203 36.9523 2.99067 36.8346C2.84276 36.7266 2.78389 36.5747 2.81115 36.3941C2.83731 36.2193 2.95215 36.1143 3.09897 36.03C4.15653 35.4223 5.21299 34.8121 6.26945 34.2023C9.54059 32.3133 12.811 30.4235 16.0822 28.5351C19.3319 26.6592 22.5819 24.7846 25.832 22.909C27.0923 22.1818 28.3523 21.4539 29.6123 20.7256C29.9881 20.5086 30.2715 20.6169 30.398 21.028C30.9206 22.7262 31.1216 24.4641 30.8872 26.2245C30.2664 30.8854 27.841 34.283 23.6231 36.3668C21.8267 37.2543 19.8992 37.6392 17.8989 37.5759C14.4918 37.4684 11.5725 36.1971 9.14192 33.8065C9.09831 33.764 9.07069 33.7048 9.0398 33.6594Z"
                          fill="url(#paint1_radial_201_3271)"
                        />{" "}
                        <circle
                          cx="18.0364"
                          cy="34.2881"
                          r="1.53098"
                          transform="rotate(-25.146 18.0364 34.2881)"
                          fill="white"
                        />{" "}
                        <circle
                          cx="26.056"
                          cy="28.7782"
                          r="0.892293"
                          transform="rotate(-25.146 26.056 28.7782)"
                          fill="white"
                        />{" "}
                        <circle
                          cx="25.6651"
                          cy="31.7113"
                          r="0.5"
                          transform="rotate(-25.146 25.6651 31.7113)"
                          fill="white"
                        />{" "}
                        <path
                          d="M37.1953 6.41699C34.9863 6.41699 33.1953 8.20798 33.1953 10.417C33.1953 8.20798 31.4043 6.41699 29.1953 6.41699C31.4043 6.41699 33.1953 4.62601 33.1953 2.41699C33.1953 4.62601 34.9863 6.41699 37.1953 6.41699Z"
                          fill="white"
                        />{" "}
                        <path
                          d="M30.1953 10.999C29.0909 10.999 28.1953 11.8941 28.1953 12.999C28.1953 11.8946 27.3002 10.999 26.1953 10.999C27.2997 10.999 28.1953 10.104 28.1953 8.99902C28.1953 10.1034 29.0909 10.999 30.1953 10.999Z"
                          fill="white"
                        />{" "}
                        <circle
                          cx="9.38652"
                          cy="23.3864"
                          r="1.04237"
                          transform="rotate(-25.146 9.38652 23.3864)"
                          fill="white"
                        />{" "}
                        <defs>
                          {" "}
                          <radialGradient
                            id="paint0_radial_201_3271"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(19.8358 21.0689) scale(20.2621 20.2621)"
                          >
                            {" "}
                            <stop stopColor="#F4E0FF" />{" "}
                            <stop offset="0.1648" stopColor="#D690FA" />{" "}
                            <stop offset="0.4218" stopColor="#B961E7" />{" "}
                            <stop offset="0.857" stopColor="#9432CA" />{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint1_radial_201_3271"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(16.8948 29.0994) scale(35.6628 35.6628)"
                          >
                            {" "}
                            <stop stopColor="#F4E0FF" />{" "}
                            <stop offset="0.205892" stopColor="#D48CFA" />{" "}
                            <stop offset="0.409173" stopColor="#AE42EA" />{" "}
                            <stop offset="0.857" stopColor="#A300FF" />{" "}
                          </radialGradient>{" "}
                        </defs>{" "}
                      </svg>
                    </div>
                    <h1 className="stellarMainHeading">Stellar</h1>
                    <p className="stellarSubPara">
                      The most popular package amongst FundedNext traders
                    </p>
                    <hr className="my-5 rulerHeighSet" />
                    <div>
                      <ul className="ps-0 stellarBullerPoint d-flex flex-column gap-2">
                        <li>
                          <span>
                            <svg
                              stroke="#CBC0D5"
                              fill="#CBC0D5"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Upto 95% Profit Split
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#CBC0D5"
                              fill="#CBC0D5"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          15% Profit Share in Challenge Phase
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#CBC0D5"
                              fill="#CBC0D5"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Up to 150% Reward
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#CBC0D5"
                              fill="#CBC0D5"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          No Time Limit
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#CBC0D5"
                              fill="#CBC0D5"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          News Trading Allowed
                        </li>
                      </ul>
                      <div style={{ height: "45px" }}></div>
                      <div className="text-center position-relative d-flex justify-content-center">
                        <div className="startChallengeText position-absolute">
                          Start Challenge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="stellarLitePricing"
                  data-aos="zoom-in"
                  data-aos-duration={800}
                >
                  <div className="innerContainerSetting">
                    <div>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M32.3977 17.2339C33.3537 17.2344 34.3063 17.2351 35.259 17.235C36.4107 17.2353 37.5622 17.2345 38.7138 17.2351C39.0126 17.2351 39.2194 17.4191 39.2227 17.6846C39.2265 17.9578 39.0181 18.1502 38.7105 18.1501C35.9737 18.1508 33.237 18.1503 30.5 18.1505C27.2057 18.1507 23.9118 18.1516 20.6179 18.1513C17.6953 18.1509 14.773 18.1485 11.8506 18.1478C10.606 18.1477 9.36119 18.1487 8.11638 18.1497C7.61927 18.1501 7.44182 17.9327 7.55606 17.4456C7.98985 15.5894 8.78547 13.9061 9.9749 12.4136C12.9712 8.65291 17.6465 6.89228 22.3435 7.76312C24.1914 8.10573 25.8875 8.81973 27.413 9.92208C29.912 11.7283 31.5491 14.1304 32.358 17.1019C32.3687 17.1437 32.3826 17.1845 32.3977 17.2339Z"
                          fill="url(#paint0_radial_201_3317)"
                        />{" "}
                        <path
                          d="M7.63942 22.7668C6.17536 22.7667 4.75787 22.7666 3.34006 22.7663C2.64028 22.766 1.94072 22.7675 1.24059 22.7648C1.04429 22.764 0.89399 22.6747 0.813124 22.492C0.738996 22.3246 0.763965 22.1636 0.87788 22.0208C0.987943 21.8825 1.13991 21.849 1.30922 21.8493C2.52891 21.8519 3.74892 21.8517 4.96875 21.8518C8.74618 21.8514 12.5233 21.85 16.3004 21.8502C20.0527 21.8505 23.8046 21.8521 27.557 21.8528C29.0121 21.8532 30.4673 21.8528 31.9226 21.8521C32.3565 21.852 32.5478 22.0876 32.4519 22.5068C32.0553 24.2388 31.3604 25.8443 30.2772 27.2517C27.4092 30.9777 23.6099 32.7074 18.9152 32.4032C16.9158 32.2736 15.054 31.6431 13.3533 30.5882C10.4565 28.7915 8.5639 26.2309 7.65427 22.9453C7.63776 22.8867 7.64346 22.8216 7.63942 22.7668Z"
                          fill="url(#paint1_radial_201_3317)"
                        />{" "}
                        <defs>
                          {" "}
                          <radialGradient
                            id="paint0_radial_201_3317"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(23.2809 17.2591) rotate(30) scale(20.2621 20.2621)"
                          >
                            {" "}
                            <stop stopColor="#D9DBFF" />{" "}
                            <stop offset="0.208741" stopColor="#9A9EC2" />{" "}
                            <stop offset="0.4218" stopColor="#797DA7" />{" "}
                            <stop offset="0.857" stopColor="#676B92" />{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint1_radial_201_3317"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(16.7221 22.7452) rotate(30) scale(35.6628 35.6628)"
                          >
                            {" "}
                            <stop stopColor="#E9EBFF" />{" "}
                            <stop offset="0.1648" stopColor="#A2A5CA" />{" "}
                            <stop offset="0.4218" stopColor="#383B5B" />{" "}
                            <stop offset="0.857" stopColor="#915BFF" />{" "}
                          </radialGradient>{" "}
                        </defs>{" "}
                      </svg>
                    </div>
                    <h1 className="stellarMainHeading">Stellar Lite</h1>
                    <p className="stellarSubPara">
                      The most affordable package for new and upcoming traders
                    </p>
                    <hr className="my-5 rulerGreyHeighSet" />
                    <div>
                      <ul className="ps-0 stellarBullerPoint d-flex flex-column gap-2">
                        <li>
                          <span>
                            <svg
                              stroke="#C7C7CD"
                              fill="#C7C7CD"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Upto 95% Profit Split
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C7C7CD"
                              fill="#C7C7CD"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Super Affordable
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C7C7CD"
                              fill="#C7C7CD"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Up to 10% Maximum Loss Limit
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C7C7CD"
                              fill="#C7C7CD"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Lowest Profit Target
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C7C7CD"
                              fill="#C7C7CD"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          News Trading Allowed
                        </li>
                      </ul>
                      <div style={{ height: "45px" }}></div>
                      <div className="text-center position-relative d-flex justify-content-center">
                        <div className="startChallengeText position-absolute">
                          Start Challenge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="evaluationPricing"
                  data-aos="zoom-in"
                  data-aos-duration={800}
                >
                  <div className="innerContainerSetting">
                    <div>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M20.4053 28.8785C25.4174 28.8785 29.4805 24.8153 29.4805 19.8032C29.4805 14.7911 25.4174 10.728 20.4053 10.728C15.3932 10.728 11.3301 14.7911 11.3301 19.8032C11.3301 24.8153 15.3932 28.8785 20.4053 28.8785Z"
                          fill="white"
                        />{" "}
                        <path
                          d="M20.3797 8.78662C14.4108 8.78662 9.57227 13.6254 9.57227 19.5941C9.57227 25.563 14.4108 30.4015 20.3797 30.4015C26.3484 30.4015 31.1869 25.563 31.1869 19.5941C31.1869 13.6258 26.3484 8.78662 20.3797 8.78662ZM14.907 20.1107C14.3558 20.1107 13.909 19.6639 13.909 19.1127C13.909 18.5615 14.3558 18.1147 14.907 18.1147C15.4581 18.1147 15.9053 18.5615 15.9053 19.1127C15.9053 19.6636 15.4581 20.1107 14.907 20.1107ZM16.697 22.4166C16.3737 22.4166 16.1118 22.1548 16.1118 21.8318C16.1118 21.5088 16.3737 21.2466 16.697 21.2466C17.0199 21.2466 17.2818 21.5088 17.2818 21.8318C17.2818 22.1548 17.0199 22.4166 16.697 22.4166ZM21.9631 12.9171C21.9631 12.5941 22.225 12.3323 22.548 12.3323C22.8709 12.3323 23.1331 12.5941 23.1331 12.9171C23.1331 13.2404 22.8709 13.5022 22.548 13.5022C22.225 13.5022 21.9631 13.2404 21.9631 12.9171ZM25.095 22.2443C23.6694 22.2443 22.5137 21.0889 22.5137 19.6629C22.5137 18.2373 23.6694 17.0816 25.095 17.0816C26.521 17.0816 27.6764 18.2373 27.6764 19.6629C27.6761 21.0889 26.5207 22.2443 25.095 22.2443Z"
                          fill="url(#paint0_radial_201_3285)"
                        />{" "}
                        <path
                          d="M17.771 37.6772V37.7779L17.7559 37.7625L17.7207 37.7276L17.771 37.6772Z"
                          fill="url(#paint1_radial_201_3285)"
                        />{" "}
                        <path
                          d="M2.36033 17.4403H2.25195L2.30599 17.3862L2.36033 17.4403Z"
                          fill="url(#paint2_radial_201_3285)"
                        />{" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.0097 4.29983L21.0427 4.30122V4.26687L21.4022 3.90745L21.0434 3.54834L21.037 3.55468L19.7045 2.22217L19.3457 2.58097L20.3268 3.56209C12.1812 3.58685 5.46443 9.68411 4.46572 17.5644H5.19721C6.18993 10.0927 12.5697 4.32285 20.3045 4.28718L19.3457 5.24599L19.7045 5.60479L21.0097 4.29983ZM22.4201 3.69077V4.42226C29.891 5.41839 35.6588 11.8009 35.6905 19.5365L34.7201 18.5659L34.3613 18.925L35.6776 20.2413L35.6774 20.2467H35.683L36.0587 20.6224L36.4175 20.2636L36.4173 20.2634L37.7482 18.9325L37.3895 18.5737L36.4156 19.5476C36.3892 11.4059 30.2962 4.69242 22.4201 3.69077ZM5.05304 18.9301L5.0584 18.9247L4.6996 18.5659L3.00195 20.2636L3.36075 20.6224L4.33795 19.6452C4.36034 27.9056 10.6269 34.6974 18.6663 35.5496V34.8203C11.032 33.972 5.09156 27.5116 5.063 19.6576L6.02226 20.6169L6.38106 20.2581L5.07631 18.9534L5.07679 18.9418H5.06478L5.05304 18.9301ZM35.5582 21.6242C34.5698 29.1115 28.1726 34.8931 20.4203 34.9147L21.3889 33.9462L21.0301 33.5874L19.7052 34.9123L19.7045 34.9116L19.3457 35.2704L19.3464 35.2711L19.3457 35.2718L19.7045 35.6306L19.7051 35.6299L21.043 36.9681L21.4018 36.6093L20.4325 35.6397C28.58 35.6119 35.2968 29.509 36.2894 21.6242H35.5582Z"
                          fill="#745DE4"
                        />{" "}
                        <defs>
                          {" "}
                          <radialGradient
                            id="paint0_radial_201_3285"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(20.3796 19.5942) rotate(1.87371) scale(12.4024 12.4024)"
                          >
                            {" "}
                            <stop stopColor="#DDD4FF" />{" "}
                            <stop offset="0.462156" stopColor="#A28FFA" />{" "}
                            <stop offset="0.857" stopColor="#6A54DA" />{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint1_radial_201_3285"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(17.746 37.7276) scale(0.039789)"
                          >
                            {" "}
                            <stop stopColor="white" />{" "}
                            <stop offset="0.1648" stopColor="#A29DFF" />{" "}
                            <stop offset="0.4218" stopColor="#635BFF" />{" "}
                            <stop offset="1" stopColor="#915BFF" />{" "}
                          </radialGradient>{" "}
                          <radialGradient
                            id="paint2_radial_201_3285"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(2.30613 17.4133) scale(0.042821)"
                          >
                            {" "}
                            <stop stopColor="white" />{" "}
                            <stop offset="0.1648" stopColor="#A29DFF" />{" "}
                            <stop offset="0.4218" stopColor="#635BFF" />{" "}
                            <stop offset="1" stopColor="#915BFF" />{" "}
                          </radialGradient>{" "}
                        </defs>{" "}
                      </svg>
                    </div>
                    <h1 className="stellarMainHeading">Evaluation</h1>
                    <p className="stellarSubPara">
                      The only package that offers free retakes
                    </p>
                    <hr className="my-5 rulerGreyHeighSet" />
                    <div>
                      <ul className="ps-0 stellarBullerPoint d-flex flex-column gap-2">
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Upto 95% Profit Split
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Upto 95% Profit Split
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          15% Profit Share in Challenge Phase
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Up to 10% Maximum Loss Limit
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Up to 150% Reward
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          News Trading Allowed
                        </li>
                      </ul>
                      <div style={{ height: "45px" }}></div>
                      <div className="text-center position-relative d-flex justify-content-center">
                        <div className="startChallengeText position-absolute">
                          Start Challenge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="expressPricing"
                  data-aos="zoom-in"
                  data-aos-duration={800}
                >
                  <div className="innerContainerSetting">
                    <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.65192 15.9905C2.95763 16.4311 2.75198 17.3511 3.19258 18.0454C3.63319 18.7397 4.55321 18.9453 5.2475 18.5047L3.65192 15.9905ZM5.2475 18.5047L18.8931 9.84501L17.2975 7.33077L3.65192 15.9905L5.2475 18.5047Z" fill="url(#paint0_linear_201_3303)"/> <path d="M14.1519 33.5725C13.4576 34.0131 13.252 34.9331 13.6926 35.6274C14.1332 36.3217 15.0532 36.5274 15.7475 36.0868L14.1519 33.5725ZM15.7475 36.0868L29.3931 27.427L27.7975 24.9128L14.1519 33.5725L15.7475 36.0868Z" fill="url(#paint1_linear_201_3303)"/> <path d="M10.4722 27.7971C9.77794 28.2377 9.57229 29.1578 10.0129 29.852C10.4535 30.5463 11.3735 30.752 12.0678 30.3114L10.4722 27.7971ZM12.0678 30.3114L25.7134 21.6517L24.1179 19.1374L10.4722 27.7971L12.0678 30.3114Z" fill="url(#paint2_linear_201_3303)"/> <path d="M4.44098 23.5979C3.74669 24.0385 3.54104 24.9585 3.98165 25.6528C4.42225 26.3471 5.34227 26.5528 6.03656 26.1122L4.44098 23.5979ZM6.03656 26.1122L19.6822 17.4524L18.0866 14.9382L4.44098 23.5979L6.03656 26.1122Z" fill="url(#paint3_linear_201_3303)"/> <path d="M33.6349 10.8588C30.0003 5.14097 22.4187 3.45134 16.7009 7.08558C10.9827 10.7202 9.29382 18.3022 12.9281 24.02C16.5623 29.7382 24.144 31.4274 29.8621 27.7928C35.5799 24.1586 37.2692 16.5769 33.6349 10.8588ZM25.3675 16.2058C24.4997 14.8405 24.9033 13.0294 26.269 12.1612C27.6347 11.293 29.4454 11.697 30.3136 13.0623C31.1818 14.4283 30.7782 16.239 29.4125 17.1072C28.0468 17.9751 26.2357 17.5719 25.3675 16.2058ZM17.1377 19.354C17.6655 19.0183 18.3658 19.1744 18.7016 19.7022C19.0373 20.2304 18.8808 20.9308 18.353 21.2661C17.8248 21.6018 17.1248 21.4458 16.7891 20.9179C16.4534 20.3897 16.6094 19.6897 17.1377 19.354ZM20.7594 21.2647C21.069 21.0679 21.4794 21.1593 21.6762 21.469C21.8729 21.7786 21.7815 22.1886 21.4719 22.3854C21.1619 22.5825 20.7519 22.4911 20.5551 22.1815C20.3583 21.8718 20.4494 21.4615 20.7594 21.2647ZM21.649 10.283C21.3397 10.4795 20.9294 10.3884 20.7326 10.0784C20.5358 9.76876 20.6272 9.35877 20.9365 9.16199C21.2462 8.9652 21.6569 9.05627 21.8533 9.36591C22.0504 9.67591 21.9587 10.0863 21.649 10.283Z" fill="url(#paint4_radial_201_3303)"/> <path d="M21.4703 22.3866C21.1603 22.5837 20.7503 22.4923 20.5535 22.1826C20.3568 21.873 20.4478 21.4626 20.7578 21.2659C21.0675 21.0691 21.4778 21.1605 21.6746 21.4701C21.8714 21.7798 21.78 22.1898 21.4703 22.3866Z" fill="white"/> <path d="M18.3468 21.2629C17.8186 21.5986 17.1186 21.4426 16.7829 20.9147C16.4472 20.3865 16.6033 19.6865 17.1315 19.3508C17.6593 19.0151 18.3597 19.1712 18.6954 19.699C19.0311 20.2272 18.8747 20.9276 18.3468 21.2629Z" fill="white"/> <path d="M21.6496 10.2796C21.3403 10.476 20.9299 10.3849 20.7332 10.075C20.5364 9.76531 20.6278 9.35532 20.9371 9.15853C21.2467 8.96175 21.6574 9.05282 21.8539 9.36246C22.051 9.67246 21.9592 10.0828 21.6496 10.2796Z" fill="white"/> <path d="M29.413 17.1087C28.0473 17.9765 26.2363 17.5733 25.3681 16.2073C24.5002 14.8419 24.9038 13.0309 26.2695 12.1627C27.6352 11.2945 29.4459 11.6984 30.3141 13.0637C31.1823 14.4298 30.7787 16.2405 29.413 17.1087Z" fill="white"/> <defs> <linearGradient id="paint0_linear_201_3303" x1="17.942" y1="8.58789" x2="2.84895" y2="18.7424" gradientUnits="userSpaceOnUse"> <stop stop-color="#0163E4"/> <stop offset="1" stop-color="#62A5FF"/> </linearGradient> <linearGradient id="paint1_linear_201_3303" x1="26.5" y1="27" x2="13.3418" y2="36.3081" gradientUnits="userSpaceOnUse"> <stop stop-color="#0163E4"/> <stop offset="1" stop-color="#79B2FF"/> </linearGradient> <linearGradient id="paint2_linear_201_3303" x1="18" y1="24.5" x2="9.6341" y2="30.4923" gradientUnits="userSpaceOnUse"> <stop stop-color="#0163E4"/> <stop offset="1" stop-color="#62A5FF"/> </linearGradient> <linearGradient id="paint3_linear_201_3303" x1="11" y1="21" x2="3.59687" y2="26.2849" gradientUnits="userSpaceOnUse"> <stop stop-color="#0163E4"/> <stop offset="1" stop-color="#62A5FF"/> </linearGradient> <radialGradient id="paint4_radial_201_3303" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.4951 11.1979) rotate(-32.4378) scale(27.5797)"> <stop stop-color="white"/> <stop offset="0.1648" stop-color="#66A8FB"/> <stop offset="0.4218" stop-color="#2D7EE6"/> <stop offset="0.857" stop-color="#0060D6"/> </radialGradient> </defs> </svg>
                    </div>
                    <h1 className="stellarMainHeading">Express</h1>
                    <p className="stellarSubPara">
                      The package offers profit shares without needing 5% growth
                    </p>
                    <hr className="my-5 rulerGreyHeighSet" />
                    <div>
                      <ul className="ps-0 stellarBullerPoint d-flex flex-column gap-2">
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Upto 95% Profit Split
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          15% Profit Share in Challenge Phase
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Up to 10% Maximum Loss Limit
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          Up to 150% Reward
                        </li>
                        <li>
                          <span>
                            <svg
                              stroke="#C6C1D1"
                              fill="#C6C1D1"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </span>
                          News Trading Not Allowed
                        </li>
                      </ul>
                      <div style={{ height: "45px" }}></div>
                      <div className="text-center position-relative d-flex justify-content-center">
                        <div className="startChallengeText position-absolute">
                          Start Challenge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl="12" className="mt-5">
              <h1 className="text-center availablePaymenHeading">
                Available Payment Methods
              </h1>
              <div className="position-relative">
                <div className="position-absolute setLeftSide"></div>
              </div>
              <div className="logoSliderSetting d-flex justify-content-center">
                <div className="w-50">
                  <LogoSlider />
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}
