import styled from "styled-components";

const SC_Footer = styled.div`
  width: 100%;
  height: 70px;

  position:fixed;
  bottom: 0px;
  left: 0px;

  color: #333333;
  background: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  display:flex;
  justify-content:center;
  align-items:center;

  margin:50px auto 0px auto;
`
const SC_Shadow = styled.div`
    height:90px;
  `

export default function Footer(props) {

  return (
    <>
      <SC_Shadow />
      <SC_Footer data-test="footer">
        {props.amount}/8 concluídos
      </SC_Footer>
    </>
  )
}