import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }


    render() {
        return (
            <div className="login">
                <form>
                    <input
                        ref={this.emailRef}
                        placeholder="E-Mail"
                        type="email"
                    />
                    <input 
                        ref={this.passwordRef}
                        placeholder="Password"
                        type="password"
                    />
                    <button
                        type="submit"
                    >Login</button>
                </form>
            </div>
        )
    }
}

export default Login;