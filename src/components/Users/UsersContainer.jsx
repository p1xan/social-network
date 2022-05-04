import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)


function getAspectRatios(weight, height, limit) {
    const resultArr = [];
    const min = weight < height ? weight : height;
    let currentWeight = weight;
    let currentHeight = height;
    for (let i = min / 2; i >= 2; i--) {
        if (currentWeight % i === 0 && currentHeight % i === 0) {
            currentWeight = currentWeight / i;
            currentHeight = currentHeight / i;
        }
    }
    let i = 1;
    while (currentWeight * i <= limit && currentHeight * i <= limit) {
        resultArr.push([currentWeight * i, currentHeight * i]);
        i++;
    }
    return resultArr;
}




