import React from 'react';
import * as S from './styles';

type CardType = 'income' | 'outcome' | 'total';

interface HighlightCardProps {
  type: CardType;
}
export const HighlightCard = ({ type = 'income' }: HighlightCardProps) => {
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
    <S.Container>
      <S.Header>
        <S.Title>{generateTitle(type)}</S.Title>
        <S.Icon name="arrow-up-circle" />
      </S.Header>

      <S.ContentContainer>
        <S.Amount>R$ 17.400,00</S.Amount>
        <S.LastTransaction>Última entrada dia 13 de abril</S.LastTransaction>
      </S.ContentContainer>
    </S.Container>
  );
};
