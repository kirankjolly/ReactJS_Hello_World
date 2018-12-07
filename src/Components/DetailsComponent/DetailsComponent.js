import React, { Component } from 'react';
import queryString from 'query-string'

class DetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:-1
        }
    }
    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        this.setState({id:values.id});
    }
    
    render() {
        return (
            <div>
                Details page<br/>
               id = {this.state.id}
            </div>
        );
    }
}

export default DetailsComponent;