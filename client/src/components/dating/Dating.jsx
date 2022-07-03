import classes from './Dating.module.css'

const Dating = (props) => {

    let users = props.users.map(u =>
        <div className={classes.user} key={u.id}> 
            <img width='150' src={u.photoURL} alt="ava" />
            <h3>{u.name}</h3>
            <p>Age: {u.age} Gender: {u.gender}</p>
            <p>login: {u.login}  password: {u.password}</p>
        </div>
     );
    
    return (
        <div>
            <h2>Dating</h2>
            <div className={classes.users_grid}>
                {users}
            </div>
        </div>
    )
}

export default Dating;