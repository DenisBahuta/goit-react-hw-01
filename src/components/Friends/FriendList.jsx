import FriendListItem from "../Friends/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
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
