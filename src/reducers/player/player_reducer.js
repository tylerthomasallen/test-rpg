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
                    const newState = { position: [position[0], position[1] - SPRITE_SIZE]}
                    return {...state, ...newState}
                case DOWN:
                    const newStateTwo = { position: [position[0], position[1] + SPRITE_SIZE]}
                    return {...state, ...newStateTwo}
                case RIGHT:
                    const newStateThree = { position: [position[0] + SPRITE_SIZE, position[1]]}
                    return {...state, ...newStateThree}
                case LEFT:
                    const newStateFour = { position: [position[0] - SPRITE_SIZE, position[1]]}
                    return {...state, ...newStateFour}
                default:
                    return state;
            }
        default:
            return state
    }
}

export default playerReducer;