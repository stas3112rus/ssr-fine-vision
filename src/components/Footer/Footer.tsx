import ProTip from "../ProTip/ProTip";
import Copyright from '../Copyright/Copyright';

const Footer: React.FC = () => {

    const clickBtn = () =>{
        console.log("click");
    }


    return (
        <div className={"footer "}>
            <ProTip/>
            <Copyright/>
        </div>
    )

}

export default Footer;