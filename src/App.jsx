import { store } from "./app/store"; // ✅ Import the store
import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  useStoreWebsiteDataToLocalStorage();
  return <AppRoutes />;
}

// ✅ Save userSlice to localStorage on any change
store.subscribe(() => {
  localStorage.setItem("userSliceData", JSON.stringify(store.getState().user));
});

export default App;
