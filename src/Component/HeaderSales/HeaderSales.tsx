import { memo } from 'react';
import './HeaderSales.scss';

interface HeaderSalesProps {
    sales: boolean;
    setSales: () => void;
    salesIsland: boolean;
    setSalesIsland: () => void;
    notSales: () => void;
}

export const HeaderSales = memo((props: HeaderSalesProps) => {
    const {
        sales,
        setSales,
        salesIsland,
        setSalesIsland,
        notSales
    } = props;

    return (
        <header className='header_sales'>
            <div className='wrapper_sales'>
                <button className={`btn_sales btn_not_sales ${!sales && !salesIsland ? 'active' : ''}`} onClick={notSales}>Цена без скидки</button>
            </div>
            <div className='wrapper_sales'>
                <div className='block_sales'>
                    <button onClick={setSales} className={`btn_sales ${sales ? 'active' : ''}`}>Скидка за навыки</button>
                    <img src={require('shared/assets/image/addons/sales.svg').default} alt='Sales' className='sales_svg' />
                </div>
            </div>
            <div className='wrapper_sales'>
                <div className='block_sales'>
                    <button onClick={setSalesIsland} className={`btn_sales ${salesIsland ? 'active' : ''}`}>Островная скидка</button>
                    <img src={require('shared/assets/image/addons/salesIsland.svg').default} alt='SalesIsland' className='sales_svg' />
                </div>
            </div>
        </header>
    )
});