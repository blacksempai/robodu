import { connect } from 'react-redux';
import { addMsgActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { newMsgTextActionCreator } from './../../redux/dialogReducer';

let mapStateToProps = (state) => {
    return {
        state: state.dialogState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => { dispatch(addMsgActionCreator()) },
        changeText: (text) => { dispatch(newMsgTextActionCreator(text)); }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;