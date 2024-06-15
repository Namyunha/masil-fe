'use client';

import { useState } from 'react';
import Button from '../Button';
import SideNavBar from '../SideNavBar/SideNavBar';

export default function HeaderNavButton() {
  const [isSideNavBarOpen, setIsSideNavBarOpen] = useState(false);

  const toggleSideNavBarHandler = () => {
    setIsSideNavBarOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="secondary"
        childrenType="iconOnly"
        iconName="menu"
        size="s"
        onClick={toggleSideNavBarHandler}
      />
      <SideNavBar
        isOpen={isSideNavBarOpen}
        closeHandler={toggleSideNavBarHandler}
      />
    </>
  );
}
