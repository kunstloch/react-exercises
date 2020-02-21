import React, { useState } from 'react';
import styled from 'styled-components';

const Square = styled.button`
  color: #424242;
  background: #daf7a6;
  border: 4px solid #ffbd33;
  float: left;
  font-size: 96px;
  font-weight: bold;
  line-height: 136px;
  height: 136px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 136px;
`;

export default function Squares({ value, onClick }) {
  return (
    <Square className="square" onClick={onClick}>
      {value}
    </Square>
  );
}
