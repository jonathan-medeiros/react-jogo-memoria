import * as C from './styles';
import { GridItemType } from '../../types/GridItemType';
import b7Svg from '../../svgs/b7.svg';
import fortniteLogo from '../../svgs/logo.svg';

import { items } from '../../data/items';

type Props = {
    item: GridItemType;
    onClick: () => void;

}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container 
            showbackground = {(item.permanentShown || item.shown)? 'true' : 'false'}
            onClick={onClick}
        >
            
            { !item.permanentShown && !item.shown &&
                <C.Icon src={fortniteLogo} alt="" opacity={.1} />
            }  

            { (item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />    
            }  
            
        </C.Container>
    );
}