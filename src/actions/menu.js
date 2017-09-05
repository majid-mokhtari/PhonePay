import * as types from '../constants/types';
import { Alert } from 'react-native';

export function toggleSideMenu() {
    return dispatch => {
         return dispatch(sideMenuClicked());
    }
}


function sideMenuClicked() {
    return {
        type: types.SIDEMENU_CLICKED
    };
}

