import React from "react";
import styled from "styled-components";

import img0 from "../assets/seta_play.png";
import img1 from "../assets/seta_virar.png";
import erro from "../assets/icone_erro.png"
import almost from "../assets/icone_quase.png"
import right from "../assets/icone_certo.png"

export default function Cards(props) {

  const SC_Ul = styled.ul`
  height:100%;
  background-color: #fb6b6b;
`;
  const SC_Front = styled.li`

  width: 300px;
  height: 65px;

  color: #333333;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  justify-content:space-around;
  align-items:center;

  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  margin-left:auto;
  margin-right:auto;
  margin-top:12px;
  margin-bottom:12;
  img{
    width: 23px;
    height: 23px;

    cursor:pointer;
  }
`;
  const SC_BackCardQuestion = styled.li`

  width: 300px;
  height: 130px;

  color: #333333;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  margin-left:auto;
  margin-right:auto;
  margin-top:12px;
  margin-bottom:12;

  padding-top:15px;
  padding-left:15px;

  position: relative;
  img{
    width: 30px;
    height: 20px;
    
    position: absolute;
    top:110px;
    left:265px;

    cursor:pointer;
  }
`;
  const SC_BackCardAnswer = styled.li`
  width: 300px;
  min-height: 131px;
  max-height: 200px;

  color: #333333;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  margin-left:auto;
  margin-right:auto;
  margin-top:12px;
  margin-bottom:12;

  padding-top:15px;
  padding-left:15px;

  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  button{

    width: 85px;
    height: 37px;

    margin-left:7px;
    margin-top:20px;
    margin-bottom:10px;

    border: solid 0px;
    border-radius: 5px;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

    display:flex;
    justify-content:center;
  }
`;
  const SC_div = styled.div`
  display: flex;
  justify-content:space-around;
  
`
  const SC_ButtonRed = styled.button`
  background-color: #FF3030;
`
  const SC_ButtonOrange = styled.button`
  background-color: #ff922e;
`
  const SC_ButtonGreen = styled.button`
  background-color: #2fbe34;
`;
  const SC_RedAnswer = styled.li`
  width: 300px;
  height: 65px;

  color: #FF3030;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  justify-content:space-around;
  align-items:center;

  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;

  margin-left:auto;
  margin-right:auto;
  margin-top:12px;
  margin-bottom:12;
  img{
    width: 23px;
    height: 23px;
  }
`;
  const SC_OrangeAnswer = styled.li`
  width: 300px;
  height: 65px;

  color:#FF922E;

  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  justify-content:space-around;
  align-items:center;

  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;

  margin-left:auto;
  margin-right:auto;
  margin-top:12px;
  margin-bottom:12;
  img{
    width: 23px;
    height: 23px;
  }
`;
  const SC_GreenAnswer = styled.li`
  width: 300px;
  height: 65px;

  color: #2fbe34;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  justify-content:space-around;
  align-items:center;

  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;

  margin-left:auto;
  margin-right:auto;
  margin-top:12px;
  margin-bottom:12;
  img{
    width: 23px;
    height: 23px;
  }
`;

  let [estado, setEstado] = React.useState(0);
  function redAnswer() {
    setEstado(3);
    setAmount(amount + 1);
  }
  function orangeAnswer() {
    setEstado(4);
    setAmount(amount + 1);
  }
  function greenAnswer() {
    setEstado(5);
    setAmount(amount + 1);
  }



  const { amount, setAmount } = props

  return (
    <ul data-test="flashcard">
      {estado === 0 && (
        <SC_Front >
          <p data-test="flashcard-text">Pergunta {props.number}</p>
          <img data-test="play-btn" src={img0} alt="setinha" onClick={() => setEstado(1)} />
        </SC_Front>
      )}
      {estado === 1 && (
        <SC_BackCardQuestion>
          <p data-test="flashcard-text">{props.question}</p>
          <img data-test="turn-btn" src={img1} alt="Botao da giradinha" onClick={() => setEstado(2)} />
        </SC_BackCardQuestion>
      )}
      {estado === 2 && (
        <SC_BackCardAnswer>
          <p data-test="flashcard-text">{props.answer}</p>
          <SC_div>
            <SC_ButtonRed data-test="no-btn" onClick={redAnswer}>Não lembrei</SC_ButtonRed>
            <SC_ButtonOrange data-test="partial-btn" onClick={orangeAnswer}>Quase não lembrei</SC_ButtonOrange>
            <SC_ButtonGreen data-test="zap-btn" onClick={greenAnswer}>Zap!</SC_ButtonGreen>
          </SC_div>
        </SC_BackCardAnswer>
      )}
      {estado === 3 && (
        <SC_RedAnswer>
          <p data-test="flashcard-text">Pergunta {props.number}</p>
          <img data-test="no-icon" src={erro} alt="error-icon" />
        </SC_RedAnswer>
      )}
      {estado === 4 && (
        <SC_OrangeAnswer>
          <p data-test="flashcard-text">Pergunta {props.number}</p>
          <img data-test="partial-icon" src={almost} alt="almost-icon" />
        </SC_OrangeAnswer>
      )}
      {estado === 5 && (
        <SC_GreenAnswer>
          <p data-test="flashcard-text">Pergunta {props.number}</p>
          <img data-test="zap-icon" src={right} alt="right-icon" />
        </SC_GreenAnswer>
      )}

    </ul>
  )
}
