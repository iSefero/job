export const styles = {
    avatarBlock: {
        position: "relative",
        width: "85px"
    },
    avatar: {
        aspectRatio: "1",
        position: "absolute",
        top: "0px",
        left: "0px",
        objectFit: "cover",
        width: "100%",
        maxWidth: "85px",
        maxHeight: "85px",
        borderRadius: "50%",
    },
    contentWrapper: {
        paddingLeft: "25px",
        justifyContent: "space-between",
        width: "100%"
    },
    content: {
        gap: "8px",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    mainInfo: {
      fontSize: "20px",
      color: "#3A4562",
      fontWeight: "700"
    },
    name: {
        color: "#878D9D",
    },
    location: {
        color: "#878D9D"
    },
    additionalInfo: {
      gap: "30px",
      paddingLeft: "180px"
    },
    star: {
        color: "grey"
    },
    period: {
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "right"
    },
    bookmark: {
        justifyContent: "flex-end",
        cursor: "pointer"
    },
    periodText: {
        whiteSpace: "nowrap",
        color: "#878D9D"
    }
}