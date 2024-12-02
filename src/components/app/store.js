import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from '../../pages/service-page/ServicesSlice'
import newsReducer from '../../pages/main-page/NewsSlice'
import profileReducer from '../../pages/profile-page/ProfileSlice'


export default configureStore({
  reducer: {
    services: servicesReducer,
    news: newsReducer,
    profile: profileReducer,
  }
})
