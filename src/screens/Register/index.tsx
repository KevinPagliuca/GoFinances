import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import {
  TransactionTypeButton,
  TransactionTypeButtonType as TransactionTypes,
} from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import * as S from './styles';

export const Register = () => {
  const [category, setCategory] = useState({
    key: '',
    name: '',
  });
  const [transactionType, setTransactionType] = useState<TransactionTypes>();
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleTransactionType = (type: TransactionTypes) => {
    setTransactionType(type);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>
      <S.FormContainer>
        <S.FieldsContainer>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <S.TransactionsTypesContainer>
            <TransactionTypeButton
              title="Entrada"
              type="income"
              isActive={transactionType === 'income'}
              onPress={() => handleTransactionType('income')}
            />
            <TransactionTypeButton
              title="Saída"
              type="outcome"
              isActive={transactionType === 'outcome'}
              onPress={() => handleTransactionType('outcome')}
            />
          </S.TransactionsTypesContainer>
          <CategorySelectButton
            placeholder={category.name}
            onPress={() => setCategoryModalOpen(true)}
          />
        </S.FieldsContainer>
        <Button>Enviar</Button>
      </S.FormContainer>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={() => setCategoryModalOpen(false)}
        />
      </Modal>
    </S.Container>
  );
};
