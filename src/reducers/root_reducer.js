import { combineReducers } from 'redux';
import player from './player/player_reducer';

const rootReducer = combineReducers({
    player
})

export default rootReducer;