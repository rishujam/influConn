import React from "react";

const Spacer = ({ height = "16px", width = "100%", bgColor = "transparent" }) => {
    const styles = {
      backgroundColor: bgColor,
      width: width,
      height: height
    };
    return <div style={styles}></div>;
  };

  export default Spacer;