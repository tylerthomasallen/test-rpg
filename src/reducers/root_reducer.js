import { combineReducers } from 'redux';
import player from './player/player_reducer';
import map from './map/map_reducer';

const rootReducer = combineReducers({
    player,
    map
})

export default rootReducer;