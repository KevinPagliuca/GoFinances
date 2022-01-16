import React from 'react';
import * as S from './styles';

export type TransactionCardType = 'income' | 'outcome';

export type Category = {
  name: string;
  icon: string;
};

export interface TransactionCardProps {
  type: TransactionCardType;
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export const TransactionCard = ({ data }: Props) => {
  return (
    <S.Container>
      <S.Title>{data.title}</S.Title>
      <S.Amount type={data.type}>
        {data.type === 'outcome' && '- '}
        {data.amount}
      </S.Amount>
      <S.ContentContainer>
        <S.Category>
          <S.CategoryIcon name={data.category.icon} />
          <S.CategoryTitle>{data.category.name}</S.CategoryTitle>
        </S.Category>
        <S.DateText>{data.date}</S.DateText>
      </S.ContentContainer>
    </S.Container>
  );
};
