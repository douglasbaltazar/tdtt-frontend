import Head from "next/head";

import ProductList from "../src/ProductList";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tem de Tudo Tchelo</title>
                <meta name="description" content="Tem de tudo Tchelo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProductList />
        </>
    );
}
