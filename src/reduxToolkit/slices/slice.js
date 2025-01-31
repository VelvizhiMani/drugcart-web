const {createSlice, nanoid, createAsyncThunk} = require("@reduxjs/toolkit");

const initialState = {
    employees: [],
    isLoading:false,
    error:null,
    employeesAPIData:[]
}

export const apiData = createAsyncThunk("apidata",async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
})

const Slice = createSlice({
    name:'addEmployeeSlice',
    initialState,
    reducers:{
        addEmployee:(state, action)=>{
            console.log(action)
            const data = {
                id:nanoid(),
                name: action.payload
            }
            state.employees.push(data);
        },
        removeEmployee:(state,action)=>{
         const data = state.employees.filter((item)=> {
            return item.id !== action.payload
         })
         state.employees  = data;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(apiData.pending, (state)=> {
        state.isLoading = true;
        state.error = null;
    })
    builder.addCase(apiData.fulfilled, (state,action) => {
        state.isLoading = false;
        state.employeesAPIData = action.payload;
    })
    builder.addCase(apiData.rejected, (state)=> {
        state.isLoading = false;
        state.error = action.error.message;
    })
    }
});

export const {addEmployee, removeEmployee} =Slice.actions;
export default Slice.reducer;