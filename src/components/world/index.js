import React from 'react';
import Map from '../map';
import Player from '../player';
import { MAP_WIDTH, MAP_HEIGHT } from '../../config/constants';

class World extends React.Component {
    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    width: `${MAP_WIDTH}px`,
                    height: `${MAP_HEIGHT}px`,
                    margin: '20px auto'
                }}
            >
                <Map />
                <Player />
            </div>
        )
    }
}

export default World;