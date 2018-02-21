const initialState = {
   bioData:{}
}
export default function profile(state = initialState, action) {
    switch (action.type) {
        case "SET_USER_PROFILE":
            let newState = Object.assign({}, state);
            newState.bioData = action.payload
            return newState;
            break;
        default:
            return state;
            break;
    }
} 