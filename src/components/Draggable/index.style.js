import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  transition: 0.4s;
  transform: translateX(${({ posX }) => posX + "px"});
`;
const MenuItem = styled.div`
  text-align: center;
  flex: 1;
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
