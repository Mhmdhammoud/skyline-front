import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styles from '../../styles/about-us.module.css';
const AboutSection = () => {
  return (
    <Grid container>
      <Grid item xs={6} className={styles.skylineContainer}></Grid>
      <Grid
        item
        container
        xs={6}
        direction="column"
        className={styles.aboutContainer}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography>ABOUT US</Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
