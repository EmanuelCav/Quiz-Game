import {  
    AUTH, 
    LOGOUT
} from "../constants/vip.const";

const vipReducer = (state, action) => {

    switch (action.type) {
        case AUTH:
            return {
                ...state,
                vip: action.payload,
                isLoggedInVip: true,
            }    

        case LOGOUT:
            return {
                ...state,
                vip: action.payload,
                isLoggedInVip: false
            }    
        
        default:
            return state;
    }

}

export default vipReducer