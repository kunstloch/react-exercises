import React, { useState } from 'react';
import styled from 'styled-components';

const Square = styled.button`
  color: #424242;
  background: #26a69a;
  border: 4px solid #00897b;
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
