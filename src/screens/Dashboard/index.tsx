import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo source={{ uri: 'https://github.com/kevinpagliuca.png' }} />
            <S.User>
              <S.UserGreeting>Olá, </S.UserGreeting>
              <S.UserName>Kevin Pagliuca</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>
      <S.HighlightCardsContainer>
        <HighlightCard type="income" />
        <HighlightCard type="income" />
        <HighlightCard type="income" />
      </S.HighlightCardsContainer>
    </S.Container>
  );
};
