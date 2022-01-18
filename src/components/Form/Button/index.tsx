import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};
