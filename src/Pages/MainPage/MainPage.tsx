import { Footer } from "Component/Footer/Footer";
import { HeaderSales } from "Component/HeaderSales/HeaderSales"
import MainItem, { MainItemSrc } from "Component/MainItem/MainItem";
import { useState, useCallback, memo, useEffect } from "react";
import { CalcComponent } from "shared/calcs/CalcComponent"
import { craftCreates } from "shared/craft/craft";
import { creates } from "shared/craft/creates";
import { statusHidden } from "shared/craft/statusHidden";
import './MainPage.scss';
import { optionsApp } from "shared/craft/optionsApp";
import { Modal } from "shared/Modal/Modal";
import { Settings } from "Component/Settings/Settings";
import { getStorage, setStorage } from "shared/functions/storage";

export const MainPage = memo(() => {
    const [options, setOptions] = useState(getStorage('LOCAL_STORAGE_OPTIONS_APP', optionsApp));
    const [inputsValues, setValues] = useState(getStorage('LOCAL_STORAGE_RESULT_ITEM', creates));
    const [result, setResult] = useState(getStorage('LOCAL_STORAGE_RESULT_ITEM', craftCreates));
    const [hidden, setHidden] = useState(getStorage('LOCAL_STORAGE_HIDDEN_STATUS', statusHidden));
    const [sales, setSales] = useState(getStorage('LOCAL_STORAGE_SALES', false));
    const [salesIsland, setSalesIsland] = useState(getStorage('LOCAL_STORAGE_SALES_ISLAND', false));
    const [modalOptions, setModalOptions] = useState(true);

    useEffect(() => { // work options
        if (options.savingValues) {
            setStorage('LOCAL_STORAGE_RESULT_ITEM', inputsValues);
        }
        if (options.savingWindows) {
            setStorage('LOCAL_STORAGE_HIDDEN_STATUS', hidden);
        }
    }, [hidden, inputsValues, options.savingValues, options.savingWindows]);

    const showResult = useCallback((e) => {
        const name = e.target.name.match(/^(.*)Btn/)[1]; // name: bronze | beam | bulkhead | canvas | plates

        setHidden({ ...hidden, [name]: false }); // show elem
        setResult(inputsValues); // show result
    }, [hidden, inputsValues]);

    const hideResult = useCallback((name) => {
        setHidden({ ...hidden, [name]: true }); // hidden elem
    }, [hidden]);

    const inputsChange = useCallback((e) => {
        const { name, value } = e.target;
        if (value.length <= 5) {
            setValues({ ...inputsValues, [name]: value });
        }
        if (Number(value) < 0 || value === '0') {
            setValues({ ...inputsValues, [name]: '1' });
        }
    }, [inputsValues]);

    const inputsEnter = useCallback((e) => {
        const { name, value } = e.target;
        if (e.key === 'Enter') {
            setValues({ ...inputsValues, [name]: value });
            setHidden({ ...hidden, [name]: false }); // show elem
            setResult(inputsValues); // show result
        }
    }, [hidden, inputsValues]);

    const showModal = () => {
        setModalOptions(!modalOptions);
    }

    return (
        <div className="wrapper">
            <Modal hidden={modalOptions} hiddenModal={showModal} header={'Настройки'}>
                <Settings options={options} setOption={setOptions}/>
            </Modal>
            <div className="option" onClick={showModal}><img src={require("shared/assets/image/addons/option.svg").default} alt="option" /></div>
            <HeaderSales
                notSales={() => {
                    setSales(false);
                    setSalesIsland(false);
                    setStorage('LOCAL_STORAGE_SALES', false);
                    setStorage('LOCAL_STORAGE_SALES_ISLAND', false);
                }}
                sales={sales} setSales={() => {
                    setSales(true);
                    setSalesIsland(false);
                    setStorage('LOCAL_STORAGE_SALES', true);
                    setStorage('LOCAL_STORAGE_SALES_ISLAND', false);
                }}
                salesIsland={salesIsland} setSalesIsland={() => {
                    setSales(false);
                    setSalesIsland(true);
                    setStorage('LOCAL_STORAGE_SALES', false);
                    setStorage('LOCAL_STORAGE_SALES_ISLAND', true);
                }}
                option={options.autoCloseSpoilers}
            />
            <div className="items-wrapper">
                <div>
                    <MainItem src={MainItemSrc.BRONZE} name="bronze" onChange={inputsChange} value={inputsValues.bronze} btnName="bronzeBtn" btnClick={showResult} onClickKey={inputsEnter} />
                    <CalcComponent options={
                        (salesIsland) ? {
                            iron: String(Number(result.bronze) * 14),
                            bronze: String(Number(result.bronze) * 7),
                            coal: String(Number(result.bronze) * 1),
                            hour: String(Number(result.bronze) * 6)
                        } : (sales) ? {
                            iron: String(Number(result.bronze) * 18),
                            bronze: String(Number(result.bronze) * 9),
                            coal: String(Number(result.bronze) * 1),
                            hour: String(Number(result.bronze) * 6)
                        } : {
                            iron: String(Number(result.bronze) * 20),
                            bronze: String(Number(result.bronze) * 10),
                            coal: String(Number(result.bronze) * 1),
                            hour: String(Number(result.bronze) * 6)
                        }
                    } hidden={hidden} nameHidden={'bronze'} hideResult={hideResult}
                    />
                </div>
                <div>
                    <MainItem src={MainItemSrc.BEAM} name="beam" onChange={inputsChange} value={inputsValues.beam} btnName="beamBtn" btnClick={showResult} onClickKey={inputsEnter} />
                    <CalcComponent options={
                        (salesIsland) ? {
                            wood: String(Number(result.beam) * 70),
                            iron: String(Number(result.beam) * 4),
                            hour: String(Number(result.beam) * 5)
                        } : (sales) ? {
                            wood: String(Number(result.beam) * 93),
                            iron: String(Number(result.beam) * 5),
                            hour: String(Number(result.beam) * 5)
                        } : {
                            wood: String(Number(result.beam) * 100),
                            iron: String(Number(result.beam) * 5),
                            hour: String(Number(result.beam) * 5)
                        }
                    } hidden={hidden} nameHidden={'beam'} hideResult={hideResult}
                    />
                </div>
                <div>
                    <MainItem src={MainItemSrc.BULKHEAD} name="bulkhead" onChange={inputsChange} value={inputsValues.bulkhead} btnName="bulkheadBtn" btnClick={showResult} onClickKey={inputsEnter} />
                    <CalcComponent options={
                        (salesIsland) ? {
                            pitch: String(Number(result.bulkhead) * 1),
                            iron: String(Number(result.bulkhead) * 49),
                            hour: String(Number(result.bulkhead) * 5)
                        } : (sales) ? {
                            pitch: String(Number(result.bulkhead) * 1),
                            iron: String(Number(result.bulkhead) * 66),
                            hour: String(Number(result.bulkhead) * 5)
                        } : {
                            pitch: String(Number(result.bulkhead) * 1),
                            iron: String(Number(result.bulkhead) * 70),
                            hour: String(Number(result.bulkhead) * 5)
                        }
                    } hidden={hidden} nameHidden={'bulkhead'} hideResult={hideResult}
                    />
                </div>
                <div>
                    <MainItem src={MainItemSrc.CANVAS} name="canvas" onChange={inputsChange} value={inputsValues.canvas} btnName="canvasBtn" btnClick={showResult} onClickKey={inputsEnter} />
                    <CalcComponent options={
                        (salesIsland) ? {
                            cloth: String(Number(result.canvas) * 10),
                            pitch: String(Number(result.canvas) * 1),
                            hour: String(Number(result.canvas) * 3)
                        } : (sales) ? {
                            cloth: String(Number(result.canvas) * 10),
                            pitch: String(Number(result.canvas) * 1),
                            hour: String(Number(result.canvas) * 3)
                        } : {
                            cloth: String(Number(result.canvas) * 10),
                            pitch: String(Number(result.canvas) * 1),
                            hour: String(Number(result.canvas) * 3)
                        }
                    } hidden={hidden} nameHidden={'canvas'} hideResult={hideResult}
                    />
                </div>
                <div>
                    <MainItem src={MainItemSrc.PLATES} name="plates" onChange={inputsChange} value={inputsValues.plates} btnName="platesBtn" btnClick={showResult} onClickKey={inputsEnter} />
                    <CalcComponent options={
                        (salesIsland) ? {
                            coal: String(Number(result.plates) * 11),
                            pitch: String(Number(result.plates) * 3),
                            iron: String(Number(result.plates) * 21),
                            hour: String(Number(result.plates) * 6)
                        } : (sales) ? {
                            coal: String(Number(result.plates) * 14),
                            pitch: String(Number(result.plates) * 4),
                            iron: String(Number(result.plates) * 27),
                            hour: String(Number(result.plates) * 6)
                        } : {
                            coal: String(Number(result.plates) * 15),
                            pitch: String(Number(result.plates) * 4),
                            iron: String(Number(result.plates) * 30),
                            hour: String(Number(result.plates) * 6)
                        }
                    } hidden={hidden} nameHidden={'plates'} hideResult={hideResult}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
});