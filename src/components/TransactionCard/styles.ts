import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TransactionCardType } from '.';

interface TransactionProps {
  type: TransactionCardType;
}

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.shape};
    border-radius: 5px;

    margin-bottom: 16px;
    padding: 16px 24px;
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const Amount = styled.Text<TransactionProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(30)}px;
    font-family: ${theme.fonts.regular};
    color: ${type === 'income' ? theme.colors.success : theme.colors.attention};
  `}
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  margin-top: 20px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 12px;
`;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DateText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
