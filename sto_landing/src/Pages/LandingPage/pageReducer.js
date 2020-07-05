import React from "react";
export const PageContext = React.createContext();

export const initialState = {
    openPreview: false,
    imageToPreview: null,
};

export const PageReducer = (state, action) => {
    switch (action.type) {
        case 'PREVIEW_SHOW':
            return {
                ...state,
                openPreview: action.payload.open,
                imageToPreview: action.payload.image
            };
        case 'PREVIEW_HIDE': {
            return {
                ...state,
                openPreview: false,
                imageToPreview: null,
            };
        }
        default:
            return state
    }
};