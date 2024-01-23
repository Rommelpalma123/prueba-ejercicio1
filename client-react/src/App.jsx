import { ServerProvider } from './context/ServerContext';
import { TodoRoutes } from './routes/TodoRoutes';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/translation/i18n';

export const App = () => (
  <I18nextProvider i18n={i18n}>
    <ServerProvider>
      <TodoRoutes />;
    </ServerProvider>
  </I18nextProvider>
);

export default App;
