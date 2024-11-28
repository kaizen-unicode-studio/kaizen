"use client";

import styled from "@emotion/styled";
import { ThemeType } from "./Button";

export const StyledButton = styled.button(
  (props: { theme: ThemeType; hidden: boolean }) => ({
    background:
      props.theme === "ghost" || props.theme === "ghost-invert"
        ? "transparent"
        : "var(--violet-primary)",
    gap: "4px",
    cursor: "pointer",
    lineHeight: "17.07px",
    padding: props.theme === "pay" ? "14px" : "7px 8px 7px 11px",
    borderRadius: "50px",
    border: `1px solid ${
      props.theme !== "ghost-invert"
        ? "var(--main-color)"
        : "var(--violet-primary)"
    }`,
    color:
      props.theme !== "ghost-invert"
        ? "var(--main-color)"
        : "var(--violet-primary)",
    display: props.hidden ? "none" : "flex",
    // alignItems: props.theme !== "ghost-invert" ? "center" : "flex-end",
    alignItems: "flex-end",
    fontSize: props.theme === "pay" ? "24px" : "14px",
    fontWeight: props.theme === "pay" ? "500" : "400",
    justifyContent: props.theme === "pay" ? "center" : "start",
    width: props.theme === "pay" ? "100%" : "",
    fontVariant: props.theme === "pay" ? "small-caps" : "normal",
  })
);

export const StyledLink = styled.div(
  (props: { theme: ThemeType; hidden: boolean }) => ({
    "& > a": {
      width: "100%",
      textDecoration: "none",
      color:
        props.theme !== "ghost-invert"
          ? "var(--main-color)"
          : "var(--violet-primary)",
      display: "flex",
      alignItems: props.theme !== "ghost-invert" ? "center" : "flex-end",
      justifyContent: props.theme === "pay" ? "center" : "start",
      background:
        props.theme === "ghost" || props.theme === "ghost-invert"
          ? "transparent"
          : "var(--violet-primary)",
      gap: "4px",
      cursor: "pointer",
      lineHeight: "17.07px",
      padding: props.theme === "pay" ? "14px" : "7px 8px 7px 11px",
      borderRadius: "50px",
      border: `1px solid ${
        props.theme !== "ghost-invert"
          ? "var(--main-color)"
          : "var(--violet-primary)"
      }`,
      fontSize: props.theme === "pay" ? "24px" : "14px",
      fontWeight: props.theme === "pay" ? "500" : "400",
      fontVariant: props.theme === "pay" ? "small-caps" : "normal",
      textDecorationLine: "none",
    },
  })
);
