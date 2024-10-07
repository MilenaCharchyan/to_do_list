import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../type/type";
import { RootState } from "../../app/store";
const initialState: { tasks: ITask[] } = {
    tasks: [
        {id: 1, name: "tas1", description: "tasts", done: true},
        {id: 2, name: "tas2", description: "tasts", done: false},
        {id: 3, name: "tas3", description: "tasts", done: false},
    ]
};
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            console.log('==>',action.payload);
            
            state.tasks.push(action.payload);
        },
        toggleDone: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.done = !task.done;

            }
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
    },
});

export const { addTask, toggleDone, deleteTask } = taskSlice.actions;
export const selectTask = (state: RootState) => state.task
export default taskSlice.reducer;