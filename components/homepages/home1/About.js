import Link from "next/link";
import BadgeButton from "@/app/evaluation-model/component/BadgeBtn";

export default function About() {
  return (
    <>
      <div className="about-area section-padding bg5-left pt-5">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-12">
              <div
                className="fundedBtnsetting d-flex flex-column align-items-center gap-3"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                {/* <button className="btn ">Why FundedNext</button> */}
                <BadgeButton title="Why FundedNext" />
                <h1 className="text-center p-0 m-0 fundHeading">
                  Trade with the Most <br /> Reliable Prop Firm
                </h1>
                <p className="text-center p-0 m-0 fundSubHeading">
                  Accurate | Fast | Stable | Trustworthy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
