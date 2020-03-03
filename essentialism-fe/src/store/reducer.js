import {LOGIN_START} from './actionIndex';


const initialState = {
    isFetching: false
};

export const mainReducer = (state= initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isFetching:true
            };
            default: return state;
    }
}