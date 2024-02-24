import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <div className={clsx(css.friendListContainer)}>
      <ul className={css.friendListGallery}>
        {friends.map((friend) => {
          return (
            <li className={css.friendListItem} key={friend.id}>
              <FriendListItem {...friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Опис типів пропсів компонента
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
