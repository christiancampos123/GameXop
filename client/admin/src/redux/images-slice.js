import { createSlice } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    imageGallery: null,
    showedImages: [],
    selectedImages: []
  },
  reducers: {
    setImageGallery: (state, action) => {
      // console.log(action.payload)
      state.imageGallery = action.payload
      // console.log(state.imageGallery)
    },
    showImage: (state, action) => {
      state.showedImages.push(action.payload)
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
