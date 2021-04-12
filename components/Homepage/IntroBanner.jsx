import { Container, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import styles from '../../styles/introSection.module.css';
import Image from 'next/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const IntroBanner = () => {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Grid container>
        <Grid item xs={6} className={styles.buildingContainer}></Grid>
        <Grid item container xs={6} justify="center" alignItems="center">
          <Image src="/logo.png" width="400" height="500" />
          <Grid item container xs={12} justify="center">
            <IconButton>
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IntroBanner;
