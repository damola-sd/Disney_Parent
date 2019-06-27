import React from 'react';
import { connect } from "react-redux";
import { login } from '../actions/index';
import styled from 'styled-components';


const StyledForm = styled.div`

    height: 400px;
    width: 800px;
    

    input {
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
    }
`;
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.usernameRef = React.createRef();
    }

    onLogin(event) {
        event.preventDefault();
        let username = this.usernameRef.current.value;
        let password = this.passwordRef.current.value;
        let email = this.emailRef.current.value;
        this.props.login(username, password, email)
        
    }

    render() {
        return (
            <StyledForm>
                <form onSubmit={this.onLogin}>
                    <input
                        ref={this.usernameRef}
                        placeholder="Username"
                        type="text"
                    />
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
            </StyledForm>
        )
    }
}


const mapStateToProps = state => ({
    
});

export default connect(
    mapStateToProps,
    { login }
  )(Login);