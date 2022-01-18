import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type TransactionTypeButtonType = 'income' | 'outcome';

const icons = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
};

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  type: TransactionTypeButtonType;
  title: string;
  isActive: boolean;
}

export const TransactionTypeButton = ({
  type,
  title,
  isActive,
  ...rest
}: TransactionTypeButtonProps) => {
  return (
    <S.Container {...rest} isActive={isActive} type={type}>
      <S.Icon name={icons[type]} type={type} />
      <S.Title isActive={isActive}>{title}</S.Title>
    </S.Container>
  );
};
