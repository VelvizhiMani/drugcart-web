import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchManufactuers = createAsyncThunk(
  "fetchManufactuers",
  async () => {
    const data = await fetch("http://localhost:3000/api/manufactuer");
    return data.json();
  }
);
export const fetchManufactuerByid = createAsyncThunk(
  "fetchManufactuerByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/manufactuer/${values}`);
    return data.json();
  }
);

export const addManufactuer = createAsyncThunk(
  "manufactuer",
  async (values) => {
    const result = await fetch("http://localhost:3000/api/manufactuer", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        manufactuername: values.manufactuername,
        manufactuerurl: values.manufactuerurl,
        manufactueraddress: values.manufactueraddress,
        metatitle: values.metatitle,
        metakeyword: values.metakeyword,
        metadesc: values.metadesc,
      }),
    });
    return result.json();
  }
);

export const removeManufactuer = createAsyncThunk(
  "removeManufactuer",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/manufactuer/${values}`,
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

export const modifiedManufactuer = createAsyncThunk(
  "modifiedManufactuer",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/manufactuer/${values.id}`,
      {
        method: "PUT",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          manufactuername: values.manufactuername,
          manufactuerurl: values.manufactuerurl,
          manufactueraddress: values.manufactueraddress,
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
  manufactuer: [],
  manufactueredit: [],
  error: "",
  isSuccess: "",
};

const manufactuerSlice = createSlice({
  name: "manufactuer",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchManufactuers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchManufactuers.fulfilled, (state, action) => {
      state.loading = false;
      state.manufactuer = action.payload.manufactuers;
      state.error = "";
    });
    builder.addCase(fetchManufactuers.rejected, (state, action) => {
      state.loading = false;
      state.manufactuer = [];
      state.error = action.error.message;
    });
    // fetch Manufactuer by id
    builder.addCase(fetchManufactuerByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchManufactuerByid.fulfilled, (state, action) => {
      state.loading = false;
      state.manufactueredit = action.payload.result;
      state.error = "";
    });
    builder.addCase(fetchManufactuerByid.rejected, (state, action) => {
      state.loading = false;
      state.manufactuer = [];
      state.error = action.error.message;
    });
    //add user
    builder.addCase(addManufactuer.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addManufactuer.fulfilled, (state, action) => {
      state.loading = false;
      state.manufactuer = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addManufactuer.rejected, (state, action) => {
      state.loading = false;
      state.manufactuer = [];
      state.error = action.error.message;
    });
    // remove manufactuer
    builder.addCase(removeManufactuer.fulfilled, (state, action) => {
      state.manufactuer = state.manufactuer.filter(
        (item) => item._id != action.payload
      );
      state.response = "delete";
    });
    // update manufactuer
    builder.addCase(modifiedManufactuer.fulfilled, (state, action) => {
      const updateItem = action.payload;
      const index = state.manufactuer.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.manufactuer[index] = updateItem;
      }
      state.response = "update";
    });
  },
  //end reducer
});

// export const { addCategory, removeCategory } = categorySlice.actions;
export default manufactuerSlice.reducer;
