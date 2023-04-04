import { Component } from "react"
import { NavLink } from "react-router-dom";
class Header extends Component {
    constructor(props) { 
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div className="alert alert-warning d-flex justify-content-around">
                <NavLink className="btn btn-outline-danger" to={"/students"}>Students List</NavLink>
                <NavLink className="btn btn-outline-danger" to={"/add"}>Add Student</NavLink>
            </div>
        )
    }
}

export default Header
