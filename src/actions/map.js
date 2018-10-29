export const ADD_TILES = 'ADD_TILES';

export const addTiles = tiles => {
    return {
        type: ADD_TILES,
        tiles
    };
};