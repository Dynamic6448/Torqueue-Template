import { useState } from "react";
import LoginAlert from "../components/LoginAlert";
import "../index.css";
import { firebaseConfig } from "../keys";
import { initializeApp } from "firebase/app";
import DashboardContent from "../components/DashboardContent";
const usingRecommendedAuth = true;

export default function Dashboard() {
    const [authorized, setAuthorized] = useState(false);
    initializeApp(firebaseConfig);

    if (usingRecommendedAuth) {
        return (
            <>
                <LoginAlert setAuthorized={setAuthorized} />
                {authorized ? <DashboardContent /> : <></>}
            </>
        );
    } else {
        return <DashboardContent />;
    }
}
