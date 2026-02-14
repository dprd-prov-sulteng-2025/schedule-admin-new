import LoginPage from "./pages/auth/login";
import SchedulePage from "./pages/schedule";
import { Route, Routes } from "react-router-dom";
import ParipurnaPage from "./pages/schedule/paripurna";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/schedules" element={<SchedulePage />}></Route>
        <Route path="/paripurna" element={<ParipurnaPage />}></Route>
    </Routes>
  );
}

export default App;
