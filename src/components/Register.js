import React from 'react';
import { connect } from "react-redux";
import { register } from '../actions';
import styled from 'styled-components';

const usernameRef = React.createRef();
const passwordRef = React.createRef();
const emailRef = React.createRef();
const secondPasswordRef = React.createRef();

const StyledRegisterForm = styled.div`
    width: 800px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;

    input {
        
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        width: 500px;
        font-size: 16px;
    }

    button {
        width: 100px;
        padding: 10px;
        font-size: 12px;
        background-color: cyan;
        margin: 0 auto;
    }
`;

class Register extends React.Component {

    onRegister = event => {
        event.preventDefault();
        const secondPassword = secondPasswordRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        if(password !== secondPassword) {
            alert("Passwords do not match");
        }else { 
            this.props.register(username, password, email);
        }
    }
    render() {
        return (
            <StyledRegisterForm>
                <form onSubmit={this.onRegister}>
                    <input
                        ref = {usernameRef}
                        placeholder="Username"
                        name="username"
                        type="text"
                    />
                    <input
                        ref = {emailRef}
                        placeholder="E-Mail"
                        name="email"
                        type="email"
                    />
                    <input
                        ref = {passwordRef}
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                    <input
                        ref = {secondPasswordRef}
                        placeholder="Re-Type Password"
                        name="compare_password"
                        type="password"
                    /><br />
                    <button type="Submit"> Register </button>
                </form>
            </StyledRegisterForm>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.postReducer.error
    };
};

export default connect(
    mapStateToProps,
    { register }
)(Register);