import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Divider from '@material-ui/core/Divider';
import Image from 'next/image';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(120),
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    // backgroundImage: 'linear-gradient(to top , white 70%, grey 100%)',
    marginBottom: theme.spacing(4),
  },
  projectName: {
    marginBottom: theme.spacing(3),
    width: '90%',
    color: '#707070',
  },
  projectDescription: {
    textAlign: 'justify',
    width: '400px',
  },
  divider: {
    marginTop: theme.spacing(2),
    width: '400px',
  },
  viewButton: {
    color: '#d99b39',
    marginLeft: theme.spacing(2),
  },
  img: {
    boxShadow: '10px 10px 43px -20px rgba(0,0,0,0.63)',
    borderRadius: theme.spacing(1),
  },
  viewProject: {
    marginTop: theme.spacing(5),
  },
  projectDetails: {
    marginLeft: theme.spacing(20),
  },
}));

const ProjectCard = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} alignItems="center" className={classes.root}>
      <Grid item xs={4}>
        <Image
          src="/building.png"
          alt=""
          className={classes.img}
          width="600"
          height="800"
        />
      </Grid>

      <Grid item xs={5} className={classes.projectDetails}>
        <Typography variant="h4" className={classes.projectName}>
          Lorem Ipsum
        </Typography>
        <Typography variant="h6" className={classes.projectDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab, eos
          quibusdam accusantium animi rem laudantium quidem aperiam
          exercitationem vitae hic dolorem illo minima voluptas, beatae,
          perspiciatis tempore facere. Sapiente.
        </Typography>
        <Divider className={classes.divider} />
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          className={classes.viewProject}
        >
          <Link
            href={`/projects/5f84713f593a3c4058ab845d`}
            style={{ textDecoration: 'none' }}
          >
            <Typography variant="h4" style={{ color: '#d99b39' }}>
              View Project
            </Typography>
          </Link>
          <Link href={`/projects/5f84713f593a3c4058ab845d`}>
            <NavigateNextIcon className={classes.viewButton} />
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default ProjectCard;
