import React from 'react';
import { TamaguiProvider, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v2';
import { Todo } from './src/screens/Todo';

const tamaguiConfig = createTamagui(config);
type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Todo />
    </TamaguiProvider>
  );
};
export default App;
