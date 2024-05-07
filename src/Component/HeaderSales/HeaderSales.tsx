import { memo, useState } from 'react';
import './HeaderSales.scss';
import { Modal } from 'shared/Modal/Modal';

interface HeaderSalesProps {
    sales: boolean;
    setSales: () => void;
    salesIsland: boolean;
    setSalesIsland: () => void;
    notSales: () => void;
    option: boolean;
}

const enum SalesModal {
    NOT_SALES = "not_sales",
    SALES = 'sales',
    SALES_ISLAND = 'sales_island'
}

export const HeaderSales = memo((props: HeaderSalesProps) => {
    const {
        sales,
        setSales,
        salesIsland,
        setSalesIsland,
        notSales,
        option
    } = props;
    const [hiddenModal, setHiddenModal] = useState(true);
    const [contentModal, setContentModal] = useState('');
    const [headerModal, setHeaderModal] = useState('');

    const handleModalToggle = (name) => {
        if (option) {
            setHiddenModal(!hiddenModal);
            switch (name) {
                case 'not_sales':
                    setHeaderModal('00%');
                    setContentModal('Скидки от навыков не учитываются, создание предметов будет рассчитано без применения бонусов.');
                    break;
                case 'sales':
                    setHeaderModal('10%');
                    setContentModal('Учитываются скидки от навыков, что позволит рассчитать создание предметов с применением бонусов.');
                    break;
                case 'sales_island':
                    setHeaderModal('30%');
                    setContentModal('Учитываются бонусы, действующие на личном острове, что позволит рассчитать создание предметов с максимальной выгодой.');
                    break;
                default:
                    setContentModal('');
            }
        }
    }

    return (
        <>
            <Modal header={headerModal} hidden={hiddenModal} hiddenModal={handleModalToggle} sales={true}>{contentModal}</Modal>
            <header className='header_sales'>
                <div className='wrapper_sales'>
                    <div className={`block_sales ${!sales && !salesIsland ? 'active' : ''}`} onClick={() => { notSales(); handleModalToggle(SalesModal.NOT_SALES) }}>
                        <button className={`btn_sales btn_not_sales`}>00%</button>
                    </div>
                </div>
                <div className='wrapper_sales'>
                    <div className={`block_sales ${sales ? 'active' : ''}`} onClick={() => { setSales(); handleModalToggle(SalesModal.SALES) }}>
                        <button className={`btn_sales`}>10%</button>
                        <img src={require('shared/assets/image/addons/sales.svg').default} alt='Sales' className='sales_svg' />
                    </div>
                </div>
                <div className='wrapper_sales'>
                    <div className={`block_sales ${salesIsland ? 'active' : ''}`} onClick={() => { setSalesIsland(); handleModalToggle(SalesModal.SALES_ISLAND) }}>
                        <button className={`btn_sales`}>30%</button>
                        <img src={require('shared/assets/image/addons/salesIsland.svg').default} alt='SalesIsland' className='sales_svg' />
                    </div>
                </div>
                {hiddenModal && (
                    <Modal>Test</Modal>
                )}
            </header>
        </>
    )
});