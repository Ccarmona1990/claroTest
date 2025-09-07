import { InformationModal } from './Information';
import { useSelector } from 'react-redux';
import { toolTipExpDate, toolTipNetInfo, toolTipBalanceInfo } from '../utils/toolTip';

const CurrModal =() => {
    const isNetInfoModalShowing = useSelector((state)=>state.showInfo.isNetInfoModalShowing);
    const isExpDateModalShowing = useSelector((state)=>state.showInfo.isExpDateModalShowing);
    const {name:niName, message:nimsg, icon:niIcon} = toolTipNetInfo;
    const {name:expName, message:expMsg, icon:expIcon} =  toolTipExpDate;
    const isBalanceInfoModalShowing = useSelector((state)=>state.showInfo.isBalanceInfoModalShowing);
    const {name:biName, message:bimsg, icon:biIcon} =  toolTipBalanceInfo;
    //console.log(isNetInfoModalShowing);
    
    if(isNetInfoModalShowing){
        return <InformationModal
        name={niName}
        message={nimsg}
        icon={niIcon}/>
    } else if (isExpDateModalShowing){
        return <InformationModal
        name={expName}
        message={expMsg}
        icon={expIcon}/>
    } else if (isBalanceInfoModalShowing){
        return <InformationModal
        name={biName}
        message={bimsg}
        icon={biIcon}/>
    } else {
        return null
    }
}
export default CurrModal;