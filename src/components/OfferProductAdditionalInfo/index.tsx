import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Product } from "types/Product";

type Props = {
    product: Product;
};
export default function OfferProductAdditionalInfo({ product }: Props) {
    return (
        <Card sx={{ display: "flex", marginTop: 4 }} elevation={5}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                        Informações Adicionais
                    </Typography>

                    <Typography component="div" variant="body2">
                        {product.additionalInfo}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}
