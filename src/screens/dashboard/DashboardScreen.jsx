/* eslint-disable no-unused-vars */
// import { useAuth0 } from "@auth0/auth0-react";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

const Dashboard = () => {
  // const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  // if(isAuthenticated){
  //   alert('Logged in!')
  // }
  return (
    <div className="content-area">
      {/* <AreaTop /> */}
      <AreaCards />
      <AreaCharts />
      {/* <AreaTable /> */}
    </div>
  );
};

export default Dashboard;
