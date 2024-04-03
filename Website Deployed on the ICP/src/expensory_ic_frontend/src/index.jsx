import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./home/Assets/logo.png";

const Index = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
        <div class="preloader">
            <div class="loader loader-inner-1">
                <div class="loader loader-inner-2">
                    <div class="loader loader-inner-3">
                    </div>
                </div>
            </div>
        </div>
        </>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

render(<Index />, document.getElementById("app"));