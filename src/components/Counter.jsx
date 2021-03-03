import React from 'react';
import { connect } from 'react-redux';
import { count_change } from '../redux/actions/counterActions';

const Counter = props => {
    return (
        <div>
            <button onClick={() => {
                props.count_change({amount: 5});
            }}>{props.counterReducer.count}</button>
        </div>
    )
}

const mapStateToProps = state => ({
    counterReducer: state.counterReducer
});

const mapDispatchToProps = dispatch => ({
    count_change: amount => dispatch(count_change(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);