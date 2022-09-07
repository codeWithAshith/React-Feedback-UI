import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <>
          <Header
            text="Feedback UI"
            bgColor="rgba(0,0,0,0.4)"
            textColor="#ff6a95"
          />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<HomePage />} />

              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
