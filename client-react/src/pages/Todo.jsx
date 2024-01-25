import { useEffect, useState } from 'react';
import { useServer } from '@/context/ServerContext';
import { showBasicAlert } from '@/helpers/sweetAlert';
import { MdDelete } from 'react-icons/md';
import { categoryColors } from '@/helpers/constanst';
import { RiTranslate } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { useLoader } from '@/context/LoaderContext';

export const Todo = () => {
  const server = useServer();
  const [t, i18n] = useTranslation('global');
  const { showLoader, hideLoader } = useLoader();

  const [todo, setTodo] = useState({
    title: '',
    category: '',
  });
  const [todos, setTodos] = useState([]);

  const create = async () => {
    if (validateForm()) {
      showLoader();
      try {
        const data = await server.createTodo(todo);
        showBasicAlert('Nota creada con exito', 'success');
        setTodo({ title: '', category: '' });
      } catch (error) {
        showBasicAlert(
          error?.response?.data?.mensaje ?? 'Ocurrio un problema! Intentelo más tarde',
          'error'
        );
      } finally {
        getListTodo();
        hideLoader();
      }
    }
  };

  const validateForm = () => {
    const icon = 'warning';

    if (todo.title === '') {
      showBasicAlert('La nota no debe estar vacio', icon);
      return false;
    }

    if (todo.category === '') {
      showBasicAlert('Seleccione una categoria', icon);
      return false;
    }

    return true;
  };

  const getListTodo = async () => {
    showLoader();
    try {
      const data = await server.getTodos();
      setTodos(data);
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
  };

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  const deleteTodo = async (idTodo) => {
    showLoader();
    try {
      await server.deleteTodo(idTodo);
      showBasicAlert('Todo eliminado correctamente', 'success');
    } catch (error) {
      console.log(error);
    } finally {
      getListTodo();
      hideLoader();
    }
  };

  useEffect(() => {
    getListTodo();
  }, []);

  return (
    <div className='container-md mt-3'>
      <div className='d-flex gap-2 align-items-center'>
        <div>
          <RiTranslate size={25} color='black' />
        </div>
        <div className=''>
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            className='form-select'
            aria-label='Default select example'>
            <option value=''>{t('lenguage.len')}</option>
            <option value='es'>{t('lenguage.es')}</option>
            <option value='en'>{t('lenguage.en')}</option>
            <option value='pt'>{t('lenguage.pt')}</option>
          </select>
        </div>
      </div>

      <div className='mt-1'>
        <div className='card'>
          <div className='d-flex justify-content-center justify-content-between m-3'>
            <h5>{t('header.todo')}</h5>
            <button
              onClick={() => create()}
              type='button'
              className='btn btn-success'
              data-bs-toggle='modal'>
              {t('buttom.crear')}
            </button>
          </div>
          <div className='m-1 row row-cols-1 row-cols-sm-2'>
            <div className='mb-3 col'>
              <label htmlFor='exampleFormControlTextarea1' className='form-label'>
                {t('label.title')}
              </label>
              <input
                onChange={(text) => {
                  setTodo({ ...todo, title: text.target.value });
                }}
                className='form-control'
                type='text'
                value={todo.title}
                placeholder={t('placeholder.place')}
                aria-label='default input example'
              />
            </div>
            <div className='mb-3 col'>
              <label htmlFor='exampleFormControlTextarea1' className='form-label'>
                {t('label.category')}
              </label>
              <select
                onChange={(text) => {
                  setTodo({ ...todo, category: text.target.value });
                }}
                value={todo.category}
                className='form-select'
                aria-label='Default select example'>
                <option value=''>{t('select.item')}</option>
                <option value='Tarea'>{t('select.homework')}</option>
                <option value='Trabajo'>{t('select.work')}</option>
                <option value='Pendiente'>{t('select.pending')}</option>
              </select>
            </div>
          </div>
          <div className='card-body'>
            {todos.length > 0 ? (
              todos.map((item) => (
                <div className={`rounded ${categoryColors[item?.category]}`} key={item?._id}>
                  <div className='d-flex align-items-center gap-2 p-2  my-2'>
                    <div>
                      <MdDelete
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          deleteTodo(item?._id);
                        }}
                        color='red'
                        size={25}
                      />
                    </div>
                    <p className='p-0 m-0'>{item?.title}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className='d-flex justify-content-center'>
                <p className='p-0 m-0'>{t('label.empty')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
