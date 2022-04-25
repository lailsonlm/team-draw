import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  height: 100%;
  min-height: 100vh;

  img {
    width: 100%;
    max-width: 500px;
    margin: 20px 0;

    @media(max-width: 480px) {
      width: 80%;
    }
  }
`

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 48px;
  font-weight: bold;
  color: #DBF227;

  @media(max-width: 480px) {
    font-size: 40px;
  }
`

export const DrawTeams = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: #9FC131;
  border-radius: 16px;
  width: 100%;
`

export const FormList = styled.form`
  width: 100%;
`

export const TextAreaList = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 20px;
  font-size: 16px;
  border-radius: 16px;
  background-color: #f8f8f8;
  resize: none;
  box-shadow: 0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -4px rgb(0, 0, 0, 0.1);
  :focus {
    outline: 3px solid #9FC131;
  }
`

export const ParamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;

  button {
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    background: transparent;
    color: #f8f8f8;
    border: 1px solid #DBF227;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    :hover {
      background: #DBF227;
      color: #042940;
    }
  }
`

export const ParamsNumberPlayers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  select {
    padding: 12px;
    font-size: 16px;
    border-radius: 8px;
    background-color: transparent;
    color: #f8f8f8;
    border: 1px solid #DBF227;
    cursor: pointer;
    resize: none;
    :focus {
      outline: 1px solid #DBF227;
      background-color: #042940;
      color: #DBF227;
    }
  }

  label {
    margin-right: 16px;
    font-weight: bold;

    @media(max-width: 480px) {
      margin-right: 8px;
    }
  }
`

export const ListResult = styled.ul`
  margin: 20px 0;
  list-style: none;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  padding: 16px;

  @media(max-width: 480px) {
    font-size: 16px;
  }
`

export const ListItemsResult = styled.li`
  margin-bottom: 16px;
  border-radius: 16px;
  width: 100%;
  padding: 32px;
  background: #9FC131;
  overflow-wrap: break-word;
  box-shadow: 0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -4px rgb(0, 0, 0, 0.1);

  @media(max-width: 480px) {
    padding: 24px;
  }
`


// colors
// #042940
// #005C53
// #9FC131
// #DBF227
// #D6D58E