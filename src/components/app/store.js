import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from '../../pages/service-page/ServicesSlice'
import newsReducer from '../../pages/main-page/NewsSlice'


export default configureStore({
  reducer: {
    services: servicesReducer,
    news: newsReducer,
  }
})
