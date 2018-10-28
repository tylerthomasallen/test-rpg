import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from '../config/constants';
import { UP, DOWN, RIGHT, LEFT } from '../components/player';

export const MOVE_PLAYER = 'MOVE_PLAYER';

export const movePlayer = (direction, position) => {
    return {
        type: MOVE_PLAYER,
        position: observeBoundaries(getNewPosition(direction, position), position)
    };
};

const getNewPosition = (direction, position) => {
    switch(direction) {
        case UP:
            return [position[0], position[1] - SPRITE_SIZE]
        case DOWN:
            return [position[0], position[1] + SPRITE_SIZE]
        case RIGHT:
            return [position[0] + SPRITE_SIZE, position[1]]
        case LEFT:
            return [position[0] - SPRITE_SIZE, position[1]]
        default:
            return position
    }
}


const observeBoundaries = (newPos, oldPos) => {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH) &&
        (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT) ?
        newPos : oldPos
}