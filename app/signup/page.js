
import Link from "next/link"
export default function Page() {

    return (
        <>

            <div className="sign-form-area bg-13">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 m-auto">
                            <div className="sign-form-wrap">
                                <div className="sign-logo text-center">
                                    <Link href="/"><img src="/assets/img/logo/site-logo-6.svg" alt="" /></Link>
                                </div>
                                <div className="sign-form">
                                    <div className="form-heading">
                                        <h3>Sign Up</h3>
                                        <p>
                                            Welcome back! Enter your email and password below to sign Up
                                        </p>
                                    </div>
                                    <form action="#">
                                        <label htmlFor="email">EMAIL </label>
                                        <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                                        <label htmlFor="password">PASSWORD</label>
                                        <input type="password" name="password" id="password" placeholder="Enter Your Password" />
                                        <label htmlFor="company">COMPANY</label>
                                        <input type="text" name="company" id="company" placeholder="Enter Your Company" />
                                        <div className="check-box-wrap">
                                            <input type="checkbox" name="check-box" id="check-box" className="check-box" />
                                            <label htmlFor="check-box">I agree to the Terms  Conditions</label>
                                        </div>
                                        <div className="space40" />
                                        <button type="submit" className="theme-btn-11 full-btn">
                                            Sign Up
                                        </button>
                                    </form>
                                    <div className="space20" />
                                    <h4>
                                        Already have an account? <Link href="/signin">Login Now</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}