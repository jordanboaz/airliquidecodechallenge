import styled from 'styled-components';
import {TouchableOpacity, Text, View} from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
`;

export const CheckFull = styled(View)<{disabled?: boolean}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -37%;
  margin-left: -37%;
  background: ${({disabled}) => (disabled ? '#5cb85c' : '#a1a1a1')};
`;

export const CheckEmpty = styled(View)<{disabled?: boolean}>`
  width: 24px;
  height: 24px;
  background: transparent;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({disabled}) => (disabled ? '#5cb85c' : 'black')};
  margin-right: 8px;
`;

export const Title = styled(Text)<{disabled?: boolean}>`
  ${({disabled}) => disabled && 'color: #5cb85c'}
`;
