import React from "react";

const Row = ({ children, alignment = "center", bgColor = "transparent", paddingTop = "0px", paddingBottom = "0px"}) => {
    const styles = {
      display: "flex",
      flexDirection: "row",
      justifyContent: alignment,
      alignItems: alignment,
      backgroundColor: bgColor,
      width: "100%",
      paddingTop: paddingTop,
      paddingBottom: paddingBottom
    };
    return <div style={styles}>{children}</div>;
  };

  export default Row;