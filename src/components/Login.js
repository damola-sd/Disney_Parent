import React from 'react';
import { connect } from "react-redux";
import { login } from '../actions';
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

const emailRef = React.createRef();
const passwordRef = React.createRef();
const usernameRef = React.createRef();

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
    }

    onLogin = (event) => {

        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        
        this.props.login(username, password, email);

    }

    render() {
        return (
            <StyledForm>
                <form onSubmit={this.onLogin}>
                    <div></div>
                    <input
                        ref={usernameRef}
                        placeholder="Username"
                        type="text"
                    />
                    <input
                        ref={emailRef}
                        placeholder="E-Mail"
                        type="email"
                    />
                    <input
                        ref={passwordRef}
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


const mapStateToProps = state => {
    return {
        isLoggedIn: state.postReducer.isLoggedIn
    };
};

export default connect(
    mapStateToProps,
    { login }
)(Login);