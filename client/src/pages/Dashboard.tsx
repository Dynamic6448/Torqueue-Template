import { useState } from 'react';
import LoginAlert from '../components/LoginAlert';
import '../index.css';
import { firebaseConfig } from '../keys';
import { initializeApp } from 'firebase/app';
import DashboardContent from '../components/DashboardContent';
import axios from 'axios';
const usingRecommendedAuth = true;

export default function Dashboard() {
    console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY);
    const [authorized, setAuthorized] = useState(false);
    initializeApp(firebaseConfig);

    console.log('aaaaaaaaaaaaaa');
    axios.get('http://localhost:3000/.netlify/functions/editPart').then((res) => {
        console.log('res', res);
    });

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
