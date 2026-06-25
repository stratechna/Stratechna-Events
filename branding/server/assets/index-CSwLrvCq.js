import { jsxs, jsx } from "react/jsx-runtime";
import { i18n } from "@lingui/core";
import { Popover, Stack, Text, Button } from "@mantine/core";
import { IconBrandGoogle, IconDownload } from "@tabler/icons-react";
import { f as formatAddress } from "./addressUtilities-DYMBpDjQ.js";
const getEventLocation = (event) => {
  var _a;
  if ((_a = event.settings) == null ? void 0 : _a.location_details) {
    const details = event.settings.location_details;
    const address = formatAddress(details);
    if (details.venue_name && address) {
      return `${details.venue_name}, ${address}`;
    }
    return details.venue_name || address;
  }
  return "";
};
const formatICSDate = (date) => {
  return new Date(date).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
};
const stripHtml = (html) => {
  if (typeof document === "undefined") return (html == null ? void 0 : html.replace(/<[^>]*>/g, "")) || "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return tmp.textContent || tmp.innerText || "";
};
const createICSContent = (event) => {
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Stratechna Events//NONSGML Event Calendar//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", `DTSTART:${formatICSDate(event.start_date)}`, `DTEND:${formatICSDate(event.end_date || event.start_date)}`, `SUMMARY:${event.title.replace(/\n/g, "\\n")}`, `DESCRIPTION:${stripHtml(event.description_preview || "").replace(/\n/g, "\\n")}`, `LOCATION:${getEventLocation(event)}`, `DTSTAMP:${formatICSDate((/* @__PURE__ */ new Date()).toISOString())}`, `UID:${crypto.randomUUID()}@hi.events`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
};
const downloadICSFile = (event) => {
  const content = createICSContent(event);
  const blob = new Blob([content], {
    type: "text/calendar;charset=utf-8"
  });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `${event.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const createGoogleCalendarUrl = (event) => {
  const formatGoogleDate = (date) => {
    return new Date(date).toISOString().replace(/-|:|\.\d{3}/g, "");
  };
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: event.description_preview || "",
    location: getEventLocation(event),
    dates: `${formatGoogleDate(event.start_date)}/${formatGoogleDate(event.end_date || event.start_date)}`
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
const CalendarOptionsPopover = ({
  event,
  children
}) => {
  return /* @__PURE__ */ jsxs(Popover, { width: 200, position: "bottom", withArrow: true, shadow: "md", children: [
    /* @__PURE__ */ jsx(Popover.Target, { children }),
    /* @__PURE__ */ jsx(Popover.Dropdown, { children: /* @__PURE__ */ jsxs(Stack, { gap: "xs", children: [
      /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: i18n._(
        /*i18n*/
        {
          id: "Crr3pG"
        }
      ) }),
      /* @__PURE__ */ jsx(Button, { variant: "light", size: "xs", leftSection: /* @__PURE__ */ jsx(IconBrandGoogle, { size: 16 }), onClick: () => window == null ? void 0 : window.open(createGoogleCalendarUrl(event), "_blank"), fullWidth: true, children: i18n._(
        /*i18n*/
        {
          id: "ebIDwV"
        }
      ) }),
      /* @__PURE__ */ jsx(Button, { variant: "light", size: "xs", leftSection: /* @__PURE__ */ jsx(IconDownload, { size: 16 }), onClick: () => downloadICSFile(event), fullWidth: true, children: i18n._(
        /*i18n*/
        {
          id: "OvNbls"
        }
      ) })
    ] }) })
  ] });
};
export {
  CalendarOptionsPopover as C
};
