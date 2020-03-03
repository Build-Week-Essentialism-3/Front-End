import {LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILED} from './actionIndex';


const initialState = {
    currentUser: {},
    isFetching: false,
    error:''
};

export const mainReducer = (state= initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isFetching:true
            };
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    isFetching:false,
                    currentUser:action.payload
                };
                case LOGIN_FAILED:
                    return {
                        ...state,
                        isFetching:false,
                        error:action.payload
                    };
                    case REGISTER_START:
                        return {
                            ...state,
                            isFetching:true
                        };
                        case REGISTER_SUCCESS:
                            return {
                                ...state,
                                isFetching:false,
                                currentUser:action.payload
                            };
                            case REGISTER_FAILED:
                                return {
                                    ...state,
                                    isFetching:false,
                                    error:action.payload
                                }
            default: return state;
    }
}