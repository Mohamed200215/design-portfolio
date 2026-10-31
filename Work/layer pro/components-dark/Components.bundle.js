// Components bundle — 12 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 2:20 Button (6 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "style2=" + __venc_Button(p.style2) + '|' + "state=" + __venc_Button(p.state);
function Button(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "Continue",
    style2: _p.style2 ?? "primary",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--accent-sage)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--background-bone)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bone)",
      boxShadow: "inset 0 0 0 1.500px var(--accent-sage)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bone-dark)",
      boxShadow: "inset 0 0 0 1.500px var(--accent-sage)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--background-bone)",
      boxShadow: "inset 0 0 0 1.500px var(--divider-silver)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 24px 14px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __impls = {
    // figma: Style=Primary, State=Default
    "style2=primary|state=default": __body0,
    // figma: Style=Primary, State=Pressed
    "style2=primary|state=pressed": __body0,
    // figma: Style=Primary, State=Disabled
    "style2=primary|state=disabled": __body0,
    // figma: Style=Secondary, State=Default
    "style2=secondary|state=default": __body1,
    // figma: Style=Secondary, State=Pressed
    "style2=secondary|state=pressed": __body2,
    // figma: Style=Secondary, State=Disabled
    "style2=secondary|state=disabled": __body3
  };
  return (__impls[__vkey_Button(props)] ?? __body0)();
}

// figma node: 22:284 Home Indicator (1 variants)
const __venc_HomeIndicator = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_HomeIndicator = p => "theme=" + __venc_HomeIndicator(p.theme);
function HomeIndicator(_p = {}) {
  const props = {
    ..._p,
    theme: _p.theme ?? "light"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 134,
    viewBox: "0 0 134 5",
    fill: "none",
    style: {
      position: "relative",
      width: 134,
      overflow: "hidden",
      borderRadius: 3,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "var(--text-ink)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.5 C 0 1.119 1.119 0 2.5 0 L 131.5 0 C 132.881 0 134 1.119 134 2.5 L 134 2.5 C 134 3.881 132.881 5 131.5 5 L 2.5 5 C 1.119 5 0 3.881 0 2.5 L 0 2.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Theme=Light
    "theme=light": __body0
  };
  return (__impls[__vkey_HomeIndicator(props)] ?? __body0)();
}

// figma node: 22:280 Status Bar (1 variants)
const __venc_StatusBar = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_StatusBar = p => "theme=" + __venc_StatusBar(p.theme);
function StatusBar(_p = {}) {
  const props = {
    ..._p,
    theme: _p.theme ?? "light"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "16px 24px 8px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 8,
      width: 3,
      height: 4,
      borderRadius: 1,
      backgroundColor: "var(--text-ink)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.5,
      top: 6,
      width: 3,
      height: 6,
      borderRadius: 1,
      backgroundColor: "var(--text-ink)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 4,
      width: 3,
      height: 8,
      borderRadius: 1,
      backgroundColor: "var(--text-ink)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.5,
      top: 2,
      width: 3,
      height: 10,
      borderRadius: 1,
      backgroundColor: "var(--text-ink)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 12,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.600px var(--text-ink)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.5,
      top: 4,
      width: 11,
      height: 8,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.600px var(--text-ink)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 7.5,
      width: 6,
      height: 4.5,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.600px var(--text-ink)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.75,
      top: 9.5,
      width: 2.5,
      height: 2.5,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 25,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21,
    height: 11,
    viewBox: "0 0 21 11",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 21,
      height: 11,
      overflow: "hidden",
      borderRadius: 3,
      color: "color-mix(in srgb, var(--text-ink) 35%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3 C 0 1.343 1.343 0 3 0 L 18 0 C 19.657 0 21 1.343 21 3 L 21 8 C 21 9.657 19.657 11 18 11 L 3 11 C 1.343 11 0 9.657 0 8 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 17,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23,
      top: 4,
      width: 1.5,
      height: 4,
      borderRadius: 1,
      backgroundColor: "var(--text-ink)"
    }
  }))));
  const __impls = {
    // figma: Theme=Light
    "theme=light": __body0
  };
  return (__impls[__vkey_StatusBar(props)] ?? __body0)();
}

// figma node: 77:13 Onboarding — Skin Type
function OnboardingSkinType(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "80px 24px 40px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      overflow: "hidden",
      borderRadius: 18,
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 12,
    viewBox: "0 0 7 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.5,
      top: 12,
      width: 7,
      height: 12,
      color: "rgb(244,241,236)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.586 0.683 C 7.963 0.36 8.007 -0.208 7.683 -0.586 C 7.36 -0.963 6.792 -1.007 6.414 -0.683 L 7 0 L 7.586 0.683 Z M 0 6 L -0.586 5.317 C -0.785 5.488 -0.9 5.737 -0.9 6 C -0.9 6.263 -0.785 6.512 -0.586 6.683 L 0 6 Z M 6.414 12.683 C 6.792 13.007 7.36 12.963 7.683 12.586 C 8.007 12.208 7.963 11.64 7.586 11.317 L 7 12 L 6.414 12.683 Z M 7 0 L 6.414 -0.683 L -0.586 5.317 L 0 6 L 0.586 6.683 L 7.586 0.683 L 7 0 Z M 0 6 L -0.586 6.683 L 6.414 12.683 L 7 12 L 7.586 11.317 L 0.586 5.317 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(147,161,132)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(147,161,132)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(147,161,132)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.100000023841858,
      color: "rgb(244,241,236)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "What's your skin type?"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.399999976158142,
      color: "rgb(156,154,147)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "This helps us tailor product picks and routine timing to your skin."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgba(147,161,132,0.12)",
      boxShadow: "inset 0 0 0 2px rgb(147,161,132)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "28px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 16.925,
    viewBox: "0 0 14 16.925",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 1.538,
      width: 14,
      height: 16.925,
      color: "rgb(147,161,132)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0.925 C 7 0.925 12.5 7.425 14 11.425 C 14 15.925 11.5 16.925 7 16.925 C 2.5 16.925 0 15.925 0 11.425 C 0 6.925 8.5 -3.075 7 0.925 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Oily")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "28px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 16.925,
    viewBox: "0 0 14 16.925",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 1.538,
      width: 14,
      height: 16.925,
      color: "rgb(244,241,236)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0.925 L 6.251 0.644 L 6.086 1.083 L 6.389 1.441 L 7 0.925 Z M 14 11.425 L 14.8 11.425 L 14.8 11.28 L 14.749 11.144 L 14 11.425 Z M 7 0.925 C 6.389 1.441 6.389 1.441 6.389 1.441 C 6.389 1.441 6.389 1.441 6.389 1.442 C 6.389 1.442 6.39 1.442 6.39 1.442 C 6.391 1.443 6.391 1.444 6.393 1.445 C 6.395 1.448 6.399 1.453 6.404 1.459 C 6.414 1.47 6.429 1.488 6.449 1.512 C 6.488 1.559 6.547 1.63 6.623 1.721 C 6.774 1.904 6.992 2.171 7.259 2.503 C 7.793 3.169 8.52 4.097 9.293 5.149 C 10.857 7.276 12.544 9.821 13.251 11.706 L 14 11.425 L 14.749 11.144 C 13.956 9.028 12.143 6.323 10.582 4.201 C 9.792 3.127 9.051 2.18 8.507 1.502 C 8.235 1.163 8.011 0.89 7.856 0.702 C 7.778 0.608 7.717 0.535 7.676 0.485 C 7.655 0.46 7.639 0.441 7.628 0.428 C 7.622 0.422 7.618 0.417 7.615 0.413 C 7.614 0.412 7.613 0.41 7.612 0.41 C 7.612 0.409 7.611 0.409 7.611 0.408 C 7.611 0.408 7.611 0.408 7.611 0.408 C 7.611 0.408 7.611 0.408 7 0.925 Z M 14 11.425 L 13.2 11.425 C 13.2 13.526 12.625 14.594 11.736 15.202 C 10.766 15.865 9.238 16.125 7 16.125 L 7 16.925 L 7 17.725 C 9.262 17.725 11.234 17.484 12.639 16.522 C 14.125 15.506 14.8 13.824 14.8 11.425 L 14 11.425 Z M 7 16.925 L 7 16.125 C 4.762 16.125 3.234 15.865 2.264 15.202 C 1.375 14.594 0.8 13.526 0.8 11.425 L 0 11.425 L -0.8 11.425 C -0.8 13.824 -0.125 15.506 1.361 16.522 C 2.766 17.484 4.738 17.725 7 17.725 L 7 16.925 Z M 0 11.425 L 0.8 11.425 C 0.8 10.501 1.253 9.176 2.017 7.688 C 2.764 6.23 3.753 4.723 4.701 3.47 C 5.663 2.197 6.53 1.257 7.023 0.882 C 7.148 0.787 7.195 0.771 7.177 0.777 C 7.167 0.781 7.09 0.808 6.973 0.798 C 6.833 0.786 6.662 0.722 6.53 0.573 C 6.414 0.44 6.387 0.308 6.381 0.262 C 6.374 0.213 6.38 0.194 6.376 0.224 C 6.368 0.285 6.336 0.417 6.251 0.644 L 7 0.925 L 7.749 1.206 C 7.851 0.933 7.929 0.674 7.961 0.444 C 7.977 0.328 7.986 0.189 7.966 0.044 C 7.946 -0.099 7.891 -0.304 7.729 -0.487 C 7.344 -0.923 6.824 -0.795 6.645 -0.732 C 6.427 -0.655 6.223 -0.52 6.055 -0.392 C 5.376 0.124 4.4 1.215 3.424 2.505 C 2.434 3.814 1.392 5.4 0.593 6.958 C -0.191 8.486 -0.8 10.099 -0.8 11.425 L 0 11.425 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Dry"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "28px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 16.925,
    viewBox: "0 0 14 16.925",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 1.538,
      width: 14,
      height: 16.925,
      color: "rgb(244,241,236)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0.925 L 6.251 0.644 L 6.086 1.083 L 6.389 1.441 L 7 0.925 Z M 14 11.425 L 14.8 11.425 L 14.8 11.28 L 14.749 11.144 L 14 11.425 Z M 7 0.925 C 6.389 1.441 6.389 1.441 6.389 1.441 C 6.389 1.441 6.389 1.441 6.389 1.442 C 6.389 1.442 6.39 1.442 6.39 1.442 C 6.391 1.443 6.391 1.444 6.393 1.445 C 6.395 1.448 6.399 1.453 6.404 1.459 C 6.414 1.47 6.429 1.488 6.449 1.512 C 6.488 1.559 6.547 1.63 6.623 1.721 C 6.774 1.904 6.992 2.171 7.259 2.503 C 7.793 3.169 8.52 4.097 9.293 5.149 C 10.857 7.276 12.544 9.821 13.251 11.706 L 14 11.425 L 14.749 11.144 C 13.956 9.028 12.143 6.323 10.582 4.201 C 9.792 3.127 9.051 2.18 8.507 1.502 C 8.235 1.163 8.011 0.89 7.856 0.702 C 7.778 0.608 7.717 0.535 7.676 0.485 C 7.655 0.46 7.639 0.441 7.628 0.428 C 7.622 0.422 7.618 0.417 7.615 0.413 C 7.614 0.412 7.613 0.41 7.612 0.41 C 7.612 0.409 7.611 0.409 7.611 0.408 C 7.611 0.408 7.611 0.408 7.611 0.408 C 7.611 0.408 7.611 0.408 7 0.925 Z M 14 11.425 L 13.2 11.425 C 13.2 13.526 12.625 14.594 11.736 15.202 C 10.766 15.865 9.238 16.125 7 16.125 L 7 16.925 L 7 17.725 C 9.262 17.725 11.234 17.484 12.639 16.522 C 14.125 15.506 14.8 13.824 14.8 11.425 L 14 11.425 Z M 7 16.925 L 7 16.125 C 4.762 16.125 3.234 15.865 2.264 15.202 C 1.375 14.594 0.8 13.526 0.8 11.425 L 0 11.425 L -0.8 11.425 C -0.8 13.824 -0.125 15.506 1.361 16.522 C 2.766 17.484 4.738 17.725 7 17.725 L 7 16.925 Z M 0 11.425 L 0.8 11.425 C 0.8 10.501 1.253 9.176 2.017 7.688 C 2.764 6.23 3.753 4.723 4.701 3.47 C 5.663 2.197 6.53 1.257 7.023 0.882 C 7.148 0.787 7.195 0.771 7.177 0.777 C 7.167 0.781 7.09 0.808 6.973 0.798 C 6.833 0.786 6.662 0.722 6.53 0.573 C 6.414 0.44 6.387 0.308 6.381 0.262 C 6.374 0.213 6.38 0.194 6.376 0.224 C 6.368 0.285 6.336 0.417 6.251 0.644 L 7 0.925 L 7.749 1.206 C 7.851 0.933 7.929 0.674 7.961 0.444 C 7.977 0.328 7.986 0.189 7.966 0.044 C 7.946 -0.099 7.891 -0.304 7.729 -0.487 C 7.344 -0.923 6.824 -0.795 6.645 -0.732 C 6.427 -0.655 6.223 -0.52 6.055 -0.392 C 5.376 0.124 4.4 1.215 3.424 2.505 C 2.434 3.814 1.392 5.4 0.593 6.958 C -0.191 8.486 -0.8 10.099 -0.8 11.425 L 0 11.425 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Combination")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "28px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 16.925,
    viewBox: "0 0 14 16.925",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 1.538,
      width: 14,
      height: 16.925,
      color: "rgb(244,241,236)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 0.925 L 6.251 0.644 L 6.086 1.083 L 6.389 1.441 L 7 0.925 Z M 14 11.425 L 14.8 11.425 L 14.8 11.28 L 14.749 11.144 L 14 11.425 Z M 7 0.925 C 6.389 1.441 6.389 1.441 6.389 1.441 C 6.389 1.441 6.389 1.441 6.389 1.442 C 6.389 1.442 6.39 1.442 6.39 1.442 C 6.391 1.443 6.391 1.444 6.393 1.445 C 6.395 1.448 6.399 1.453 6.404 1.459 C 6.414 1.47 6.429 1.488 6.449 1.512 C 6.488 1.559 6.547 1.63 6.623 1.721 C 6.774 1.904 6.992 2.171 7.259 2.503 C 7.793 3.169 8.52 4.097 9.293 5.149 C 10.857 7.276 12.544 9.821 13.251 11.706 L 14 11.425 L 14.749 11.144 C 13.956 9.028 12.143 6.323 10.582 4.201 C 9.792 3.127 9.051 2.18 8.507 1.502 C 8.235 1.163 8.011 0.89 7.856 0.702 C 7.778 0.608 7.717 0.535 7.676 0.485 C 7.655 0.46 7.639 0.441 7.628 0.428 C 7.622 0.422 7.618 0.417 7.615 0.413 C 7.614 0.412 7.613 0.41 7.612 0.41 C 7.612 0.409 7.611 0.409 7.611 0.408 C 7.611 0.408 7.611 0.408 7.611 0.408 C 7.611 0.408 7.611 0.408 7 0.925 Z M 14 11.425 L 13.2 11.425 C 13.2 13.526 12.625 14.594 11.736 15.202 C 10.766 15.865 9.238 16.125 7 16.125 L 7 16.925 L 7 17.725 C 9.262 17.725 11.234 17.484 12.639 16.522 C 14.125 15.506 14.8 13.824 14.8 11.425 L 14 11.425 Z M 7 16.925 L 7 16.125 C 4.762 16.125 3.234 15.865 2.264 15.202 C 1.375 14.594 0.8 13.526 0.8 11.425 L 0 11.425 L -0.8 11.425 C -0.8 13.824 -0.125 15.506 1.361 16.522 C 2.766 17.484 4.738 17.725 7 17.725 L 7 16.925 Z M 0 11.425 L 0.8 11.425 C 0.8 10.501 1.253 9.176 2.017 7.688 C 2.764 6.23 3.753 4.723 4.701 3.47 C 5.663 2.197 6.53 1.257 7.023 0.882 C 7.148 0.787 7.195 0.771 7.177 0.777 C 7.167 0.781 7.09 0.808 6.973 0.798 C 6.833 0.786 6.662 0.722 6.53 0.573 C 6.414 0.44 6.387 0.308 6.381 0.262 C 6.374 0.213 6.38 0.194 6.376 0.224 C 6.368 0.285 6.336 0.417 6.251 0.644 L 7 0.925 L 7.749 1.206 C 7.851 0.933 7.929 0.674 7.961 0.444 C 7.977 0.328 7.986 0.189 7.966 0.044 C 7.946 -0.099 7.891 -0.304 7.729 -0.487 C 7.344 -0.923 6.824 -0.795 6.645 -0.732 C 6.427 -0.655 6.223 -0.52 6.055 -0.392 C 5.376 0.124 4.4 1.215 3.424 2.505 C 2.434 3.814 1.392 5.4 0.593 6.958 C -0.191 8.486 -0.8 10.099 -0.8 11.425 L 0 11.425 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Normal")))), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    label: "Next",
    style2: "primary",
    state: "default"
  }), /*#__PURE__*/React.createElement(StatusBar, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393
    },
    theme: "light"
  }), /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "absolute",
      left: 0,
      top: 831,
      width: 393
    },
    theme: "light"
  }));
}

// figma node: 5:69 AM/PM Toggle (2 variants)
const __venc_AMPMToggle = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_AMPMToggle = p => "selected=" + __venc_AMPMToggle(p.selected);
function AMPMToggle(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? "am"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--divider-silver)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--accent-sage)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--background-bone)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "AM")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-ink-muted)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "PM")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--divider-silver)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-ink-muted)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "AM")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--accent-sage)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 20px 8px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--background-bone)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "PM")));
  const __impls = {
    // figma: Selected=AM
    "selected=am": __body0,
    // figma: Selected=PM
    "selected=pm": __body1
  };
  return (__impls[__vkey_AMPMToggle(props)] ?? __body0)();
}

// figma node: 3:34 Step Row (4 variants)
const __venc_StepRow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_StepRow = p => "state=" + __venc_StepRow(p.state);
function StepRow(_p = {}) {
  const props = {
    ..._p,
    stepNumber: _p.stepNumber ?? "01",
    state: _p.state ?? "upcoming",
    title: _p.title ?? "Vitamin C Serum",
    subtitle: _p.subtitle ?? "Antioxidant treatment"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "color-mix(in srgb, var(--divider-silver) 50%, transparent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.500px var(--divider-silver)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)"
    }
  }, props.stepNumber)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.subtitle)), /*#__PURE__*/React.createElement("svg", {
    width: 361,
    height: 1,
    viewBox: "0 -0.500 361 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 63,
      width: 361,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 361 0 L 361 -0.5 L 361 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--background-bone-dark)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--background-bone)"
    }
  }, props.stepNumber)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink)",
      flexShrink: 0
    }
  }, props.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.subtitle)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      borderRadius: "50%",
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 10,
    viewBox: "0 0 12 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 12,
      width: 12,
      height: 10,
      color: "var(--background-bone)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.884 4.616 C 0.396 4.128 -0.396 4.128 -0.884 4.616 C -1.372 5.104 -1.372 5.896 -0.884 6.384 L 0 5.5 L 0.884 4.616 Z M 4.5 10 L 3.616 10.884 C 3.872 11.14 4.227 11.273 4.589 11.247 C 4.95 11.221 5.283 11.04 5.5 10.75 L 4.5 10 Z M 13 0.75 C 13.414 0.198 13.302 -0.586 12.75 -1 C 12.198 -1.414 11.414 -1.302 11 -0.75 L 12 0 L 13 0.75 Z M 0 5.5 L -0.884 6.384 L 3.616 10.884 L 4.5 10 L 5.384 9.116 L 0.884 4.616 L 0 5.5 Z M 4.5 10 L 5.5 10.75 L 13 0.75 L 12 0 L 11 -0.75 L 3.5 9.25 L 4.5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.subtitle)), /*#__PURE__*/React.createElement("svg", {
    width: 361,
    height: 1,
    viewBox: "0 -0.500 361 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 63,
      width: 361,
      height: 1,
      color: "color-mix(in srgb, var(--divider-silver) 50%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 361 0 L 361 -0.5 L 361 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 361,
      overflow: "hidden",
      borderRadius: 16,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "color-mix(in srgb, var(--divider-silver) 50%, transparent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.500px var(--accent-clay)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--accent-clay)"
    }
  }, props.text1 ?? "–")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.subtitle)), /*#__PURE__*/React.createElement("svg", {
    width: 361,
    height: 1,
    viewBox: "0 -0.500 361 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 63,
      width: 361,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 361 0 L 361 -0.5 L 361 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: State=Upcoming
    "state=upcoming": __body0,
    // figma: State=Active
    "state=active": __body1,
    // figma: State=Completed
    "state=completed": __body2,
    // figma: State=Skipped
    "state=skipped": __body3
  };
  return (__impls[__vkey_StepRow(props)] ?? __body0)();
}

// figma node: 77:147 Daily Log — AM
function DailyLogAM(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "64px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      letterSpacing: "0.040em",
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "TUESDAY, SEP 3"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgba(147,161,132,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 10px 5px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(147,161,132)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(147,161,132)",
      flexShrink: 0
    }
  }, "18-day streak"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: 1.100000023841858,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Morning"), /*#__PURE__*/React.createElement(AMPMToggle, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    selected: "am"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "2 of 5 steps complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    title: "Gentle Cleanser",
    subtitle: "Cleanse",
    state: "completed"
  }), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    subtitle: "Treat",
    state: "completed"
  }), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    stepNumber: "03",
    title: "Hydrating Toner",
    subtitle: "Tone",
    state: "active"
  }), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    stepNumber: "04",
    title: "Daily Moisturizer",
    subtitle: "Moisturize",
    state: "upcoming"
  }), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    stepNumber: "05",
    title: "Mineral SPF 50",
    subtitle: "Protect",
    state: "upcoming"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      borderTop: "1px solid rgb(58,57,55)",
      borderRight: "1px solid rgb(58,57,55)",
      borderBottom: "1px solid rgb(58,57,55)",
      borderLeft: "1px solid rgb(58,57,55)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "6px 4px 6px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 15,
      width: 10,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "Routine")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2.500px var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Shelf")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.5,
      top: 3,
      width: 9,
      height: 9,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 16,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Profile"))), /*#__PURE__*/React.createElement(StatusBar, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393
    },
    theme: "light"
  }));
}

// figma node: 77:166 Daily Log — PM
function DailyLogPM(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "64px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      letterSpacing: "0.040em",
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "TUESDAY, SEP 3"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgba(147,161,132,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 10px 5px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(147,161,132)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(147,161,132)",
      flexShrink: 0
    }
  }, "18-day streak"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      height: 22,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 22,
      borderRadius: "50%",
      backgroundColor: "rgb(147,161,132)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: -3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      backgroundColor: "rgb(28,28,26)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: 1.100000023841858,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Evening")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "0 of 4 steps complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    title: "Oil Cleanser",
    subtitle: "Cleanse",
    state: "upcoming"
  }), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    stepNumber: "02",
    title: "Retinol Serum",
    subtitle: "Treat",
    state: "upcoming"
  }), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    stepNumber: "03",
    title: "Night Cream",
    subtitle: "Moisturize",
    state: "upcoming"
  }), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    stepNumber: "04",
    title: "Lip Balm",
    subtitle: "Protect",
    state: "upcoming"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      borderTop: "1px solid rgb(58,57,55)",
      borderRight: "1px solid rgb(58,57,55)",
      borderBottom: "1px solid rgb(58,57,55)",
      borderLeft: "1px solid rgb(58,57,55)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "6px 4px 6px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 15,
      width: 10,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "Routine")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2.500px var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Shelf")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.5,
      top: 3,
      width: 9,
      height: 9,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 16,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Profile"))), /*#__PURE__*/React.createElement(StatusBar, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393
    },
    theme: "light"
  }));
}

// figma node: 5:36 Progress Ring (5 variants)
const __venc_ProgressRing = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ProgressRing = p => "percentage=" + __venc_ProgressRing(p.percentage);
function ProgressRing(_p = {}) {
  const props = {
    ..._p,
    streakCount: _p.streakCount ?? "12",
    percentage: _p.percentage ?? "0"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 192,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "var(--divider-silver)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 160,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink)",
      flexShrink: 0
    }
  }, props.streakCount), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.text1 ?? "day streak")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 168,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "color-mix(in srgb, var(--divider-silver) 25%, transparent)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 10px 4px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: "var(--accent-sage)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.text2 ?? "Best 24d")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 192,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "var(--divider-silver)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 160,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink)",
      flexShrink: 0
    }
  }, props.streakCount), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.text1 ?? "day streak")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 168,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "color-mix(in srgb, var(--divider-silver) 25%, transparent)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 10px 4px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: "var(--accent-sage)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 9,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, props.text2 ?? "Best 24d")));
  const __impls = {
    // figma: Percentage=0
    "percentage=0": __body0,
    // figma: Percentage=25
    "percentage=25": __body1,
    // figma: Percentage=50
    "percentage=50": __body1,
    // figma: Percentage=75
    "percentage=75": __body1,
    // figma: Percentage=100
    "percentage=100": __body1
  };
  return (__impls[__vkey_ProgressRing(props)] ?? __body0)();
}

// figma node: 77:186 Streak / Progress
function StreakProgress(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      padding: "64px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: 1.100000023841858,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    style: {
      position: "relative",
      width: 160,
      height: 192,
      flexShrink: 0
    },
    streakCount: "18",
    percentage: "75"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      letterSpacing: "0.040em",
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "ACHIEVEMENTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgba(147,161,132,0.1)",
      boxShadow: "0px 1px 2px -1px rgba(35,35,32,0.04), 0px 1px 3px 0px rgba(35,35,32,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "14px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      overflow: "hidden",
      borderRadius: 18,
      backgroundColor: "rgb(147,161,132)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(10,10,9)"
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: 1.2999999523162842,
      color: "rgb(244,241,236)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "7-Day\nStreak")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgba(147,161,132,0.1)",
      boxShadow: "0px 1px 2px -1px rgba(35,35,32,0.04), 0px 1px 3px 0px rgba(35,35,32,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "14px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      overflow: "hidden",
      borderRadius: 18,
      backgroundColor: "rgb(147,161,132)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(10,10,9)"
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: 1.2999999523162842,
      color: "rgb(244,241,236)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Early\nBird")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: "14px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      overflow: "hidden",
      borderRadius: 18,
      backgroundColor: "rgba(58,57,55,0.4)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(10,10,9)"
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      textAlign: "center",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "Consistency\nKing")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      letterSpacing: "0.040em",
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "THIS WEEK"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "M")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "T")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "W")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "T")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "F")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "S")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(28,28,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "S")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      letterSpacing: "0.040em",
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "4-WEEK COMPLETION"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "60%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 80,
      borderRadius: 6,
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68,
    height: 48,
    viewBox: "0 0 68 48",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 32,
      width: 68,
      height: 48,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(147,161,132)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 62 0 C 65.314 0 68 2.686 68 6 L 68 42 C 68 45.314 65.314 48 62 48 L 6 48 C 2.686 48 0 45.314 0 42 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "W1")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "75%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 80,
      borderRadius: 6,
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68,
    height: 60,
    viewBox: "0 0 68 60",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 20,
      width: 68,
      height: 60,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(147,161,132)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 62 0 C 65.314 0 68 2.686 68 6 L 68 54 C 68 57.314 65.314 60 62 60 L 6 60 C 2.686 60 0 57.314 0 54 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "W2")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "90%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 80,
      borderRadius: 6,
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68,
    height: 72,
    viewBox: "0 0 68 72",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 8,
      width: 68,
      height: 72,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(147,161,132)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 62 0 C 65.314 0 68 2.686 68 6 L 68 66 C 68 69.314 65.314 72 62 72 L 6 72 C 2.686 72 0 69.314 0 66 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "W3")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "82%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 80,
      borderRadius: 6,
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68,
    height: 66,
    viewBox: "0 0 68 66",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 14,
      width: 68,
      height: 66,
      overflow: "hidden",
      borderRadius: 6,
      color: "rgb(147,161,132)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6 C 0 2.686 2.686 0 6 0 L 62 0 C 65.314 0 68 2.686 68 6 L 68 60 C 68 63.314 65.314 66 62 66 L 6 66 C 2.686 66 0 63.314 0 60 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "W4"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      borderTop: "1px solid rgb(58,57,55)",
      borderRight: "1px solid rgb(58,57,55)",
      borderBottom: "1px solid rgb(58,57,55)",
      borderLeft: "1px solid rgb(58,57,55)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 15,
      width: 10,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Routine")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "6px 4px 6px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2.500px var(--accent-sage)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Shelf")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.5,
      top: 3,
      width: 9,
      height: 9,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 16,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Profile"))), /*#__PURE__*/React.createElement(StatusBar, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393
    },
    theme: "light"
  }));
}

// figma node: 77:248 Product Shelf
function ProductShelf(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(156,154,147)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "64px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 108,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: 1.100000023841858,
      color: "rgb(244,241,236)",
      flexShrink: 0
    }
  }, "Shelf"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 9,
      width: 20,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3,
      width: 20,
      height: 15,
      borderRadius: 3,
      boxShadow: "inset 0 0 0 1.600px rgb(244,241,236)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 0,
      width: 10,
      height: 8,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.600px rgb(244,241,236)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 4,
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(210,141,110)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 9,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(10,10,9)"
    }
  }, "2")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "6 products \xB7 2 running low"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1px rgb(156,154,147)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11,
      height: 11,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.500px rgb(156,154,147)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 4,
    viewBox: "0 0 4 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,11,11)",
      transformOrigin: "0 0",
      width: 4,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.75 -1.5 C 0.336 -1.5 0 -1.164 0 -0.75 C 0 -0.336 0.336 0 0.75 0 L 0.75 -0.75 L 0.75 -1.5 Z M 3.25 0 C 3.664 0 4 -0.336 4 -0.75 C 4 -1.164 3.664 -1.5 3.25 -1.5 L 3.25 -0.75 L 3.25 0 Z M 0.75 -0.75 L 0.75 0 L 3.25 0 L 3.25 -0.75 L 3.25 -1.5 L 0.75 -1.5 L 0.75 -0.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "Search 200+ skincare products")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 14px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 110,
    viewBox: "0 0 140.500 110",
    fill: "none",
    style: {
      position: "relative",
      height: 110,
      overflow: "hidden",
      borderRadius: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 128.5 0 C 135.127 0 140.5 5.373 140.5 12 L 140.5 98 C 140.5 104.627 135.127 110 128.5 110 L 12 110 C 5.373 110 0 104.627 0 98 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "SKIN1004"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Centella Water-Fit Sun Serum"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "STEP 05 \xB7 PROTECT"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(210,141,110)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 14px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 110,
    viewBox: "0 0 140.500 110",
    fill: "none",
    style: {
      position: "relative",
      height: 110,
      overflow: "hidden",
      borderRadius: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 128.5 0 C 135.127 0 140.5 5.373 140.5 12 L 140.5 98 C 140.5 104.627 135.127 110 128.5 110 L 12 110 C 5.373 110 0 104.627 0 98 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Cellmox"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Retinal Shot Tightening Booster"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 9,
    viewBox: "0 0 10 9",
    fill: "none",
    style: {
      position: "relative",
      width: 10,
      height: 9,
      flexShrink: 0,
      color: "var(--accent-clay)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 10 9 L 0 9 L 5 0 Z",
    fill: "rgb(196,120,90)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 5.437 -0.243 L 5 -1.03 L 4.563 -0.243 L 5 0 Z M 10 9 L 10 9.5 L 10.85 9.5 L 10.437 8.757 L 10 9 Z M 0 9 L -0.437 8.757 L -0.85 9.5 L 0 9.5 L 0 9 Z M 5 0 L 4.563 0.243 L 9.563 9.243 L 10 9 L 10.437 8.757 L 5.437 -0.243 L 5 0 Z M 10 9 L 10 8.5 L 0 8.5 L 0 9 L 0 9.5 L 10 9.5 L 10 9 Z M 0 9 L 0.437 9.243 L 5.437 0.243 L 5 0 L 4.563 -0.243 L -0.437 8.757 L 0 9 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--accent-clay)",
      flexShrink: 0
    }
  }, "5 days remaining")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--accent-sage)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "10px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--background-bone)",
      flexShrink: 0
    }
  }, "+"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--background-bone)",
      flexShrink: 0
    }
  }, "Add to Routine")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 14px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 110,
    viewBox: "0 0 140.500 110",
    fill: "none",
    style: {
      position: "relative",
      height: 110,
      overflow: "hidden",
      borderRadius: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 128.5 0 C 135.127 0 140.5 5.373 140.5 12 L 140.5 98 C 140.5 104.627 135.127 110 128.5 110 L 12 110 C 5.373 110 0 104.627 0 98 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "SKIN1004"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Centella Light Cleansing Oil"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "STEP 01 \xB7 CLEANSE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 14px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 110,
    viewBox: "0 0 140.500 110",
    fill: "none",
    style: {
      position: "relative",
      height: 110,
      overflow: "hidden",
      borderRadius: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 128.5 0 C 135.127 0 140.5 5.373 140.5 12 L 140.5 98 C 140.5 104.627 135.127 110 128.5 110 L 12 110 C 5.373 110 0 104.627 0 98 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Pyunkang Yul"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Essence Toner"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "STEP 02 \xB7 TONE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(210,141,110)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 14px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 110,
    viewBox: "0 0 140.500 110",
    fill: "none",
    style: {
      position: "relative",
      height: 110,
      overflow: "hidden",
      borderRadius: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 128.5 0 C 135.127 0 140.5 5.373 140.5 12 L 140.5 98 C 140.5 104.627 135.127 110 128.5 110 L 12 110 C 5.373 110 0 104.627 0 98 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Haruharu Wonder"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Black Rice Sun Cream"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 9,
    viewBox: "0 0 10 9",
    fill: "none",
    style: {
      position: "relative",
      width: 10,
      height: 9,
      flexShrink: 0,
      color: "var(--accent-clay)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 10 9 L 0 9 L 5 0 Z",
    fill: "rgb(196,120,90)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 5.437 -0.243 L 5 -1.03 L 4.563 -0.243 L 5 0 Z M 10 9 L 10 9.5 L 10.85 9.5 L 10.437 8.757 L 10 9 Z M 0 9 L -0.437 8.757 L -0.85 9.5 L 0 9.5 L 0 9 Z M 5 0 L 4.563 0.243 L 9.563 9.243 L 10 9 L 10.437 8.757 L 5.437 -0.243 L 5 0 Z M 10 9 L 10 8.5 L 0 8.5 L 0 9 L 0 9.5 L 10 9.5 L 10 9 Z M 0 9 L 0.437 9.243 L 5.437 0.243 L 5 0 L 4.563 -0.243 L -0.437 8.757 L 0 9 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--accent-clay)",
      flexShrink: 0
    }
  }, "5 days remaining")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--accent-sage)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "10px 0px 10px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--background-bone)",
      flexShrink: 0
    }
  }, "+"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--background-bone)",
      flexShrink: 0
    }
  }, "Add to Routine"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgb(10,10,9)",
      boxShadow: "inset 0 0 0 1.500px rgb(58,57,55)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 14px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 110,
    viewBox: "0 0 140.500 110",
    fill: "none",
    style: {
      position: "relative",
      height: 110,
      overflow: "hidden",
      borderRadius: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 128.5 0 C 135.127 0 140.5 5.373 140.5 12 L 140.5 98 C 140.5 104.627 135.127 110 128.5 110 L 12 110 C 5.373 110 0 104.627 0 98 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Centellian24"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-ink)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Madecassoside Zero Cream"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "STEP 05 \xB7 MOISTURIZE"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      borderTop: "1px solid rgb(58,57,55)",
      borderRight: "1px solid rgb(58,57,55)",
      borderBottom: "1px solid rgb(58,57,55)",
      borderLeft: "1px solid rgb(58,57,55)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 15,
      width: 10,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Routine")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2.500px var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "6px 4px 6px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--accent-sage)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "Shelf")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.5,
      top: 3,
      width: 9,
      height: 9,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 16,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Profile"))), /*#__PURE__*/React.createElement(StatusBar, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393
    },
    theme: "light"
  }));
}

// figma node: 77:98 Routine Builder
function RoutineBuilder(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 393,
      height: 852,
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "64px 24px 32px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Fraunces, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.100000023841858,
      color: "rgb(244,241,236)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Your AM Routine"), /*#__PURE__*/React.createElement(AMPMToggle, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    selected: "am"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.400px rgb(156,154,147)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 0,
    height: 4,
    viewBox: "0 0 0 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 0.00009999999747378752,
      height: 4,
      color: "rgb(156,154,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.6 0 C 0.931 0 1.2 -0.269 1.2 -0.6 C 1.2 -0.931 0.931 -1.2 0.6 -1.2 L 0.6 -0.6 L 0.6 0 Z M -0.6 -1.2 C -0.931 -1.2 -1.2 -0.931 -1.2 -0.6 C -1.2 -0.269 -0.931 0 -0.6 0 L -0.6 -0.6 L -0.6 -1.2 Z M 0.6 -0.6 L 0.6 -1.2 L -0.6 -1.2 L -0.6 -0.6 L -0.6 0 L 0.6 0 L 0.6 -0.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 1.200,
    viewBox: "0 -0.600 3 1.200",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 7,
      width: 3,
      height: 1.2000000476837158,
      color: "rgb(156,154,147)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.6 -1.2 C 0.269 -1.2 0 -0.931 0 -0.6 C 0 -0.269 0.269 0 0.6 0 L 0.6 -0.6 L 0.6 -1.2 Z M 2.4 0 C 2.731 0 3 -0.269 3 -0.6 C 3 -0.931 2.731 -1.2 2.4 -1.2 L 2.4 -0.6 L 2.4 0 Z M 0.6 -0.6 L 0.6 0 L 2.4 0 L 2.4 -0.6 L 2.4 -1.2 L 0.6 -1.2 L 0.6 -0.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(156,154,147)",
      flexShrink: 0
    }
  }, "5 steps \xB7 about 6 minutes")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgba(210,141,110,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.399999976158142,
      color: "rgb(210,141,110)",
      flexGrow: 1
    }
  }, "Vitamin C works best before your moisturizer \u2014 try reordering")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    title: "Gentle Cleanser",
    subtitle: "Step 1",
    state: "upcoming"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    stepNumber: "02",
    subtitle: "Step 2",
    state: "upcoming"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    stepNumber: "03",
    title: "Hydrating Toner",
    subtitle: "Step 3",
    state: "upcoming"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    stepNumber: "04",
    title: "Daily Moisturizer",
    subtitle: "Step 4",
    state: "upcoming"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 3,
      borderRadius: "50%",
      backgroundColor: "rgb(58,57,55)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement(StepRow, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    stepNumber: "05",
    title: "Mineral SPF 50",
    subtitle: "Step 5",
    state: "upcoming"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 16,
      outline: "1.500px dashed rgb(58,57,55)",
      outlineOffset: "-1.500px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "14px 16px 14px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "rgba(147,161,132,0.12)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 0,
    height: 12,
    viewBox: "0 0 0 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 10,
      width: 0.00009999999747378752,
      height: 12,
      color: "rgb(147,161,132)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 0 C 1.397 0 1.8 -0.403 1.8 -0.9 C 1.8 -1.397 1.397 -1.8 0.9 -1.8 L 0.9 -0.9 L 0.9 0 Z M -0.9 -1.8 C -1.397 -1.8 -1.8 -1.397 -1.8 -0.9 C -1.8 -0.403 -1.397 0 -0.9 0 L -0.9 -0.9 L -0.9 -1.8 Z M 0.9 -0.9 L 0.9 -1.8 L -0.9 -1.8 L -0.9 -0.9 L -0.9 0 L 0.9 0 L 0.9 -0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 1.800,
    viewBox: "0 -0.900 12 1.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 16,
      width: 12,
      height: 1.7999999523162842,
      color: "rgb(147,161,132)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 -1.8 C 0.403 -1.8 0 -1.397 0 -0.9 C 0 -0.403 0.403 0 0.9 0 L 0.9 -0.9 L 0.9 -1.8 Z M 11.1 0 C 11.597 0 12 -0.403 12 -0.9 C 12 -1.397 11.597 -1.8 11.1 -1.8 L 11.1 -0.9 L 11.1 0 Z M 0.9 -0.9 L 0.9 0 L 11.1 0 L 11.1 -0.9 L 11.1 -1.8 L 0.9 -1.8 L 0.9 -0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(147,161,132)",
      flexShrink: 0
    }
  }, "Add a step")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(10,10,9)",
      borderTop: "1px solid rgb(58,57,55)",
      borderRight: "1px solid rgb(58,57,55)",
      borderBottom: "1px solid rgb(58,57,55)",
      borderLeft: "1px solid rgb(58,57,55)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "rgb(29,31,26)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "6px 4px 6px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 15,
      width: 10,
      height: 4,
      borderRadius: 2,
      backgroundColor: "var(--accent-sage)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--accent-sage)",
      flexShrink: 0
    }
  }, "Routine")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2.500px var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 4,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 7,
      height: 7,
      borderRadius: 1.5,
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Shelf")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.5,
      top: 3,
      width: 9,
      height: 9,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 13,
      width: 16,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "var(--text-ink-muted)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: 1.2999999523162842,
      color: "var(--text-ink-muted)",
      flexShrink: 0
    }
  }, "Profile"))), /*#__PURE__*/React.createElement(StatusBar, {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 393
    },
    theme: "light"
  }));
}

// Globals for scripts loaded after this file.
window.Button = Button;
window.HomeIndicator = HomeIndicator;
window.StatusBar = StatusBar;
window.OnboardingSkinType = OnboardingSkinType;
window.AMPMToggle = AMPMToggle;
window.StepRow = StepRow;
window.DailyLogAM = DailyLogAM;
window.DailyLogPM = DailyLogPM;
window.ProgressRing = ProgressRing;
window.StreakProgress = StreakProgress;
window.ProductShelf = ProductShelf;
window.RoutineBuilder = RoutineBuilder;