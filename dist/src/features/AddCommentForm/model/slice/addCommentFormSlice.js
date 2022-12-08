import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    text: '',
};
var addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
    },
});
export var addCommentFormActions = addCommentFormSlice.actions, addCommentFormReducer = addCommentFormSlice.reducer;
//# sourceMappingURL=addCommentFormSlice.js.map