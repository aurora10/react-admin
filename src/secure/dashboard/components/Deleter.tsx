import React, {Component, SyntheticEvent} from 'react';
import axios from "axios";


class Deleter extends Component <{id : number, endpoint : string, handleDelete : any}>{

    delete = async ( e:SyntheticEvent) => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to delete this record?')) {

            await  axios.delete(`${this.props.endpoint}/${this.props.id}`);

            this.props.handleDelete(this.props.id)

        }
    }

    render() {
        return (
            <a className="btn btn-sm btn-outline-secondary"
               onClick={(e:SyntheticEvent) =>this.delete(e)}>Delete</a>
        );
    }
}

export default Deleter;