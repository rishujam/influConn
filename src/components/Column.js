const Column = (
    { 
        children, 
        alignment = "center",
        bgColor = "transparent"
    }
) => {
    const styles = {
      display: "flex",
      flexDirection: "column",
      alignItems: alignment,
      justifyContent: alignment,
      background: bgColor,
      width: "100%",
    };
    return <div style={styles}>{children}</div>;
  };

  export default Column;