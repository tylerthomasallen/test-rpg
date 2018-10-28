import React from 'react';
import { connect } from 'react-redux';
import playerMove from './player_move.png';

class Player extends React.Component {
    render() {
        const { position } = this.props;
        return (
            <div 
                style={{
                    position: "relative",
                    top: position[1],
                    left: position[0],
                    backgroundImage: `url(${playerMove})`,
                    backgroundPosition: '0 0',
                    width: '40px',
                    height: '40px'
                }}
            
            />
        );
    }
}

const mapStateToProps = ( { player })  => {
    return {
        ...player
    }
}

export default connect(
    mapStateToProps,
    null
)(Player);