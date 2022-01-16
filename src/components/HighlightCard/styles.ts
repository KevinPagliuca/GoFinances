import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardType } from '.';

interface TypeProps {
  type: CardType;
}

const iconColor = {
  income: css`
    ${({ theme }) => theme.colors.success}
  `,
  outcome: css`
    ${({ theme }) => theme.colors.attention}
  `,
  total: css`
    ${({ theme }) => theme.colors.shape}
  `,
};

export const Container = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 20px 24px ${RFValue(42)}px;
    margin-right: 16px;
    background-color: ${type !== 'total'
      ? theme.colors.shape
      : theme.colors.secondary};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(35)}px;
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
    color: ${type !== 'total' ? theme.colors.title : theme.colors.shape};
  `}
`;

export const Icon = styled(Feather)<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(40)}px;
    color: ${theme.colors.success};

    ${css`
      color: ${iconColor[type]};
    `}
  `}
`;

export const ContentContainer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(48)}px;
    font-family: ${theme.fonts.medium};
    color: ${type !== 'total' ? theme.colors.title : theme.colors.shape};
  `};
`;

export const LastTransaction = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.regular};
    color: ${type !== 'total' ? theme.colors.text : theme.colors.shape};
  `}
`;
