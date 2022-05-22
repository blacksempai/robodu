import classes from './Dialogs.module.css'
import DialogList from './dialog_list/DialogList';
import Messages from './messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogList dialogs={props.state.dialogState.dialogs}/>
            <Messages messages={props.state.dialogState.messages} dispatch={props.dispatch} newMsgText={props.state.dialogState.newMsgText}/>
        </div>
    ) 
}

export default Dialogs;