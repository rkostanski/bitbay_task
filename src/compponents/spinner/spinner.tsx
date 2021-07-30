import React from "react";
import { Spin } from "antd";
import S from "./spinner.styles";

export const Spinner = ({ fullSize }: { fullSize: boolean }) => (
  <S.Spinner size="large" fullSize={fullSize}>
    <Spin size="large" />
  </S.Spinner>
);
