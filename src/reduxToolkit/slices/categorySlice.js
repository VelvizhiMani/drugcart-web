import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategorys = createAsyncThunk("fetchCategorys", async () => {
  const data = await fetch("http://localhost:3000/api/category");
  return data.json();
});

export const fetchCategoryByid = createAsyncThunk(
  "fetchCategoryByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/category/${values}`);
    return data.json();
  }
);

export const addCategory = createAsyncThunk("addCategory", async (values) => {
  const result = await fetch("http://localhost:3000/api/category", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify({
      cat_type: values.cat_type,
      category_name: values.category_name,
      imagealt: values.imagealt,
      // cat_img: values.cat_img,
      metatitle: values.metatitle,
      metakeyword: values.metakeyword,
      metadesc: values.metadesc,
      url: values.url,
    }),
  });
  return result.json();
});

export const removeCategory = createAsyncThunk(
  "removeCategory",
  async (values) => {
    const result = await fetch(`http://localhost:3000/api/category/${values}`, {
      method: "DELETE",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    });
    return result.values.response;
  }
);

export const modifiedCategory = createAsyncThunk(
  "modifiedCategory",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/category/${values.id}`,
      {
        method: "PUT",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          cat_type: values.cat_type,
          category_name: values.category_name,
          url: values.url,
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
  category: [],
  categoryedit: [],
  error: "",
  isSuccess: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchCategorys.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategorys.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload.categorys;
      state.error = "";
    });
    builder.addCase(fetchCategorys.rejected, (state, action) => {
      state.loading = false;
      state.category = [];
      state.error = action.error.message;
    });
    // fetch category by id
    builder.addCase(fetchCategoryByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryByid.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryedit = action.payload.result;
      state.error = "";
    });
    builder.addCase(fetchCategoryByid.rejected, (state, action) => {
      state.loading = false;
      state.category = [];
      state.error = action.error.message;
    });
    //add category
    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.loading = false;
      state.category = [];
      state.error = action.error.message;
    });
    // remove category
    builder.addCase(removeCategory.fulfilled, (state, action) => {
      state.category = state.category.filter(
        (item) => item._id != action.payload
      );
      state.response = "delete";
    });
    // update category
    builder.addCase(modifiedCategory.fulfilled, (state, action) => {
      const updateItem = action.payload;
      const index = state.category.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.category[index] = updateItem;
      }
      state.response = "update";
    });
  },
  //end reducer
});

// export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
