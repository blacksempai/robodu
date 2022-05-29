import classes from './Messages.module.css'

const Messages = (props) => {

    let msg = props.messages.map(m => <li>{m.content} || {m.author}</li>)

    let onTextChange = (e) => {
        props.changeText(e.target.value);
    }

    let onSendClick = () => {
        props.sendMsg();
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