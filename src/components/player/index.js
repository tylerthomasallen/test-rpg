import React from 'react';
import { connect } from 'react-redux';
import playerMoveImage from './player_move.png';
import { movePlayer } from '../../actions/player';

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
        const { position, movePlayer } = this.props;
        e.preventDefault();
        switch(e.keyCode) {
            case 83:
            case 40:
                return movePlayer(DOWN, position);
            case 87:
            case 38:
                return movePlayer(UP, position)
            case 68:
            case 39:
                return movePlayer(RIGHT, position)
            case 65:
            case 37:
                return movePlayer(LEFT, position)
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
        const { position } = this.props;
        debugger;

        return (
            <div 
                style={{
                    position: "absolute",
                    top: position[1],
                    left: position[0],
                    backgroundImage: `url(${playerMoveImage})`,
                    backgroundPosition: '0 0',
                    width: '40px',
                    height: '40px'
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
        movePlayer: (direction, position) => dispatch(movePlayer(direction, position))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);