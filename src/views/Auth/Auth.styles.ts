import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;

  background-color: #222;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AuthTitle = styled.h1`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  font-weight: lighter;
  color: #eee;
`

export const Form = styled.form<{ isUserNew: boolean }>`
  width: 400px;
  height: ${(props) => (props.isUserNew ? '400px' : '300px')};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.ubuntu};

  input {
    width: 300px;
    height: 50px;

    background-color: #fff;
    border: none;
    border-radius: 5px;

    font-size: 20px;
    text-align: center;
  }

  span {
    color: #eee;

    cursor: pointer;

    &:hover {
      color: coral;
      text-decoration: underline;
    }
  }

  button {
    width: 250px;
    height: 60px;

    background-color: #0b525b;
    border: none;
    border-radius: 5px;

    font-size: 24px;
    color: #eee;

    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      background-color: #006466;

      color: #fff;
    }
  }
`
