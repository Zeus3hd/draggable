import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  Container,
  MenuItem,
  ArrowLeft,
  ArrowRight,
} from "./index.style";
const Draggable = ({ items }) => {
  const [offset, setOffset] = useState(0);
  const onLeftClick = () => {
    setOffset(offset - 120);
  };
  const onRightClick = () => {
    setOffset(offset + 120);
  };
  useEffect(() => {}, []);
  const container = useRef(null);
  return (
    <Wrapper>
      <ArrowLeft onClick={onLeftClick}>left</ArrowLeft>
      <Container ref={container} posX={offset}>
        {items.map((item, i) => {
          return <MenuItem key={i}>{item}</MenuItem>;
        })}
      </Container>
      <ArrowRight onClick={onRightClick}>right</ArrowRight>
    </Wrapper>
  );
};

export default Draggable;
