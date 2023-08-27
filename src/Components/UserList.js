import React from "react";
import "./UserListStyle.css";

function UserList({ fullname, languages, admininfo }) {
  return (
    <div className="maindiv1">
      <h5 className="fullname">{fullname}</h5>
      {languages.map((item, index) => {
        return <h5 className="languages">{item}</h5>;
      })}

      <h5 className="admininfo">Admin: {String(admininfo)}</h5>
    </div>
  );
}

export default UserList;
