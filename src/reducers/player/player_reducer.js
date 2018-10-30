import { MOVE_PLAYER } from '../../actions/player';

const initialPlayer = {
    position: [0, 0],
    spriteLocation: '0px 0px',
    direction: 'DOWN'
}


const playerReducer = (state = initialPlayer, action) => {
    
    Object.freeze(state);
    switch(action.type) {
        case MOVE_PLAYER:
        const { position, direction, spriteLocation } = action;
            return {...state, position, direction, spriteLocation}
        default:
            return state
    }
}

export default playerReducer;