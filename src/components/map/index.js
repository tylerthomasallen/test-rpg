import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import './styles.css';
import { connect } from 'react-redux';
import { addTiles } from '../../actions/map';
import tiles from '../../data/maps/1';

class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { addTiles } = this.props;
        addTiles(tiles);
    }


    
    render() {
        const { tiles } = this.props.map;
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