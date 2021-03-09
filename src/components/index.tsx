import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 0px auto;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Dog = styled.img`
  height: 100%;
`;

export const Button = styled.button`
  margin: 10px 0px;
  border: none;
  padding: 20px;
  font-size: 20px;
  background: blue;
  color: white;
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  position: fixed;
  top: 100px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface ImageContainerProps {
  opacity: number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  height: 300px;
  opacity: ${(props) => props.opacity};
`;
