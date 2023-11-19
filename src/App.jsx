import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ContextProvider } from "./Context/Context";
import Router from "./Router/Router";

function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
