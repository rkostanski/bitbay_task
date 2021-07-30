import React from "react";
import { Spin } from "antd";
import S from "./spinner.styles";

export const Spinner = () => (
  <S.Spinner size="large">
    <Spin size="large" />
  </S.Spinner>
);
