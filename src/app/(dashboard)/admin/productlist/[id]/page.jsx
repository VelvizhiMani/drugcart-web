"use client";
import { useParams, useRouter } from "next/navigation";
import { Box, Button, Grid2, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectInput from "@/components/admin/input/SelectInput";
import TextInput from "@/components/admin/input/TextInput";
import ImageInput from "@/components/admin/input/ImageInput";
import TextEditor from "@/components/admin/input/TextEditor";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import SearchField from "@/components/admin/AutoComplete/SearchField";
import { GetCategoryService } from "@/services/categoryService";
import {
  GetProductIdService,
  PutProductService,
} from "@/services/productService";
import { GetSubCategoryService } from "@/services/subCategoryService";
import { GetGeneticService } from "@/services/genericService";
import { GetFormService } from "@/services/formService";
import { GetStorageService } from "@/services/storageService";
import { GetPackageService } from "@/services/packageService";
import { GetManufactuerService } from "@/services/manufactuerService";
import { GetOrginService } from "@/services/orginService";
import { GetReferenceService } from "@/services/referenceService";
import { GetWrittenByService } from "@/services/writtenByService";
import { GetReviewByService } from "@/services/reviewByService";

const EditProduct = () => {
  const { product } = useSelector((state) => state.productData);
  const params = useParams();
  const { categories } = useSelector((state) => state.categoryData);
  const { subCategories } = useSelector((state) => state.subCategoryData);
  const { genericList } = useSelector((state) => state.genericData);
  // const { productList } = useSelector((state) => state.productData);
  const { formList } = useSelector((state) => state.formData);
  const { storageList } = useSelector((state) => state.storageData);
  const { packageList } = useSelector((state) => state.packageData);
  const { manufactuerList } = useSelector((state) => state.manufactuerData);
  const { orginList } = useSelector((state) => state.orginData);
  const { referenceList } = useSelector((state) => state.referenceData);
  const { writtenByList } = useSelector((state) => state.writtenbyData);
  const { reviewByList, reviewBy } = useSelector(
    (state) => state.referenceData
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(GetProductIdService(params?.id));
  }, [params?.id]);

  const handleProductImage = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("cat_img", URL.createObjectURL(file));
    setImagePreview(URL.createObjectURL(file));
  };

  const productStatus = ["Active", "InActive"];
  const paymentTypes = ["Online Payment Only", "Cash on Delivery"];
  const returnPolicy = ["Non Returnable", "Return within 7 days"];
  const gst = ["5%", "12%", "18%"];

  const URLText = (text) => {
    const splitText = text.split(" ");
    const joinSpace = splitText.join("-").toLowerCase();
    return joinSpace;
  };

  const formik = useFormik({
    initialValues: {
      cat_name: product?.cat_name || "",
      subcat_name: product?.subcat_name || "",
      generices: product?.generices || "",
      product_name: product?.product_name || "",
      url: product?.url || "",
      genericname: product?.genericname || "",
      varient: product?.varient || "",
      imagealt: product?.imagealt || "",
      manufactuer: product?.manufactuer || "",
      manufactueraddress: product?.manufactueraddress || "",
      tabscount: product?.tabscount || "",
      orgin: product?.orgin || "",
      strength: product?.strength || "",
      package: product?.package || "",
      price: product?.price || "",
      packing: product?.packing || "",
      product_img: product?.product_img || "",
      description: product?.description || "",
      disclaimer: product?.disclaimer || "",
      stock: product?.stock || "",
      saleprice: product?.saleprice || "",
      percentage: product?.percentage || "",
      rexrequired: product?.rexrequired || "",
      storage: product?.storage || "",
      temperature: product?.temperature || "",
      // timestamp: "",
      writebyid: product?.writebyid || "",
      reviewbyid: product?.reviewbyid || "",
      faq: product?.faq || "",
      reference: product?.reference || "",
      metatitle: product?.metatitle || "",
      metakeyword: product?.metakeyword || "",
      metadesc: product?.metadesc || "",
      userupdate: product?.userupdate || "",
      updatetimestamp: product?.updatetimestamp || "",
      userid: product?.userid || "",
      date: product?.date || "",
      referwebsite: product?.referwebsite || "",
      keybenefits: product?.keybenefits || "",
      keyingredients: product?.keyingredients || "",
      expires: product?.expires || "",
      usesofmeds: product?.usesofmeds || "",
      useofbenefits: product?.useofbenefits || "",
      indicat: product?.indicat || "",
      indication: product?.indication || "",
      mechanism: product?.mechanism || "",
      medicinework: product?.medicinework || "",
      contraindications: product?.contraindications || "",
      sideeffects: product?.sideeffects || "",
      faqs: product?.faqs || "",
      pregnancy: product?.pregnancy || "",
      breastfeeding: product?.breastfeeding || "",
      kidneyproblem: product?.kidneyproblem || "",
      liverdisease: product?.liverdisease || "",
      heartdisease: product?.heartdisease || "",
      asthma: product?.asthma || "",
      takemedicine: product?.takemedicine || "",
      adult: product?.adult || "",
      childrenmed: product?.childrenmed || "",
      elderlymed: product?.elderlymed || "",
      alcohol: product?.alcohol || "",
      driving: product?.driving || "",
      warnings: product?.warnings || "",
      talkdoctor: product?.talkdoctor || "",
      instructions: product?.instructions || "",
      druginteraction: product?.druginteraction || "",
      drugfood: product?.drugfood || "",
      drugdiease: product?.drugdiease || "",
      fooditems: product?.fooditems || "",
      overdose: product?.overdose || "",
      misseddose: product?.misseddose || "",
      disposal: product?.disposal || "",
      fasttag: product?.fasttag || "",
      refer: product?.refer || "",
      ingredients: product?.ingredients || "",
      direction: product?.direction || "",
      dosages: product?.dosages || "",
      precaution: product?.precaution || "",
      prostatus: product?.prostatus || "",
      paymenttype: product?.paymenttype || "",
      retunpolicy: product?.retunpolicy || "",
      gst: product?.gst || "",
      hsn: product?.hsn || "",
    },
    validationSchema: yup.object({
      cat_name: yup.string().required("Category name is required"),
      subcat_name: yup.string().required("SubCategory Name is required"),
      generices: yup.string().required("Generices Name is required"),
      product_name: yup.string().required("Product Name is required"),
      url: yup.string().required("URL is required"),
      manufactuer: yup.string().required("Manufactuer is required"),
    }),
    onSubmit: async (data) => {
      await dispatch(PutProductService(product?._id, data));
    },
  });

  useEffect(() => {
    formik.values.caturl = URLText(formik.values.cat_name);
    // formik.values.subcaturl = URLText(formik.values.subcat_name);
  }, [formik.values.cat_name]);

  useEffect(() => {
    dispatch(GetCategoryService());
    dispatch(GetSubCategoryService());
    dispatch(GetGeneticService());
    dispatch(GetFormService());
    dispatch(GetStorageService());
    dispatch(GetPackageService());
    dispatch(GetManufactuerService());
    dispatch(GetOrginService());
    dispatch(GetReferenceService());
    dispatch(GetWrittenByService());
    dispatch(GetReviewByService());
  }, []);

  const filterSubCategory = subCategories?.subcategoryItems?.filter(
    (item) => item?.cat_name === formik.values.caturl
  );
  // const filterOthervarient = productList?.productItems?.filter(
  //   (item) => item?.subcat_name === formik.values.subcaturl
  // );
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          fontFamily={"Poppins"}
          fontWeight="bold"
          sx={{ flexGrow: 1 }}
        >
          Add Product
        </Typography>
        <Button
          color="success"
          variant="contained"
          style={{ textTransform: "capitalize" }}
          onClick={() => router.push(`/admin/product`)}
        >
          Product List
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
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Category Name"
              data={categories?.categories}
              value={formik.values.cat_name}
              getOptionLabel={(option) =>
                typeof option === "string"
                  ? option
                  : option?.category_name || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("cat_name", newValue);
                formik.setFieldValue("subname", "");
              }}
              helperText={
                formik.touched.cat_name ? formik.errors.cat_name : null
              }
              error={formik.touched.cat_name ? formik.errors.cat_name : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Sub Category Name"
              data={filterSubCategory}
              value={formik.values.subcat_name}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.subcat_name || ""
              }
              onInputChange={(event, newValue) =>
                formik.setFieldValue("subcat_name", newValue)
              }
              helperText={
                formik.touched.subcat_name ? formik.errors.subcat_name : null
              }
              error={
                formik.touched.subcat_name ? formik.errors.subcat_name : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Generic Name"
              data={genericList?.generics}
              value={formik.values.generices}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.generices || ""
              }
              onInputChange={(event, newValue) =>
                formik.setFieldValue("generices", newValue)
              }
              helperText={
                formik.touched.generices ? formik.errors.generices : null
              }
              error={formik.touched.generices ? formik.errors.generices : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={
                "Brand Name (website Product title) EX:Veenat 100mg Tablet"
              }
              value={formik.values.product_name}
              onChange={formik.handleChange("product_name")}
              helperText={
                formik.touched.product_name ? formik.errors.product_name : null
              }
              error={
                formik.touched.product_name ? formik.errors.product_name : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={"URL (EX:veenat-100mg-tablet) [ all small letters only ]"}
              value={formik.values.url}
              onChange={formik.handleChange("url")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Other varient Product Name Select"
              // data={filterOthervarient}
              value={formik.values.varient}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.varient || ""
              }
              onInputChange={(event, newValue) =>
                formik.setFieldValue("varient", newValue)
              }
              helperText={formik.touched.varient ? formik.errors.varient : null}
              error={formik.touched.varient ? formik.errors.varient : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ImageInput
              title={"Product Image"}
              image={formik.values.product_img}
              onChange={handleProductImage}
              error={
                formik.touched.product_img ? formik.errors.product_img : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Image alt tag ((Brand name, price, uses- Drugcarts )"}
              value={formik.values.imagealt}
              onChange={formik.handleChange("imagealt")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              title={
                "Salt Composition(Generic Name with Strength) EX:Veenat (100mg)"
              }
              value={formik.values.genericname}
              onChange={formik.handleChange("genericname")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <SearchField
              title="Form : (Ex : Gel or caps)"
              data={formList?.forms}
              value={formik.values.form}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.formname || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("tabscount", newValue);
              }}
              helperText={
                formik.touched.tabscount ? formik.errors.tabscount : null
              }
              error={formik.touched.tabscount ? formik.errors.tabscount : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <SearchField
              title="Country of Origin"
              data={orginList?.orgins}
              value={formik.values.orgin}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.orginname || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("orgin", newValue);
              }}
              helperText={formik.touched.orgin ? formik.errors.orgin : null}
              error={formik.touched.orgin ? formik.errors.orgin : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Storage"
              data={storageList?.storages}
              value={formik.values.storage}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.storagename || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("storage", newValue);
              }}
              helperText={formik.touched.storage ? formik.errors.storage : null}
              error={formik.touched.storage ? formik.errors.storage : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Strength Eg : 100mg"}
              value={formik.values.strength}
              onChange={formik.handleChange("strength")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SearchField
              title="Pack"
              data={packageList?.packages}
              value={formik.values.package}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option?.packagename || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("packageName", newValue);
              }}
              helperText={
                formik.touched.packagename ? formik.errors.packagename : null
              }
              error={
                formik.touched.packageName ? formik.errors.packageName : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextInput
              title={"Drugs By Ailments"}
              value={formik.values.indication}
              onChange={formik.handleChange("indication")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <SearchField
              title="Manufactuer Address"
              data={manufactuerList?.manufactuers}
              value={formik.values.manufactuer}
              getOptionLabel={(option) =>
                typeof option === "string"
                  ? option
                  : option?.manufactuername || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("manufactuer", newValue);
              }}
              helperText={
                formik.touched.manufactuer ? formik.errors.manufactuer : null
              }
              error={
                formik.touched.manufactuer ? formik.errors.manufactuer : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <SearchField
              title="Marketer Address"
              data={manufactuerList?.manufactuers}
              value={formik.values.manufactueraddress}
              getOptionLabel={(option) =>
                typeof option === "string"
                  ? option
                  : option?.manufactueraddress || ""
              }
              onInputChange={(event, newValue) => {
                formik.setFieldValue("manufactueraddress", newValue);
              }}
              helperText={
                formik.touched.manufactueraddress
                  ? formik.errors.manufactueraddress
                  : null
              }
              error={
                formik.touched.manufactueraddress
                  ? formik.errors.manufactueraddress
                  : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Rex Required (Ex:Rx Required)"}
              value={formik.values.rexrequired}
              onChange={formik.handleChange("rexrequired")}
              data={["Yes", "No"]}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Available Stock"}
              value={formik.values.stock}
              onChange={formik.handleChange("stock")}
              data={["Yes", "No"]}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Product reference(ex :Netmeds)"}
              data={["yes", "no"]}
              value={formik.values.referwebsite}
              onChange={formik.handleChange("referwebsite")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Product Status"}
              value={formik.values.prostatus}
              onChange={formik.handleChange("prostatus")}
              data={productStatus}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Expires on or after: (Ex:June,2021)"}
              value={formik.values.expires}
              onChange={formik.handleChange("expires")}
              helperText={formik.touched.expires ? formik.errors.expires : null}
              error={formik.touched.expires ? formik.errors.expires : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Payment Type"}
              value={formik.values.paymenttype}
              onChange={formik.handleChange("paymenttype")}
              data={paymentTypes}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"Return Policy"}
              value={formik.values.retunpolicy}
              onChange={formik.handleChange("retunpolicy")}
              data={returnPolicy}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"HSN"}
              value={formik.values.hsn}
              onChange={formik.handleChange("hsn")}
              helperText={formik.touched.hsn ? formik.errors.hsn : null}
              error={formik.touched.hsn ? formik.errors.hsn : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              title={"GST(%)"}
              value={formik.values.gst}
              onChange={formik.handleChange("gst")}
              data={gst}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"MRP : Ex:123.00"}
              value={formik.values.price}
              onChange={formik.handleChange("price")}
              helperText={formik.touched.price ? formik.errors.price : null}
              error={formik.touched.price ? formik.errors.price : null}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Percentage DISCOUNT:(Ex:2)only type number."}
              value={formik.values.percentage}
              onChange={formik.handleChange("percentage")}
              helperText={
                formik.touched.percentage ? formik.errors.percentage : null
              }
              error={
                formik.touched.percentage ? formik.errors.percentage : null
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              title={"Other Temperature"}
              value={formik.values.temperature}
              onChange={formik.handleChange("temperature")}
              helperText={
                formik.touched.temperature ? formik.errors.temperature : null
              }
              error={
                formik.touched.temperature ? formik.errors.temperature : null
              }
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
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextInput
              title={
                "Meta Title:(unlimited) Character Only : ( Choose Below Any one Example )"
              }
              value={formik.values.metatitle}
              onChange={formik.handleChange("metatitle")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextInput
              title={"Meta Keyword:(unlimited) Character Only "}
              value={formik.values.metakeyword}
              onChange={formik.handleChange("metakeyword")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextInput
              title={"Meta Description:(unlimited) Character Only"}
              value={formik.values.metadesc}
              onChange={formik.handleChange("metadesc")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Author Details :
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <SelectInput
              title={"Reviewd By :"}
              value={formik.values.reviewbyid}
              onChange={formik.handleChange("reviewbyid")}
              data={gst}
              // data={reviewByList?.review_by_lists}
              // getOptionLabel={(option) =>
              //   typeof option === "string" ? option : option?.name || ""
              // }
              // onInputChange={(event, newValue) => {
              //   formik.setFieldValue("reviewbyid", newValue);
              // }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <SelectInput
              title={"Written By :"}
              value={formik.values.writebyid}
              onChange={formik.handleChange("writebyid")}
              data={gst}
              // data={writtenByList?.written_by_lists}
              // getOptionLabel={(option) =>
              //   typeof option === "string" ? option : option?.name || ""
              // }
              // onInputChange={(event, newValue) => {
              //   formik.setFieldValue("writebyid", newValue);
              // }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            {/* <EditorToolbar /> */}
            <TextEditor
              title={"Medical Description of Medicine :"}
              value={formik.values.description}
              onChange={formik.handleChange("description")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Uses of Medicine:"}
              value={formik.values.usesofmeds}
              onChange={formik.handleChange("usesofmeds")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Uses and Benefits of Medicine:"}
              value={formik.values.useofbenefits}
              onChange={formik.handleChange("useofbenefits")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Medicine Prescribed for Follow Indication:"}
              value={formik.values.indicat}
              onChange={formik.handleChange("indicat")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Mechanism of action of Medicine:"}
              value={formik.values.mechanism}
              onChange={formik.handleChange("mechanism")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"How Medicine works:"}
              value={formik.values.medicinework}
              onChange={formik.handleChange("medicinework")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Contraindications of Medicine:"}
              value={formik.values.contraindications}
              onChange={formik.handleChange("contraindications")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Side effects of Medicine:"}
              value={formik.values.sideeffects}
              onChange={formik.handleChange("sideeffects")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"FAQs for Medicine:"}
              value={formik.values.faqs}
              onChange={formik.handleChange("faqs")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Precautions and general warning of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Alcohol :"}
              value={formik.values.alcohol}
              onChange={formik.handleChange("alcohol")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Driving or operating machinery :"}
              value={formik.values.driving}
              onChange={formik.handleChange("driving")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Pregnancy:"}
              value={formik.values.pregnancy}
              onChange={formik.handleChange("pregnancy")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Breast Feeding:"}
              value={formik.values.breastfeeding}
              onChange={formik.handleChange("breastfeeding")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Kidney Problem:"}
              value={formik.values.kidneyproblem}
              onChange={formik.handleChange("kidneyproblem")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Liver Disease:"}
              value={formik.values.liverdisease}
              onChange={formik.handleChange("liverdisease")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"How to Take Medicine:"}
              value={formik.values.takemedicine}
              onChange={formik.handleChange("takemedicine")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Use of Medicine in Adult:"}
              value={formik.values.adult}
              onChange={formik.handleChange("adult")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextEditor
              title={"Use of Medicine in children:"}
              value={formik.values.childrenmed}
              onChange={formik.handleChange("childrenmed")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Use of Medicine in Elderly Patients:"}
              value={formik.values.elderlymed}
              onChange={formik.handleChange("elderlymed")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Other general warnings:"}
              value={formik.values.warnings}
              onChange={formik.handleChange("warnings")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Talk to your doctor if:"}
              value={formik.values.talkdoctor}
              onChange={formik.handleChange("talkdoctor")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"General instructions:"}
              value={formik.values.instructions}
              onChange={formik.handleChange("instructions")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Drug-Drug Interaction of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Drug Interaction of Medicine:"}
              value={formik.values.druginteraction}
              onChange={formik.handleChange("druginteraction")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Drug-Food interaction of Medicine:"}
              value={formik.values.drugfood}
              onChange={formik.handleChange("drugfood")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Drug-Disease interaction of Medicine:"}
              value={formik.values.drugdiease}
              onChange={formik.handleChange("drugdiease")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Typography
              variant="h6"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={16}
            >
              Dosage of Medicine:
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Over Dose :"}
              value={formik.values.overdose}
              onChange={formik.handleChange("overdose")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Missed Dose :"}
              value={formik.values.misseddose}
              onChange={formik.handleChange("misseddose")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Storage and disposal :"}
              value={formik.values.disposal}
              onChange={formik.handleChange("disposal")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"Fast tag :"}
              value={formik.values.fasttag}
              onChange={formik.handleChange("fasttag")}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextEditor
              title={"References :"}
              value={formik.values.refer}
              onChange={formik.handleChange("refer")}
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
};

export default EditProduct;
