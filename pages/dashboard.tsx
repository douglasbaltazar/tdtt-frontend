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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Product } from "../types/Product";
import CreateProductDialog from "../src/dialogs/CreateProductDialog";
import { IconButton } from "@mui/material";
import UpdateProductDialog from "src/dialogs/UpdateProductDialog";

interface Column {
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
    const [productEdit, setProductEdit] = useState<Product>();
    const [openDialog, setOpenDialog] = useState(false);
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const [data, setData] = useState<Array<Product>>([]);
    const handleCloseDialog = () => {
        setOpenDialog(!openDialog);
    };
    const handleCloseUpdateDialog = () => {
        setOpenUpdateDialog(!openUpdateDialog);
    };
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    useEffect(() => {
        async function fetchData() {
            const data = await fetch("http://localhost:8081/api/v1/products/");
            const products: Product[] = await data.json();
            setData(products);
        }
        fetchData();
    }, [data]);

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
            <UpdateProductDialog 
                open={openUpdateDialog}
                handleClose={handleCloseUpdateDialog}
                product={productEdit}
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
                                    <TableCell
                                        align="center"
                                        style={{
                                            minWidth: "50px",
                                        }}
                                    >
                                        Ações
                                    </TableCell>
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
                                                <TableCell>
                                                    <Box
                                                        sx={{ display: "flex" }}
                                                    >
                                                        <IconButton
                                                            aria-label="update"
                                                            sx={{
                                                                borderRadius:
                                                                    "20px",
                                                                minWidth:
                                                                    "40px",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                color: "black",
                                                                transition:
                                                                    "0.2s",
                                                                ":hover": {
                                                                    transform:
                                                                        "scale(1.15)",
                                                                    backgroundColor:
                                                                        "rgba(0, 120, 0, 1)",
                                                                    color: 'white'
                                                                },
                                                            }}
                                                            onClick={ () => {
                                                                setProductEdit(data);
                                                                setOpenUpdateDialog(true);
                                                            }}
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            aria-label="delete"
                                                            onClick={ () => console.log('delete ' + data.id)}
                                                            sx={{
                                                                borderRadius:
                                                                    "20px",
                                                                minWidth:
                                                                    "40px",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                color: "black",
                                                                marginLeft: '5px',
                                                                transition:
                                                                    "0.2s",
                                                                ":hover": {
                                                                    transform:
                                                                        "scale(1.15)",
                                                                    backgroundColor:
                                                                        "rgba(130, 0, 0, 1)",
                                                                    color: "white"
                                                                },
                                                            }}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Box>
                                                </TableCell>
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
