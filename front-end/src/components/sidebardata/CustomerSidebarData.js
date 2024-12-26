import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import * as CgIcons from 'react-icons/cg'

export const CustomerSidebarData = [
  {
    title: 'Menu',
    path: '/customermenu',
    icon: <MdIcons.MdRestaurantMenu />,
    cName: 'nav-text',
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <HiIcons.HiShoppingCart />,
    cName: 'nav-text',
  },
  {
    title: 'Previous Orders',
    path: '/orders',
    icon: <FaIcons.FaThList />,
    cName: 'nav-text',
  },
  {
    title: 'Table',
    path: '/ownertables',
    icon: <SiIcons.SiAirtable />,
    cName: 'nav-text',
  },
  {
    title: 'Give Feedback',
    path: '/acceptfeedback',
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text',
  },
  {
    title: 'Update Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
]
