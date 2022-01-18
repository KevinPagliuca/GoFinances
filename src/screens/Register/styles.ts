import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;

    padding-bottom: 20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.shape};
  `}
`;

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const FieldsContainer = styled.View``;

export const TransactionsTypesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0 16px;
`;
