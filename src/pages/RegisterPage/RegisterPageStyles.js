import styled from "@emotion/styled";
import registerCover from "../../IMG/registerCover.jpg";

export const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: calc(20px + 8 * (100vw / 1880));
  background: url(${registerCover}) no-repeat center center fixed;
  background-size: cover;
  color: #ffffff;
`;
