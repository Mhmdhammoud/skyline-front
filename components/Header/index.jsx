//@ts-nocheck
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

const Header = () => {
  const links = [
    { text: 'About US', href: '/#aboutus' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Services', href: '/#services' },
  ];
  return (
    <Grid className="navbar">
      {links ? (
        links.map((link, index) => {
          return (
            <li key={index} className="navbar-item">
              {link.text === 'Portfolio' ? (
                <Link href={`${link.href}`} className="link-value">
                  {link.text.toUpperCase()}
                </Link>
              ) : (
                <a href={`${link.href}`} className="link-value" id={link.text}>
                  {link.text.toUpperCase()}
                </a>
              )}
            </li>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </Grid>
  );
};

export default Header;
