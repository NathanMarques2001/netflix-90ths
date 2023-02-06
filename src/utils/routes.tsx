import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import { GlobalStyles } from '../styles/global-style';

import { Home } from '../templates/Home';
import { Main } from '../templates/Main';

export function PageRoutes() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <Routes>
            <Route path="/netflix-90ths" element={<Home />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}
