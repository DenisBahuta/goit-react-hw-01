import "./App.module.css";

import userData from "../Profile/userData.json";
import friends from "../FriendsList/friends.json";
import transactions from "../TransactionHistory/transactions.json";

import Profile from "../Profile/Profile";
import FriendList from "../FriendsList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
