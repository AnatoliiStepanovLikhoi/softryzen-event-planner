// import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./constants/Background/Background.styled";
import theme from "./constants/theme/theme";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/create/" element={<CreateEventPage />} />
            <Route path="/event/:eventId" element={<EventDetailPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Route>
        </Routes>
      </Background>
    </ThemeProvider>
  );
}

export default App;
