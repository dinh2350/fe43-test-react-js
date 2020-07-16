import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import BaiTapLayout2 from "./Components/BaiTapLayout2/BaiTapLayout2";
import DataBinding from "./DataBinding/DataBinding";
import EventBinding from "./EventBinding/EventBinding";
import RenderWithState from "./RenderWithState/RenderWithState";
import BaiTapChonXe from "./RenderWithState/BaiTapChonXe";
import RenderWithMap from "./RenderWithState/RenderWithMap/RenderWithMap";
import ExampleGlasses from "./RenderWithState/ExampleGlasses";
function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBinding /> */}
      {/* <EventBinding /> */}
      {/* <RenderWithState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      <ExampleGlasses />
    </div>
  );
}

export default App;
