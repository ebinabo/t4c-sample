import Head from 'next/head'
import { Button } from '../components'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Trav4College</title>
            </Head>

            <div className="hero">
                <div className="usp">
                    <header>
                        Your College Journey starts right here.
                    </header>

                    <p>
                        Trav4College offers a robust platform that includes rich 
                        details on admissions, student profiles, cost of study, 
                        graduate outcomes and much more.
                    </p>

                    <div className="action">
                        <Button type="primary">Sign Up</Button>
                        <Button type="secondary">Download App</Button>
                    </div>
                </div>

                <div className="image-grid">
                    <img src="/assets/images/hero-1.png" alt=""/>
                    <img src="/assets/images/hero-2.png" alt=""/>
                    <img src="/assets/images/hero-3.png" alt=""/>
                </div>
            </div>

            <div className="offerings">
                <div className="offering-block">
                    <p className="cheapest">
                        <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7612 1.77606L14.5075 0.523926L8.86567 6.15854L10.1194 7.41068L15.7612 1.77606ZM19.5223 0.523926L10.1194 10.0044L6.35817 6.24798L5.10444 7.50012L10.1194 12.5087L20.8656 1.77606L19.5223 0.523926ZM0 7.50012L5.01492 12.5087L6.26866 11.2565L1.25373 6.24798L0 7.50012Z" fill="white"/>
                        </svg>
                        Cheapest
                    </p>
                    <div>
                        <p style={{color: '#075CB2'}}>
                            <strong>What we Offer</strong>
                        </p>
                        <p>
                            <strong>College Application</strong>
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>Trav4College</strong>
                        </p>
                        <p>
                            <span>
                                <strong>150.00</strong> United States Dollars
                            </span>
                            <span className="green">
                                -92% OFF
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>Trav4College</strong>
                        </p>
                        <p>
                            <span>
                                <strong>200.00</strong> United States Dollars
                            </span>
                            <span className="blue">
                                0% OFF
                            </span>
                        </p>
                    </div>
                </div>
                <div className="offering-block">
                    <div>
                        <p>
                            <strong>Study Consultancy</strong>
                        </p>
                        <p>
                            <strong>Feedback Time</strong>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>
                                <strong>150.00</strong> United States Dollars
                            </span>
                            <span className="green">
                                -92% OFF
                            </span>
                        </p>
                        <p>
                            <strong>Instant feedback time</strong>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>
                                <strong>200.00</strong> United States Dollars
                            </span>
                            <span className="blue">
                                0% OFF
                            </span>
                        </p>
                        <p>
                            <strong>Over 2 weeks</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
