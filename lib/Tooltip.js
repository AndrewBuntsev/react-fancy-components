import React from "react";
import "./Tooltip.css";

export default function tooltip(InnerComponent, options) {
  return class extends React.Component {
    render() {
      return (
        <div className="react-fancy-components-tooltip-container">
          <span className="tooltiptext">{options.text}</span>
          {InnerComponent}
        </div>
      );
    }
  };
}
