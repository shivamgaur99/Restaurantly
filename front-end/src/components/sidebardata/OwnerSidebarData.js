import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as GoIcons from 'react-icons/go'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import * as RiIcons from 'react-icons/ri'
import * as CgIcons from 'react-icons/cg'

export const OwnerSidebarData = [
  {
    title: 'Revenue',
    path: '/revenue',
    icon: <GoIcons.GoGraph />,
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
    title: 'Menu',
    path: '/menu',
    icon: <MdIcons.MdRestaurantMenu />,
    cName: 'nav-text',
  },
  {
    title: 'Table',
    path: '/ownertables',
    icon: <SiIcons.SiAirtable />,
    cName: 'nav-text',
  },
  {
    title: 'FeedBack',
    path: '/feedback',
    icon: <RiIcons.RiFeedbackLine />,
    cName: 'nav-text',
  },
  {
    title: 'Update Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
]
