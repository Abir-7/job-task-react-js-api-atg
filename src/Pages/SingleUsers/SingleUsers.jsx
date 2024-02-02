import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleUsers({ userData }) {
  const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState(null);
  return (
    <div className="h-100">
      <h5 className="border-bottom pb-2 pt-2 title1 text-center ">
        User Details
      </h5>
      <div className="custom-user-details-height border ">
        <>
          {userData == null ? (
            <div className="text-center text-primary  mt-5">
              Please select a user to view details{" "}
            </div>
          ) : (
            <div style={{ height: "100%" }} className="row px-4 pt-5  ">
              <div className="col-5 h-100 d-flex flex-column align-items-center">
                <div className=" w-75 rounded  rounded-5 userProfilePic">
                  <img
                    className="w-100 rounded-5"
                    src={userData?.avatar}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7 h-100 d-flex flex-column  ">
  

                <div className="input-group mb-3">
                  <span class="input-group-text">Name: </span>
                  <span class="form-control">
                    {userData?.profile?.firstName} {userData?.profile?.lastName}{" "}
                    ({userData?.profile?.username})
                  </span>
                </div>

                <div style={{ fontSize: "20px" }}>
                  <b>Position: </b>
                  {userData?.jobTitle}
                </div>

                <div style={{ fontSize: "20px" }}>
                  <b> Email: </b>
                  {userData?.profile?.email}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <b> Bio: </b>
                  {userData?.Bio}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <b> Created at: </b> <br />
                  <b> Date:</b> {userData?.createdAt.slice(0, 10)} <b>Time:</b>{" "}
                  {userData?.createdAt.slice(11, 19)}
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
}
