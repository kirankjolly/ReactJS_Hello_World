import React, { Component } from 'react';
import './FormComponent.css'

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '',secondName:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
      }
    
    handleSubmit(event) {
        alert('First Name : ' + this.state.firstName+"    Second Name : " + this.state.secondName);
        event.preventDefault();
      }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input name="firstName" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Second Name:
                        <input name="secondName" type="text" placeholder="Second Name" value={this.state.secondName} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Ok" />
                </form>
            </div>
        );
    }
}

export default FormComponent;