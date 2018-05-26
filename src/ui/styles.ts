import styled, { keyframes } from 'styled-components';

export const Title = styled.h1`
  padding: 10px;
  font-weight: 700;
  font-size: 1.5em;
  color: #2f2f2f;
  font-family: Montserrat, sans-serif;
`;

export const Link = styled.a`
  padding: 10px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  transition: all .2s ease-in-out;
  :hover {
    color: #2f2f2f;
  }
`;

export const CardTitle = Title.extend`
  color: #fff;
`;

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  }
  30% {
  }
  60% {
    opacity: 1;
    background-color: #fff;
    box-shadow: none;
  }
  100% {
  }
`;

export const Card = styled.div`
  max-width: 100%;
  line-height: 1.2;
  width: 540px;
  padding: 20px;
  font-size: 1.4em;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
`;

export const AlignRight = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: justify;
  justify-content: flex-end;
`;

export const Button = styled.button`
  border: 2px solid #fff;
  border-radius: 2px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  padding: 20px;
  font-size: 1.5rem;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
`;