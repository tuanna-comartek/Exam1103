import { ToastProvider } from "react-toast-notifications";
import AppRouter from "./components/common/AppRoute";
// import Navigation from "./components/navbar/Navigation";

function App() {
  return (
    <>
      <ToastProvider placement="top-right">
        <AppRouter />
      </ToastProvider>
    </>
  );
}

export default App;
