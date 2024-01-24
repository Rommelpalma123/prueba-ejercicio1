import { Todo } from '@/pages/Todo';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

export const TodoRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
