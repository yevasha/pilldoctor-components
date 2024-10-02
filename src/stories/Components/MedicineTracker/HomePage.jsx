import React from "react";
import Calendar from "./PillCalendar/Calender"; 
import "./HomePage.modules.css"; 
import MedicineReminder from "./MedicineReminder"; 

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <h1>Pill</h1>
                <h1>Doctor</h1>
            </header>
            <div className="personalized-reminder">
                <h2>Your Personalized Pill Reminder</h2>
                <Calendar />
            </div>
            <div className="daily-medicine">
                <h2>Your Daily Medicine</h2>
                <MedicineReminder />
            </div>
        </div>
    );
};

export default HomePage;
