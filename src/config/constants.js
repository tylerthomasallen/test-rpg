export const SPRITE_SIZE = 64;

export const HEIGHT_MULT = 10;
export const WIDTH_MULT = 20;

export const MAP_HEIGHT = SPRITE_SIZE * HEIGHT_MULT;
export const MAP_WIDTH = SPRITE_SIZE * WIDTH_MULT;

const DOWN_KEYS = [83, 40];
const UP_KEYS = [87, 38];
const RIGHT_KEYS = [68, 39];
const LEFT_KEYS = [65, 37];
const MOVEMENT_KEYS = [...DOWN_KEYS, ...UP_KEYS, ...RIGHT_KEYS, ...LEFT_KEYS];

export const GAME_KEYS = [...MOVEMENT_KEYS]