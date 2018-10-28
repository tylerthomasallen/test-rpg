import { MOVE_PLAYER } from '../../actions/player';

const initialPlayer = {
    position: [0, 0]
}


const playerReducer = (state = initialPlayer, action) => {
    
    Object.freeze(state);
    switch(action.type) {
        case MOVE_PLAYER:
            return {...state, position: action.position}
        default:
            return state
    }
}

export default playerReducer;