import { createSlice } from "@reduxjs/toolkit";

import data from '../data.json';

const initialTodosState = {
    searchWord : '',
    data: data,
};

export const contentReducer = createSlice({
    name: 'content',
    initialState:  initialTodosState,
    
    reducers: {
        toggler: (state, action) => {
             state.data.map(each => {
                if(each.title === action.payload.obj.title) {
                    return each.isBookmarked = !each.isBookmarked
                }
            })
        },
        searcherWord: (state, action) => {
            state.searchWord = action.payload.word
        },
    }
})

export const { toggler, searcherWord } = contentReducer.actions