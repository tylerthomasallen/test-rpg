export const MOVE_PLAYER = 'MOVE_PLAYER';

export const movePlayer = (direction, position) => {
    return {
        type: MOVE_PLAYER,
        direction,
        position
    };
};