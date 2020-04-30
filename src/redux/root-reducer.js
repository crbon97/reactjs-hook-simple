import { combineReducers } from 'redux';

import commonReducer from '@iso/redux/Common/reducer';
import articleReducer from '@iso/redux/Article/reducer';
import feedBackReducer from '@iso/redux/Feedback/reducer';
import recruitmentReducer from '@iso/redux/Recruitment/reducer';


export default combineReducers({
  commonReducer,
  articleReducer,
  feedBackReducer,
  recruitmentReducer
});
