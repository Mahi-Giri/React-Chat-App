import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to="/auth" />} />
                
                <Route path="/auth" element={<Auth />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
