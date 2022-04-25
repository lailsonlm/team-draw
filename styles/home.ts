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
`

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 48px;
  font-weight: bold;
  color: #DBF227;
`

export const DrawTeams = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  /* background: #9FC131; */
  /* border: 1px solid #9FC131; */
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
`

export const DrawButton = styled.button`
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
`

export const InputNumberPlayers = styled.input`
  width: 100px;
  /* height: 150px; */
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 12px;
  background-color: #f8f8f8;
  resize: none;
  :focus {
    outline: 3px solid #9FC131;
  }
`

export const ListResult = styled.ul`
  margin: 20px 0;
  list-style: none;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  padding: 16px;
`

export const ListItemsResult = styled.li`
  margin-bottom: 16px;
  border-radius: 16px;
  width: 100%;
  padding: 32px;
  background: #9FC131;
  overflow-wrap: break-word;
`


// colors
// #042940
// #005C53
// #9FC131
// #DBF227
// #D6D58E