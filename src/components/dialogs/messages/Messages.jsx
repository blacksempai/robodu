import classes from './Messages.module.css'
import { newMsgTextActionCreator, addMsgActionCreator } from './../../../redux/dialogReducer';

const Messages = (props) => {

    let msg = props.messages.map(m => <li>{m.content} || {m.author}</li>)

    let onTextChange = (e) => {
        let action = newMsgTextActionCreator(e.target.value);
        props.dispatch(action);
    }

    let onSendClick = () => {
        let action = addMsgActionCreator();
        props.dispatch(action);
    }

    return (
        <div>
            <ul>
                {msg}
            </ul>
            <input type="text" value={props.newMsgText} onChange={onTextChange}/>
            <button onClick={onSendClick}>Send</button>
        </div>
    )
}

export default Messages;