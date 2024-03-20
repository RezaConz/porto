import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/porto' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/porto/about' element={<About />} />
                  <Route path='/porto/projects' element={<Projects />} />
                  <Route path='/porto/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
