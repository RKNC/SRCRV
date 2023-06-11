import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./pages/mainpage"
import Login from "./pages/login"
import Register from "./pages/register"
import RegistroVuelos from "./pages/registroVuelos"
import MostrarVuelos from "./pages/mostrarVuelos"
import EliminarVuelo from "./pages/eliminarVuelo"
function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/mainpage" element={<MainPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/registrovuelos" element={<RegistroVuelos/>}/>
                <Route path="/mostrarvuelos" element={<MostrarVuelos/>}/>
                <Route path="/eliminarvuelo" element={<EliminarVuelo/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
