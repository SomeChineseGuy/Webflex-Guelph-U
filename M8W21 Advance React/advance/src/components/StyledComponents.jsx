import React, { useContext } from "react";
import styled from 'styled-components'
import Footer from "../styleComponents/Footer";
import NameContext from "./NameContext";
import CounterContext from "./context/CounterContext";

const Header = styled.h1`
  color: red;
  font-size: 30px;
`

const StyledComponents = (props) => {
  // const Footer = styled.h2`
  //   font-size: 40px;
  //   color: ${props.color === 'blue' ? 'blue' : 'green'}
  // `

  const values = useContext(NameContext);
  const counterValues = useContext(CounterContext);
  return (
    <div>
      <h1>Styled</h1>
      
      <Header>{values.name}</Header>
      <Footer> {counterValues.username}</Footer>
    </div>
  )
};

export default StyledComponents;
