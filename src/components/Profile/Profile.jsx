import css from "./Profile.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.userProfile)}>
      <div className={css.userInfo}>
        <img className={css.userAvatar} src={image} alt={name} />
        <p className={css.userName}>{name}</p>
        <p className={css.userNickname}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userStatsList}>
        <li className={css.userStatsItem}>
          <span className={css.userCell}>Followers</span>
          <span className={css.userQuantity}>{stats.followers}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userCell}>Views</span>
          <span className={css.userQuantity}>{stats.views}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userCell}>Likes</span>
          <span className={css.userQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Описание типов пропсов компонента Profile
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
