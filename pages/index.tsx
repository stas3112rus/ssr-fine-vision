import * as React from 'react';
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Head from 'next/head'
import Field from "../src/components/Field/Field";

interface IData { 
    data: {
      title: string
    }  
}


const Home: NextPage<IData> = (data) => {

  return (
    <div>
      <Head>
        <title>Главная страница</title>
        <meta name="description" content="Описание главной страницы" />
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

          <h1>Главная страница </h1>
          <h2>title fetch {data.data.title}</h2>
          
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
           <Field/>

        </Box>
      </Container>
    </div>
    
  );
};

export default Home;



export async function getServerSideProps() {
  const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1'))?.json()

  return {
    props: {
      data
    }
  }
}