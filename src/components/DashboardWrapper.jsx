import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import userServices from "../services/userServices"
import '../styles.css'

export async function loader(){



    //get current logged user
    const user=await userServices.getCurrentUser();

    //return user
    return {user};

}


const DashboardWrapper = () => {
    const navigate=useNavigate();

    const {user}=useLoaderData();

    //console.log(user.data.user);

    const handleLogout = () => {
        // log the user out
        userServices.logout()
            .then(() => {
                alert('You have been logged out!');
    
                // redirect to the login page
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            })
            .catch((error) => {
                console.error(error);
            });
    }


  return (
    <div className="container-fluid bgImage">
        <p>WELCOME {user ? user.data.user.name :'Guest'}! </p>

            <div>
                <Outlet/>
            </div>
            <div className="d-flex justify-content-end mt-3">
        <button onClick={handleLogout} variant="danger">
          Logout
        </button>


        
      </div>
    </div>

  )
}

export default DashboardWrapper