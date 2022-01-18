import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface CategorySelectButtonProps extends TouchableOpacityProps {
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
