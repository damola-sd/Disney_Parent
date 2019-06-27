import React from 'react';
import { connect } from "react-redux";
import { login } from '../actions';
import styled from 'styled-components';


const StyledForm = styled.div`

    width: 800px;
    height: 400px;
    border: 2px inset red;
    margin:0 auto;

    div {
        margin:0 auto;
    }

    input {
        margin-left: 300px;
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
        margin-left: 200px;
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
                <div>
                    <form onSubmit={this.onLogin}>
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
                        /><br />
                        <button
                            type="submit"
                        >Login</button>
                    </form>
                </div>

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