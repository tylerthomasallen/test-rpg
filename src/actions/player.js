import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from '../config/constants';
import { UP, DOWN, RIGHT, LEFT } from '../components/player';
import store from '../store/store';

export const MOVE_PLAYER = 'MOVE_PLAYER';
export const CAST_SPELL = 'CAST_SPELL';

export const movePlayer = (player) => {
    const { direction, position, walkIndex } = player;
    const newWalkIndex = getWalkIndex(walkIndex);
    
        return {
            type: MOVE_PLAYER,
            position: attemptMove(direction, position),
            direction,
            spriteLocation: getSpriteLocation({direction, walkIndex: newWalkIndex, spriteYIndex: 10}),
            walkIndex: newWalkIndex
        };
    };

const attemptMove = (direction, position) => {
    const newPos = getNewPosition(direction, position); 
    if (observeBoundaries(newPos, position) && observeTiles(newPos)) {
        return newPos;
    } else {
        return position;
    }
}


export const castSpell = (player) => {
    const { direction, walkIndex } = player;
    return {
        type: CAST_SPELL,
        spriteLocation: getSpriteLocation({direction, spriteYIndex: 6, walkIndex})
    }
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

const getSpriteLocation = (player) => {
    const { direction, walkIndex, spriteYIndex } = player;

    switch(direction) {
        case RIGHT:
            return `${SPRITE_SIZE * walkIndex * -1}px ${SPRITE_SIZE * spriteYIndex}px`
        case DOWN:
            return `${SPRITE_SIZE * walkIndex * - 1}px ${SPRITE_SIZE * (spriteYIndex + 1)}px`
        case LEFT:
            return `${SPRITE_SIZE * walkIndex * -1}px ${SPRITE_SIZE * (spriteYIndex + 2)}px`
        case UP:
            return `${SPRITE_SIZE * walkIndex * -1}px ${SPRITE_SIZE * (spriteYIndex + 3)}px`
        default:
            return `0 0`
    }
}

const getWalkIndex = (walkIndex) => {
    return walkIndex >= 8 ? 0 : walkIndex + 1
}


const observeBoundaries = (newPos, oldPos) => {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
        (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
}

const observeTiles = (newPos) => {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x]
    return nextTile <= 0

}
