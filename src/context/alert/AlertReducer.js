/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import {SET_ALERT, REMOVE_ALERT} from '../types';


export default (state, action)=>{
    switch(action.type){
        case SET_ALERT:
         return action.payload;
        case REMOVE_ALERT:
             return null;
        default:  
        return state;
        
    }
};


