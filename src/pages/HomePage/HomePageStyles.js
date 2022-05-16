import React from "react";
import styled from "@emotion/styled";
import homeCover from "../../IMG/homeCover.jpg";

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: calc(24px + 16 * (100vw / 1880));
  background: url(${homeCover}) no-repeat center center fixed;
  background-size: cover;
  color: #ffffff;
`;
