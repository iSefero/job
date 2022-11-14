import {breakpoints} from "../../style/breakpoints";

export const styles = {
  mainContent: {
    flexDirection: "column",
    width: "100%",
    maxWidth: "720px"
  },

  header: {
    width: "100%",
    justifyContent: "space-between"
  },

  headerTitle: {
    fontSize: "28px",
    fontWeight: "700"
  },

  headerLinksWrapper: {
    gap: "25px",
  },

  headerLinkBlock: {
   gap: "8px",
    cursor: "pointer",
    alignItems: "center"
  },

  buttonBlock: {
   paddingTop: "40px"
  },

  applyButton: {
    width: "127px",
    height: "52px",
    color: "white",
    background: "#384564",
    fontSize: "12px"
  },

  title: {
   fontSize: "24px",
    fontWeight: "700",
  },

  postTime: {
    color: "rgba(56, 65, 93, 0.355988)"
  },

  salaryBlock: {
    padding: "10px 0px",
    alignItems: "center",
    whiteSpace: "nowrap",
    width: "100%",
    justifyContent: "space-between"
  },

  salary: {
   fontSize: "20px",
    fontWeight: "700"
  },

  responsibilities: {
   fontWeight: "700"
  },

  benefits: {
   fontWeight: "700",
    paddingTop: "40px"
  },

  additionalWrapper: {
   flexDirection: "column",
    gap: "20px"
  },

  additionalBlock: {
   flexDirection: "column",
    gap: "15px"
  },

  textInfoImagesBlock: {
    fontWeight: "700",
    paddingTop: "85px",
    fontSize: "28px"
  },

  employmentElement: {
    alignItems: "center",
    fontWeight: "700",
    justifyContent: "center",
    width: "33%",
    background: "#E1E6F4",
    height: "50px",
    border: "1px solid rgba(85, 105, 158, 0.3)",
    borderRadius: "8px"
  },

  benefitsElement: {
    alignItems: "center",
    fontWeight: "700",
    justifyContent: "center",
    width: "33%",
    background: "rgba(255, 207, 0, 0.15)",
    height: "50px",
    border: "1px solid #FFCF00",
    borderRadius: "8px",
    color: "#988B49"
  },

  imageWrapper: {
    paddingTop: "20px",
    gap: "10px"
  },

  image: {
   width: "30%",
    borderRadius: "8px"
  },

  returnButtonBlock: {
   position: "relative",
  },

  returnButton: {
   background: "#E4E5EA",
   position: "absolute",
    top: "100px",
    left: "-80px",
    width: "215px",
    height: "50px",
    fontSize: "12px",
    fontWeight: "600",
    padding: "16px 25px"
  },

  mapHeader: {
    width: "100%",
    borderRadius: "8px",
    background: "#384564",
    color: "#E7EAF0"
  }
}

export const breakpointStyles = {
  [breakpoints.lg]: {
    wrapper: {
      flexDirection: "row",
      padding: "50px 20px 160px 90px",
      background: "white",
      justifyContent: "center",
      width: "100%",
      color: "#3A4562",
      fontSize: "18px",
    },

    contentWrap: {
      maxWidth: "1400px",
      background: "white",
      gap: "20px",
      width: "100%",
      justifyContent: "space-between"
    },

    mapTitle: {
      display: "none"
    },

    imageInfoBlock: {
      flexDirection: "column"
    },

    compensationDescription: {
      paddingTop: "45px"
    },

    buttonBlockHeader: {
      paddingTop: "40px"
    },

    mapWrapper: {
      maxWidth: "400px"
    }
  },

  [breakpoints.sm]: {
    wrapper: {
      flexDirection: "column",
      padding: "50px 20px 160px 20px",
      background: "white",
      justifyContent: "center",
      width: "100%",
      color: "#3A4562",
      fontSize: "18px",
    },

    contentWrap: {
      background: "white",
      gap: "60px",
      width: "100%",
      flexDirection: "column"
    },

    returnWrapper: {
      display: "none"
    },

    imageInfoBlock: {
      flexDirection: "column",
      flexWrap: "wrap"
    },

    buttonBlock: {
      paddingTop: "40px",
      justifyContent: "center"
    },

    buttonBlockHeader: {
      display: "none"
    },

    mapWrapper: {
      width: "100%"
    }
  }
}