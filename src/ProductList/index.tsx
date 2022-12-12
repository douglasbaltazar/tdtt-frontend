import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductCard from "../ProductCard";

export default function ProductList() {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
            >
                Ultimas Ofertas
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
                <Grid item xs={4}>
                    <ProductCard />
                </Grid>
            </Grid>
        </Container>
    );
}
