import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expenseapp-a26e5-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
