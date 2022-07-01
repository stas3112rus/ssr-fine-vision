import Button from '@mui/material/Button';
import styles from './footer.module.scss'
import ProTip from "../ProTip/ProTip";
import Copyright from '../Copyright/Copyright';

const Footer: React.FC = () => {

    const clickBtn = () =>{
        console.log("click");
    }


    return (
        <div className={styles.footer}>
            <ProTip/>
            <Copyright/>
        </div>
    )

}

export default Footer;