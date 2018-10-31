import { attemptMove } from './player';
export const MOVE_SPELL = 'MOVE_SPELL';


export const sendSpell = (spell) => {
    
    const {direction, position } = spell;
    const newPosition = attemptMove(direction, position);
    let remainActive = true;

    if (newPosition === position) {
        remainActive = false;
    }

    return {
        type: MOVE_SPELL,
        position: newPosition,
        direction,
        spellActive: remainActive
    }

}