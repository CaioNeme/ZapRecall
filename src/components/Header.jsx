import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
  const SC_Header = styled.header`
    width: 203px;
    height: 44px;

    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;

    color: #FFFFFF;

    display:flex;
    justify-content:center;
    align-items:center;

    margin:40px auto 40px auto;

    img{
      width: 52px;
      height: 60px;
    }
  `
  return (
    <SC_Header>
      <img src={logo} alt="ZapRecall" />
      <h1>ZapRecall</h1>
    </SC_Header>
  )

}