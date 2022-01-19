import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface CategoryTextProps {
  hasText: boolean;
}

export const Container = styled(RectButton).attrs({
  rippleColor: 'rgba(0, 0, 0, 0.1)',
})`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 16px;
    background-color: ${theme.colors.shape};
    color: ${theme.colors.text};
    border-radius: 5px;
  `}
`;

export const CategoryText = styled.Text<CategoryTextProps>`
  ${({ theme, hasText }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${hasText ? theme.colors.title : theme.colors.text};
  `}
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
