import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/download.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
       this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

         return <div  className={styles.wrapper} >
             <div>
                 {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                 })}
             </div>
            {this.props.users.map(u => <div key={u.id}>
                <img className={styles.usersPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'/>
                <div>{u.followed
                    ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}</div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>)}
        </div>
    }
}

export default Users;