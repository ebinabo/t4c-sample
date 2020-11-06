export default function Navigation() {
    return (
        <nav>
            <div id="brand">
                <img src="/assets/images/logo.png" alt="Trav4Study Logo"/>
                <p>Trav4College</p>
            </div>

            <ul className="menu-items">
                <li>College Applications</li>
                <li>Scholarships</li>
                <li>College Savings</li>
                <li>International Exams</li>
                <li>Educational Partners</li>
            </ul>

            <div className="cta">
                <button className="login">Login</button>
                <button className="signup">Get Started</button>
            </div>
        </nav>
    )
}
