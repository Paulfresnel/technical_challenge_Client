import { Link } from "react-router-dom"
import './HomePage.css'


function HomePage(){
    return(
        <div className="margined">
            <h1>Welcome to the Phone Cave, your favorite stop for anything Phone-related</h1>
        
        <div>
        <Link to={"/phones"}>
            <button className="btn btn-outline-success">Check our Phone Database</button>
            </Link>
        </div>
        </div>
    )
}

export default HomePage