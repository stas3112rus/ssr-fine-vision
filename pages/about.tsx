import * as React from 'react';
import type { NextPage } from 'next';
import { useState, useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Head from 'next/head'
import { Context } from '../src/ThemeContext';

interface IData { 
  data: {
    title: string
  }  
}


const About: NextPage<IData>  = (data) => {
  
  const [context] = useContext(Context);


  return (
    <div>
      <Head>
        <title>Страница о компании</title>
        <meta name="description" content="Описание компании" />
      </Head>

      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

        <h1>About страница </h1>
        <h2>Текущая тема {context}</h2>
        <h2>title fetch {data.data.title}</h2>

          <Typography variant="h4" component="h1" gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Box maxWidth="sm">
            <Button variant="contained" component={Link} noLinkStyle href="/">
              Go to the home page
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default About;


export async function getServerSideProps() {
  const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/12'))?.json()

  return {
    props: {
      data
    }
  }
}