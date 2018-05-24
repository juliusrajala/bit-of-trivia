import styled, { keyframes } from 'styled-components';

export const Title = styled.h1`
  padding: 10px;
  font-weight: 700;
  font-size: 1.5em;
  color: #2f2f2f;
`;

export const Link = styled.a`
  padding: 10px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
`;

export const CardTitle = Title.extend`
  color: #2f2f2f;
`;

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  font-family: Montserrat, sans-serif;
`;

export const Navi = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const BreadText = styled.p`
  padding: 10px;
  line-height: 1.2;
`;

const fadeIn = keyframes`
  0% {
    box-shadow: none;
    opacity: 0;
    background-color: transparent;
  }
  30% {
    background-color: transparent;
  }
  60% {
    opacity: 1;
    background-color: #fff;
    box-shadow: none;
  }
  100% {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`;

export const Card = styled.div`
  max-width: 100%;
  width: 540px;
  padding: 20px;
  font-size: 1.1em;
  background-color: #fff;
  margin: 20px;
  color: #222;
  display: flex;
  flex-direction: column;
  font-family: Merriweather, serif;
  border-radius: 1px;
  animation: ${fadeIn} 1s ease-in-out;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;