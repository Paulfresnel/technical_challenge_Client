import { Link } from "react-router-dom"
import './Header.css'


function Header(){
    

    
    return (
        <div className="header-div">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><span className="emphasized">P</span>hone <span className="emphasized">C</span>ave </a>
            <button className="navbar-toggler border-black" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav" style={{marginTop: '10px'}}>
              <ul className="navbar-nav">
                <i class="bi bi-mortarboard"></i>
                <li className="nav-item active nav-link">
                  <Link to={"/"}>
                    <p className="nav-link">Home</p> 
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link to={"/phones"}>
                    <p className="nav-link">Phones Available</p>
                  </Link>
                </li>
                
                               

                
              </ul>
            </div>
          </nav>
        </div>
  )
}

export default Header