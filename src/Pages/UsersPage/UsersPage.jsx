import React, { useEffect, useState } from "react";

import { Link, NavLink, Outlet } from "react-router-dom";

import axios from "axios";

import profile from "../../assets/default.png";
import { useNavigate } from "react-router-dom";
import SingleUsers from "../SingleUsers/SingleUsers";

export default function UsersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allUserData, setAllUserData] = useState([]);


  useEffect(() => {
    const allUsers = async () => {
      const res = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      const data = res.data;
      //console.log(data);
      setAllUserData(data);
      setIsLoading(false);
    };
    allUsers();
  }, []);

  const handleImageError = (index) => {
    const updatedImage = [...allUserData];
    updatedImage[index].avatar = profile;
    setAllUserData(updatedImage);
  };

  const [id, setId] = useState(null);

  return (
    <div className="customHeight">
      <div className="row h-100">
        <div className="col-3   h-100 text-center  pb-2 shadow-sm">
          <h5 className="border-bottom pb-2 pt-2 title1 ">All Users</h5>

       {isLoading?<><p>Loading.....</p></>:
          <div className=" customHeight2 ">
          {allUserData.map((user, index) => (<div
              key={index}
              onClick={() => setId(user.id)}
              className=" userInfoContainer d-flex position-relative align-items-center border my-2 p-2"
            >
              <div className="profileImgContainer z-5">
                <img
                  className="profileImage"
                  alt="Profile Image"
                  src={user.avatar}
                  onError={() => handleImageError(index)}
                />
              </div>
              <div className="profileName">{user.profile.username}</div>
              <div className="position-absolute  w-100 h-100 layer"></div>
            </div>
          ))}
        </div>
       }
        </div>

        <div className="col-9">
          {/* <Outlet></Outlet> */}
          <SingleUsers id={id}></SingleUsers>
        </div>
      </div>
    </div>
  );
}
