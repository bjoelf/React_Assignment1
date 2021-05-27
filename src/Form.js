import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            ForName: '',
            LastName: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { ForName, LastName } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="ForName">For Name</label>
                <input 
                    type="text" 
                    name="ForName" 
                    id="ForName"
                    value={ForName} 
                    onChange={this.handleChange} />
                <label for="LastName">Last Name</label>
                <input 
                    type="text" 
                    name="LastName" 
                    id="LastName"
                    value={LastName} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
