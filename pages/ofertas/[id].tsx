import { useRouter } from "next/router";
import { Container } from "@mui/system";
import Box from '@mui/material/Box'

// import { useTheme } from '@mui/material/styles';

import OfferProductCard from "../../src/OfferProductCard";
import OfferProductAdditionalInfo from "../../src/OfferProductAdditionalInfo";

export default function PostPage() {
    const router = useRouter();
    return (
        <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
            <Box>
                <OfferProductCard />
                <OfferProductAdditionalInfo />
            </Box>
        </Container>
    );
}
