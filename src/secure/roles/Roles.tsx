import React, {Component, SyntheticEvent} from 'react';
import Wrapper from "../components/Wrapper";
import axios from "axios";
import {Role} from "../../classes/role";
import {Link} from "react-router-dom";
import {User} from "../../classes/user";
import Deleter from "../components/Deleter";

class Roles extends Component {

    state = {
        roles: []
    }

    componentDidMount = async ()  => {
        const response = await axios.get('roles');

        this.setState({
            roles: response.data.data
        })
    }

    handleDelete = async (id: number, ) => {


            this.setState({
                roles: this.state.roles.filter((r:Role) => r.id !== id)
            })

    }


    render() {
        return (


           <Wrapper>
               <div className="d-flex justify-content-between flex-wrap flex-md-no-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                   <div className="btn-toolbar mb-2 mb-md-0">
                       <Link to={'roles/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                   </div>
               </div>
               <div className="table-responsive">
                   <table className="table table-striped table-sm">
                       <thead>
                       <tr>
                           <th scope="col">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Action</th>

                       </tr>
                       </thead>
                       <tbody>
                       {this.state.roles.map(
                       (role: Role) => {
                            return (
                                <tr key={role.id}>
                                    <td>{role.id}</td>
                                    <td>{role.name}</td>
                                    <td><div className="btn-group mr-2">
                                        <Link to={`/roles/${role.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        <Deleter id={role.id} endpoint={'roles'} handleDelete={this.handleDelete}/>
                                    </div></td>

                                 </tr>
                           )
                       })}


                       </tbody>
                   </table>
               </div>
           </Wrapper>
        );
    }
}

export default Roles;