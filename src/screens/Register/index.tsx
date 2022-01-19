import React, { useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from '../../shared/validators';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';

import { IRegisterFormData } from '../../interfaces/forms';
import * as S from './styles';

export const Register = () => {
  const { navigate } = useNavigation();
  const dataKey = '@gofinances:transactions';
  const {
    control,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm<IRegisterFormData>({
    resolver: yupResolver(registerFormSchema),
  });
  const [category, setCategory] = useState({ key: '', name: '' });
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleRegister: SubmitHandler<IRegisterFormData> = async form => {
    if (!form.transactionType) {
      return Alert.alert('', 'Selecione o tipo de transação');
    }
    if (!category.key) {
      return Alert.alert('', 'Selecione uma categoria');
    }
    const newTransaction = {
      id: String(uuid.v4()),
      title: form.name,
      amount: form.amount,
      type: form.transactionType,
      category: category.key,
      date: new Date('29/01/22'),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newTransaction];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      reset();
      setCategory({
        key: '',
        name: '',
      });
      navigate('Listagem' as never);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar essa transação');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
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

        <Modal visible={categoryModalOpen} animationType="slide">
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
