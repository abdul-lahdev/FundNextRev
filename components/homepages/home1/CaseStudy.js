"use client";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import PlanTabs from "./PlanTabs";
import Tab from "react-bootstrap/Tab";
import PricingTable from "./PricingTable";
import { useState } from "react";
export default function CaseStudy() {
  const [stepValue, setStepValue] = useState(true); // Default to "2-Step"

  const radioFunc = (event) => {
    setStepValue(event.target.value === "2-Step");
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ overflow: "hidden", transform: "translate(2%, 0px)" }}
      >
        <div>
          <div className="case-study-1 section-padding pt-4 planSectionSetting">
            <div className="container ">
              <Col xxl="12">
                <div>
                  <h1 className="text-center choosePlanMainHeading">
                    Choose the Best Plan
                  </h1>
                </div>
                <div className="pricingTabSetting d-flex flex-column align-items-center justify-content-center">
                  <PlanTabs>
                    <Tab
                      eventKey="stellar"
                      title={
                        <div className="navTitleSet">
                          <span className="activeHide">
                            <img src="/assets/img/about/stellar-plan-new.svg" />
                          </span>
                          <span className="activeShow">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M23.5562 10.8202C24.2602 10.4143 24.9617 10.0099 25.6629 9.60496C26.5109 9.11565 27.3582 8.62573 28.2062 8.13673C28.4261 8.00976 28.6566 8.05734 28.7718 8.25133C28.8907 8.45088 28.819 8.68102 28.5926 8.81169C26.5782 9.97534 24.5635 11.1381 22.5488 12.3014C20.1239 13.7017 17.6996 15.1023 15.2747 16.5019C13.1232 17.7437 10.971 18.984 8.81948 20.2255C7.90326 20.7543 6.98735 21.2841 6.07144 21.8139C5.70569 22.0255 5.48266 21.9409 5.35972 21.5337C4.89018 19.983 4.76044 18.4057 5.00169 16.8016C5.60901 12.7598 8.30237 9.47676 12.13 8.12159C13.636 7.58842 15.1879 7.39319 16.7794 7.55629C19.3866 7.8238 21.6126 8.89633 23.4709 10.7399C23.4966 10.7661 23.5241 10.7902 23.5562 10.8202Z"
                                fill="url(#paint0_radial_2593_4758)"
                              />{" "}
                              <path
                                d="M7.68351 25.4153C6.60574 26.0374 5.56225 26.6398 4.51845 27.2422C4.00319 27.5393 3.48886 27.8377 2.97237 28.1334C2.82749 28.2162 2.67891 28.2143 2.54176 28.1142C2.41603 28.0225 2.36599 27.8933 2.38916 27.7398C2.4114 27.5912 2.50901 27.502 2.63381 27.4303C3.53273 26.9138 4.43072 26.3951 5.32871 25.8768C8.10919 24.2711 10.889 22.6648 13.6695 21.0597C16.4318 19.4651 19.1943 17.8718 21.9569 16.2775C23.0282 15.6594 24.0991 15.0406 25.1701 14.4216C25.4895 14.2372 25.7305 14.3292 25.838 14.6786C26.2822 16.1221 26.453 17.5993 26.2538 19.0957C25.7262 23.0574 23.6645 25.9454 20.0793 27.7166C18.5524 28.471 16.914 28.7981 15.2137 28.7444C12.3177 28.6529 9.83629 27.5724 7.77032 25.5404C7.73325 25.5043 7.70977 25.4539 7.68351 25.4153Z"
                                fill="url(#paint1_radial_2593_4758)"
                              />{" "}
                              <circle
                                cx="15.3412"
                                cy="25.9496"
                                r="1.30133"
                                transform="rotate(-25.146 15.3412 25.9496)"
                                fill="white"
                              />{" "}
                              <circle
                                cx="22.1492"
                                cy="21.2665"
                                r="0.758449"
                                transform="rotate(-25.146 22.1492 21.2665)"
                                fill="white"
                              />{" "}
                              <circle
                                cx="21.8224"
                                cy="23.7597"
                                r="0.425"
                                transform="rotate(-25.146 21.8224 23.7597)"
                                fill="white"
                              />{" "}
                              <path
                                d="M31.6164 3.4C29.7387 3.4 28.2164 4.92234 28.2164 6.8C28.2164 4.92234 26.6941 3.4 24.8164 3.4C26.6941 3.4 28.2164 1.87766 28.2164 0C28.2164 1.87766 29.7387 3.4 31.6164 3.4Z"
                                fill="#9B3BD0"
                              />{" "}
                              <path
                                d="M26.3362 6.47246C25.3974 6.47246 24.6362 7.23327 24.6362 8.17246C24.6362 7.23372 23.8753 6.47246 22.9362 6.47246C23.8749 6.47246 24.6362 5.71165 24.6362 4.77246C24.6362 5.7112 25.3974 6.47246 26.3362 6.47246Z"
                                fill="#9B3BD0"
                              />{" "}
                              <circle
                                cx="7.98323"
                                cy="18.8787"
                                r="0.886018"
                                transform="rotate(-25.146 7.98323 18.8787)"
                                fill="white"
                              />{" "}
                              <defs>
                                {" "}
                                <radialGradient
                                  id="paint0_radial_2593_4758"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(16.8558 14.7134) scale(17.2228 17.2228)"
                                >
                                  {" "}
                                  <stop stop-color="#F4E0FF" />{" "}
                                  <stop offset="0.1648" stop-color="#D690FA" />{" "}
                                  <stop offset="0.4218" stop-color="#B961E7" />{" "}
                                  <stop offset="0.857" stop-color="#9432CA" />{" "}
                                </radialGradient>{" "}
                                <radialGradient
                                  id="paint1_radial_2593_4758"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(14.3603 21.5393) scale(30.3134 30.3134)"
                                >
                                  {" "}
                                  <stop stop-color="#F4E0FF" />{" "}
                                  <stop
                                    offset="0.205892"
                                    stop-color="#D48CFA"
                                  />{" "}
                                  <stop
                                    offset="0.409173"
                                    stop-color="#AE42EA"
                                  />{" "}
                                  <stop offset="0.857" stop-color="#A300FF" />{" "}
                                </radialGradient>{" "}
                              </defs>{" "}
                            </svg>
                          </span>
                          <span>Stellar</span>
                        </div>
                      }
                    >
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="d-flex align-items-center gap-3 settingPrefenceSec">
                          <p className="p-0 m-0 ">Select Preference</p>
                          <Form.Check
                            inline
                            label="2-Step"
                            name="group1"
                            type="radio"
                            id="radioBtn2"
                            value="2-Step"
                            onChange={radioFunc}
                            checked={stepValue}
                          />
                          <Form.Check
                            inline
                            label="1-Step"
                            name="group1"
                            type="radio"
                            id="radioBtn1"
                            value="1-Step"
                            onChange={radioFunc}
                            checked={!stepValue}
                          />
                        </div>
                      </div>
                      <div className="PricingTableSetting">
                        {stepValue ? (
                          <>
                            <PricingTable>
                              <thead>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      Account Size
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $6,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $15,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $25,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $50,000
                                    </p>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td>
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $59
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                  <td>
                                    {" "}
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $59
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                  <td>
                                    {" "}
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $59
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                  <td>
                                    {" "}
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $59
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      15% Profit Share From Challenge Phase
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $117
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $292.50
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $487.50
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $975
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Profit Target
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      P1: 8%, P2: 5%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      P1: 8%, P2: 5%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      P1: 8%, P2: 5%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      P1: 8%, P2: 5%
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Maximum Overall Loss
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10% ($600)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10% ($1,500)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10% ($2,500)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10% ($5,000)
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Maximum Daily Loss
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5% ($300)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5% ($750)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5% ($1,250)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5% ($2,500)
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Minimum Trading Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Profit Split Upto
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      News Trading
                                    </p>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      First Reward
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      Monthly
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      Monthly
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      Monthly
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      Monthly
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </PricingTable>
                          </>
                        ) : (
                          <>
                            <PricingTable>
                              <thead>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      Account Size
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $6,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $15,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $25,000
                                    </p>
                                  </td>
                                  <td>
                                    <p className="p-0 m-0 tableHeadingSet">
                                      $50,000
                                    </p>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td>
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $65
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                  <td>
                                    {" "}
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $129
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                  <td>
                                    {" "}
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $219
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                  <td>
                                    {" "}
                                    <Link href="" className="btn getPlanBtn">
                                      <div className="d-flex flex-column">
                                        <span className="getPlanHeading">
                                          Get Plan
                                        </span>
                                        <span className="getPlanFee">
                                          Fee: $329
                                        </span>
                                      </div>
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      15% Profit Share From Challenge Phase
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $90
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $225
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $375
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      $750
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Profit Target
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      10%
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Maximum Daily Loss
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      3% ($180)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      3% ($450)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      3% ($750)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      3% ($1,500)
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Maximum Overall Loss
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      6% ($360)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      6% ($900)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      6% ($1,500)
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      6% ($3,000)
                                    </p>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Minimum Trading Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      2 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      2 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      2 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      2 Days
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      Profit Split Upto
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      95%
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      News Trading
                                    </p>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                  <td>
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="13"
                                        viewBox="0 0 16 13"
                                        fill="none"
                                        className="h-[14px] w-[14px]"
                                      >
                                        <path
                                          d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                          stroke="white"
                                          strokeWidth="2"
                                        ></path>
                                      </svg>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="p-0 m-0 tableParaTexxt">
                                      First Reward
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                  <td>
                                    <p className="tableParaTexxt p-0 m-0">
                                      5 Days
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </PricingTable>
                          </>
                        )}
                      </div>
                    </Tab>
                    <Tab
                      eventKey="stellarLite"
                      title={
                        <div className="navTitleSet">
                          <span className="activeHide">
                            <img src="/assets/img/about/stellar-lite-plan.svg" />
                          </span>
                          <span className="activeShow">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M27.688 14.6153C28.5123 14.6158 29.3336 14.6164 30.155 14.6163C31.148 14.6165 32.1408 14.6159 33.1336 14.6164C33.3912 14.6164 33.5695 14.7751 33.5723 15.0039C33.5756 15.2395 33.3959 15.4053 33.1308 15.4053C30.7711 15.4059 28.4117 15.4054 26.052 15.4056C23.2117 15.4058 20.3718 15.4066 17.5319 15.4063C15.0122 15.4059 12.4926 15.4039 9.97306 15.4033C8.90003 15.4032 7.8268 15.4041 6.75356 15.4049C6.32497 15.4053 6.17198 15.2179 6.27047 14.7979C6.64447 13.1976 7.33043 11.7462 8.35591 10.4595C10.9392 7.21713 14.9701 5.69917 19.0197 6.44999C20.6129 6.74537 22.0752 7.36096 23.3905 8.31137C25.545 9.8686 26.9564 11.9396 27.6539 14.5016C27.6631 14.5376 27.675 14.5727 27.688 14.6153Z"
                                fill="url(#paint0_radial_2593_4817)"
                              />{" "}
                              <path
                                d="M6.34361 19.3855C5.08134 19.3854 3.85923 19.3853 2.63684 19.3851C2.03352 19.3848 1.43038 19.3861 0.826759 19.3838C0.65751 19.383 0.52793 19.3061 0.458209 19.1486C0.394299 19.0042 0.415826 18.8654 0.51404 18.7423C0.608933 18.6231 0.739955 18.5942 0.885927 18.5945C1.9375 18.5967 2.98935 18.5965 4.04105 18.5966C7.29781 18.5963 10.5543 18.5951 13.8108 18.5953C17.0459 18.5955 20.2807 18.5969 23.5159 18.5975C24.7704 18.5978 26.025 18.5975 27.2797 18.5968C27.6538 18.5968 27.8188 18.7999 27.736 19.1613C27.3941 20.6546 26.795 22.0388 25.8611 23.2522C23.3884 26.4647 20.1128 27.956 16.0652 27.6936C14.3413 27.5819 12.7362 27.0383 11.2699 26.1288C8.77241 24.5798 7.14066 22.3721 6.35641 19.5394C6.34217 19.4888 6.34709 19.4327 6.34361 19.3855Z"
                                fill="url(#paint1_radial_2593_4817)"
                              />{" "}
                              <defs>
                                {" "}
                                <radialGradient
                                  id="paint0_radial_2593_4817"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(19.8278 14.6371) rotate(30) scale(17.4693 17.4693)"
                                >
                                  {" "}
                                  <stop stop-color="#D9DBFF" />{" "}
                                  <stop
                                    offset="0.208741"
                                    stop-color="#9A9EC2"
                                  />{" "}
                                  <stop offset="0.4218" stop-color="#797DA7" />{" "}
                                  <stop offset="0.857" stop-color="#676B92" />{" "}
                                </radialGradient>{" "}
                                <radialGradient
                                  id="paint1_radial_2593_4817"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(14.1744 19.3669) rotate(30) scale(30.7472 30.7472)"
                                >
                                  {" "}
                                  <stop stop-color="#E9EBFF" />{" "}
                                  <stop offset="0.1648" stop-color="#A2A5CA" />{" "}
                                  <stop
                                    offset="0.178547"
                                    stop-color="#9DA0C5"
                                  />{" "}
                                  <stop offset="0.4218" stop-color="#54577F" />{" "}
                                  <stop offset="0.857" stop-color="#555881" />{" "}
                                </radialGradient>{" "}
                              </defs>{" "}
                            </svg>
                          </span>
                          <span>Stellar Lite</span>
                        </div>
                      }
                    >
                      <div className="PricingTableSetting">
                        <PricingTable>
                          <thead>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  Account Size
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $5,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $10,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $25,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $50,000
                                </p>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">Fee: $59</span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">Fee: $32</span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">
                                      Fee: $139
                                    </span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">
                                      Fee: $229
                                    </span>
                                  </div>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Profit Target
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 8%, P2: 4%
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  {" "}
                                  P1: 8%, P2: 4%
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 8%, P2: 4%
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 8%, P2: 4%
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Maximum Daily Loss
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  4% ($200)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  4% ($400)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  4% ($1,000)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  4% ($2,000)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Maximum Overall Loss
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  8% ($400)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  8% ($800)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  8% ($2,000)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  8% ($4,000)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Minimum Trading Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Profit Split Upto
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  News Trading
                                </p>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  First Reward
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  21 Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  21 Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  21 Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  21 Days
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </PricingTable>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="evaluation"
                      title={
                        <div className="navTitleSet">
                          <span className="activeHide">
                            <img src="/assets/img/about/evaluation-plan.svg" />
                          </span>
                          <span className="activeShow">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M17.3369 25.5466C21.5971 25.5466 25.0508 22.093 25.0508 17.8327C25.0508 13.5724 21.5971 10.1188 17.3369 10.1188C13.0766 10.1188 9.62292 13.5724 9.62292 17.8327C9.62292 22.093 13.0766 25.5466 17.3369 25.5466Z"
                                fill="white"
                              />{" "}
                              <path
                                d="M17.308 8.46863C12.2344 8.46863 8.1217 12.5816 8.1217 17.655C8.1217 22.7286 12.2344 26.8413 17.308 26.8413C22.3814 26.8413 26.4941 22.7286 26.4941 17.655C26.4941 12.5819 22.3814 8.46863 17.308 8.46863ZM12.6562 18.0941C12.1877 18.0941 11.8079 17.7143 11.8079 17.2458C11.8079 16.7773 12.1877 16.3975 12.6562 16.3975C13.1247 16.3975 13.5047 16.7773 13.5047 17.2458C13.5047 17.714 13.1247 18.0941 12.6562 18.0941ZM14.1777 20.0541C13.9029 20.0541 13.6803 19.8315 13.6803 19.557C13.6803 19.2825 13.9029 19.0597 14.1777 19.0597C14.4522 19.0597 14.6748 19.2825 14.6748 19.557C14.6748 19.8315 14.4522 20.0541 14.1777 20.0541ZM18.6539 11.9795C18.6539 11.705 18.8765 11.4824 19.151 11.4824C19.4256 11.4824 19.6484 11.705 19.6484 11.9795C19.6484 12.2543 19.4256 12.4769 19.151 12.4769C18.8765 12.4769 18.6539 12.2543 18.6539 11.9795ZM21.3161 19.9077C20.1043 19.9077 19.1219 18.9255 19.1219 17.7135C19.1219 16.5017 20.1043 15.5193 21.3161 15.5193C22.5281 15.5193 23.5102 16.5017 23.5102 17.7135C23.51 18.9255 22.5278 19.9077 21.3161 19.9077Z"
                                fill="url(#paint0_radial_2593_4774)"
                              />{" "}
                              <path
                                d="M15.0949 33.0256V33.1112L15.082 33.0981L15.0521 33.0684L15.0949 33.0256Z"
                                fill="url(#paint1_radial_2593_4774)"
                              />{" "}
                              <path
                                d="M1.99581 15.8241H1.90369L1.94962 15.7782L1.99581 15.8241Z"
                                fill="url(#paint2_radial_2593_4774)"
                              />{" "}
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.845 4.65456L17.8794 4.65601V4.62013L18.1783 4.32126L17.8734 4.01602L17.868 4.02142L16.7353 2.88879L16.4304 3.19377L17.2644 4.02777C10.3435 4.05209 4.63765 9.23359 3.78902 15.9297H4.41078C5.25431 9.58091 10.6737 4.67773 17.2453 4.64411L16.4304 5.45902L16.7353 5.764L17.845 4.65456ZM19.0502 4.13713V4.75889C25.4004 5.6056 30.303 11.0306 30.3301 17.6057L29.5055 16.7809L29.2005 17.0862L30.3191 18.2048L30.3189 18.2097H30.324L30.6432 18.5289L30.6562 18.516L30.6646 18.5243L32.0963 17.0926L31.7913 16.7876L30.9465 17.6325C30.9325 10.7044 25.7504 4.98923 19.0502 4.13713ZM3.68259 17.0949L2.55347 18.224L2.85844 18.529L3.68044 17.707C3.70379 24.7244 9.02883 30.4931 15.8595 31.2172V30.5972C9.37039 29.8762 4.32098 24.3848 4.2967 17.709L5.11207 18.5243L5.41705 18.2194L4.30801 17.1103L4.30842 17.1005H4.29821L4.29255 17.0949L4.30145 17.086L3.99647 16.781L3.98757 16.7899L3.98534 16.7876L3.68036 17.0926L3.68259 17.0949ZM30.2176 19.3805C29.3772 25.7469 23.9361 30.6624 17.3437 30.6775L18.1671 29.8542L17.8621 29.5492L16.7359 30.6754L16.7353 30.6749L16.4304 30.9799L16.4309 30.9804L16.4304 30.9809L16.7353 31.2859L16.7359 31.2854L17.8731 32.4229L18.1781 32.1179L17.3541 31.2937C24.2825 31.2734 29.9951 26.0847 30.8391 19.3805H30.2176Z"
                                fill="#7E69E7"
                              />{" "}
                              <defs>
                                {" "}
                                <radialGradient
                                  id="paint0_radial_2593_4774"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(17.3079 17.6551) rotate(1.87371) scale(10.5421 10.5421)"
                                >
                                  {" "}
                                  <stop stop-color="#DDD4FF" />{" "}
                                  <stop
                                    offset="0.462156"
                                    stop-color="#A28FFA"
                                  />{" "}
                                  <stop offset="0.857" stop-color="#6A54DA" />{" "}
                                </radialGradient>{" "}
                                <radialGradient
                                  id="paint1_radial_2593_4774"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(15.0736 33.0684) scale(0.0338206)"
                                >
                                  {" "}
                                  <stop stop-color="white" />{" "}
                                  <stop offset="0.1648" stop-color="#A29DFF" />{" "}
                                  <stop offset="0.4218" stop-color="#635BFF" />{" "}
                                  <stop offset="1" stop-color="#915BFF" />{" "}
                                </radialGradient>{" "}
                                <radialGradient
                                  id="paint2_radial_2593_4774"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(1.94974 15.8012) scale(0.0363979)"
                                >
                                  {" "}
                                  <stop stop-color="white" />{" "}
                                  <stop offset="0.1648" stop-color="#A29DFF" />{" "}
                                  <stop offset="0.4218" stop-color="#635BFF" />{" "}
                                  <stop offset="1" stop-color="#915BFF" />{" "}
                                </radialGradient>{" "}
                              </defs>{" "}
                            </svg>
                          </span>
                          <span>Evaluation</span>
                        </div>
                      }
                    >
                      <div className="PricingTableSetting">
                        <PricingTable>
                          <thead>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  Account Size
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $6,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $15,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $25,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $50,000
                                </p>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">Fee: $49</span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">Fee: $99</span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">
                                      Fee: $199
                                    </span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">
                                      Fee: $229
                                    </span>
                                  </div>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  15% Profit Share From Challenge Phase
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">$135</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  $337.50
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  $562.50
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">$1,125</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Profit Target
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 10%, P2: 5%
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 10%, P2: 5%
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 10%, P2: 5%
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 10%, P2: 5%
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Time Limit
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 4 weeks
                                </p>
                                <p className="tableParaTexxt p-0 m-0">
                                  P2: 8 weeks
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 4 weeks
                                </p>
                                <p className="tableParaTexxt p-0 m-0">
                                  P2: 8 weeks
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 4 weeks
                                </p>
                                <p className="tableParaTexxt p-0 m-0">
                                  P2: 8 weeks
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  P1: 4 weeks
                                </p>
                                <p className="tableParaTexxt p-0 m-0">
                                  P2: 8 weeks
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Maximum Daily Loss
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($300)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($750)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($1,250)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($2,500)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Maximum Overall Loss
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($600)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($1,500)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($2,500)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($5,000)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Minimum Trading Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">5 Days</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Profit Split Upto
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  News Trading
                                </p>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    className="h-[14px] w-[14px]"
                                  >
                                    <path
                                      d="M0.78125 5.63984L5.83438 10.693L15.2188 1.30859"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  First Reward
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </PricingTable>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="express"
                      title={
                        <div className="navTitleSet">
                          <span className="activeHide">
                            <img src="/assets/img/about/express-plan.svg" />
                          </span>
                          <span className="activeShow">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M3.10301 15.5921C2.51286 15.9667 2.33806 16.7487 2.71257 17.3388C3.08709 17.929 3.8691 18.1038 4.45925 17.7292L3.10301 15.5921ZM4.45925 17.7292L16.058 10.3685L14.7018 8.23137L3.10301 15.5921L4.45925 17.7292Z"
                                fill="url(#paint0_linear_2593_4793)"
                              />{" "}
                              <path
                                d="M12.0338 30.5368C11.4436 30.9114 11.2688 31.6934 11.6434 32.2835C12.0179 32.8737 12.7999 33.0485 13.39 32.674L12.0338 30.5368ZM13.39 32.674L24.9888 25.3132L23.6326 23.1761L12.0338 30.5368L13.39 32.674Z"
                                fill="url(#paint1_linear_2593_4793)"
                              />{" "}
                              <path
                                d="M8.89048 25.6278C8.30034 26.0023 8.12553 26.7843 8.50005 27.3745C8.87457 27.9646 9.65658 28.1394 10.2467 27.7649L8.89048 25.6278ZM10.2467 27.7649L21.8455 20.4041L20.4893 18.267L8.89048 25.6278L10.2467 27.7649Z"
                                fill="url(#paint2_linear_2593_4793)"
                              />{" "}
                              <path
                                d="M3.77525 22.0584C3.1851 22.433 3.0103 23.215 3.38481 23.8051C3.75933 24.3953 4.54134 24.5701 5.13149 24.1956L3.77525 22.0584ZM5.13149 24.1956L16.7303 16.8348L15.374 14.6977L3.77525 22.0584L5.13149 24.1956Z"
                                fill="url(#paint3_linear_2593_4793)"
                              />{" "}
                              <path
                                d="M28.5905 11.2302C25.5011 6.37004 19.0567 4.93386 14.1966 8.02297C9.33615 11.1124 7.90058 17.5571 10.9897 22.4172C14.0788 27.2777 20.5232 28.7135 25.3836 25.6241C30.2438 22.535 31.6796 16.0906 28.5905 11.2302ZM21.5632 15.7752C20.8256 14.6146 21.1686 13.0752 22.3294 12.3373C23.4903 11.5993 25.0294 11.9426 25.7674 13.1032C26.5053 14.2643 26.1623 15.8034 25.0015 16.5414C23.8406 17.279 22.3012 16.9363 21.5632 15.7752ZM14.5678 18.4511C15.0165 18.1658 15.6118 18.2984 15.8972 18.7471C16.1825 19.1961 16.0495 19.7914 15.6009 20.0764C15.1519 20.3618 14.5569 20.2291 14.2716 19.7804C13.9862 19.3315 14.1189 18.7365 14.5678 18.4511ZM17.6463 20.0752C17.9095 19.9079 18.2583 19.9857 18.4256 20.2488C18.5928 20.512 18.5151 20.8605 18.2519 21.0278C17.9884 21.1954 17.6399 21.1177 17.4727 20.8545C17.3054 20.5913 17.3828 20.2425 17.6463 20.0752ZM18.4025 10.7408C18.1396 10.9078 17.7908 10.8304 17.6235 10.5669C17.4563 10.3037 17.534 9.95517 17.7969 9.78791C18.0601 9.62064 18.4092 9.69805 18.5761 9.96125C18.7437 10.2247 18.6657 10.5735 18.4025 10.7408Z"
                                fill="url(#paint4_radial_2593_4793)"
                              />{" "}
                              <path
                                d="M18.2618 21.0287C17.9983 21.1963 17.6498 21.1185 17.4825 20.8554C17.3153 20.5922 17.3927 20.2434 17.6562 20.0761C17.9194 19.9088 18.2682 19.9865 18.4354 20.2497C18.6027 20.5129 18.525 20.8614 18.2618 21.0287Z"
                                fill="white"
                              />{" "}
                              <path
                                d="M15.59 20.0737C15.141 20.3591 14.546 20.2264 14.2606 19.7777C13.9753 19.3287 14.1079 18.7338 14.5569 18.4484C15.0056 18.163 15.6009 18.2957 15.8862 18.7444C16.1716 19.1934 16.0386 19.7887 15.59 20.0737Z"
                                fill="white"
                              />{" "}
                              <path
                                d="M18.3983 10.7378C18.1354 10.9048 17.7866 10.8274 17.6193 10.5639C17.4521 10.3007 17.5298 9.95219 17.7927 9.78493C18.0559 9.61766 18.405 9.69507 18.5719 9.95826C18.7395 10.2218 18.6615 10.5706 18.3983 10.7378Z"
                                fill="white"
                              />{" "}
                              <path
                                d="M25.0005 16.5426C23.8396 17.2803 22.3002 16.9376 21.5623 15.7764C20.8246 14.6159 21.1676 13.0765 22.3285 12.3385C23.4893 11.6006 25.0284 11.9439 25.7664 13.1044C26.5043 14.2656 26.1613 15.8047 25.0005 16.5426Z"
                                fill="white"
                              />{" "}
                              <defs>
                                {" "}
                                <linearGradient
                                  id="paint0_linear_2593_4793"
                                  x1="15.2496"
                                  y1="9.29993"
                                  x2="2.42048"
                                  y2="17.9313"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  {" "}
                                  <stop stop-color="#0163E4" />{" "}
                                  <stop offset="1" stop-color="#62A5FF" />{" "}
                                </linearGradient>{" "}
                                <linearGradient
                                  id="paint1_linear_2593_4793"
                                  x1="22.5297"
                                  y1="24.9502"
                                  x2="11.3452"
                                  y2="32.8621"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  {" "}
                                  <stop stop-color="#0163E4" />{" "}
                                  <stop offset="1" stop-color="#79B2FF" />{" "}
                                </linearGradient>{" "}
                                <linearGradient
                                  id="paint2_linear_2593_4793"
                                  x1="15.2891"
                                  y1="22.8252"
                                  x2="8.17807"
                                  y2="27.9186"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  {" "}
                                  <stop stop-color="#0163E4" />{" "}
                                  <stop offset="1" stop-color="#62A5FF" />{" "}
                                </linearGradient>{" "}
                                <linearGradient
                                  id="paint3_linear_2593_4793"
                                  x1="9.35041"
                                  y1="19.8502"
                                  x2="3.05776"
                                  y2="24.3424"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  {" "}
                                  <stop stop-color="#0163E4" />{" "}
                                  <stop offset="1" stop-color="#62A5FF" />{" "}
                                </linearGradient>{" "}
                                <radialGradient
                                  id="paint4_radial_2593_4793"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(28.4716 11.5184) rotate(-32.4378) scale(23.4427 23.4427)"
                                >
                                  {" "}
                                  <stop stop-color="white" />{" "}
                                  <stop offset="0.1648" stop-color="#66A8FB" />{" "}
                                  <stop offset="0.4218" stop-color="#2D7EE6" />{" "}
                                  <stop offset="0.857" stop-color="#0060D6" />{" "}
                                </radialGradient>{" "}
                              </defs>{" "}
                            </svg>
                          </span>
                          <span>Express</span>
                        </div>
                      }
                    >
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <Form.Check
                          inline
                          label="Consistency"
                          name="group1"
                          type="radio"
                          id="radioBtn"
                          style={{ color: "white" }}
                        />
                        <Form.Check
                          inline
                          label="Non-Consistency"
                          name="group1"
                          type="radio"
                          id="radioBtn"
                          style={{ color: "white" }}
                        />
                        {/* {stepValue ? "Checked h" : "nahe h"} */}
                      </div>
                      <div className="PricingTableSetting">
                        <PricingTable>
                          <thead>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  Account Size
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $6,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $15,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $25,000
                                </p>
                              </td>
                              <td>
                                <p className="p-0 m-0 tableHeadingSet">
                                  $50,000
                                </p>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">Fee: $49</span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">Fee: $99</span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">
                                      Fee: $199
                                    </span>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link href="" className="btn getPlanBtn">
                                  <div className="d-flex flex-column">
                                    <span className="getPlanHeading">
                                      Get Plan
                                    </span>
                                    <span className="getPlanFee">
                                      Fee: $299
                                    </span>
                                  </div>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  15% Profit Share From Challenge Phase
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">$225</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  $562.50
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  $937.50
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">$1,875</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Profit Target
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">25%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">25%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">25%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">25%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Maximum Daily Loss
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($300)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($750)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($1,250)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  5% ($2,500)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Maximum Overall Loss
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($600)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($1,500)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($2,500)
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10% ($5,000)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Minimum Trading Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10 Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10 Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10 Days
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  10 Days
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  Profit Split Upto
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">95%</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  News Trading
                                </p>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="none"
                                    className="h-[14px] w-[14px] opacity-40"
                                  >
                                    <g
                                      className="stroke-current"
                                      strokeWidth="2"
                                      opacity="0.75"
                                    >
                                      <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                    </g>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="none"
                                    className="h-[14px] w-[14px] opacity-40"
                                  >
                                    <g
                                      className="stroke-current"
                                      strokeWidth="2"
                                      opacity="0.75"
                                    >
                                      <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                    </g>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="none"
                                    className="h-[14px] w-[14px] opacity-40"
                                  >
                                    <g
                                      className="stroke-current"
                                      strokeWidth="2"
                                      opacity="0.75"
                                    >
                                      <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                    </g>
                                  </svg>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="none"
                                    className="h-[14px] w-[14px] opacity-40"
                                  >
                                    <g
                                      className="stroke-current"
                                      strokeWidth="2"
                                      opacity="0.75"
                                    >
                                      <path d="m.976 10.692 9.384-9.384M.974 1.308l9.384 9.384"></path>
                                    </g>
                                  </svg>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="p-0 m-0 tableParaTexxt">
                                  First Reward
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                              <td>
                                <p className="tableParaTexxt p-0 m-0">
                                  Monthly
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </PricingTable>
                      </div>
                    </Tab>
                  </PlanTabs>
                </div>
                <div className="d-flex align-items-center gap-5 justify-content-center setTabsBtmText">
                  <p>Add-ons for Express</p>
                  <ul
                    className="ps-0 d-flex align-items-center gap-5"
                    style={{ listStyle: "circle" }}
                  >
                    <li>Lifetime Payout 95%</li>
                    <li>150% Reward </li>
                    <li>Double Up</li>
                  </ul>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
