import { MOVE_PLAYER } from '../../actions/player';

const initialPlayer = {
    position: [0, 0],
    spriteLocation: '0px 0px',
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