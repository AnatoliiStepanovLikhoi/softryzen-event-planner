const theme = Object.freeze({
  colors: {
    // global
    background: "#FEFCFF",
    text: "#49454F",
    textTitle: "#1C1B1F",
    categoryTitle: "#3F3F3F",
    accent: "#7B61FF",

    button: {
      default: "#9747FF",
      hover: "#6243FF",
      disable: "#ACA7C3",
    },

    pagination: {
      text: "#ACA7C3",
      textActive: "#7B61FF",
      bg: "#FFFFFF",
      icon: "#BCBCBC",
      iconActive: "#7B61FF",
    },

    card: {
      bg: "#ffffff",
      textTitle: "#1C1B1F",
      textDesc: "#49454F",
      textDate: "#7B61FF",
      textCategory: "#7B61FF",
      textPriorityLow: "#7B61FF",
      textPriorityMedium: "#E2A300",
      textPriorityHigh: "#FF2B77",
    },

    input: {
      bg: "#FFFFFF",
      sortInputText: "#3F3F3F",
      sortInputTextInactive: "#aca7c3",
      placeholderColor: "#888888",
      inputShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28);",
    },

    // // Modal
    // modal: {
    //   text: "#23262a",
    //   textForm: "rgba(35, 38, 42, .8)",
    //   iconPersonForm: "rgba(35, 38, 42, .8)",
    //   iconPen: "#23262a",
    //   iconClose: "#333333",
    //   iconPersonPhotoUser: "#8baa36",
    //   iconPersonPhotoUserHover: "#23262A",
    //   bgUnderPhotoUser: "#d9d9d9",
    //   bgInputHover: "#fafafa",
    //   border: "#23262a",
    //   // borderHover: '#23262a',
    //   bg: "#fafafa",
    //   bgBtn: "#8baa36",
    //   textBtn: "#fafafa",
    //   iconBtn: "#fafafa",
    //   bgBtnHover: "#22252a",
    //   textBtnCancel: "#23262a",
    //   textBtnCancelHover: "#fafafa",
    //   bgBtnCancel: "#D9D9D9",
    //   borderBtnCancel: "#23262A",
    // },

    // // header
    // header: {
    //   textMain: "#23262a",
    //   textSecondary: "#22252a",
    //   iconMenu: "#22252a",
    //   iconSearch: "#22252a",
    //   bgAccent: "#ebf3d4",
    //   accent: "#8baa36",
    //   mainPageTextColor: "#1E1F28",
    //   mainPageIconColor: "#1E1F28",
    //   // iconMenuHover: '#8baa36',
    //   // iconSearchHover: '#8baa36',
    // },
  },

  spacing: (value) => `${4 * value}px`,
  borders: {
    none: "none",
    normal: "1px solid",
  },

  radii: {
    none: "none",
    normal: "8px",
    inputNormal: "10px",
    cardNormal: "12px",
    circle: "50%",
  },
  fontSizes: {
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "24px",
    xxl: "32px",
    sectionTitleTablet: "32px",
    generalTitle: "100px",
  },
  fontWeight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
});

export default theme;
