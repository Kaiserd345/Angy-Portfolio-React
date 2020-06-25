import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Portfolio',
        path: '/portfolio'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    }
]

const socialLinks = [
    {
        title: 'Be',
        path: '/'
    },
    {
        title: 'P',
        path: '/'
    },
    {
        title: 'Li',
        path: '/'
    }
]

export default function Navigation ({user}) {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <nav className="site-navigation">
            <span className="menu-title" >Angy Nicko</span>
            {/* <ul>
                { socialLinks.map((link, index) => (
                    <li key={index}>
                        {link.title}
                    </li>
                ))

                }
            </ul> */}
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
                
                </ul>
                <span className="menu-avatar-container">
                    <Avatar size={32} icon={<UserOutlined />} />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
                
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)}/>

        </nav>
    )
}