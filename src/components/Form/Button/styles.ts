import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activityOpacity: 0.7,
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
