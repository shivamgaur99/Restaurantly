import React from 'react'
import * as GiIcons from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi'
import * as CgIcons from 'react-icons/cg'

export const ChefSidebarData = [
  {
    title: 'Show Orders',
    path: '/cheforders',
    icon: <BiIcons.BiFoodMenu />,
    cName: 'nav-text',
  },
  {
    title: 'Stock',
    path: '/stocks',
    icon: <GiIcons.GiStockpiles />,
    cName: 'nav-text',
  },
  {
    title: 'Update Profile',
    path: '/profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
]
