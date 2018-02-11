export default function(state = null, action){
    switch(action.type){
            case "REPERTOAR_GET_REPERTOAR":
            return action.payload;

            default:
            return state;

    }

}