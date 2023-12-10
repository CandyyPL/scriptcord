import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;

  background-color: ${({ theme }) => theme.colors[2]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.ubuntu};
    color: #eee;

    margin-bottom: 20px;
  }

  button {
    width: 200px;
    height: 60px;

    background-color: #000;
    border: none;

    font-size: 24px;
    color: #fff;

    transition: all 0.2s;

    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`
