import {combineReducers} from "redux"
import ui from "./ui.js"
import Auth from "./auth.js"
import profile from "./userdetails"
var allReducer = combineReducers({
    ui: ui,
    auth : Auth,
    profile:profile
})

export default allReducer;