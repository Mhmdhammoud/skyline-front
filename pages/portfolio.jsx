//@ts-nocheck
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { Header as Navbar } from '../components/index';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ProjectCardLeft from '../components/Portfolio/ProjectCardLeft';
import ProjectCardRight from '../components/Portfolio/ProjectCardRight';
import Image from 'next/image';
import { Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  icons: {
    color: '#d99b39',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  loader: {
    position: 'inherit',
  },
}));
const index = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        alignItems="flex-end"
        className="porfolio-banner"
        maxWidth="xl"
      >
        <InstagramIcon className={classes.icons} />
        <FacebookIcon className={classes.icons} />
        <TwitterIcon className={classes.icons} />
      </Container>
      <img src="/Rectangle 57.png" alt="Rectangle" />

      <ProjectCardLeft />
      <ProjectCardRight />
      <ProjectCardLeft />
      <ProjectCardRight />
    </>
  );
};

export default index;
