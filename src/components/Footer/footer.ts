import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-weight: normal;
    font-size: 16px;
    color: #f8f8f8;
  }

  a {
    margin-left: 8px;
    font-weight: bold;
    color: #DBF227;
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
  }
`

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid rgba(219, 242, 39, 0.3);
  margin-bottom: 48px;
`
