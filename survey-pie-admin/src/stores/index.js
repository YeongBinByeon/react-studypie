import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import surveySlice from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // middleware:
});

// // redux 스토어가 넘어온다.
// const middlewareFn = (store) => {
//   return (next) => {
//     return (action) => {

//     }
//   }
// }
