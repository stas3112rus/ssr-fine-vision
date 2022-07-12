import Button from '@mui/material/Button';
import { IItem } from '../../types/types';

const Item = ({name, classModify}: IItem) =>{
    


    return (
        <div className={"item"}>
            <Button className={`item__Btn item_${classModify}`}>
                {name}
            </Button>
        </div>       
    )
}

export default Item;