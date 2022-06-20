import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            FullName:'',
            Username:'',
            Email:'',
            Password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            FullName:event.target.value
        })
    }

    changeUsername(event) {
        this.setState({
            Username:event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            Email:event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            Password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            FullName: this.state.FullName,
            Username: this.state.Username,
            Email: this.state.Email,
            Password: this.state.Password
        }
        axios.post('http://localhost:4000/app/signup' , registered)
            .then(res => console.log(res.data))

            this.setState({
                FullName:'',
                Username:'',
                Email:'',
                Password:''
            })
    }

    render() { 
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <form onSubmit={this.onSubmit}>
                            <input type = "text"
                            placeholder="Full Name"
                            onChange = {this.changeFullName}
                            value = {this.state.FullName}
                            className = "form-control" />

                            <input type = "text"
                            placeholder="Username"
                            onChange = {this.changeUsername}
                            value = {this.state.Username}
                            className = "form-control form-group" />

                            <input type = "text"
                            placeholder="Email"
                            onChange = {this.changeEmail}
                            value = {this.state.Email}
                            className = "form-control form-group" />

                            <input type = "password"
                            placeholder="Password"
                            onChange = {this.changePassword}
                            value = {this.state.Password}
                            className = "form-control form-group" />

                            <input type = "submit" 
                            className="btn btn-danger btn-block"
                            value = 'submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;