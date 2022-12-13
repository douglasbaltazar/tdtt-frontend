import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Product from "../../types/Product";
import Link from "next/link";

type Props = {
    product: Product;
};
export default function ProductCard({ product }: Props) {
    return (
        <Link href={`ofertas/${product.id}`}>
            <Card sx={{ maxWidth: 315, borderRadius: 1 }}>
                <CardMedia
                    component="img"
                    alt={product.productName}
                    height="140"
                    image={product.imgCover}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A partir de
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {product.newPrice.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Typography>
                </CardContent>
                <CardActions sx={{ paddingX: 4 }}>
                    <Link href={`${product.link}`}>
                        <Button
                            size="small"
                            color="error"
                            variant="contained"
                            fullWidth
                        >
                            Ir à Loja
                        </Button>
                    </Link>
                </CardActions>
                <Box display="flex">
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography
                        sx={{ padding: 1 }}
                        fontSize={10}
                        justifyContent={"flex-end"}
                    >
                        Há X minutos
                    </Typography>
                </Box>
            </Card>
        </Link>
    );
}
