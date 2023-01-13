import {createSlice} from '@reduxjs/toolkit';
// import taskReducer from '../features/tasks/taskSlice';
// un slice es una parte del estado de la aplicación
// en este caso el estado de la calculadora
// el estado de la calculadora es un número


export const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState: {
        value: ''
    },
    reducers: {
        setValue : (state, action) => {
            state.value = `${state.value}${action.payload}`
        },
        del: (state, action) => {
            state.value =  `${state.value}`.slice(0, -1)
        },
        reset: (state, action) => {
            state.value = ''
        }
    }
})

export const {
    setValue, 
    del,
    reset
} = keyboardSlice.actions

export default keyboardSlice.reducer