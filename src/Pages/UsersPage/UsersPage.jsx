import { useEffect, useState } from "react";
import axios from "axios";
import profile from "../../assets/default.png";
import SingleUsers from "../SingleUsers/SingleUsers";
import Loader from "../../Components/Loader";


export default function UsersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allUserData, setAllUserData] = useState([]);
  const [errorMsg,setErrorMsg]=useState(null)
  useEffect(() => {
    const allUsers = async () => {
    try {
      setErrorMsg(null)
      const res = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      console.log(res.status)
      const data = res.data;
      //console.log(data);
      setAllUserData(data);
      setIsLoading(false);
    } catch (error) {
      if(error.response.data){
        setIsLoading(false);
        setErrorMsg(error.response.data)
      }
    }
    };
    allUsers();
  }, []);

  const handleImageError = (index) => {
    const updatedImage = [...allUserData];
    updatedImage[index].avatar = profile;
    setAllUserData(updatedImage);
  };

  const [singleUser, setSingleUser] = useState(null);

  const setUserID = (user) => {
    setSingleUser(user);
  };

const showUserSlide=()=>{
  const slide=document.getElementById('allUser')
  slide.classList.toggle('active')
}
const [userIndex,setUserIndex]=useState(null)
  return (
    <div className="customHeight ">
      <div className="d-flex  position-relative h-100 ">
        <div 
        id='allUser'
         
          className=" alluserBox active   text-center px-1 pb-2 shadow-sm"
        >
        <h5 className="border-bottom pb-2 pt-2 title1  ">All Users</h5>

          {isLoading ? (
            <>
<Loader></Loader>
            </>
          ) : (
            <div className=" customHeight2 ">
              {errorMsg && <div>{errorMsg}</div>}
              {allUserData.map((user, index) => (
                <div
                style={userIndex===index?{backgroundColor:'rgba(234, 100, 22, 0.765)',color:'white'}:{}}
                  key={index}
                  onClick={() => {
                    showUserSlide() 
                    setUserIndex(index)
                    setUserID(user)}}
                  className=" userInfoContainer rounded-2 shadow-sm d-flex position-relative align-items-center  my-2 p-2"
                >
                  <div className="profileImgContainer z-5">
                    <img
                      className="profileImage"
                      alt="Profile Image"
                      src={user.avatar}
                      onError={() => handleImageError(index)}
                    />
                  </div>
                  <div className="profileName">
                    {" "}
                    {user?.profile?.firstName + " "}
                    {user?.profile?.lastName}{" "}
                  </div>
                  <div className="position-absolute h-100 layer "></div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="shadow-sm user-details-box px-1 w-100 ">
          {/* <Outlet></Outlet> */}
          <SingleUsers showUserSlide={showUserSlide} userData={singleUser}></SingleUsers>
        </div>
      </div>
    </div>
  );
}
