// import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}

export default App;
