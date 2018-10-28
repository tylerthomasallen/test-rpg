import { SPRITE_SIZE } from '../../config/constants';
import { MOVE_PLAYER } from '../../actions/player';
import { UP, DOWN, LEFT, RIGHT } from '../../components/player';


const initialPlayer = {
    position: [0, 0]
}


const playerReducer = (state = initialPlayer, action) => {

    const { position } = action;

    switch(action.type) {
        case MOVE_PLAYER:
            Object.freeze(state);
            switch(action.direction) {
                case UP:
                    return { ...state, position: [position[0], position[1] - SPRITE_SIZE]}
                case DOWN:
                    return { ...state, position: [position[0], position[1] + SPRITE_SIZE]}
                case RIGHT:
                    return { ...state, position: [position[0] + SPRITE_SIZE, position[1]]}
                case LEFT:
                    return { ...state, position: [position[0] - SPRITE_SIZE, position[1]]}
                default:
                    return state;
            }
        default:
            return state
    }
}

export default playerReducer;