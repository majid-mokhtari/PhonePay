import * as types from './../constants/types';
import objectAssign from 'object-assign';
import { Alert } from 'react-native';

const initialState = {
    isOpen: false
}

export function menu(state = initialState, action) {
    switch (action.type) {
        case types.SIDEMENU_CLICKED:
            return objectAssign({}, state, {
                viewState: types.SIDEMENU_CLICKED,
                isOpen: true
            })
        default:
            return state;
    }
}