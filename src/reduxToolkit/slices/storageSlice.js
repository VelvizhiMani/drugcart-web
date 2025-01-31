import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStorages = createAsyncThunk("fetchStorages", async () => {
  const data = await fetch("http://localhost:3000/api/storage");
  return data.json();
});

export const fetchStorageByid = createAsyncThunk(
  "fetchStorageByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/storage/${values}`);
    return data.json();
  }
);

export const addStorage = createAsyncThunk("addStorage", async (values) => {
  const result = await fetch("http://localhost:3000/api/storage", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      storagename: values.storagename,
      storageurl: values.storageurl,
    }),
  });
  return result.json();
});

export const removeStorage = createAsyncThunk(
  "removeStorage",
  async (values) => {
    const result = await fetch(`http://localhost:3000/api/storage/${values}`, {
      method: "DELETE",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    });
    return result.values.response;
  }
);

export const modifiedStorage = createAsyncThunk(
  "modifiedStorage",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/storage/${values.id}`,
      {
        method: "PUT",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          storagename: values.storagename,
          storageurl: values.storageurl,
        }),
      }
    );
    return result.json();
  }
);

const initialState = {
  loading: false,
  storage: [],
  error: "",
  isSuccess: "",
};

const storageSlice = createSlice({
  name: "category",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchStorages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStorages.fulfilled, (state, action) => {
      state.loading = false;
      state.storage = action.payload.storages;
      state.error = "";
    });
    builder.addCase(fetchStorages.rejected, (state, action) => {
      state.loading = false;
      state.storage = [];
      state.error = action.error.message;
    });
    //add storage
    builder.addCase(addStorage.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addStorage.fulfilled, (state, action) => {
      state.loading = false;
      state.storage = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addStorage.rejected, (state, action) => {
      state.loading = false;
      state.storage = [];
      state.error = action.error.message;
    });
  },
  //end reducer
});

// export const { addCategory, removeCategory } = categorySlice.actions;
export default storageSlice.reducer;
