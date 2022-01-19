import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import * as S from './styles';

interface CategorySelectButtonProps extends RectButtonProps {
  placeholder: string;
}

export const CategorySelectButton = ({
  placeholder,
  ...rest
}: CategorySelectButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.CategoryText hasText={!!placeholder}>
        {placeholder || 'Categoria'}
      </S.CategoryText>
      <S.Icon name="chevron-down" />
    </S.Container>
  );
};
