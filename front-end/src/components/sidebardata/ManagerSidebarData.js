import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'
import * as SiIcons from 'react-icons/si'
import * as RiIcons from 'react-icons/ri'
import * as CgIcons from 'react-icons/cg'

export const ManagerSidebarData = [
  {
    title: 'Assign Chef',
    path: '/managechef',
    icon: <SiIcons.SiCodechef />,
    cName: 'nav-text',
  },
  {
    title: 'Add Employee',
    path: '/owneraddemployee',
    icon: <FaIcons.FaUserPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Stock',
    path: '/stocks',
    icon: <GiIcons.GiStockpiles />,
    cName: 'nav-text',
  },
  {
    title: 'Assign Waiter',
    path: '/assignwaiter',
    icon: <RiIcons.RiUserShared2Fill />,
    cName: 'nav-text',
  },
  {
    title: 'Update Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
]
