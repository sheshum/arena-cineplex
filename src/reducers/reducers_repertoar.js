
import {REPERTOAR_GET_REPERTOAR} from '../actions/index';

export default function(state = null, action){
    switch(action.type){
            case REPERTOAR_GET_REPERTOAR:
            
            return action.payload.data;

            default:
            return state;

    }

}