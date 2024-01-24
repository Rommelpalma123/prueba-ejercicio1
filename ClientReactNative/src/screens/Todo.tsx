import React, { useEffect, useState } from 'react';
import { Button, Card, Text, XStack, YStack, View } from 'tamagui';
import { ModalTodo } from '../components/Modal';
import { deleteAxios, getAxios } from '../utils/axios';
import { FlatList, SafeAreaView } from 'react-native';
import { ModalOptions } from '../components/modalOptions';
import { Trash2 } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { SelectIdioma } from '../components/idiomaOptions/selectIdioma';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const { t, i18n } = useTranslation();

  const getTodos = async () => {
    try {
      const res = await getAxios();
      setTodos(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: any) => {
    try {
      await deleteAxios(id);
    } catch (error) {
      console.log(error);
    } finally {
      await getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  type ItemProps = { title: string; id: string; category: string };

  const Item = ({ title, id, category }: ItemProps) => (
    <YStack justifyContent='center' alignItems='center'>
      <Card elevate bordered p='$3' size={'$3.5'} w={'$20'} mb='$4'>
        <XStack space='$2'>
          <Text>{t('tarea')}</Text>
          <Text>{title}</Text>
        </XStack>
        <XStack space='$2'>
          <Text>{t('categoria')}:</Text>
          <Text>{category}</Text>
        </XStack>
        <XStack jc='flex-end' space='$2' mt='$2'>
          <ModalOptions
            secondButtonAction={async () => {
              await deleteTodo(id);
            }}
            title={t('eliminar')}>
            <Button size={'$3'} icon={<Trash2 />} variant='outlined' bg={'$red8'} />
          </ModalOptions>
        </XStack>
      </Card>
    </YStack>
  );

  return (
    <YStack f={1} bg={'$backgroundFocus'} padding='$3'>
      <XStack space='$2' justifyContent='space-around'>
        <SelectIdioma
          onValueChange={(text) => {
            i18n.changeLanguage(text);
          }}
          placeholder={t('len')}
        />
        <ModalTodo
          todos={async () => {
            await getTodos();
          }}
        />
      </XStack>

      <View mt='$2'>
        <SafeAreaView>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Item title={item.title} id={item._id} category={item.category} />
            )}
          />
        </SafeAreaView>
      </View>
    </YStack>
  );
};
