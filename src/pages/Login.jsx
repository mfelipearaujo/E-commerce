import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 8px;
`

const Button = styled.button`
    width: 40%;
    padding: 10px 15px;
    margin-bottom: 10px;
    border: 1px solid #000000;
    background-color: #ffffff;
    cursor: pointer;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder='Username or email' />
                    <Input placeholder='Password' />
                    <Button>Login</Button>
                    <Link>Forgot password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
