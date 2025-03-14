import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Blog() {
  const searchCard = [
    {
      title: "Prop Firm vs Brokerage: What’s the Difference ...",
      text: "Summary: Prop Firm vs Brokerage for Trading Forex vs Stocks ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
    {
      title: "Choosing a Prop Firm: Why FundedNext? ...",
      text: "Deciding whether you want to be a prop trader is ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
    {
      title: "Forex Terms: Trading Glossary and FAQs ...",
      text: "Getting into Forex trading can feel very exciting, but it ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
    {
      title: "Popular Asset Classes ...",
      text: "Summary: Asset classes, like commodities, indices, and Forex pairs, represent ...",
      image: "/assets/img/blog/blogSmallCard.webp",
    },
  ];

  const categories = [
    {
      text: "forex trading guide",
      link: "/",
    },
    {
      text: "important announcement",
      link: "/",
    },
    {
      text: "market analysis",
      link: "/",
    },
    {
      text: "traders' tale",
      link: "/",
    },
    {
      text: "trades update",
      link: "/",
    },
    {
      text: "your complete guide to prop trading",
      link: "/",
    },
  ];

  const recentBlog = [
    {
      image: "/assets/img/affiliate/comparison1.webp",
      subText: "Forex Trading Guide",
      title:
        "Prop Firm vs Brokerage: What’s the Difference in Trading Forex vs Stocks?",
      text: "Summary: Prop Firm vs Brokerage for Trading Forex vs Stocks Prop firms let traders use ...",
    },
    {
      image: "/assets/img/affiliate/comparison1.webp",
      subText: "Your Complete Guide to Prop Trading",
      title: "Choosing a Prop Firm: Why FundedNext?",
      text: "Deciding whether you want to be a prop trader is a big step. Our guide ...",
    },
    {
      image: "/assets/img/affiliate/comparison1.webp",
      subText: "Your Complete Guide to Prop Trading",
      title: "Forex Terms: Trading Glossary and FAQs",
      text: "Getting into Forex trading can feel very exciting, but it can seem complex or even ...",
    },
    {
      image: "/assets/img/affiliate/comparison1.webp",
      subText: "Your Complete Guide to Prop Trading",
      title: "Popular Asset Classes",
      text: "Summary: Asset classes, like commodities, indices, and Forex pairs, represent different types of investments with ...",
    },
  ];
  const forexBlog = [
    {
      image: "/assets/img/affiliate/comparison1.webp",
      subText: "Forex Trading Guide",
      title:
        "Prop Firm vs Brokerage: What’s the Difference in Trading Forex vs Stocks?",
      text: "Summary: Prop Firm vs Brokerage for Trading Forex vs Stocks Prop firms let traders use ...",
    },
    {
      image: "/assets/img/affiliate/comparison1.webp",
      subText: "Your Complete Guide to Prop Trading",
      title: "Choosing a Prop Firm: Why FundedNext?",
      text: "Deciding whether you want to be a prop trader is a big step. Our guide ...",
    },
    {
      image: "/assets/img/affiliate/comparison1.webp",
      subText: "Your Complete Guide to Prop Trading",
      title: "Forex Terms: Trading Glossary and FAQs",
      text: "Getting into Forex trading can feel very exciting, but it can seem complex or even ...",
    },
  ];

  const importantAnnounce = [
    {
      image: "/assets/img/affiliate/smallCardImage.webp",
      title: "Introducing 6K Challenge Package",
      text: "At FundedNext, we are committed to providing the best trading experience to",
    },
    {
      image: "/assets/img/affiliate/smallCardImage1.webp",
      title: "News Trading is Now Allowed in the FundedNext Evaluation Model",
      text: "One of the precautionary rules that FundedNext introduced is the News Rule",
    },
    {
      image: "/assets/img/affiliate/smallCardImage2.webp",
      title: "Feed the Need – Invest in Kindness, Nourish Future",
      text: "",
    },
    {
      image: "/assets/img/affiliate/smallCardImage3.webp",
      title:
        "FundedNext in January: Community Growth, Payouts, and Trading Milestones",
      text: "",
    },
    {
      image: "/assets/img/affiliate/smallCardImage4.webp",
      title:
        "FundedNext in January: Community Growth, Payouts, and Trading Milestones",
      text: "",
    },
    {
      image: "/assets/img/affiliate/smallCardImage5.webp",
      title:
        "FundedNext in January: Community Growth, Payouts, and Trading Milestones",
      text: "",
    },
  ];
  const tradersTales = [
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Tale no. 19: Believe You Can, and You’re Halfway There.",
      text: "I’m a full-time trader, and my go-to instrument is XAUUSD. Why? Well, it’s pretty",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Tale no. 18: It’s Better to Be a Warrior in a Garden",
      text: "",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Tale no. 17: Tough Times Never Last, But Tough",
      text: "",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title:
        "Tale no. 16: Great Things Are Done by a Series of Small Things Brought Together",
      text: "I started trading in March 2020, right before the pandemic hit. The initial days were quite challenging",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title:
        "FundedNext in January: Community Growth, Payouts, and Trading Milestones",
      text: "",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Tale no. 14: Persistence is a Great Substitute for Talent",
      text: "My trading strategy is centered around the smart money concept, which is the",
    },
  ];
  const computerGuide = [
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Choosing a Prop Firm: Why FundedNext?",
      text: "Deciding whether you want to be a prop trader is a big step. Our guide is designed",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Forex Terms: Trading Glossary and FAQs",
      text: "Getting into Forex trading can feel very exciting, but it can seem complex or even",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Popular Asset Classes",
      text: "Summary: Asset classes, like commodities, indices, and Forex pairs, represent",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "The Psychology of Forex Trading",
      text: "Summary: Mastering Forex trading psychology is essential for consistent",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "The Psychology of Forex Trading",
      text: "Summary: Mastering Forex trading psychology is essential for consistent",
    },
    {
      image: "/assets/img/affiliate/smallCardImage6.webp",
      title: "Understanding Prop Firm Payouts and Profit Sharing",
      text: "Prop firms give traders the power to trade at scale, with account sizes that are larger",
    },
  ];

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
        <Container className="containerSetting">
          <Row>
            <Col xxl={12}>
              <div className="blogPageContainer">
                <h1 className="blogPageHeading">
                  <span>Funded</span>Next Blog
                </h1>
                <p className="blogPageParagraph">
                  We’re releasing new updates nearly every week. Stay on top of
                  them <br /> here with all our latest company news and views.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between mt-5">
            <Col xxl={7}>
              <div className="blogLeftSide">
                <img
                  src="/assets/img/blog/blogPageHero.webp"
                  alt=""
                  style={{ borderRadius: "10px", width: "100%" }}
                />
              </div>
              <div>
                <p className="mt-4 dateText">(Feb 10, 2025)</p>
                <h2 className="mt-4 blogSubHeadingTxt">
                  Prop Firm vs Brokerage: What’s the Difference in Trading Forex
                  vs Stocks?
                </h2>
                <p className="mt-3 blogParagraphTxt">
                  Deciding whether you want to be a prop trader is a big step.
                  Our guide is designed to help you make that choice from a more
                  informed perspective. From Chapter 1 on how prop trading works
                  to Chapter 9, our glossary of common Forex terms, it’s all
                  about giving you the info you need to […]
                </p>
              </div>

              <div className="recentBlogContainer mt-5">
                <h1 className="recentBlogHeading">Recent Blog</h1>
                <div className="settingRecentBlog">
                  {recentBlog.map((ele, index) => (
                    <div className="recentBlogCard" key={index}>
                      <img
                        src={`${ele.image}`}
                        alt=""
                        style={{ borderRadius: "12px" }}
                      />
                      <div className="mt-3 textContainer">
                        <h4 className="recentBlogSubHeading">{ele.subText}</h4>
                        <h1 className="recentBlogMainHeading">{ele.title}</h1>
                        <p className="recentBlogParagraph">{ele.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl={4}>
              <div>
                <input type="text" className="w-100 form-control" />
              </div>

              {searchCard.map((ele, index) => (
                <div className="SearchCard" key={index}>
                  <div>
                    <h1 className="searchCardHeading">{ele.title}</h1>
                    <p className="searchCardParagraph mt-2">{ele.text}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <img
                      style={{ borderRadius: "10px", height: "7.5rem" }}
                      src={`${ele.image}`}
                      alt=""
                    />
                  </div>
                </div>
              ))}

              <div className="categoriesSectionContainer">
                <h1 className="categoryMainHeading">Categories</h1>

                <div>
                  {categories.map((ele, index) => (
                    <Link
                      href={`${ele.link}`}
                      key={index}
                      className="catergoriesItemSetting d-flex align-items-center justify-content-between w-100"
                    >
                      <span
                        style={{
                          color: "#000",
                          fontSize: "18px",
                          textTransform: "capitalize",
                        }}
                      >
                        {ele.text}
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_35_112)">
                            <path
                              d="M9.79351 6.51585C9.79351 6.72397 9.71404 6.93207 9.55544 7.09075L4.5621 12.084C4.24447 12.4017 3.72947 12.4017 3.41196 12.084C3.09445 11.7665 3.09445 11.2516 3.41196 10.934L7.83034 6.51585L3.41211 2.0977C3.0946 1.78006 3.0946 1.26522 3.41211 0.947733C3.72962 0.62994 4.24462 0.62994 4.56226 0.947733L9.5556 5.94094C9.71422 6.0997 9.79351 6.3078 9.79351 6.51585Z"
                              fill="black"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_35_112">
                              <rect
                                width="11.6129"
                                height="11.6129"
                                fill="white"
                                transform="translate(0.677734 0.709961)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="latestNewCardContainer">
                <h1 className="latestCardHeading">
                  Get the Latest News <br /> and Deals
                </h1>
                <ul className="ps-0 my-4 bulletPointsSet">
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14.125 16H1.875C0.841064 16 0 15.1589 0 14.125V1.875C0 0.841064 0.841064 0 1.875 0H14.125C15.1589 0 16 0.841064 16 1.875V14.125C16 15.1589 15.1589 16 14.125 16ZM1.875 1.25C1.5304 1.25 1.25 1.5304 1.25 1.875V14.125C1.25 14.4696 1.5304 14.75 1.875 14.75H14.125C14.4696 14.75 14.75 14.4696 14.75 14.125V1.875C14.75 1.5304 14.4696 1.25 14.125 1.25H1.875ZM13.4656 4.72949L12.5343 3.89551L6.75415 10.3507L3.39941 7.16174L2.53821 8.06763L6.82629 12.144L13.4656 4.72949Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    New Blog Post Alert
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14.125 16H1.875C0.841064 16 0 15.1589 0 14.125V1.875C0 0.841064 0.841064 0 1.875 0H14.125C15.1589 0 16 0.841064 16 1.875V14.125C16 15.1589 15.1589 16 14.125 16ZM1.875 1.25C1.5304 1.25 1.25 1.5304 1.25 1.875V14.125C1.25 14.4696 1.5304 14.75 1.875 14.75H14.125C14.4696 14.75 14.75 14.4696 14.75 14.125V1.875C14.75 1.5304 14.4696 1.25 14.125 1.25H1.875ZM13.4656 4.72949L12.5343 3.89551L6.75415 10.3507L3.39941 7.16174L2.53821 8.06763L6.82629 12.144L13.4656 4.72949Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    Individual Page and Blog List
                  </li>
                </ul>
                <div className="d-flex align-items-center subscribeItemSet">
                  <input className="form-control" />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col xxl={12}>
              <div className="forexTradingContainer">
                <div className="d-flex align-items-center justify-content-between">
                  <h1 className="p-0 m-0 forexTradingHeading">
                    forex trading guide
                  </h1>
                  <Link href="/" className="seeAllLink">
                    See All
                  </Link>
                </div>
              </div>
              <div className="recentBlogContainer mt-4">
                <div className="settingRecentBlog setForexTradingDiv">
                  {forexBlog.map((ele, index) => (
                    <div className="recentBlogCard" key={index}>
                      <img
                        src={`${ele.image}`}
                        alt=""
                        style={{ borderRadius: "12px" }}
                      />
                      <div className="mt-3 textContainer">
                        <h4 className="recentBlogSubHeading">{ele.subText}</h4>
                        <h1 className="recentBlogMainHeading">{ele.title}</h1>
                        <p className="recentBlogParagraph">{ele.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col xxl={12} className="mt-5">
              <div className="forexTradingContainer d-flex align-items-center justify-content-between">
                <h1 className="forexTradingHeading">important announcement</h1>
                <Link href="">See All</Link>
              </div>
              <div className="universalCardContainer mt-4">
                {importantAnnounce.map((ele, index) => (
                  <div className="universalCardSet d-flex align-items-center gap-3">
                    <img
                      src={`${ele.image}`}
                      style={{ borderRadius: "16px" }}
                      alt=""
                    />
                    <div>
                      <h1 className="uniMainHeading">{ele.title}</h1>
                      <p className="uniMainText">{ele.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col xxl={12} className="mt-5">
              <div className="forexTradingContainer d-flex align-items-center justify-content-between">
                <h1 className="forexTradingHeading">market analysis</h1>
                <Link href="/">See All</Link>
              </div>
              <div className="universalCardContainer mt-4">
                {importantAnnounce.map((ele, index) => (
                  <div className="universalCardSet d-flex align-items-center gap-3">
                    <img
                      src={`${ele.image}`}
                      style={{ borderRadius: "16px" }}
                      alt=""
                    />
                    <div>
                      <h1 className="uniMainHeading">{ele.title}</h1>
                      <p className="uniMainText">{ele.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xxl={12} className="mt-5">
              <div className="forexTradingContainer">
                <h1 className="forexTradingHeading">Traders Tales</h1>
              </div>
              <div className="universalCardContainer mt-4">
                {tradersTales.map((ele, index) => (
                  <div className="universalCardSet d-flex align-items-center gap-3">
                    <img
                      src={`${ele.image}`}
                      style={{ borderRadius: "16px" }}
                      alt=""
                    />
                    <div>
                      <h1 className="uniMainHeading">{ele.title}</h1>
                      <p className="uniMainText">{ele.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xxl={12} className="mt-5">
              <div className="forexTradingContainer">
                <h1 className="forexTradingHeading">
                  your complete guide to prop trading
                </h1>
              </div>
              <div className="universalCardContainer mt-4">
                {computerGuide.map((ele, index) => (
                  <div className="universalCardSet d-flex align-items-center gap-3">
                    <img
                      src={`${ele.image}`}
                      style={{ borderRadius: "16px" }}
                      alt=""
                    />
                    <div>
                      <h1 className="uniMainHeading">{ele.title}</h1>
                      <p className="uniMainText">{ele.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col xxl={12} className="mt-5">
              <div className="forexTradingContainer d-flex align-items-center justify-content-between">
                <h1 className="forexTradingHeading p-0 m-0">
                  FundedNext Videos
                </h1>
                <Link href="/">See All</Link>
              </div>

              <div className="d-flex align-items-center mt-4 gap-3 settingVideoContainer">
                <video width="100%" height="240" controls preload="none">
                  <source src="/path/to/video.mp4" type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
                <video width="100%" height="240" controls preload="none">
                  <source src="/path/to/video.mp4" type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
                <video width="100%" height="240" controls preload="none">
                  <source src="/path/to/video.mp4" type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Row>
        </Container>

        <section className="joingGlobalContainer mt-5">
          <Container>
            <Row>
              <Col xxl={12}>
                <div className="flexSetting d-flex align-items-center justify-content-between gap-4">
                  <div>
                    <img
                      src="/assets/img/affiliate/discord_logo.webp"
                      alt=""
                      className="imageSetting disImagePos"
                    />
                  </div>
                  <div>
                    <h1 className="text-center joinMainHeading">
                      Join the Global Community
                      <br /> for the Traders, by the Traders
                    </h1>
                    <p className="text-center joinMainParagraph">
                      Get all the exclusive trading resources, economic news
                      updates & fundamentals, listen to best trading podcasts
                      and share what you are up to outside of trading. You can
                      hang around with other like-minded traders and truly build
                      a connection. Come and start a conversation!
                    </p>
                    <div className="position-relative">
                      <div className="setArrowPosition position-absolute">
                        <img
                          src="/assets/img/affiliate/arrow.webp"
                          alt=""
                          style={{ width: "6rem" }}
                        />
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 justify-content-center">
                      <button className="btn discordCommBtn">
                        <span>
                          <img
                            src="/assets/img/affiliate/discord_icon.webp"
                            alt=""
                          />
                        </span>
                        Join Discord Community
                      </button>
                      <button className="btn facebookCommBtn">
                        <span>
                          <img
                            src="/assets/img/affiliate/facebook_icon.webp"
                            alt=""
                          />
                        </span>
                        Join Facebook Community
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/assets/img/affiliate/facebook_logo.webp"
                      alt=""
                      className="imageSetting fbImagePos"
                    />
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
