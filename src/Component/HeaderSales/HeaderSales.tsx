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
                <div className={`block_sales ${!sales && !salesIsland ? 'active' : ''}`} onClick={notSales}>
                    <button className={`btn_sales btn_not_sales`}>00%</button>
                </div>
            </div>
            <div className='wrapper_sales'>
                <div className={`block_sales ${sales ? 'active' : ''}`} onClick={setSales}>
                    <button className={`btn_sales`}>10%</button>
                    <img src={require('shared/assets/image/addons/sales.svg').default} alt='Sales' className='sales_svg' />
                </div>
            </div>
            <div className='wrapper_sales'>
                <div className={`block_sales ${salesIsland ? 'active' : ''}`} onClick={setSalesIsland}>
                    <button className={`btn_sales`}>30%</button>
                    <img src={require('shared/assets/image/addons/salesIsland.svg').default} alt='SalesIsland' className='sales_svg' />
                </div>
            </div>
        </header>
    )
});