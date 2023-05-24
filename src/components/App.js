import { lazy, Suspense } from "react";

import { Routes, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
import css from './app.module.css';
// import

export const App = () => {
    const StyledLink = styled(NavLink)`
    color: #e9e9e9;
    font-size: 30px;
    margin-left: 200px;

    &:last-child {
      margin-left: 50px;
    }

    &.active {
      color: orange;
    }
  `;

  return (
    <>
    <nav className={css.navigation}>
        <StyledLink to="/" end>
            Home
        </StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
    </nav>

    <Suspense fallback={<p>Load page...</p>}>
        <Routes>
            {/* <Route path="/" element={} />
            <Route path="/" element={} />
            <Route path="/" element={}>
                <Route path="/" element={} />
                <Route path="/" element={} />
            </Route>
            <Route path="/" element={} /> */}
        </Routes>
    </Suspense>
    </>
  );
};