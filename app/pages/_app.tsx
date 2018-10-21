import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        console.log(router);
        return { pageProps }
    }

    //覆盖componentDidCatch
    componentDidCatch (error, errorInfo) {
        console.log('CUSTOM ERROR HANDLING', error);
        // This is needed to render errors correctly in development / production
        super.componentDidCatch(error, errorInfo)
    }

    render () {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}

class Layout extends React.Component {
    render () {
        const {children} = this.props;
        return <div className='layout'>
            <ul>
                <li>home</li>
                <li>login</li>
                <li>register</li>
            </ul>
            {children}
        </div>
    }
}

/**
 * Custom <App> in _app.js
 *
 * - 在页面更改之间保持布局
 * - 导航页面时保持状态
 * - 使用自定义错误处理 componentDidCatch
 * - 将其他数据注入页面（例如，通过处理GraphQL查询）
 *
 * **/