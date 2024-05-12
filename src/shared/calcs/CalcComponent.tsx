import { ResultItem, ResultItemSrc } from 'Component/ResultItem/ResultItem';
import './CalcComponent.scss';
import { memo } from 'react';
import { getStorage } from 'shared/functions/storage';
import { useTheme } from 'App/providers/ThemeContext/ThemeContext';

interface CalcComponentProps {
    count?: string | number;
    hidden?: {
        bronze: boolean;
        beam: boolean;
        bulkhead: boolean;
        canvas: boolean;
        plates: boolean;
    };
    nameHidden?: string;
    hideResult?: (name: string) => void;
    options?: {
        iron?: string;
        coal?: string;
        bronze?: string;
        pitch?: string;
        wood?: string;
        cloth?: string;
        hour?: string;
    };
}

export const CalcComponent = memo((props: CalcComponentProps) => {
    const {
        hidden,
        nameHidden,
        hideResult,
        options = {
            iron: "",
            coal: "",
            bronze: "",
            pitch: "",
            wood: "",
            cloth: "",
            hour: ""
        }
    } = props;
    const { theme } = useTheme();

    if (hidden && hidden[nameHidden]) {
        return null;
    }

    return (
        <div className={`vision_${theme}`}>
            {Object.keys(options).map((key) => {
                const value = options[key];
                if (value) {
                    return <ResultItem key={key} src={ResultItemSrc[key.toUpperCase()]} res={String(value)} />;
                }
                return null;
            })}
            <div className={`close_vision_bg close_vision_bg_${theme}`} onClick={() => hideResult(nameHidden)}>
                <span>X</span>
            </div>
        </div>
    );
});