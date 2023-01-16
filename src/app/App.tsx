import { Component, lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to="/poo">Poo</Link>
            <p>Yee haw</p>       
        </div>
    )
}

const ComponentB = lazy(() => { // Lazy load ComponentB so that the build only includes 
    return import( "./ComponentB");
});

export const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading moos...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/poo" element={<ComponentB/>}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}