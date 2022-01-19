import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  rippleColor: 'rgba(0, 0, 0, 0.1)',
})`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondary};
    padding: 16px;
    border-radius: 5px;
    align-items: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;

    color: ${theme.colors.shape};
  `}
`;
