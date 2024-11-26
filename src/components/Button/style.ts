"use client";

import styled from "@emotion/styled";

export const StyledButton = styled.button((props) => ({
  background: props.theme === "ghost" ? "transparent" : "var(--violet-primary)",
  gap: "4px",
  cursor: "pointer",
  lineHeight: "17.07px",
  padding: props.theme === "pay" ? "14px" : "7px 8px 7px 11px",
  borderRadius: "50px",
  border: "1px solid var(--main-color)",
  color: "var(--main-color)",
  display: props.hidden ? "none" : "flex",
  alignItems: "center",
  fontSize: props.theme === "pay" ? "24px" : "14px",
  fontWeight: props.theme === "pay" ? "500" : "400",
  justifyContent: props.theme === "pay" ? "center" : "start",
  width: props.theme === "pay" ? "100%" : "",
  fontVariant: props.theme === "pay" ? "small-caps" : "normal",
  "& > a": {
    width: "100%",
    textDecoration: "none",
    color: "var(--main-color)",
  },
}));
