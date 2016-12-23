import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0, tabs: props.tabs };
  }

  render() {
    console.log(this.state.tabs);
    // debugger;
    return (<div><ul>
      {
        this.state.tabs.map((tab, idx) => (
          <li key={idx}>{tab.title}</li>
        ))
      }
    </ul>
    <article>Some other text.</article>
    </div>);
  }

}

export default Tabs;
