import React from "react";

const WithLogging = (WrappedComp) => {
  const enhancedClass = class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComp.name} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${WrappedComp.name} is going to unmount`);
    }
    render() {
      return <WrappedComp {...this.props} />;
    }
  };
  enhancedClass.displayName = `WithLogging(${
    WrappedComp.name || WrappedComp.displayName || "Component"
  })`;
  return enhancedClass;
};
export default WithLogging;
