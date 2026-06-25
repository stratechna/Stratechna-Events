import { jsx, jsxs } from "react/jsx-runtime";
import { Container } from "@mantine/core";
import { NavLink } from "react-router";
import { a as getConfig } from "../entry.server.js";
const header = "_header_9a1mg_1";
const logo = "_logo_9a1mg_6";
const inner = "_inner_9a1mg_13";
const classes = {
  header,
  logo,
  inner
};
const Header = ({
  rightContent,
  fullWidth = false
}) => {
  return /* @__PURE__ */ jsx("header", { className: classes.header, children: /* @__PURE__ */ jsxs(Container, { size: "md", className: classes.inner, fluid: fullWidth, children: [
    /* @__PURE__ */ jsx(NavLink, { className: classes.logo, to: "/manage/events", children: /* @__PURE__ */ jsx("img", { src: getConfig("VITE_APP_LOGO_LIGHT", "/logos/hi-events-text-dark.svg"), alt: `${getConfig("VITE_APP_NAME", "Stratechna Events")} logo`, className: classes.logo }) }),
    /* @__PURE__ */ jsx("div", { className: classes.rightContent, children: rightContent })
  ] }) });
};
export {
  Header as H
};
