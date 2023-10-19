import './Navbar.css'

function Navbar(){

    return(
        <div className="container">
            <nav className="navbar navbar-expand-md fixed-top" id="nav-container">
                <div>
                    <button className="navbar-toggler ms-3">
                        <span id="hamburguer">
                            <i class="fa-solid fa-bars"></i>
                        </span>
                    </button>
                    <img alt="Logo iFood" className="navbar-brand ms-md-4 ms-3" />
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mb-2">
                        <aside>asd</aside>z
                    </ul>
                </div>
                <div id="loginIcon">
                    <img alt="IMG logo" />
                    <p>Logo</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar