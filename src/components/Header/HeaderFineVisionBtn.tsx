import Button from '@mui/material/Button';

interface IHeaderBtn{
    title?: string,
    click?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


const HeaderFineVisionBtn:  React.FC<IHeaderBtn> = (props) => {
    const {title, click} = props;

    return (
        <Button 
            variant="contained"
            onClick={(e) => click? click(e) : null}
        >
            {title}
        </Button>
    )
}

export default HeaderFineVisionBtn