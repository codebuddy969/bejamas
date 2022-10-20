import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';

import fetch from 'node-fetch';

import { Provider } from 'react-redux';

import { ServerDataContext } from '@/utilities/contexts/serverData';

import { iServerData } from '@/utilities/interfaces/serverData';

import {store} from '@/utilities/redux/store';

import Navigation from '@/components/navigation';
import Featured from '@/components/index/featured';
import About from '@/components/index/about';
import Additional from '@/components/index/additional';
import ProductsHeadline from '@/components/index/products-headline';
import Filters from '@/components/index/filters';
import Products from '@/components/index/products';

export async function getServerSideProps() {

  const response = await fetch(`${process.env.API}/api/home`);
  const data = await response.json();

  return {
      props: { data },
  }
}

const Home: NextPage<iServerData> = ({ data }) => {

  const [filterVisibility, setFilterVisibility] = useState(false);

  return (
    <ServerDataContext.Provider value={data}>
      <Provider store={store}>
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Navigation />
            <Featured />
            
            <section className={styles.info}>
              <About />
              <Additional />
            </section>

            <ProductsHeadline setFilterVisibility={() => setFilterVisibility(!filterVisibility)} />

            <section className={styles.products}>
              <Filters visible={filterVisibility} setFilterVisibility={() => setFilterVisibility(!filterVisibility)} />
              <Products />
            </section>
            
          </main>

        </div>
      </Provider>
    </ServerDataContext.Provider>
  )
}

export default Home
