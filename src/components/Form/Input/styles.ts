import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px;
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
    background-color: ${theme.colors.shape};
    color: ${theme.colors.title};
    border-radius: 5px;
    margin-bottom: 8px;
  `}
`;
