import React, {Component, SyntheticEvent} from 'react';


class Paginator extends Component <{lastPage : number, handleChange: any}>{
    page = 1
    //last_page = 0

    prev =  (e:SyntheticEvent ) => {
        e.preventDefault()
        if (this.page === 1)  return
        this.page--;

        this.props.handleChange(this.page)

    }

    next =  (e:SyntheticEvent ) => {
        e.preventDefault()
        if (this.page === this.props.lastPage)  return
        this.page++;

        this.props.handleChange(this.page)

    }

    render() {


        return (
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="" className="page-link" onClick={this.prev}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a href="" className="page-link" onClick={this.next}>Next</a>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default Paginator;