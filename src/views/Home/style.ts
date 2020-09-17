import styled from 'styled-components';
import {TouchableOpacity, Text, View} from 'react-native';

export const Container = styled(View)`
  padding: 16px;
  flex: 1;
  justify-content: space-between;
`;
export const Content = styled(View)`
  flex: 1;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background: #23aef2;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
