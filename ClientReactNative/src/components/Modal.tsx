import React, { useState } from 'react';
import { Button, Input, Sheet, Text, XStack, YStack } from 'tamagui';
import { FormSelect } from './formSelect';
import { useTranslation } from 'react-i18next';
import { postAxios } from '../utils/axios';

export const ModalTodo = ({ todos = () => {} }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const [todo, setTodo] = useState(null);
  const { t, i18n } = useTranslation();

  const createTodo = async () => {
    try {
      await postAxios(todo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button bg={'$green10'} onPress={() => setOpen(!open)}>
        {t('crear')}
      </Button>
      <Sheet
        forceRemoveScrollEnabled={open}
        onOpenChange={setOpen}
        zIndex={100_000}
        position={position}
        snapPointsMode='fit'
        open={open}
        animation={'medium'}
        onPositionChange={setPosition}
        modal={open}>
        <Sheet.Overlay animation={'lazy'} enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />

        <Sheet.Handle />

        <Sheet.Frame padding='$4' space='$3'>
          <Text ta='left' color={'$color'} fontSize={20}>
            {t('crear')}
          </Text>

          <YStack alignItems='center'>
            <YStack space='$2' justifyContent='center'>
              <Text>{t('title')}</Text>
              <Input
                w={'$20'}
                onChangeText={(text) => {
                  setTodo({ ...todo, title: text });
                }}
                placeholder={t('place')}
              />

              <FormSelect
                onValueChange={(text) => {
                  setTodo({ ...todo, category: text });
                }}
                label={t('item')}
                placeholder={t('item')}
              />
            </YStack>
            <XStack space='$4' mt='$2'>
              <Button
                onPress={() => {
                  createTodo();
                  todos();
                  setOpen(false);
                }}
                bg={'$green10'}>
                {t('botoncrear')}
              </Button>
              <Button onPress={() => setOpen(false)} bg={'$red10'}>
                {t('botoncancelar')}
              </Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  );
};
