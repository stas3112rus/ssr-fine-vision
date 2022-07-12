import Button from '@mui/material/Button';

interface IHeader{
    changeTheme: React.MouseEventHandler<HTMLButtonElement>
}

const HeaderStandard: React.FC<IHeader> = (props) =>{

    const {changeTheme} = props;
  
  
    return (    
        <div className={"header__standard"}>
            <Button 
            variant="contained"
            onClick={(e)=>changeTheme(e)}
        >
            Версия для слабовидящих
            </Button>
        </div>
    )  
} 
    
export default HeaderStandard;