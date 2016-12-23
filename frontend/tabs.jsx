import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0, tabs: props.tabs };
  }

  setCurrentTab(tabIndex) {
      this.setState({tabIndex});
  }

  render() {
    return (<div><ul>
      {
        this.state.tabs.map((tab, idx) => (
          <li onClick={this.setCurrentTab.bind(this, idx)} key={idx}>{tab.title}</li>
        ))
      }
    </ul>
    <article>
      {this.state.tabs[this.state.tabIndex].content}
    </article>
    </div>);
  }

}

export default Tabs;
