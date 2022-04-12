import { 
    CREATE_USER 
} from "../constants/user.const";

const userReducer = (state, action) => {

    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedInUser: true
            }
    
        default:
            return state;
    }

}

export default userReducer