import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendCard}>
      <img className={css.friendAvatar} src={avatar} alt='Avatar' />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, {
          [css.Online]: isOnline,
          [css.Offline]: !isOnline,
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
