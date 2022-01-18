import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { TextInputProps } from 'react-native';
import { Input } from '../Input';

import * as S from './styles';

type InputFormProps = {
  control: Control<any>;
  name: string;
  error?: string;
} & TextInputProps;

export const InputForm = ({
  control,
  name,
  error,
  ...rest
}: InputFormProps) => {
  return (
    <S.Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Input value={value} onChangeText={onChange} {...rest} />
        )}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};
