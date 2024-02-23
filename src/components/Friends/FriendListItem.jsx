import clsx from "clsx";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt='Avatar' width='48' />
      <p>{name}</p>
      <p
        className={clsx("status", {
          Online: isOnline,
          Offline: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

// Опис типів пропсів компонента
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
