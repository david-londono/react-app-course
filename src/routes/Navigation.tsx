import { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from './routes';

export const Navigation = () => {
  return (
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="text" />
                <ul>
                    {
                        routes.map(({to, name}) =>  (
                            <li key={to}>
                                <NavLink 
                                    className={({isActive}) => isActive ? "nav-active" : ""} 
                                    to={to}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }  
                </ul>
            </nav>
            <Routes>
                {
                    routes.map(({to, path, Component}) => (
                        <Route 
                            key={to} 
                            path={path} 
                            element={<Component />}
                        />
                    ))
                }
                <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
            </Routes>
        </div>
        </BrowserRouter>
      </Suspense>
  )
}
