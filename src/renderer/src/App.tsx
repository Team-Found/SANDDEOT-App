import { Sidebar } from "@components/Sidebar";
import HomeScreen from "./components/Home/Screen";

function App(): JSX.Element {
  return (
    <div className="flex items-center justify-between flex-1 grow overflow-hidden self-stretch">
      <Sidebar />
      <HomeScreen />
    </div>
  );
}

export default App;
