import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGenerics = createAsyncThunk("fetchGenerics", async () => {
  const data = await fetch("http://localhost:3000/api/generic");
  return data.json();
});

export const fetchGenericByid = createAsyncThunk(
  "fetchGenericByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/generic/${values}`);
    return data.json();
  }
);

export const addGeneric = createAsyncThunk("addGeneric", async (values) => {
  const result = await fetch("http://localhost:3000/api/generic", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      catnames: values.catnames,
      subname: values.subname,
      url: values.url,
      generices: values.generices,
      image: values.image,
      imagealt: values.imagealt,
      // vedio: values.vedio,
      // vedioalt: values.vedioalt,
      description: values.description,
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
      metatitle: values.metatitle,
      metakeyword: values.metakeyword,
      metadesc: values.metadesc,
    }),
  });
  return result.json();
});

export const removeGeneric = createAsyncThunk(
  "removeGeneric",
  async (values) => {
    const result = await fetch(`http://localhost:3000/api/generic/${values}`, {
      method: "DELETE",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    });
    return result.values.response;
  }
);

export const modifiedGeneric = createAsyncThunk(
  "modifiedGeneric",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/generic/${values.id}`,
      {
        method: "PUT",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          catnames: values.catnames,
          subname: values.subname,
          url: values.url,
          generices: values.generices,
          image: values.image,
          imagealt: values.imagealt,
          // vedio: values.vedio,
          // vedioalt: values.vedioalt,
          description: values.description,
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
  generic: [],
  genericedit: [],
  error: "",
  isSuccess: "",
};

const genericSlice = createSlice({
  name: "generic",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchGenerics.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGenerics.fulfilled, (state, action) => {
      state.loading = false;
      state.generic = action.payload.generic;
      state.error = "";
    });
    builder.addCase(fetchGenerics.rejected, (state, action) => {
      state.loading = false;
      state.generic = [];
      state.error = action.error.message;
    });
    // fetch generic by id
    builder.addCase(fetchGenericByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGenericByid.fulfilled, (state, action) => {
      state.loading = false;
      state.genericedit = action.payload.generic;
      state.error = "";
    });
    builder.addCase(fetchGenericByid.rejected, (state, action) => {
      state.loading = false;
      state.generic = [];
      state.error = action.error.message;
    });
    //add generic
    builder.addCase(addGeneric.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addGeneric.fulfilled, (state, action) => {
      state.loading = false;
      state.generic = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addGeneric.rejected, (state, action) => {
      state.loading = false;
      state.generic = [];
      state.error = action.error.message;
    });
    // remove generic
    builder.addCase(removeGeneric.fulfilled, (state, action) => {
      state.generic = state.generic.filter(
        (item) => item._id != action.payload
      );
      state.response = "delete";
    });
    // update generic
    builder.addCase(modifiedGeneric.fulfilled, (state, action) => {
      const updateItem = action.payload;
      const index = state.generic.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.generic[index] = updateItem;
      }
      state.response = "update";
    });
    // end update
  },
  //end reducer
});

export default genericSlice.reducer;
