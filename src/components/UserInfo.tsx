import { useContext } from "react";
// import { PlayerContext } from "../contexts/PlayerContext";
import UserDetails from "./UserDetails";

function UserInfo() {

  return (
    <div>
      <h2>Информация о пользователе</h2>
      <UserDetails />
    </div>
  );
}

export default UserInfo;