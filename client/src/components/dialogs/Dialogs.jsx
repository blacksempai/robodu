import classes from './Dialogs.module.css'
import DialogList from './dialog_list/DialogList';
import Messages from './messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogList dialogs={props.state.dialogs}/>
            <Messages messages={props.state.messages} newMsgText={props.state.newMsgText} sendMsg={props.sendMsg} changeText={props.changeText}/>
        </div>
    ) 
}

export default Dialogs;