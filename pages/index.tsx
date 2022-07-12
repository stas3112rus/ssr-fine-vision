import React, { useContext } from "react";
import { Context } from "../src/ThemeContext";
import type { GetServerSideProps, NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Image from '../modules/image/Image';
import Head from 'next/head'
import Field from "../src/components/Field/Field";
import {IData} from "../src/types/types";

const Home: NextPage<IData> = (data) => {

  const context = useContext(Context);  

  

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
          <h2>Получено асинхронно: {data.data.title}</h2>
          <h2>Размер шрифта: {context?.fontSize.size}</h2>
          <h2>Mode: {context?.fineVisionMode.mode}</h2>
          <h2>Картинки: {context?.showImage.show}</h2>
          <Image 
            alt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo nisi harum, eius, provident, quae temporibus aliquam quos ab dolorum quaerat. Reprehenderit nemo iste architecto asperiores assumenda quam quisquam debitis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo nisi harum, eius, provident, quae temporibus aliquam quos ab dolorum quaerat. Reprehenderit nemo iste architecto asperiores assumenda quam quisquam debitis? " 
            url="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80"
            />


          <Link href="/about" color="secondary" className="link__main-page">
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
  const data: IData = await (await fetch('https://jsonplaceholder.typicode.com/todos/1'))?.json()


  return {
    props: {
      data     
    }
  }
}

