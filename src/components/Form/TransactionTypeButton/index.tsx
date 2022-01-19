import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import * as S from './styles';

export type TransactionTypeButtonType = 'income' | 'outcome';

const icons = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
};

interface TransactionTypeButtonProps extends RectButtonProps {
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
    <S.Container isActive={isActive} type={type}>
      <S.ContentContainer {...rest}>
        <S.Icon name={icons[type]} type={type} />
        <S.Title isActive={isActive}>{title}</S.Title>
      </S.ContentContainer>
    </S.Container>
  );
};
