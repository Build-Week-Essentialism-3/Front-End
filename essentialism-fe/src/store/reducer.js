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

    GET_USER_VALUES_START,
    GET_USER_VALUES_SUCCESS,
    GET_USER_VALUES_FAILURE,

    GET_TOP_VALUES_START,
    GET_TOP_VALUES_SUCCESS,
    GET_TOP_VALUES_FAILURE,

    GET_PROJ_START,
    GET_PROJ_SUCCESS,
    GET_PROJ_FAILURE,

    GET_USER_CHOSEN_VALUE_START,
    GET_USER_CHOSEN_VALUE_SUCCESS,
    GET_USER_CHOSEN_VALUE_FAILURE,

    CHOOSE_TOP_THREE_START,
    CHOOSE_TOP_THREE_SUCCESS,
    CHOOSE_TOP_THREE_FAILURE,

    DELETE_VALUE_START,
    DELETE_VALUE_SUCCESS,
    DELETE_VALUE_FAILURE,




} from './actionIndex';


const initialState = {
    currentUser: {},
    isFetching: false,
    error:'',
    projects:[],
    values:[],
    userValues:[],

    topValues:[],

//     topThree:[]


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
                                                userValues:action.payload
                                                };
                                            case ADD_USER_VALUE_FAILURE:
                                                return {
                                                 ...state,
                                                isFetching:false,
                                                error:action.payload
                                              };





                                case GET_USER_VALUES_START:
                                    return {
                                        ...state,
                                        isFetching:true
                                    };
                                    case GET_USER_VALUES_SUCCESS:
                                        return {
                                            ...state,
                                            isFetching:false,
                                            userValues:action.payload
                                        };
                                        case GET_USER_VALUES_FAILURE:
                                            return {
                                                ...state,
                                                isFetching:false,
                                                error:action.payload
                                            }




                                case GET_TOP_VALUES_START:
                                    return {
                                        ...state,
                                        isFetching:true
                                    };
                                    case GET_TOP_VALUES_SUCCESS:
                                        return {
                                            ...state,
                                            isFetching:false,
                                            topValues:action.payload
                                        };
                                        case GET_TOP_VALUES_FAILURE:
                                            return {
                                                ...state,
                                                isFetching:false,
                                                error:action.payload
                                            };




                                case GET_PROJ_START:
                                    return {
                                        ...state,
                                        isFetching:true
                                    };
                                    case GET_PROJ_SUCCESS:
                                        return {
                                            ...state,
                                            isFetching:false,
                                            projects:action.payload
                                        };
                                        case GET_PROJ_FAILURE:
                                            return {
                                                ...state,
                                                isFetching:false,
                                                error:action.payload
                                            }

    case GET_USER_CHOSEN_VALUE_START:
    return {
            ...state,
            isFetching:true
                };
    case GET_USER_CHOSEN_VALUE_SUCCESS:
        return {
            ...state,
            isFetching:false,
        userValues: action.payload
            };

        case GET_USER_CHOSEN_VALUE_FAILURE:
            return {
                ...state,
            isFetching:false,
            error:action.payload
            };





                                                      case CHOOSE_TOP_THREE_START:
                                                return {
                                                      ...state,
                                                      isFetching:true
                                                         };
                                                case CHOOSE_TOP_THREE_SUCCESS:
                                                    return {
                                                        ...state,
                                                        isFetching:false,
                                                        topThree:action.payload
                                                        };
                                                    case CHOOSE_TOP_THREE_FAILURE:
                                                        return {
                                                         ...state,
                                                    isFetching:false,
                                                    error:action.payload
                                                    };


                                                    

                    case DELETE_VALUE_START:
                        return {
                                ...state,
                                isFetching:true
                                    };
                        case DELETE_VALUE_SUCCESS:
                            return {
                                ...state,
                                topValues:action.payload,
                                // topValues: state.topValues.filter(e=>e.id !== action.payload.id),

                                isFetching:false,
                                };
                            case DELETE_VALUE_FAILURE:
                                return {
                                    ...state,
                            isFetching:false,
                            error:action.payload
                            };


            default: return state;
    }
}