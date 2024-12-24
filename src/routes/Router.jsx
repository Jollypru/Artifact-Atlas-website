import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../Pages/AddArtifacts/AddArtifacts";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Components/Login";
import Register from "../Components/Register";
import MyProfile from "../Pages/MyProfile/MyProfile";
import LikedArtifacts from "../Pages/MyProfile/LikedArtifacts";
import ArtifactDetails from "../Pages/AllArtifacts/ArtifactDetails";
import MyArtifacts from "../Pages/MyProfile/MyArtifacts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'all-Artifacts',
            element: <AllArtifacts></AllArtifacts>
        },
        {
            path:'add-Artifacts',
            element: <PrivateRoutes><AddArtifacts></AddArtifacts></PrivateRoutes>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'myProfile',
            element: <MyProfile></MyProfile>
        },
        {
            path: 'myArtifacts',
            element: <PrivateRoutes><MyArtifacts></MyArtifacts></PrivateRoutes>
        },
        {
            path: 'likedArtifacts',
            element: <PrivateRoutes><LikedArtifacts></LikedArtifacts></PrivateRoutes>
        },
        {
            path: 'artifactDetails/:id',
            element: <PrivateRoutes><ArtifactDetails></ArtifactDetails></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/artifacts/${params.id}`)
        },
 
      ]
    },
  ]);

  export default router;