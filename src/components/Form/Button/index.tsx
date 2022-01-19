import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import * as S from './styles';

interface ButtonProps extends RectButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

export const Button = ({ children, onPress, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest} onPress={onPress}>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};
