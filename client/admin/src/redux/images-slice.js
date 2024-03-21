import { createSlice } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    imageGallery: null,
    showedImage: null,
    showedImages: [],
    selectedImages: []
  },
  reducers: {
    setImageGallery: (state, action) => {
      // console.log(action.payload)
      state.imageGallery = action.payload
      console.log(state.imageGallery)
    },
    showImage: (state, action) => {
    },
    showImages: (state, action) => {
    },
    addImage: (state, action) => {
    },
    removeImage: (state, action) => {
    },
    removeImages: (state, action) => {
    }
  }
})

export const { setImageGallery, showImage, showImages, addImage, removeImage, removeImages } = imagesSlice.actions

export default imagesSlice.reducer
