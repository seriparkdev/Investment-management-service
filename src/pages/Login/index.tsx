import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/auth';
import { ROUTE } from '../../constants/routes';
import { UserToken } from '../../utils/auth';
import styled from 'styled-components';
import logo from '../../assets/logo.jpg';

function Login() {
  const navigate = useNavigate();
  const INITIAL_LOGIN = {
    email: '',
    password: '',
  };

  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN);

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const onSubmitLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn(loginInput);
      UserToken.set(response.data.accessToken);
      navigate(ROUTE.MAIN);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Img src={logo} alt="fint logo" />
      <Form onSubmit={onSubmitLoginHandler}>
        <h1>LOGIN</h1>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={onChangeInputHandler}
          value={loginInput.email}
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChangeInputHandler}
          required
        />
        <button type="submit">로그인</button>
      </Form>
    </>
  );
}

export default Login;

const Img = styled.img`
  margin: 0 auto;
  height: 10rem;
  object-fit: cover;
`;

const Form = styled.form`
  & > h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  & > input {
    margin-bottom: 1.5rem;
    padding: 7px;
  }
  & > button {
    background: ${({ theme }) => theme.palette.MAIN_COLOR};
    height: 50px;
    color: ${({ theme }) => theme.palette.WHITE};
  }
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
`;
