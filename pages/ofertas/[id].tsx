import { useRouter } from "next/router";
import { Container } from "@mui/system";
import Box from '@mui/material/Box'

// import { useTheme } from '@mui/material/styles';

import OfferProductCard from "../../src/OfferProductCard";
import OfferProductAdditionalInfo from "../../src/OfferProductAdditionalInfo";
import { GetServerSideProps } from "next";
import Product from "../../types/Product";

export async function getStaticPaths() {
    const data = await fetch('http://localhost:8081/api/v1/products/')
    const products = await data.json()
    const paths = products.map((product: Product) => ({
        params: {
            id: product.id.toString()
        },
    }))
    return { paths, fallback: false } 
}

export const getStaticProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    console.log(id);
    const data = await fetch(`http://localhost:8081/api/v1/products/${id}`)
    const product: Product = await data.json()
    console.log(product);
    if(!product) {
        return {
            notFound: true,
        };
    }
    return {
        props: { product }
    }
}
export default function PostPage({product}: { product: Product}) {
    const router = useRouter();
    return (
        <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
            <Box>
                <OfferProductCard product={product} />
                <OfferProductAdditionalInfo product={product} />
            </Box>
        </Container>
    );
}
