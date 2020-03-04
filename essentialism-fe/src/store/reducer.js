import {LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,
    REGISTER_START, 
    REGISTER_SUCCESS, 
    REGISTER_FAILED,
    ADD_PROJ_START,
    ADD_PROJ_SUCCESS,
    ADD_PROJ_FAILURE,
    GET_VALUES_START,
    GET_VALUES_SUCCESS,
    GET_VALUES_FAILURE,
    ADD_VALUE_START,
    ADD_VALUE_SUCCESS,
    ADD_VALUE_FAILURE,
    ADD_USER_VALUE_START,
    ADD_USER_VALUE_SUCCESS,
    ADD_USER_VALUE_FAILURE,



} from './actionIndex';


const initialState = {
    currentUser: {},
    isFetching: false,
    error:'',
    projects:[],
    values:[],

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
                                };



                    case ADD_PROJ_START:
                        return {
                            ...state,
                            isFetching:true
                        };
                        case ADD_PROJ_SUCCESS:
                            return {
                                ...state,
                                isFetching:false,
                                projects:action.payload
                            };
                            case ADD_PROJ_FAILURE:
                                return {
                                    ...state,
                                    isFetching:false,
                                    error:action.payload
                                };




                                            case GET_VALUES_START:
                                                return {
                                                        ...state,
                                                        isFetching:true
                                                    };
                                                    case GET_VALUES_SUCCESS:
                                                        return {
                                                            ...state,
                                                            isFetching:false,
                                                            values:action.payload
                                                        };
                                                    case GET_VALUES_FAILURE:
                                                            return {
                                                                ...state,
                                                                isFetching:false,
                                                                error:action.payload
                                                            };




                                    case ADD_VALUE_START:
                                                return {
                                                        ...state,
                                                        isFetching:true
                                                    };
                                                    case ADD_VALUE_SUCCESS:
                                                        return {
                                                            ...state,
                                                            isFetching:false,
                                                            values:action.payload
                                                        };
                                                    case ADD_VALUE_FAILURE:
                                                            return {
                                                                ...state,
                                                                isFetching:false,
                                                                error:action.payload
                                                            };




                                      case ADD_USER_VALUE_START:
                                        return {
                                              ...state,
                                              isFetching:true
                                                 };
                                        case ADD_USER_VALUE_SUCCESS:
                                            return {
                                                ...state,
                                                isFetching:false,
                                                values:action.payload
                                                };
                                            case ADD_USER_VALUE_FAILURE:
                                                return {
                                                 ...state,
                                                isFetching:false,
                                                error:action.payload
                                              };

            default: return state;
    }
}