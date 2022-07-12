import Button from '@mui/material/Button';
import HeaderBtnsSizes from "./HeaderBtnsSizes";
import HeaderBlackWhiteMode from "./HeaderBlackWhiteMode";
import HeaderBtnShowImg from "./HeaderBtnShowImg";
import HeaderFineVisionBtn from "./HeaderFineVisionBtn";

interface IHeader{
    changeTheme: React.MouseEventHandler<HTMLButtonElement>
}

const HeaderFineVision: React.FC<IHeader> = (props)  => {

    const {changeTheme} = props;

    return (
        <div className={"header__fineVision"}>
            
            <HeaderBtnsSizes />
            <HeaderBlackWhiteMode />
            <HeaderBtnShowImg />
                            
            <div>
                <HeaderFineVisionBtn 
                    title = "Обычная версия"
                    click={changeTheme}
                />
            </div>
    
        </div>
    )
}

export default HeaderFineVision;