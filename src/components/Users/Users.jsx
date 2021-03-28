import Paginator from "../common/Paginator/Paginator"
import User from "./User";
import s from "./Users.module.css"

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, unfollow, follow }) => {
  return (
    <div className={s.userPaginator}>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
      <div>
        {users.map((u) => <User
          user={u}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
          key={u.id} />
        )
        }
      </div>
    </div >
  );
}

export default Users;