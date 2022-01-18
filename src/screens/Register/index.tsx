import React, { useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from '../../shared/validators';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { IRegisterFormData } from '../../interfaces/forms';
import * as S from './styles';

export const Register = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IRegisterFormData>({
    resolver: yupResolver(registerFormSchema),
  });
  const [category, setCategory] = useState({
    key: '',
    name: '',
  });
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleRegister: SubmitHandler<IRegisterFormData> = (form) => {
    if (!form.transactionType) {
      return Alert.alert('', 'Selecione o tipo de transação');
    }
    if (!category.key) {
      return Alert.alert('', 'Selecione uma categoria');
    }
    const data = {
      ...form,
      category: category.key,
    };
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>
        <S.FormContainer>
          <S.FieldsContainer>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors?.name?.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors?.amount?.message}
            />
            <Controller
              name="transactionType"
              control={control}
              render={({ field: { value, onChange } }) => (
                <S.TransactionsTypesContainer>
                  <TransactionTypeButton
                    title="Entrada"
                    type="income"
                    isActive={value === 'income'}
                    onPress={() => onChange('income')}
                  />
                  <TransactionTypeButton
                    title="Saída"
                    type="outcome"
                    isActive={value === 'outcome'}
                    onPress={() => onChange('outcome')}
                  />
                </S.TransactionsTypesContainer>
              )}
            />

            <CategorySelectButton
              placeholder={category.name}
              onPress={() => setCategoryModalOpen(true)}
            />
          </S.FieldsContainer>
          <Button onPress={handleSubmit(handleRegister)}>Enviar</Button>
        </S.FormContainer>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={() => setCategoryModalOpen(false)}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
