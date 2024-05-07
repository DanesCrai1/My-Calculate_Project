import { useCallback } from 'react';
import './Settings.scss';
import { setStorage } from 'shared/functions/storage';

interface SettingsProps {
    options?: {
        savingWindows?: boolean;
        savingValues?: boolean;
        autoCloseSpoilers?: boolean;
    };
    setOption?: (name) => void;
}

export const Settings = (props: SettingsProps) => {
    const {
        options,
        setOption
    } = props;

    const toggleOption = useCallback((name) => {
        setOption({ ...options, [name]: !options[name] });
        setStorage('LOCAL_STORAGE_OPTIONS_APP', { ...options, [name]: !options[name] });

        if (options[name]) {
            switch (name) {
                case 'savingWindows':
                    localStorage.removeItem('LOCAL_STORAGE_HIDDEN_STATUS');
                    break;
                case 'savingValues':
                    localStorage.removeItem('LOCAL_STORAGE_RESULT_ITEM');
                    break;
                default:
                    break;
            }
        }
    }, [options, setOption]);

    return (
        <div className="settings">
            <div className='settings_container'>
                <p>Сохранить результаты рассчетов</p>
                {
                    options.savingWindows ? <button onClick={() => toggleOption('savingWindows')}>Включено</button> : <button onClick={() => toggleOption('savingWindows')}>Не работает</button>
                }
            </div>
            <div className='settings_container'>
                <p>Сохранить введенные числа в полях</p>
                {
                    options.savingValues ? <button onClick={() => toggleOption('savingValues')}>Включено</button> : <button onClick={() => toggleOption('savingValues')}>Не работает</button>
                }
            </div>
            <div className='settings_container'>
                <p>Подсказки новому пользователю</p>
                {
                    options.autoCloseSpoilers ? <button onClick={() => toggleOption('autoCloseSpoilers')}>Включено</button> : <button onClick={() => toggleOption('autoCloseSpoilers')}>Не работает</button>
                }
            </div>
        </div>
    );
};