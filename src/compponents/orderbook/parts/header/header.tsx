import React from "react";
import S from "./header.styles";

export const Header = ({ values }: { values: string[] }) => (
  <S.Header>
    {values.map((value) => (
      <span>{value}</span>
    ))}
  </S.Header>
);
