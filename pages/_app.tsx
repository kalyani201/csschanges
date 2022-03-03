import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Layout from '../components/layouts';

import { AuthProvider } from '../context/state';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [token, setToken] = useState<string | undefined>();
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/');
    setToken(undefined);
  };
  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken) setToken(localToken);
  }, []);
  return (
    <AuthProvider>
      <Layout token={token} logout={logout}>
        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"/>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"></script>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
