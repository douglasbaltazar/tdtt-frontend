import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import { Product } from "../types/Product";
import CreateProductDialog from "../src/CreateProductDialog";

interface Column {
    // id: "name" | "code" | "population" | "size" | "density";
    id:
        | "id"
        | "productName"
        | "imgCover"
        | "newPrice"
        | "link"
        | "additionalInfo"
        | "created_at";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: "id", label: "ID", minWidth: 50 },
    {
        id: "productName",
        label: "Nome Produto",
        minWidth: 170,
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "imgCover",
        label: "Link Imagem",
        minWidth: 170,
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "newPrice",
        label: "Novo Preço",
        minWidth: 170,
        format: (value: number) => value.toFixed(2),
    },
    {
        id: "link",
        label: "Link para Enviar",
        minWidth: 170,
        format: (value: number) => value.toFixed(2),
    },
    {
        id: "additionalInfo",
        label: "Informação Adicional",
        minWidth: 170,
        format: (value: number) => value.toFixed(2),
    },
    {
        id: "created_at",
        label: "Criado há",
        minWidth: 170,
        format: (value: number) => value.toFixed(2),
    },
];

function createData(product: Product): Product {
    return {
        ...product,
    };
}

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

export default function Dashboard({ products }: { products: Product[] }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDialog, setOpenDialog] = useState(false);
    const [data, setData] = useState<Array<Product>>(products);
    const handleCloseDialog = () => {
        setOpenDialog(!open);
    };
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    // useEffect(() => {
    //     products.map((product: Product) => {
    //         data.push(product);
    //     });
    // }, [data]);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: 2 }}>
            <CreateProductDialog
                open={openDialog}
                handleClose={handleCloseDialog}
            />
            <Box>
                <Box sx={{ display: "flex", flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => setOpenDialog(true)}
                    >
                        Criar Novo Produto
                    </Button>
                </Box>
                <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 1 }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((data) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={data.id}
                                            >
                                                {columns.map((column) => {
                                                    const value =
                                                        data[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            {column.format &&
                                                            typeof value ===
                                                                "number"
                                                                ? column.format(
                                                                      value
                                                                  )
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </Container>
    );
}
