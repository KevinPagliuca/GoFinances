import React from 'react';
import * as S from './styles';

export type CardType = 'income' | 'outcome' | 'total';

interface HighlightCardProps {
  amount: string;
  lastTransaction: string;
  type: CardType;
}

const icon = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
  total: 'dollar-sign',
};

export const HighlightCard = ({
  type = 'income',
  amount,
  lastTransaction,
}: HighlightCardProps) => {
  const generateTitle = (type: CardType) => {
    switch (type) {
      case 'income':
        return 'Entradas';
      case 'outcome':
        return 'Saídas';
      case 'total':
        return 'Total';
      default:
        return '';
    }
  };

  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{generateTitle(type)}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>

      <S.ContentContainer>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.ContentContainer>
    </S.Container>
  );
};
