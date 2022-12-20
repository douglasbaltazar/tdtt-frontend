import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductCard from "../ProductCard";
import { Product } from "../../../types/Product";
import EmptyProducts from "../EmptyProducts";

type Props = {
    productList: Product[];
};
export default function ProductList({ productList }: Props) {
    // console.log(productList);
    return (
        <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
            >
                Ultimas Ofertas
            </Typography>
            <Grid container spacing={1} sx={{ paddingTop: 2}}>
                {productList && productList.length > 0 ? (
                    productList.map((product: Product) => (
                        <Grid item xs={4} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                ) : (
                    <EmptyProducts />
                )}
            </Grid>
        </Container>
    );
}
