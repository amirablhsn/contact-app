import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        number: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "") {
            alert("Please enter a contact name");
            return
        }
        if(this.state.email === "" && this.state.number === "") {
            alert("Please fill out a contact method");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:"", number:""});
    }

    render() {
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value}) }/>
                    </div>
                    <div className="field">
                        <input
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value}) }/>
                    </div>
                    <div className="field">
                        <input
                        type="text" 
                        name="number" 
                        placeholder="Number" 
                        value={this.state.number}
                        onChange={ (e) => this.setState({number: e.target.value}) }/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    };
};

export default AddContact;