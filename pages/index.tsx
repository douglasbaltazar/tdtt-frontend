import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Carousel from "react-material-ui-carousel"
import ProductList from "../src/ProductList";
import { Product } from "../types/Product";
import { Paper, Button } from '@mui/material'
import Image from "next/image";

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
type Item = {
    name: string;
    description: string;
    linkImg: string;
}
export default function Home({ products }: { products: Product[] }) {
    function items() {
        
        var items = [
            {
                name: "Teste",
                description: "Teste Desc",
                linkImg: '/slide1.png'
            },
            {
                name: "Teste 2",
                description: "Teste Desc 2",
                linkImg: '/slide2.png'
            }
        ]
        return (
            <Carousel>
                {
                    items.map((item: Item, i) => <Item2 key={i} item={item} />)
                }
            </Carousel>
        )
    }
    function Item2(props: {item: Item }) {
        return (
            <Paper sx={{
                minHeight: '380px',
                minWidth: '1080px'
            }}>
                
                <Image src={props.item.linkImg} alt={"Teste"} fill={true} style={{ objectFit: 'contain' }}  />
            </Paper>
        )
    }
    return (
        <>
            <Head>
                <title>Tem de Tudo Tchelo</title>
                <meta name="description" content="Tem de tudo Tchelo" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            {items()}
            <ProductList productList={products} />
        </>
    );
}
