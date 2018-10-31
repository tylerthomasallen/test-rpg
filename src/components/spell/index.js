import React from 'react';
import { moveSpell } from '../../actions/spell';
import { connect } from 'react-redux';


class Spell extends React.Component {

    render() {
        return (
            <div className="spell">
            </div>
        )
    }
}

const mapStateToProps = ( {spell, player} ) => {
    return {
        spell,
        player
    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveSpell: (spell) => dispatch(moveSpell(spell))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spell);