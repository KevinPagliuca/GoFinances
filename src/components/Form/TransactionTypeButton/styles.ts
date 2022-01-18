import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TransactionTypeButtonType } from '.';

type TransactionTypeProps = {
  type: TransactionTypeButtonType;
};

interface ContainerProps {
  isActive: boolean;
  type: TransactionTypeButtonType;
}

interface TextProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, isActive, type }) => css`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1.5px solid ${theme.colors.text};
    border-radius: 5px;
    padding: 16px;

    ${isActive &&
    css`
      background-color: ${type === 'income'
        ? theme.colors.success_light
        : theme.colors.attention_light};
      border-width: 0;
    `}
  `}
`;

export const Icon = styled(Feather)<TransactionTypeProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ type, theme }) => css`
    ${type === 'income' ? theme.colors.success : theme.colors.attention}
  `};
`;

export const Title = styled.Text<TextProps>`
  ${({ theme, isActive }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
    color: ${isActive ? theme.colors.title : theme.colors.text};
  `}
`;
