import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

import { HighlightCard } from '../../components/HighlightCard';

import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';
import * as S from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighLightProps {
  amount: string;
  lastTransaction: string;
}

interface HighLightData {
  entries: HighLightProps;
  expensives: HighLightProps;
  total: HighLightProps;
}

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highLightData, setHighLightData] = useState<HighLightData>(
    {} as HighLightData
  );

  const getLastTransactionsDate = (
    collection: DataListProps[],
    type: 'income' | 'outcome'
  ) => {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter(item => item.type === type)
          .map(item => new Date(item.date).getTime())
      )
    );
    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      'pt-BR',
      {
        month: 'long',
      }
    )}`;
  };

  const loadTransactions = async () => {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactionsLoaded = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactionsLoaded.map(
      (item: DataListProps) => {
        if (item.type === 'income') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));
        return {
          id: item.id,
          title: item.title,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    const lastTransactionEntries = getLastTransactionsDate(
      transactionsLoaded,
      'income'
    );
    const lastTransactionExpensives = getLastTransactionsDate(
      transactionsLoaded,
      'outcome'
    );

    const totalInterval = `01 a ${lastTransactionExpensives}`;

    const total = entriesTotal - expensiveTotal;

    setHighLightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última entrada dia ${lastTransactionEntries}`,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: `Última saída dia ${lastTransactionExpensives}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
        lastTransaction: totalInterval,
      },
    });
    setTransactions(transactionsFormatted);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </S.LoadContainer>
      ) : (
        <>
          <S.Header>
            <S.UserWrapper>
              <S.UserInfo>
                <S.Photo
                  source={{ uri: 'https://github.com/kevinpagliuca.png' }}
                />
                <S.User>
                  <S.UserGreeting>Olá, </S.UserGreeting>
                  <S.UserName>Kevin Pagliuca</S.UserName>
                </S.User>
              </S.UserInfo>
              <S.LogoutButton onPress={() => {}}>
                <S.Icon name="power" />
              </S.LogoutButton>
            </S.UserWrapper>
          </S.Header>
          <S.HighlightCardsContainer>
            <HighlightCard
              type="income"
              amount={highLightData.entries.amount}
              lastTransaction={highLightData.entries.lastTransaction}
            />
            <HighlightCard
              type="outcome"
              amount={highLightData.expensives.amount}
              lastTransaction={highLightData.expensives.lastTransaction}
            />
            <HighlightCard
              type="total"
              amount={highLightData.total.amount}
              lastTransaction={highLightData.total.lastTransaction}
            />
          </S.HighlightCardsContainer>

          <S.TransactionsContainer>
            <S.TransactionsTitle>Listagem</S.TransactionsTitle>
            <S.TransactionsList
              data={transactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </S.TransactionsContainer>
        </>
      )}
    </S.Container>
  );
};
