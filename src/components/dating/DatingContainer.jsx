import { connect } from 'react-redux';
import Dating from './Dating';
import { setDatingActionCreator } from './../../redux/datingReducer';

let mapStateToProps = (state) => {
    return {
        users: state.datingState.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        date: (id) => { dispatch(setDatingActionCreator(id, true)) },
        unDate: (id) => { dispatch(setDatingActionCreator(id, false)) }
    }
}


const DatingContainer = connect(mapStateToProps,mapDispatchToProps)(Dating)

export default DatingContainer;