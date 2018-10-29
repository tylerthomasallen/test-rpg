import { ADD_TILES } from '../../actions/map';

const initialState = {
    tiles: []
}


const mapReducer = (state = initialState, action) => {

    Object.freeze(state);
    switch (action.type) {
        case ADD_TILES:
            return { ...state, tiles: action.tiles }
        default:
            return state
    }
}

export default mapReducer;