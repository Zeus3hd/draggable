import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  transition: 0.4s;
  transform: translateX(${({ posX }) => posX + "px"});
  white-space: nowrap;
`;
const MenuItem = styled.div`
  text-align: center;
  width: 120px;
  display: inline-block;
`;
const ArrowLeft = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;
const ArrowRight = styled.button`
  position: absolute;
  right: 0;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
`;

export { Wrapper, Container, MenuItem, ArrowLeft, ArrowRight };
