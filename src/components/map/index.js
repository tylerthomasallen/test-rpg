import React from 'react';
import { SPRITE_SIZE, HEIGHT_MULT, WIDTH_MULT } from '../../config/constants';
import './styles.css';
import { connect } from 'react-redux';
import { addTiles } from '../../actions/map';
import tiles from '../../data/maps/1';

class Map extends React.Component {

    componentDidMount() {
        const { addTiles } = this.props;
        addTiles(tiles);
    }


    
    render() {
        const { tiles } = this.props.map;
        return (
            <div className='map'
                style={{
                    width: `${SPRITE_SIZE * WIDTH_MULT}px`,
                    height: `${SPRITE_SIZE * HEIGHT_MULT}px`
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

        ></div>
}

const getTileSprite = (type) => {
    switch(type) {
        case 0:
            return 'grass'
        case 1:
            return 'bush'
        case 2:
            return 'tombstone1'
        case 3:
            return 'tombstone2'
        case 4:
            return 'tree'
        default:
            return 'grass'
    }
}

const mapStateToProps = ({ map }) => {
    return {
        map
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTiles: (tiles) => dispatch(addTiles(tiles))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);