import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import './styles.css';

class Map extends React.Component {
    
    render() {
        const { tiles } = this.props;
        return (
            <div 
                style={{
                    width: '800px',
                    height: '400px',
                    border: '4px solid white'
                }}
            >

            {tiles.map((row, idx) => <MapRow row={row} key={idx} />)}
            </div>
        )
    }
}

const MapRow = (props) => {
    
    return (
    <div className="row">
        {props.row.map((tile, idx) => <MapTile tile={tile} key={idx}/>)}
    </div>
    )
}

const MapTile = (props) => {
    return <div 
            className={`tile ${getTileSprite(props.tile)}`}
            style={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE
            }}

        >{props.tile}</div>
}

const getTileSprite = (type) => {
    switch(type) {
        case 0:
            return 'grass'
        case 1:
            return 'castle'
    }
}


export default Map;