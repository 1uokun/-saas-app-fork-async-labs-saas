import Head from 'next/head';
import React from 'react';

class Login extends React.Component<{ next?: string }> {
  public static getInitialProps({ query }) {
    const { next } = query;

    return { next };
  }

  public render() {
    return (
      <div style={{ textAlign: 'center', margin: '0 20px' }}>
        <Head>
          <title>Log in to SaaS by Async</title>
          <meta name="description" content="Login page for saas-app.async-await.com" />
        </Head>
        <br />
        <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: 400 }}>Log in</p>
        <p>You’ll be logged in for 14 days unless you log out manually.</p>
        <br />

      </div>
    );
  }
}

export default Login
