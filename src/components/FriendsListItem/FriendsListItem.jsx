import styles from '../FriendsListItem/FriendsListItem.module.css'
import PropTypes from 'prop-types'


export const FriendsListItem = ({ data }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: data.isOnline ? "#00FF00" : "#FF0000" }}
      ></span>
      <img
        className={styles.avatar}
        src={data.avatar}
        alt="Avatar of {data.name}"
        width="48"
      />
      <p className={styles.name}>{data.name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  data: PropTypes.object.isRequired,
};