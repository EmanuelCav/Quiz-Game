import {
    ERROR_CREATE,
    ERROR_UPDATE,
    RESPONSE_AUTH,
    RESPONSE_VIP,
    SUCCESS_CREATE,
    SUCCESS_DELETE,
    PARTICIPATE
} from "../constants/response.const";

const responseReducer = (state, action) => {

    switch (action.type) {
        case RESPONSE_AUTH:
            return {
                ...state,
                loading: false,
                responseAuth: action.payload,
                responseVip: null,
                successCreate: null,
                successDelete: null,
                errorCreate: null,
                errorUpdate: null,
                participate: null
            }

        case RESPONSE_VIP:
            return {
                ...state,
                loading: false,
                responseAuth: null,
                responseVip: action.payload,
                successCreate: null,
                successDelete: null,
                errorCreate: null,
                errorUpdate: null,
                participate: null
            }

        case SUCCESS_CREATE:
            return {
                ...state,
                loading: false,
                responseAuth: null,
                responseVip: null,
                successCreate: action.payload,
                successDelete: null,
                errorCreate: null,
                errorUpdate: null,
                participate: null
            }

        case SUCCESS_DELETE:
            return {
                ...state,
                loading: false,
                responseAuth: null,
                responseVip: null,
                successCreate: null,
                successDelete: action.payload,
                errorCreate: null,
                errorUpdate: null,
                participate: null
            }

        case ERROR_CREATE:
            return {
                ...state,
                loading: false,
                responseAuth: null,
                responseVip: null,
                successCreate: null,
                successDelete: null,
                errorCreate: action.payload,
                errorUpdate: null,
                participate: null
            }

        case ERROR_UPDATE:
            return {
                ...state,
                loading: false,
                responseAuth: null,
                responseVip: null,
                successCreate: null,
                successDelete: null,
                errorCreate: null,
                errorUpdate: action.payload,
                participate: null
            }

        case PARTICIPATE:
            return {
                ...state,
                loading: false,
                responseAuth: null,
                responseVip: null,
                successCreate: null,
                successDelete: null,
                errorCreate: null,
                errorUpdate: null,
                participate: action.payload
            }

        default:
            return state;
    }

}

export default responseReducer