import {breakpoints} from "../../style/breakpoints";

export const styles = {
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

    period: {
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "right"
    },

    periodText: {
        whiteSpace: "nowrap",
        color: "#878D9D"
    }
}

export const stylesBreakpoints = {
    [breakpoints.lg]: {
        wrapper: {
            boxShadow: "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
            borderRadius: "8px",
            padding: "24px 16px",
            background: "white",
            width: "100%"
        },

        contentWrapper: {
            paddingLeft: "25px",
            justifyContent: "space-between",
            width: "100%"
        },

        additionalInfo: {
            gap: "30px",
        },

        bookmark: {
            justifyContent: "flex-end",
            cursor: "pointer"
        },

        avatarBlock: {
            position: "relative",
            minWidth: "85px"
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
    },
    [breakpoints.sm]: {
        wrapper: {
            boxShadow: "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
            borderRadius: "8px",
            padding: "17px",
            background: "#EFF0F5",
            width: "100%"
        },

        contentWrapper: {
            paddingLeft: "25px",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            width: "100%",
            gap: "17px"
        },

        bookmark: {
            display: "none",
        },

        avatarBlock: {
            position: "relative",
            minWidth: "65px"
        },

        avatar: {
            aspectRatio: "1",
            position: "absolute",
            top: "41px",
            left: "0px",
            objectFit: "cover",
            width: "100%",
            maxWidth: "65px",
            maxHeight: "65px",
            borderRadius: "50%",
        },
    }
}