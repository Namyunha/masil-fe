import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileTab from './ProfileTab';

function ProfileHeader() {
  return (
    <div className="flex flex-col bg-bg_white mb-3 sticky top-[30px] z-float">
      <ProfileInfo />
      <ProfileTab />
    </div>
  );
}

export default ProfileHeader;
