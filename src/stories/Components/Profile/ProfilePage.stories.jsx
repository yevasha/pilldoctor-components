import React from 'react';
import ProfilePage from './ProfilePage';

export default {
  title: 'FRK/Components/Profile/ProfilePage',
  component: ProfilePage,
};

const Template = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
