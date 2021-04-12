//@ts-nocheck
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import { Header as Navbar } from '../components/index';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ProjectCardLeft from '../components/Portfolio/ProjectCardLeft';
import ProjectCardRight from '../components/Portfolio/ProjectCardRight';
import Image from 'next/image';
import { Container, IconButton } from '@material-ui/core';
import axios from 'axios';
export const getStaticProps = async () => {
  const res = await axios({
    method: 'GET',
    url:
      'https://api.muallemi.com/api/view/viewAllInstructors?page=0&platform=web',
  });
  const {
    data: { api },
  } = res;
  return {
    props: {
      projects: api,
    },
  };
};

const index = ({ projects }) => {
  return (
    <>
      <Navbar />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        className="porfolio-banner"
        maxWidth="xl"
      >
        <IconButton>
          <InstagramIcon
            style={{
              color: '#d99b39',
              marginBottom: '60px',
              marginLeft: '20px',
            }}
            fontSize="large"
          />
        </IconButton>
        <IconButton>
          <FacebookIcon
            style={{
              color: '#d99b39',
              marginBottom: '60px',
              marginLeft: '20px',
            }}
            fontSize="large"
          />
        </IconButton>
        <IconButton>
          <TwitterIcon
            style={{
              color: '#d99b39',
              marginBottom: '60px',
              marginLeft: '20px',
            }}
            fontSize="large"
          />
        </IconButton>
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
