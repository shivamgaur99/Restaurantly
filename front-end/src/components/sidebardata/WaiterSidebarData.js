import React from 'react'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import * as CgIcons from 'react-icons/cg'

export const WaiterSidebarData = [
  {
    title: 'Show Orders',
    path: '/waiterorders',
    icon: <BiIcons.BiFoodMenu />,
    cName: 'nav-text',
  },
  {
    title: 'Accept Payment',
    path: '/acceptpayment',
    icon: <MdIcons.MdPayment />,
    cName: 'nav-text',
  },
  {
    title: 'Table',
    path: '/ownertables',
    icon: <SiIcons.SiAirtable />,
    cName: 'nav-text',
  },
  {
    title: 'Update Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
]
