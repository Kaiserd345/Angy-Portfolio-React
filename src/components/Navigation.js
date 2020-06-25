import React from 'react';
import { Link } from 'react-router-dom'

export default function Navigation () {
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
    return (
        <nav className="site-navigation">
            <span clasName="menu-title" >Angy Nicko</span>
            <ul>
                { socialLinks.map((link, index) => (
                    <li key={index}>
                        {link.title}
                    </li>
                ))

                }
            </ul>
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                <Link to={link.path}>{link.title}</Link>
                </li>
            ))}
            
            </ul>
        </nav>
    )
}