import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from "./tabs";
import Clock from "./clock";

const tabs = [{title: "tab1", content: "content1"}, {title: "tab2", content: "content2"}];

document.addEventListener("DOMContentLoaded", () => {
  const tabWidget = document.getElementById("tabWidget");
  ReactDOM.render(<Tabs tabs={tabs}/>, tabWidget);
  const clockWeather = document.getElementById("clock-weather-widget");
  ReactDOM.render(<Clock />, clockWeather);
});
