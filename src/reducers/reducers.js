import {combineReducers} from 'redux'
import * as actions from '../actions/actions'

const initialState = {
  bankUser: {
    name: "Miss A R Hamilton",
    businessName: "Quick Fix IT",
    sortCode: "12-34-57",
    accNo: "98765432",
    bankName: "Bank of Argentina",
    balance: "£15,670"
  },
  bankEmployee: {
    name: "Matias",
    bankName: "Bank of Argentina"
  },
  loc: {
    letterId: "",
    dateAndTime: "",
    supplier: {
      name: "",
      businessName: "",
      sortCode: "",
      accNo: "",
      bankName: "",
    },
    productDetails: {
      type: "",
      quantity: 0,
      pricePerUnit: "",
      total: ""
    },
    rules: [],
    status: ""
  }
}

const suggestChangesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SUGGEST_CHANGES:
      return { ...state, loc: [...state.loc, action.payload] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
   suggestChangesReducer
})

export default rootReducer;
