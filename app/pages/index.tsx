import Head from 'next/head';
import React from 'react';

class Index extends React.Component {
    public render() {
        return (
            <div style={{ textAlign: 'center', margin: '0 20px' }}>
                <Head>
                    <title>首页</title>
                </Head>
                <h1>hello nextjs</h1>
            </div>
        );
    }
}

export default Index
