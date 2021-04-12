import React from 'react';
import Head from 'next/head';
//@ts-ignore
import { Container, Grid } from '@material-ui/core';
// import Header from '../components/Header/index';
// import Footer from '../components/Footer/index';
import { Footer, Header } from '../components/index';
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | Skyline</title>
      </Head>
      <Header />
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <h2>homepage</h2>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
