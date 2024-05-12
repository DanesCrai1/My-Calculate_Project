import { useTheme } from 'App/providers/ThemeContext/ThemeContext';
import './Footer.scss';

export const Footer = () => {
    const { theme } = useTheme();
    return (
        <footer className={`footer footer_${theme}`} >
            <span>Thera Interactive DMCC, World of Sea Battle являются зарегистрированными торговыми марками. </span><br />
            <span>Все права защищены по всему миру. Этот сайт не имеет официальной связи с Thera Interactive DMCC или World of Sea Battle. </span><br />
            <span>Все изображения, снимки экрана, персонажи или другие узнаваемые элементы интеллектуальной собственности, относящиеся к этим товарным знакам,
                также являются интеллектуальной собственностью Thera Interactive DMCC. </span>
        </footer >
    );
};