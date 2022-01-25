
const initialState = {
    isNetInfoShowing: false,
    isNetInfoModalShowing: false,
    isExpDateShowing: false,
    isExpDateModalShowing: false,
    isBalanceInfoShowing: false,
    isBalanceInfoModalShowing: false
}

const SHOWNETINFO = 'showNetInfo';
const SHOWNETINFOMODAL = 'showNetInfoModal';
const SHOWEXPDATE = 'showExpDate';
const SHOWEXPDATEMODAL = 'showExpDateModal';
const SHOWBALANCEINFO = 'showBalanceInfo';
const SHOWBALANCEINFOMODAL = 'showBalanceInfoModal'

export const _showNetInfo = (value)=>({type: SHOWNETINFO, payload: value})
export const _showNetInfoModal = (value)=>({type: SHOWNETINFOMODAL, payload: value})
export const _showExpDate = (value)=>({type: SHOWEXPDATE, payload: value})
export const _showExpDateModal = (value)=>({type: SHOWEXPDATEMODAL, payload: value})
export const _showBalanceInfo = (value)=>({type: SHOWBALANCEINFO, payload: value})
export const _showBalanceInfoModal = (value)=>({type: SHOWBALANCEINFOMODAL, payload: value})

export default (state = initialState, action)=>{
    switch(action.type){
        case SHOWNETINFO:
            return {...state, isNetInfoShowing: action.payload,
            isExpDateShowing: false}
        case SHOWNETINFOMODAL:
            return {...state, isNetInfoModalShowing: action.payload,
            isExpDateModalShowing: false}
        case SHOWEXPDATE:
            return {...state, isExpDateShowing: action.payload,
            isNetInfoShowing: false,
            isNetInfoModalShowing: false,
            isExpDateModalShowing: false,
            isBalanceInfoShowing: false,
            isBalanceInfoModalShowing: false}
        case SHOWEXPDATEMODAL:
            return {...state, isExpDateModalShowing: action.payload,
            isNetInfoShowing: false,
            isNetInfoModalShowing: false,
            isExpDateShowing: false,
            isBalanceInfoShowing: false,
            isBalanceInfoModalShowing: false}
        case SHOWBALANCEINFO:
            return {...state, isBalanceInfoShowing: action.payload,
            isNetInfoShowing: false,
            isExpDateShowing: false}
        case SHOWBALANCEINFOMODAL:
            return {
            ...state, isBalanceInfoModalShowing: action.payload,
            isNetInfoShowing: false,
            isNetInfoModalShowing: false,
            isExpDateShowing: false,
            isExpDateModalShowing: false,
            isBalanceInfoShowing: false}
        default:
            return state
    }
}