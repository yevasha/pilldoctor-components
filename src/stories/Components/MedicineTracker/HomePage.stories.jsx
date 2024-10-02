import React from "react";
import HomePage from ".MedicineTracker/HomePage";

export default {
    title: "FRK/Components/HomePage",
    component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
