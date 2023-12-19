import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;

  background-color: #333;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Sidebar = styled.section`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-right: 3px solid #111;

  padding: 20px 20px 20px 0;

  .content-select {
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      width: 120px;
      height: 50px;

      background-color: #222;
      border: none;
      border-radius: 5px;

      font-size: 20px;
      font-family: 'Nunito';
      color: #eee;

      cursor: pointer;

      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: #eee;
        color: #222;
      }

      &.active {
        border: 2px solid #eee;
      }
    }
  }

  .content {
    width: 100%;
    height: calc(100% - 210px);

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .panel {
    width: 100%;
    height: 150px;

    background-color: #222;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    font-size: 18px;
    font-family: 'Ubuntu';
    color: #eee;
  }
`

export const Main = styled.section`
  width: 80%;
  height: 100%;

  padding: 20px 0 20px 20px;
`
