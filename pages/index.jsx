import React from 'react';
import Head from 'next/head';
//@ts-ignore
import { Container, Grid } from '@material-ui/core';
import {
  Footer,
  Header,
  IntroSection,
  AboutSection,
} from '../components/index';
import Image from 'next/image';
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | Skyline</title>
      </Head>
      <Header />
      <Container maxWidth="xl" style={{ minHeight: '100vh', padding: 0 }}>
        <IntroSection />
        <Image src="/Rectangle 57.png" width="1919" height="50" />
      </Container>
      <Container maxWidth="xl" className="home-container">
        <section id="about-us">
          <AboutSection />
        </section>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
