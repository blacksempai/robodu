import classes from './DialogList.module.css'

const DialogList = (props) => {
    let dl = props.dialogs.map(d => <li>{d.name}</li>) 

    return (
        <div className={classes.dialog_list}>
            <ul>
                {dl}
            </ul>
        </div>
    )
}

export default DialogList;