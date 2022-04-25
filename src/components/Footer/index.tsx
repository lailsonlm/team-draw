import { FooterContainer, FooterDivider } from "./footer";

export function Footer() {
  return (
    <FooterContainer>
      <FooterDivider />
        <div>
          <h2>Desenvolvido por</h2>
          <a href='https://portfolio-lailsonlm.vercel.app/' target='_blank' rel="noreferrer">Lailson Sobral</a>
        </div>
    </FooterContainer>
  )
}