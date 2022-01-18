import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.attention};
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
    margin: 8px 0;
  `}
`;
