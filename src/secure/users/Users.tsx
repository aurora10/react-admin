import React, {Component, SyntheticEvent} from "react";
import Wrapper from "../dashboard/components/Wrapper";
import axios from "axios";
import {User} from "../../classes/user";
import {Link} from "react-router-dom";
import Paginator from "../dashboard/components/Paginator";
import Deleter from "../dashboard/components/Deleter";
import {connect} from "react-redux";



class Users extends Component <{user: User}>{
    state = {
        users: [],
        //page: 1
    }

    page = 1
    last_page = 0

    componentDidMount = async () => {
        const response = await axios.get(`users?page=${this.page}`)

        //console.log(response)
        this.setState({
            users: response.data.data
        })

        this.last_page = response.data.meta.last_page
    }

    handlePageChange = async (page : number) => {
        this.page = page

        await this.componentDidMount()
    }

    handleDelete = async (id: number) => {
        //e.preventDefault()
        // if (window.confirm('Are you sure you want to delete this user?')) {
        //
        //    await  axios.delete(`users/${id}`);


            this.setState({
                users: this.state.users.filter((u:User) => u.id !== id)
            })
       // }
    }

    actions = (id: number) => {
        if (this.props.user.canEdit('users')) {
            return (
                <div className="btn-group mr-2">
                    <Link to={`/users/${id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                    {/*<a className="btn btn-sm btn-outline-secondary"*/}
                    {/*      onClick={(e:SyntheticEvent) =>this.delete(user.id, e)}>Delete</a>*/}
                    <Deleter id={id} endpoint={'users'} handleDelete={this.handleDelete}/>
                </div>
            )
        }
    }

    render() {

        let addButton = null

        if (this.props.user.canEdit('users')) {
            addButton = (
                <div className="d-flex justify-content-between flex-wrap flex-md-no-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'users/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
            )
        }

        return (
            <Wrapper>
                {addButton}

                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(
                            (user: User) => {

                                return (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.first_name} {user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role.name}</td>
                                        <td>
                                            {this.actions(user.id)}
                                        </td>
                                    </tr>
                                )

                            }
                        )}


                        </tbody>
                    </table>
                </div>

                <Paginator lastPage = {this.last_page} handleChange={this.handlePageChange}/>
            </Wrapper>
        )
    }
}


// @ts-ignore
export default connect(state => ({user: state.user})) (Users);