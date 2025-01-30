import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchForms = createAsyncThunk("fetchForms", async () => {
  const data = await fetch("http://localhost:3000/api/form");
  return data.json();
});

export const fetchFormByid = createAsyncThunk(
  "fetchFormByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/form/${values}`);
    return data.json();
  }
);

export const addForm = createAsyncThunk("addForm", async (values) => {
  const result = await fetch("http://localhost:3000/api/form", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify({
      formname: values.formname,
      formurl: values.formurl,
      // picture: values.picture,
      alt: values.alt,
      metatitle: values.metatitle,
      metakeyword: values.metakeyword,
      metadesc: values.metadesc,
    }),
  });
  return result.json();
});

export const removeForm = createAsyncThunk("removeForm", async (values) => {
  const result = await fetch(`http://localhost:3000/api/form/${values}`, {
    method: "DELETE",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
  });
  return result.values.response;
});

export const modifiedForm = createAsyncThunk("modifiedForm", async (values) => {
  const result = await fetch(`http://localhost:3000/api/form/${values.id}`, {
    method: "PUT",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      formname: values.formname,
      formurl: values.formurl,
      // picture: values.picture,
      alt: values.alt,
      metatitle: values.metatitle,
      metakeyword: values.metakeyword,
      metadesc: values.metadesc,
    }),
  });
  return result.json();
});

const initialState = {
  loading: false,
  form: [],
  formedit: [],
  error: "",
  isSuccess: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchForms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchForms.fulfilled, (state, action) => {
      state.loading = false;
      state.form = action.payload.forms;
      state.error = "";
    });
    builder.addCase(fetchForms.rejected, (state, action) => {
      state.loading = false;
      state.form = [];
      state.error = action.error.message;
    });
    // fetch form by id
    builder.addCase(fetchFormByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFormByid.fulfilled, (state, action) => {
      state.loading = false;
      state.formedit = action.payload.result;
      state.error = "";
    });
    builder.addCase(fetchFormByid.rejected, (state, action) => {
      state.loading = false;
      state.form = [];
      state.error = action.error.message;
    });
    //add form
    builder.addCase(addForm.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addForm.fulfilled, (state, action) => {
      state.loading = false;
      state.form = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addForm.rejected, (state, action) => {
      state.loading = false;
      state.form = [];
      state.error = action.error.message;
    });
    // remove form
    builder.addCase(removeForm.fulfilled, (state, action) => {
      state.form = state.form.filter((item) => item._id != action.payload);
      state.response = "delete";
    });
    // update form
    builder.addCase(modifiedForm.fulfilled, (state, action) => {
      const updateItem = action.payload;
      const index = state.form.findIndex((item) => item._id === updateItem._id);
      if (index !== -1) {
        state.form[index] = updateItem;
      }
      state.response = "update";
    });
  },
  //end reducer
});

export default formSlice.reducer;
