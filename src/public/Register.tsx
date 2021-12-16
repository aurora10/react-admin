import React, {Component, SyntheticEvent} from 'react';

import './Public.css';

import axios from "axios";
import {Redirect} from "react-router-dom";

class Register extends Component {
    first_name = '';
    last_name = '';
    email =  '';
    password = '';
    password_confirm = '';
    state = {
        redirect:false
    }

    submit = async (e: SyntheticEvent) => {

        e.preventDefault();

        await axios.post('register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
        });

        //console.log(response)

        this.setState({
            redirect:true
        })
    }




    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'}/>
        }

        return (
            <main className="form-signin" >
                <form onSubmit={this.submit}>

                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <div className="form-floating">
                        <input type="text" id="firstName" className="form-control"
                               placeholder="First Name"  required
                               onChange={e => this.first_name = e.target.value}
                        />
                        <label htmlFor="floatingInput">First Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" id="lastName" className="form-control"
                               placeholder="Last Name" required
                               onChange={e => this.last_name = e.target.value}
                        />
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="name@example.com" required
                               onChange={e => this.email = e.target.value}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword"
                               placeholder="Password" required
                               onChange={e => this.password = e.target.value}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                        <input type="password"  id="passwordConfirm" className="form-control"
                               placeholder="Password Confirm" required
                               onChange={e => this.password_confirm = e.target.value}
                        />
                        <label htmlFor="floatingPassword">Password Confirm</label>
                    </div>


                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                </form>

            </main>
        );
    }
}

export default Register;