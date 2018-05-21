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
  padding: 20px;
  font-size: 1.1em;
  background-color: #fff;
  margin: 20px;
  color: #222;
  font-family: Merriweather, serif;
  border-radius: 2px;
  animation: ${fadeIn} 1s ease-in-out;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;