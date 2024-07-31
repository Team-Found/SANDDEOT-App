import { Sidebar } from "@components/Sidebar";
import HomeScreen from "@pages/Home";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="flex items-center justify-between flex-1 grow overflow-hidden self-stretch">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="explore" element={<div></div>} />
        <Route path="article" element={<div></div>} />
        <Route path="word" element={<div></div>} />
      </Routes>
    </div>
  );
}

export default App;
