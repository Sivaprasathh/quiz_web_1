import React from "react";

class Comments1 extends React.Component {
  render() {
    const { values } = this.props;

    const { ind } = this.props;

    return (
      <div>
        {values.map((val) => {
          return <div>{val[0] === ind ? val[1] : " "}</div>;
        })}
      </div>
    );
  }
}
export default Comments1;
