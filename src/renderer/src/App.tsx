import { Sidebar } from "@components/Sidebar";
import HomeScreen from "./components/Home/Screen";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="flex items-center justify-between flex-1 grow overflow-hidden self-stretch">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
