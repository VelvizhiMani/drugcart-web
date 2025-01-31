import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const data = await fetch("http://localhost:3000/api/product");
  return data.json();
});

export const fetchProductByid = createAsyncThunk(
  "fetchProductByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/product/${values}`);
    return data.json();
  }
);

export const addProduct = createAsyncThunk("addProduct", async (values) => {
  const result = await fetch("http://localhost:3000/api/product", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cat_name: values.cat_name,
      subcat_name: values.subcat_name,
      generices: values.generices,
      url: values.url,
      product_name: values.product_name,
      genericname: values.genericname,
      brand: values.brand,
      manufactuer: values.manufactuer,
      manufactueraddress: values.manufactueraddress,
      tabscount: values.tabscount,
      strength: values.strength,
      package: values.package,
      price: values.price,
      product_img: values.product_img,

      description: values.description,
      disclaimer: values.disclaimer,
      stock: values.stock,
      saleprice: values.saleprice,
      percentage: values.percentage,
      rexrequired: values.rexrequired,

      orgin: values.orgin,
      storage: values.storage,
      writebyid: values.writebyid,
      reviewbyid: values.reviewbyid,
      varient: values.varient,
      imagealt: values.imagealt,
      referwebsite: values.referwebsite,
      expires: values.expires,

      usesofmeds: values.usesofmeds,
      useofbenefits: values.useofbenefits,
      indicat: values.indicat,
      mechanism: values.mechanism,
      medicinework: values.medicinework,
      contraindications: values.contraindications,
      sideeffects: values.sideeffects,
      faqs: values.faqs,
      pregnancy: values.pregnancy,
      breastfeeding: values.breastfeeding,
      kidneyproblem: values.kidneyproblem,
      liverdisease: values.liverdisease,
      asthma: values.asthma,
      takemedicine: values.takemedicine,
      adult: values.adult,
      childrenmed: values.childrenmed,
      elderlymed: values.elderlymed,
      alcohol: values.alcohol,
      heartdisease: values.heartdisease,
      driving: values.driving,
      warnings: values.warnings,
      talkdoctor: values.talkdoctor,
      instructions: values.instructions,
      druginteraction: values.druginteraction,
      drugfood: values.drugfood,
      drugdiease: values.drugdiease,
      fooditems: values.fooditems,
      overdose: values.overdose,
      misseddose: values.misseddose,
      disposal: values.disposal,
      fasttag: values.fasttag,
      refer: values.refer,
      paymenttype: values.paymenttype,
      retunpolicy: values.retunpolicy,
      gst: values.gst,
      hsn: values.hsn,
      metatitle: values.metatitle,
      metakeyword: values.metakeyword,
      metadesc: values.metadesc,
    }),
  });
  return result.json();
});

export const removeProduct = createAsyncThunk(
  "removeProduct",
  async (values) => {
    const result = await fetch(`http://localhost:3000/api/product/${values}`, {
      method: "DELETE",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    });
    return result.values.response;
  }
);

export const modifiedProduct = createAsyncThunk(
  "modifiedProduct",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/product/${values.id}`,
      {
        method: "PUT",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          cat_name: values.cat_name,
          subcat_name: values.subcat_name,
          generices: values.generices,
          url: values.url,
          product_name: values.product_name,
          genericname: values.genericname,
          brand: values.brand,
          manufactuer: values.manufactuer,
          manufactueraddress: values.manufactueraddress,
          tabscount: values.tabscount,
          strength: values.strength,
          package: values.package,
          price: values.price,
          product_img: values.product_img,
          description: values.description,
          disclaimer: values.disclaimer,
          stock: values.stock,
          saleprice: values.saleprice,
          percentage: values.percentage,
          rexrequired: values.rexrequired,

          orgin: values.orgin,
          storage: values.storage,
          writebyid: values.writebyid,
          reviewbyid: values.reviewbyid,
          varient: values.varient,
          imagealt: values.imagealt,
          referwebsite: values.referwebsite,
          expires: values.expires,

          usesofmeds: values.usesofmeds,
          useofbenefits: values.useofbenefits,
          indicat: values.indicat,
          mechanism: values.mechanism,
          medicinework: values.medicinework,
          contraindications: values.contraindications,
          sideeffects: values.sideeffects,
          faqs: values.faqs,
          pregnancy: values.pregnancy,
          breastfeeding: values.breastfeeding,
          kidneyproblem: values.kidneyproblem,
          liverdisease: values.liverdisease,
          asthma: values.asthma,
          takemedicine: values.takemedicine,
          adult: values.adult,
          childrenmed: values.childrenmed,
          elderlymed: values.elderlymed,
          alcohol: values.alcohol,
          heartdisease: values.heartdisease,
          driving: values.driving,
          warnings: values.warnings,
          talkdoctor: values.talkdoctor,
          instructions: values.instructions,
          druginteraction: values.druginteraction,
          drugfood: values.drugfood,
          drugdiease: values.drugdiease,
          fooditems: values.fooditems,
          overdose: values.overdose,
          misseddose: values.misseddose,
          disposal: values.disposal,
          fasttag: values.fasttag,
          refer: values.refer,
          paymenttype: values.paymenttype,
          retunpolicy: values.retunpolicy,
          gst: values.gst,
          hsn: values.hsn,
          metatitle: values.metatitle,
          metakeyword: values.metakeyword,
          metadesc: values.metadesc,
        }),
      }
    );
    return result.json();
  }
);

const initialState = {
  loading: false,
  product: [],
  productedit: [],
  error: "",
  isSuccess: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload.products;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
    // fetch product by id
    builder.addCase(fetchProductByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductByid.fulfilled, (state, action) => {
      state.loading = false;
      state.productedit = action.payload.result;
      state.error = "";
    });
    builder.addCase(fetchProductByid.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
    //add product
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
  //end reducer
});

// export const { addCategory } = categorySlice.actions;
export default productSlice.reducer;
