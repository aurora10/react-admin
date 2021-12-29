import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import axios from "axios";
import {Link} from "react-router-dom";
import Paginator from "../components/Paginator";
import {Order} from "../../classes/order";

class Orders extends Component {

    state = {
        orders: []
    }
    page = 1
    last_page = 0

    componentDidMount = async ()  =>{
            const response = await axios.get(`orders?page=${this.page}`)

        this.setState({
            orders: response.data.data
        })

        this.last_page = response.data.meta.last_page
    }

    handlePageChange = async (page: number) => {
        this.page = page

        await this.componentDidMount()
    }

    render() {


        return (
            <Wrapper>
                <div className="d-flex justify-content-between flex-wrap flex-md-no-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'users/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.orders.map(
                            (order: Order) => {

                                return (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.first_name} {order.last_name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.total}</td>
                                        <td>
                                            <div className="btn-group mr-2">
                                                <Link to={`/orders/${order.id}/edit`} className="btn btn-sm btn-outline-secondary">View</Link>

                                            </div>
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
        );
    }
}

export default Orders;