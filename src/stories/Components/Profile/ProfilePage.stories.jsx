import React from 'react';
import ProfilePage from './ProfilePage';

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
};

// Default Story
const Template = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
