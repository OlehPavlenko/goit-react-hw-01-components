import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendsList.module.css'

  export const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => {
        return <FriendsListItem data={item} key={item.id} />;
      }
      )}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
