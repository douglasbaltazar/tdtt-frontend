import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";

import ProductList from "../src/ProductList";
import { Product } from "../types/Product";

export const getStaticProps: GetServerSideProps = async () => {
    const data = await fetch("http://localhost:8081/api/v1/products/");
    const products: Product[] = await data.json();
    // console.log(products);
    if (!products) {
        return {
            notFound: true,
        };
    }
    return {
        props: { products },
    };
};
export default function Home({ products }: { products: Product[] }) {
    return (
        <>
            <Head>
                <title>Tem de Tudo Tchelo</title>
                <meta name="description" content="Tem de tudo Tchelo" />
                <link rel="icon" href="/logo.jpg" />
            </Head>

            <ProductList productList={products} />
        </>
    );
}
