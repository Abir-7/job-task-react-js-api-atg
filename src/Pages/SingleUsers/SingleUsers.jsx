import axios from "axios";
import { useEffect, useState } from "react";


export default function SingleUsers({id}) {

    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
if(id){
    const allUsers = async () => {
        setIsLoading(true)
        const res = await axios.get(
          `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`
        );
        const data = res.data;
        console.log(data);
        setUserData(data);
        setIsLoading(false);
      };
      allUsers();
}
      }, [id]);

      console.log(userData)
  return (
   <div>
     <h5 className="border-bottom pb-2 pt-2 title1 text-center ">User Details</h5>
     <div>
     {isLoading?<><p>Loading....</p></>:<>{ !id ?<div className="text-center mt-5">Please select a user to view details </div>:<div>{userData?.profile?.username}</div>}</>}

     </div>
   </div>
  )
}
