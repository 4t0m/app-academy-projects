import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from "./tabs";

const tabs = [{title: "tab1", content: "content1"}, {title: "tab2", content: "content2"}];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Tabs tabs={tabs}/>, root);
});
