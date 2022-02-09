import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
//import axios from "axios";
import {User} from "../../../classes/user";
import {connect} from "react-redux";

class Nav extends Component <{user:User}>{

    state = {
        //user: new User(), get user from redux

        redirect: false
    }

    // componentDidMount = async () => {
    //     const response = await axios.get('user')
    //
    //     this.setState({
    //         user: response.data.data
    //     })
    //
    // }


    handleClick = () => {
        localStorage.clear()
        this.setState({
            redirect: true
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={'/login'} />
        }
        return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

                <div className="my-2 my-md-0 mr-md-3 ">
                    <div className="nav-item text-nowrap">
                        <Link to={'profile'} className="p-2 text-white" style={{ textDecoration: 'none' }}>{this.props.user.name} </Link>
                        <a className="p-2 text-white" href="#" onClick={this.handleClick}>Sign out</a>
                    </div>
                </div>
            </header>
        )
    }
}



// @ts-ignore
export default connect(state => ({user:state.user})) (Nav);