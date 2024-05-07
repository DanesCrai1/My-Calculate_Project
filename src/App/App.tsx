import { MainPage } from 'Pages/MainPage/MainPage';
import './App.css';
import { memo } from 'react';
import { Modal } from 'shared/Modal/Modal';


const App = () => {
  return (
    <>
      <Modal>Текст</Modal>
      <MainPage />
    </>
  );
}

export default memo(App);
