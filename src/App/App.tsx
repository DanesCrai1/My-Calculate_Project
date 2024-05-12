import './App.scss';
import { MainPage } from 'Pages/MainPage/MainPage';
import { memo } from 'react';
import { useTheme } from './providers/ThemeContext/ThemeContext';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className='wrapper-app' id={theme}>
      <MainPage />
    </div>
  );
}

export default memo(App);
