import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Login',
        // path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Users',
                path: '/',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Signup',
        // path: '/',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Signup',
                path: '/signup',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Signup',
                path: '/signup',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
        ]
    },
];