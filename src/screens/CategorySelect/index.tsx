import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Form/Button';
import { categories } from '../../utils/categories';
import * as S from './styles';

interface Category {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: CategorySelectProps) => {
  function handleCategorySelect(item: Category) {
    setCategory({
      key: item.key,
      name: item.name,
    });
  }
  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.CategoryName>{item.name}</S.CategoryName>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
      <S.ContentContainer>
        <Button onPress={closeSelectCategory}>Selecionar</Button>
      </S.ContentContainer>
    </S.Container>
  );
};
