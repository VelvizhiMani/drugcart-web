"use client";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Grid2,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import TextInput from "@/components/admin/input/TextInput";
import TextEditor from "@/components/admin/input/TextEditor";
import ImageInput from "@/components/admin/input/ImageInput";
import InputArea from "@/components/admin/input/InputArea";
import { useFormik } from "formik";
import * as yup from "yup";
import { PostDiseasesService } from '@/services/diseasesService';
import { useDispatch } from "react-redux";

function DiseasesAdd() {
    const router = useRouter();
    const dispatch = useDispatch()

    const URLText = (text) => {
        const splitText = text.split(" ")
        const joinSpace = splitText.join("-").toLowerCase()
        return joinSpace
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            url: "",
            picture: "",
            alt: "",
            generics: "",
            video: "",
            videoalt: "",
            about: "",
            structure: "",
            epidemiology: "",
            classfi: "",
            causativefa: "",
            riskfc: "",
            pathophysiology: "",
            routes: "",
            symptoms: "",
            labtest: "",
            radiology: "",
            diagnostic: "",
            medical: "",
            surgical: "",
            prognosis: "",
            comp: "",
            prevention: "",
            reference: "",
            metatitle: "",
            metakeyboard: "",
            metadesc: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Name is required"),
            url: yup.string().required("Url is required"),
            picture: yup.string().required("Picture is required")
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostDiseasesService(data, resetForm))
        },
    });

    const handleImage = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue("picture", URL.createObjectURL(file));
    };

    useEffect(() => {
        formik.values.url = URLText(formik.values.name)
    }, [formik.values.name])

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Typography
                    variant="h6"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    sx={{ flexGrow: 1 }}
                >
                    Add Diseases Name
                </Typography>
                <Button
                    color="success"
                    variant="contained"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => router.push(`/admin/diseaseslist`)}
                >
                    Diseases List
                </Button>
            </Box>
            <Paper
                sx={{
                    borderColor: "#fa4b31",
                    borderTopWidth: 3,
                    borderBottomWidth: 2,
                    p: 2,
                    mt: 4,
                }}
            >
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Diseases Name"}
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            helperText={
                                formik.touched.name ? formik.errors.name : null
                            }
                            error={formik.touched.name ? formik.errors.name : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"URL(Ex:lennox-gastaut-syndrome)"}
                            value={URLText(formik.values.name)}
                            onChange={formik.handleChange("url")}
                            helperText={
                                formik.touched.url ? formik.errors.url : null
                            }
                            error={formik.touched.url ? formik.errors.url : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <ImageInput
                            title={"Picture"}
                            image={formik.values.picture}
                            onChange={handleImage}
                            error={
                                formik.touched.picture
                                    ? formik.errors.picture
                                    : null
                            }
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Image Alt [EX:( Diseases name -Drugcarts)]"}
                            value={formik.values.alt}
                            onChange={formik.handleChange("alt")}
                            helperText={
                                formik.touched.alt ? formik.errors.alt : null
                            }
                            error={formik.touched.alt ? formik.errors.alt : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Video Url (EX: https://www.youtube.com/embed/IVIDhyKhXAU)"}
                            value={formik.values.video}
                            onChange={formik.handleChange("video")}
                            helperText={
                                formik.touched.video ? formik.errors.video : null
                            }
                            error={formik.touched.video ? formik.errors.video : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Video Alt [EX:( Diseases name -Drugcarts)]"}
                            value={formik.values.videoalt}
                            onChange={formik.handleChange("videoalt")}
                            helperText={
                                formik.touched.videoalt ? formik.errors.videoalt : null
                            }
                            error={formik.touched.videoalt ? formik.errors.videoalt : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextInput
                            title={"Video Alt [EX:( Diseases name -Drugcarts)]"}
                            value={formik.values.videoalt}
                            onChange={formik.handleChange("videoalt")}
                            helperText={
                                formik.touched.videoalt ? formik.errors.videoalt : null
                            }
                            error={formik.touched.videoalt ? formik.errors.videoalt : null}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Disease overview and Definition:"}
                            value={formik.values.about}
                            onChange={formik.handleChange("about")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Classification:"}
                            value={formik.values.classfi}
                            onChange={formik.handleChange("classfi")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Epidemiology :"}
                            value={formik.values.epidemiology}
                            onChange={formik.handleChange("epidemiology")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Typography
                            variant="h6"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                        >
                            Factors associated with diseases
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Causative factor:"}
                            value={formik.values.causativefa}
                            onChange={formik.handleChange("causativefa")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Risk Factor:"}
                            value={formik.values.riskfc}
                            onChange={formik.handleChange("riskfc")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Structure Of:"}
                            value={formik.values.structure}
                            onChange={formik.handleChange("structure")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Pathophysiology:"}
                            value={formik.values.pathophysiology}
                            onChange={formik.handleChange("pathophysiology")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Routes of Transmission:"}
                            value={formik.values.routes}
                            onChange={formik.handleChange("routes")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Clinical signs & symptoms:"}
                            value={formik.values.symptoms}
                            onChange={formik.handleChange("symptoms")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Typography
                            variant="h6"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                        >

                            Diagnostic Test
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Lab Test:"}
                            value={formik.values.symptoms}
                            onChange={formik.handleChange("symptoms")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Radiology:"}
                            value={formik.values.radiology}
                            onChange={formik.handleChange("symptoms")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Differential Diagnosis:"}
                            value={formik.values.diagnostic}
                            onChange={formik.handleChange("diagnostic")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Typography
                            variant="h6"
                            fontFamily={"Poppins"}
                            fontWeight="bold"
                            fontSize={16}
                        >

                            Treatment
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Medical:"}
                            value={formik.values.medical}
                            onChange={formik.handleChange("medical")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextEditor
                            title={"Surgical:"}
                            value={formik.values.surgical}
                            onChange={formik.handleChange("surgical")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Prognosis:"}
                            value={formik.values.prognosis}
                            onChange={formik.handleChange("prognosis")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Prognosis:"}
                            value={formik.values.prognosis}
                            onChange={formik.handleChange("prognosis")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Complications:"}
                            value={formik.values.comp}
                            onChange={formik.handleChange("comp")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"Prevention & Screening:"}
                            value={formik.values.prevention}
                            onChange={formik.handleChange("prevention")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 10 }}>
                        <TextInput
                            title={"Medicines used in the treatment of:"}
                            value={formik.values.generics}
                            onChange={formik.handleChange("generics")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <TextEditor
                            title={"REFERENCE:"}
                            value={formik.values.reference}
                            onChange={formik.handleChange("reference")}
                        />
                    </Grid2>
                </Grid2>
            </Paper>

            <Paper
                sx={{
                    borderColor: "#fa4b31",
                    borderTopWidth: 3,
                    borderBottomWidth: 2,
                    p: 2,
                    mt: 4,
                }}
            >
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Meta Title"}
                            value={formik.values.metatitle}
                            onChange={formik.handleChange("metatitle")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <TextInput
                            title={"Meta Keyword"}
                            value={formik.values.metakeyboard}
                            onChange={formik.handleChange("metakeyboard")}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <InputArea
                            title={"Meta Description"}
                            value={formik.values.metadesc}
                            onChange={formik.handleChange("metadesc")}
                        />
                    </Grid2>
                </Grid2>
            </Paper>

            <Stack sx={{ padding: 2, display: "flex", alignItems: "flex-end" }}>
                <Button
                    style={{ textTransform: "capitalize" }}
                    variant="contained"
                    onClick={formik.handleSubmit}
                >
                    Submit
                </Button>
            </Stack>
        </Box>
    );
}

export default DiseasesAdd;
