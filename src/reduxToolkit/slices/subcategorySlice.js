import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSubcategorys = createAsyncThunk(
  "fetchSubcategorys",
  async () => {
    const data = await fetch("http://localhost:3000/api/subcategory");
    return data.json();
  }
);
export const fetchSubcategoryByid = createAsyncThunk(
  "fetchSubcategoryByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/subcategory/${values}`);
    return data.json();
  }
);

export const addSubcategory = createAsyncThunk(
  "addSubcategory",
  async (values) => {
    const result = await fetch("http://localhost:3000/api/subcategory", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cat_name: values.cat_name,
        url: values.url,
        subcat_name: values.subcat_name,
        cat_img: values.cat_img,
        imagealt: values.imagealt,
        metatitle: values.metatitle,
        metakeyword: values.metakeyword,
        metadesc: values.metadesc,
      }),
    });
    return result.json();
  }
);

export const removeSubcategory = createAsyncThunk(
  "removeSubcategory",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/subcategory/${values}`,
      {
        method: "DELETE",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return result.values.response;
  }
);

export const modifiedSubcategory = createAsyncThunk(
  "modifiedSubcategory",
  async (values) => {
    console.log(values, "VALUUU");
    const result = await fetch(
      `http://localhost:3000/api/subcategory/${values.id}`,
      {
        method: "PUT",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          cat_name: values.cat_name,
          url: values.url,
          subcat_name: values.subcat_name,
          // cat_img: values.cat_img,
          imagealt: values.imagealt,
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
  subcategory: [],
  subcategoryedit: [],
  error: "",
  isSuccess: "",
};

const subcategorySlice = createSlice({
  name: "subcategory",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchSubcategorys.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSubcategorys.fulfilled, (state, action) => {
      state.loading = false;
      state.subcategory = action.payload.subcategorys;
      state.error = "";
    });
    builder.addCase(fetchSubcategorys.rejected, (state, action) => {
      state.loading = false;
      state.subcategory = [];
      state.error = action.error.message;
    });
    // fetch category by id
    builder.addCase(fetchSubcategoryByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSubcategoryByid.fulfilled, (state, action) => {
      state.loading = false;
      state.subcategoryedit = action.payload.result;
      state.error = "";
    });
    builder.addCase(fetchSubcategoryByid.rejected, (state, action) => {
      state.loading = false;
      state.subcategory = [];
      state.error = action.error.message;
    });
    //add subcategory
    builder.addCase(addSubcategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addSubcategory.fulfilled, (state, action) => {
      console.log(state, action);
      state.loading = false;
      state.subcategory = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addSubcategory.rejected, (state, action) => {
      state.loading = false;
      state.subcategory = [];
      state.error = action.error.message;
    });
    // remove subcategory
    builder.addCase(removeSubcategory.fulfilled, (state, action) => {
      state.subcategory = state.subcategory.filter(
        (item) => item._id != action.payload
      );
      state.response = "delete";
    });
    // update category
    builder.addCase(modifiedSubcategory.fulfilled, (state, action) => {
      const updateItem = action.payload;
      console.log(updateItem, "UPADTE");
      const index = state.subcategory.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.subcategory[index] = updateItem;
      }
      state.response = "update";
    });
  },
  //end reducer
});

// export const { addCategory, removeCategory } = categorySlice.actions;
export default subcategorySlice.reducer;
