import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
    static async getInitialProps ({ renderPage }) {
        const page = renderPage();
        const styles = renderStatic(() => page.html || page.errorHtml);
        return { ...page, ...styles }
    }

    constructor (props) {
        super(props);
        // const { __NEXT_DATA__, ids } = props;
        // if (ids) {
        //     __NEXT_DATA__.ids = this.props.ids
        // }
    }


    render() {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}


/**
 * Custom <Document> in _document.js
 *
 * - 在服务器端呈现
 * - 用于更改初始服务器端呈现的文档标记
 * - 通常用于为css-in-js库实现服务器端渲染，如样式组件(styled-components)，glamorous或 emotion。默认情况下，styled-jsx包含在Next.js中。
 *
 *
 * @param key  -- doesn't work
 * 为避免重复标记，您<head>可以使用该key属性，这将确保标记仅呈现一次：
 *
 *
 * Reference
 *
 * [glamorous](https://github.com/threepointone/glamor/blob/master/docs/server.md)
 * **/