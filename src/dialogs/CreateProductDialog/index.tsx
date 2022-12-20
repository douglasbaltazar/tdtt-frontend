import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import * as Yup from "yup";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { IAddProduct } from "../../../types/Product";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useState } from 'react'
import { useRouter } from "next/router";

type Props = {
    open: boolean;
    handleClose: () => void;
};

export default function CreateProductDialog({ open, handleClose }: Props) {
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
    const formik = useFormik({
        enableReinitialize: false,
        initialValues: {
            productName: "",
            additionalInfo: "",
            imgCover: "",
            link: "",
            newPrice: 0,
        } as IAddProduct,
        validationSchema: Yup.object().shape({
            productName: Yup.string().required(
                "Nome do Produto é obrigatório."
            ),
            imgCover: Yup.string().required("Link da Imagem é obrigatório."),
            link: Yup.string().required("Link é obrigatório."),
            newPrice: Yup.number().min(
                0.01,
                "Valor tem que ser superior a 0.01"
            ),
        }),
        onSubmit: async (values) => {
            formik.setSubmitting(false);
            // formik.values.complete_address = `${formik.values.description}, ${formik.values.number}, ${formik.values.neighborhood}, ${formik.values.city} - ${formik.values.state}`;
            console.log("values ==>", formik.values);
            axios
                .post("http://localhost:8081/api/v1/product", formik.values)
                .then(() => {
                    setSnackBarOpen(true)
                    handleClose();
                })
                .catch(() => {});
        },
    });
    return (
        <>
            <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={() => setSnackBarOpen(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Cadastrado com Sucesso
                </Alert>
            </Snackbar>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cadastrar Novo Produto</DialogTitle>
                <form noValidate onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="productName"
                            label="Nome Produto"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.productName}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            required
                            id="imgCover"
                            onChange={formik.handleChange}
                            value={formik.values.imgCover}
                            label="Link Imagem"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <Box sx={{ display: "flex" }}>
                            <TextField
                                margin="dense"
                                id="newPrice"
                                required
                                label="Novo Preço"
                                onChange={formik.handleChange}
                                value={formik.values.newPrice}
                                type="number"
                                variant="standard"
                                sx={{ width: "30%" }}
                            />
                            <TextField
                                margin="dense"
                                required
                                id="link"
                                label="Link para Enviar"
                                onChange={formik.handleChange}
                                value={formik.values.link}
                                type="text"
                                sx={{ width: "70%", marginLeft: 2 }}
                                variant="standard"
                            />
                        </Box>
                        <TextField
                            margin="dense"
                            id="additionalInfo"
                            label="Informações Adicionais"
                            onChange={formik.handleChange}
                            value={formik.values.additionalInfo}
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="error">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={!(formik.isValid && formik.dirty)}
                        >
                            Cadastrar
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
