import React from "react";
import ".MedicineTracker/MedicineReminder.modules.css"; 

const MedicineReminder = () => {
    const reminders = [
        { name: "Mylanian 20 mg", time: "0800", instruction: "After Meal" },
        { name: "Mylanian 20 mg", time: "1200", instruction: "After Meal" },
        { name: "Mylanian 20 mg", time: "1900", instruction: "After Meal" },
    ];

    return (
        <div className="reminder-list">
            {reminders.map((reminder, index) => (
                <div className="reminder-item" key={index}>
                    <span className="medicine-name">{reminder.name}</span>
                    <span className="medicine-instruction">{reminder.instruction}</span>
                    <span className="medicine-time">{reminder.time}</span>
                </div>
            ))}
        </div>
    );
};

export default MedicineReminder;
