
import { FaUsers } from "react-icons/fa6";

export default function SingleUsers({ userData, showUserSlide }) {

  // const [userData, setUserData] = useState(null);

  const convertTo12HourFormat = (time24h) => {
    const [hours, minutes, seconds] = time24h.split(":");
    const parsedHours = parseInt(hours, 10);
    const ampm = parsedHours >= 12 ? "PM" : "AM";
    const formattedHours = parsedHours % 12 || 12;
    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="h-100  ">
      <div className="position-relative">
        <h5
          onClick={() => {
            showUserSlide();
          }}
          className="position-absolute buttonUser"
        >
          <FaUsers></FaUsers>
        </h5>
        <h5 className="border-bottom pb-2 w-100 pt-2 title1 text-center">
          <span>User Details</span>
        </h5>
      </div>

      <div className="custom-user-details-height ">
        <>
          {userData == null ? (
            <div className="text-center text-primary  mt-5">
              Please select a user to view details{" "}
            </div>
          ) : (
            <div className=" px-4 pt-5 pb-5  ">
              <div className=" h-100 d-flex flex-column align-items-center">
                <div
                  style={{ width: "260px" }}
                  className="  rounded  rounded-5 userProfilePic"
                >
                  <img
                    className="w-100 rounded-5"
                    src={userData?.avatar}
                    alt=""
                  />
                </div>
              </div>

              <div className="  h-100 mt-5 w-100 ">
                <div className="w-100 ">

                  <div className="d-flex mb-3 custom-shadow">
                    <span className="userInfoTitle d-flex justify-content-center align-items-center  rounded-start  ">
                      Name:{" "}
                    </span>
                    <span className=" p-2 userInfoData rounded-end w-100">
                      {userData?.profile?.firstName}{" "}
                      {userData?.profile?.lastName} (
                      {userData?.profile?.username})
                    </span>
                  </div>

                  <div className="d-flex mb-3 custom-shadow">
                    <span className=" userInfoTitle d-flex justify-content-center align-items-center  rounded-start ">
                      Position:{" "}
                    </span>
                    <span className=" p-2 userInfoData rounded-end w-100">
                      {userData?.jobTitle}
                    </span>
                  </div>

                  <div className="d-flex w-100 rounded mb-3 custom-shadow">
                    <span className="userInfoTitle d-flex justify-content-center align-items-center  rounded-start   ">
                      Email:{" "}
                    </span>
                    <span className=" p-2 userInfoData rounded-end w-100">
                      {userData?.profile?.email}
                    </span>
                  </div>

                  <div className="d-flex mb-3 custom-shadow">
                    <span className=" userInfoTitle d-flex justify-content-center align-items-center  rounded-start   ">
                      Bio:{" "}
                    </span>
                    <span className=" p-2 userInfoData  w-100">
                      {userData?.Bio}
                    </span>
                  </div>
                  <div>
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center  ">
                      <p className="m-0 p-0"> Created at: </p>{" "}
                      <div className="flex-grow-1 ">
                        <hr className=" border-danger ms-2 mb-0 mt-0 mt-sm-4 " />
                        <div className=" d-flex justify-content-between ms-2">
                          <div className="mx-2">
                            <span className="date_time">Date:</span>{" "}
                            {userData?.createdAt.slice(0, 10)}
                          </div>
                          <div className="mx-2">
                            <span className="date_time">Time:</span>{" "}
                            {convertTo12HourFormat(
                              userData?.createdAt.slice(11, 19)
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
}
