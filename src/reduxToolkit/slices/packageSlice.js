import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPackages = createAsyncThunk("fetchPackages", async () => {
  const data = await fetch("http://localhost:3000/api/package");
  return data.json();
});

export const fetchPackageByid = createAsyncThunk(
  "fetchPackageByid",
  async (values) => {
    const data = await fetch(`http://localhost:3000/api/package/${values}`);
    return data.json();
  }
);

export const addPackage = createAsyncThunk("addPackage", async (values) => {
  const result = await fetch("http://localhost:3000/api/package", {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      packagename: values.packagename,
      packageurl: values.packageurl,
    }),
  });
  return result.json();
});

export const removePackage = createAsyncThunk(
  "removePackage",
  async (values) => {
    const result = await fetch(`http://localhost:3000/api/package/${values}`, {
      method: "DELETE",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    });
    return result.values.response;
  }
);

export const modifiedPackage = createAsyncThunk(
  "modifiedPackage",
  async (values) => {
    const result = await fetch(
      `http://localhost:3000/api/package/${values.id}`,
      {
        method: "PUT",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          packagename: values.packagename,
          packageurl: values.packageurl,
        }),
      }
    );
    return result.json();
  }
);

const initialState = {
  loading: false,
  package: [],
  error: "",
  isSuccess: "",
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  // reducer call here
  extraReducers: (builder) => {
    builder.addCase(fetchPackages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPackages.fulfilled, (state, action) => {
      state.loading = false;
      state.package = action.payload.packages;
      state.error = "";
    });
    builder.addCase(fetchPackages.rejected, (state, action) => {
      state.loading = false;
      state.package = [];
      state.error = action.error.message;
    });
    // fetch package by id
    builder.addCase(fetchPackageByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPackageByid.fulfilled, (state, action) => {
      state.loading = false;
      state.packageedit = action.payload.result;
      state.error = "";
    });
    builder.addCase(fetchPackageByid.rejected, (state, action) => {
      state.loading = false;
      state.package = [];
      state.error = action.error.message;
    });
    //add package
    builder.addCase(addPackage.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addPackage.fulfilled, (state, action) => {
      state.loading = false;
      state.package = [];
      state.isSuccess = action.payload;
    });
    builder.addCase(addPackage.rejected, (state, action) => {
      state.loading = false;
      state.package = [];
      state.error = action.error.message;
    });
    // remove package
    builder.addCase(removePackage.fulfilled, (state, action) => {
      state.package = state.package.filter(
        (item) => item._id != action.payload
      );
      state.response = "delete";
    });
    // update package
    builder.addCase(modifiedPackage.fulfilled, (state, action) => {
      const updateItem = action.payload;
      const index = state.package.findIndex(
        (item) => item._id === updateItem._id
      );
      if (index !== -1) {
        state.package[index] = updateItem;
      }
      state.response = "update";
    });
  },
  //end reducer
});

// export const { addCategory, removeCategory } = categorySlice.actions;
export default packageSlice.reducer;
