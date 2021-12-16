import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Nav extends Component{

    state = {
        redirect: false
    }

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

                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#" onClick={this.handleClick}>Sign out</a>
                    </div>
                </div>
            </header>
        )
    }
}



export default Nav;