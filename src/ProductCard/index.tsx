import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../../types/Product";
import Link from "next/link";
import { CardActionArea } from "@mui/material";
import { diffMinutes } from "../../utils/utils";

type Props = {
    product: Product;
};
export default function ProductCard({ product }: Props) {
    return (
        <Card
            sx={{
                maxWidth: 315,
                borderRadius: 1,
                minHeight: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            elevation={5}
        >
            <CardActionArea LinkComponent={Link} href={`ofertas/${product.id}`}>
                <CardMedia
                    component="img"
                    sx={{
                        objectFit: "contain",
                    }}
                    alt={product.productName}
                    height="140"
                    image={product.imgCover}
                />
                <CardContent sx={{ height: "100%" }}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        fontSize={12}
                    >
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
            </CardActionArea>
            <CardActions sx={{
                display: 'flex',
                
            }}>
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
                    fontWeight={700}
                    justifyContent={"flex-end"}
                >
                    {diffMinutes(product.created_at)}
                </Typography>
            </Box>
        </Card>
    );
}
