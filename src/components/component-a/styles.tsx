import styled from "styled-components";

export const Card = styled.div<{ color?: string }>`
  display: flex;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #ccc;
  padding: 40px;
  background-color: ${(props) => (props.color ? `#${props.color}` : "green")};
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
