import './Navbar.css'
import logo from "../assets/imgs/logo.png"

function Navbar(){

    return(
        <div className="container">
            <nav className="navbar navbar-expand-md fixed-top" id="nav-container">
                <div>
                    <button className="navbar-toggler ms-3" type="button" data-toggle="collapse" data-target="#navbar-links"
                    aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
                        <span id="hamburguer">
                            <i className="fa-solid fa-bars"></i>
                        </span>
                    </button>
                    <img src={logo} alt="Logo iFood" className="navbar-brand ms-md-4 ms-3" />
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mb-2">
                        <aside>asd</aside>z
                    </ul>
                </div>
                
                {/* 
                <div className='' id="loginIcon">
                    <img alt="IMG login" />
                    <p>Logo</p>
                </div>
                */}
            </nav>
        </div>
    )
}

export default Navbar