import React from 'react';

class Register extends React.Component {

    costructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.emailRef = React.createRef();
        this.secondPasswordRef = React.createRef();
    }
    render() {
        return (
            <div className="register-form">
                <form>
                    <input
                        ref = {this.usernameRef}
                        placeholder="Username"
                        name="username"
                        type="text"
                    />
                    <input
                        ref = {this.emailRef}
                        placeholder="E-Mail"
                        name="email"
                        type="email"
                    />
                    <input
                        ref = {this.passwordRef}
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                    <input
                        ref = {this.secondPasswordRef}
                        placeholder="Re-Type Password"
                        name="compare_password"
                        type="password"
                    />
                    <button type="Submit"> Register </button>
                </form>
            </div>
        )
    }
}

export default Register;