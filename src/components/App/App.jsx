import "./App.css";
// import components
import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendsList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
// import json-files
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

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
