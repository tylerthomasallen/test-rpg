import { MOVE_PLAYER, CAST_SPELL } from '../../actions/player';
import { SPRITE_SIZE } from '../../config/constants';

const initialPlayer = {
    position: [0, 0],
    spriteLocation: `${0}px ${SPRITE_SIZE * 10}px`,
    direction: 'RIGHT',
    walkIndex: 0
}


const playerReducer = (state = initialPlayer, action) => {
    Object.freeze(state);
    const { position, direction, spriteLocation, walkIndex } = action;

    switch(action.type) {
        case MOVE_PLAYER:
            return {...state, position, direction, spriteLocation, walkIndex}
        case CAST_SPELL:
        debugger;
            return {...state, spriteLocation}
        default:
            return state
    }
}

export default playerReducer;