import {breakpoints} from "../../style/breakpoints";

export const styles = {
  content: {
    width:"100%",
    maxWidth:"1400px",
    gap:"8px",
    flexDirection:"column"
  },

  offers: {
    flexDirection: "column",
    gap: "8px"
  }
};

export const stylesBreakpoints = {
  [breakpoints.lg]: {
    wrapper: {
      cursor: "pointer",
      padding:"30px 30px 60px 30px",
      flexDirection:"column",
      maxWidth:"1400px",
      width:"100%",
      justifyContent:"center",
      gap: "50px"
    },

    blockPagination: {
      width: "350px",
    }
  },
  [breakpoints.sm]: {
    wrapper: {
      cursor: "pointer",
      padding:"9px 9px 17px 9px",
      flexDirection:"column",
      width:"100%",
      justifyContent:"center",
      gap: "25px"
    },

    blockPagination: {
      width: "100%",
    }
  }
};
