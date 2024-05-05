import './ResultItem.scss';

export const ResultItemSrc = {
    IRON: require('shared/assets/image/Making/Iron.jpg'),
    COAL: require('shared/assets/image/Making/Coal.jpg'),
    BRONZE: require('shared/assets/image/Making/Bronze.jpg'),
    PITCH: require('shared/assets/image/Making/Pitch.jpg'),
    WOOD: require('shared/assets/image/Making/Wood.jpg'),
    CLOTH: require('shared/assets/image/Making/Cloth.jpg'),
    HOUR: require('shared/assets/image/Making/Hour.jpg'),
}

interface ResultItemProps {
    src?: any;
    res?: string;
}

export const ResultItem = (props: ResultItemProps) => {
    const {
        src = ResultItemSrc.IRON,
        res = '0',
    } = props;

    return (
        <div className='block_result'>
            <img src={src} alt='' className='img_result'/>
            <p>{res}</p>
        </div>
    );
};