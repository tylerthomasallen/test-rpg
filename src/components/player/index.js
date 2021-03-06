import React from 'react';
import { connect } from 'react-redux';
import playerMoveImage from './player_move.png';
import { movePlayer } from '../../actions/player';
import './player.css';

export const DOWN = 'DOWN';
export const UP = 'UP';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';

class Player extends React.Component {

    constructor(props) {
        super(props)
        this.handleMovement = this.handleMovement.bind(this);
        this.listenForMovement = this.listenForMovement.bind(this);

        this.listenForMovement();
    }

    handleMovement(e) {
        const { position, movePlayer, walkIndex } = this.props;
        e.preventDefault();
        switch(e.keyCode) {
            case 83:
            case 40:
                return movePlayer({direction: DOWN, position, walkIndex});
            case 87:
            case 38:
                return movePlayer({direction: UP, position, walkIndex})
            case 68:
            case 39:
                return movePlayer({direction: RIGHT, position, walkIndex})
            case 65:
            case 37:
                return movePlayer({direction: LEFT, position, walkIndex})
            default:
                console.log(e.keyCode)
        }
    }


    listenForMovement() {
        window.addEventListener('keydown', (e) => {
            this.handleMovement(e)
        })
    }

    render() {
        const { position, spriteLocation } = this.props;

        return (
            <div className="player"
                style={{
                    top: position[1],
                    left: position[0],
                    backgroundImage: `url(${playerMoveImage})`,
                    backgroundPosition: spriteLocation,
                }}
            />
        );
    }
}

const mapStateToProps = ( { player } )  => {
    return {
        ...player
    }
}

const mapDispatchToProps = dispatch => {
    return {
        movePlayer: (player) => dispatch(movePlayer(player))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);