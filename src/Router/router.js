import { createBrowserRouter } from "react-router";
import App from "../App";
import GetApprovedOnline from "../Component/Get Approve/GetApproved";
import Locations from "../Component/Location/AllLocation";
import Terms from "../Component/Terms/Terms";
import FindHome from "../Component/findHome page/FindAHome";
import AboutUs from "../Component/About/AboutUs";

export const router = createBrowserRouter([
    {index : true , Component : App},
    {
        path : "/approve" , Component : GetApprovedOnline
    },
    {
        path : "/allLocation" , Component :Locations
    },
    {
        path : "/terms" , Component :Terms
    },
    {
        path : "/homeFind" , Component :FindHome
    },
    {
        path : "/aboutUs" , Component :AboutUs
    },

]) 