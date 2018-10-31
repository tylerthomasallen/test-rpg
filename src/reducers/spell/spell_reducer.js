import { MOVE_SPELL } from '../../actions/spell';

const playerReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case MOVE_SPELL:
            debugger;
            return { ...state  }
        default:
            return state
    }
}

export default playerReducer;