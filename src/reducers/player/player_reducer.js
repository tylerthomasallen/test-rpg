import { MOVE_PLAYER } from '../../actions/player';
import { SPRITE_SIZE } from '../../config/constants';

const initialPlayer = {
    position: [0, 0],
    spriteLocation: `${0}px ${SPRITE_SIZE * 10}px`,
    direction: 'DOWN',
    walkIndex: 0
}


const playerReducer = (state = initialPlayer, action) => {
    
    Object.freeze(state);
    switch(action.type) {
        case MOVE_PLAYER:
        const { position, direction, spriteLocation, walkIndex } = action;
            return {...state, position, direction, spriteLocation, walkIndex}
        default:
            return state
    }
}

export default playerReducer;