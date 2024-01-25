import { ServerProvider } from './context/ServerContext';
import { TodoRoutes } from './routes/TodoRoutes';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/translation/i18n';
import { LoaderProvider } from './context/LoaderContext';

export const App = () => (
  <LoaderProvider>
    <I18nextProvider i18n={i18n}>
      <ServerProvider>
        <TodoRoutes />;
      </ServerProvider>
    </I18nextProvider>
  </LoaderProvider>
);

export default App;
