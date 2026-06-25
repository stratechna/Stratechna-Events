import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { i18n } from "@lingui/core";
import { Navigate, Outlet } from "react-router";
import { d as dynamicActivateLocale, g as getClientLocale, l as localeToNameMap, u as useGetMe, a as getConfig, i as isHiEvents, P as PoweredByFooter } from "../entry.server.js";
import { Select } from "@mantine/core";
import { IconWorld, IconTicket, IconQrcode, IconCreditCard, IconChartBar, IconPalette, IconDeviceMobile, IconUsers, IconShieldCheck, IconSparkles } from "@tabler/icons-react";
import { useLingui } from "@lingui/react";
import { useRef, useCallback, useMemo } from "react";
import { s as showInfo } from "./notifications-BDuA82qR.js";
import "react-dom/server";
import "@tanstack/react-query";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "classnames";
import "process";
import "axios";
import "@mantine/notifications";
import "@mantine/modals";
import "@mantine/colors-generator";
const authLayout = "_authLayout_1386j_1";
const splitLayout = "_splitLayout_1386j_8";
const leftPanel = "_leftPanel_1386j_15";
const container = "_container_1386j_30";
const logo = "_logo_1386j_52";
const wrapper = "_wrapper_1386j_80";
const languageSwitcher = "_languageSwitcher_1386j_109";
const rightPanel = "_rightPanel_1386j_114";
const backgroundImage = "_backgroundImage_1386j_131";
const backgroundOverlay = "_backgroundOverlay_1386j_140";
const gridPattern = "_gridPattern_1386j_147";
const glowEffect = "_glowEffect_1386j_155";
const glowTop = "_glowTop_1386j_163";
const glowBottom = "_glowBottom_1386j_171";
const overlay = "_overlay_1386j_180";
const content = "_content_1386j_195";
const badge = "_badge_1386j_205";
const featureGrid = "_featureGrid_1386j_232";
const feature = "_feature_1386j_232";
const featureIcon = "_featureIcon_1386j_267";
const featureText = "_featureText_1386j_296";
const classes = {
  authLayout,
  splitLayout,
  leftPanel,
  container,
  logo,
  wrapper,
  languageSwitcher,
  rightPanel,
  backgroundImage,
  backgroundOverlay,
  gridPattern,
  glowEffect,
  glowTop,
  glowBottom,
  overlay,
  content,
  badge,
  featureGrid,
  feature,
  featureIcon,
  featureText
};
const LanguageSwitcher = () => {
  useLingui();
  const getLocaleName = (locale) => {
    switch (locale) {
      case "hu":
        return i18n._(
          /*i18n*/
          {
            id: "mkWad2"
          }
        );
      case "de":
        return i18n._(
          /*i18n*/
          {
            id: "DDcvSo"
          }
        );
      case "en":
        return i18n._(
          /*i18n*/
          {
            id: "lYGfRP"
          }
        );
      case "es":
        return i18n._(
          /*i18n*/
          {
            id: "65A04M"
          }
        );
      case "fr":
        return i18n._(
          /*i18n*/
          {
            id: "nLC6tu"
          }
        );
      case "it":
        return i18n._(
          /*i18n*/
          {
            id: "Lj7sBL"
          }
        );
      case "nl":
        return i18n._(
          /*i18n*/
          {
            id: "KIjvtr"
          }
        );
      case "pt":
        return i18n._(
          /*i18n*/
          {
            id: "MOERNx"
          }
        );
      case "pt-br":
        return i18n._(
          /*i18n*/
          {
            id: "rp/zaT"
          }
        );
      case "zh-cn":
        return i18n._(
          /*i18n*/
          {
            id: "6imsQS"
          }
        );
      case "zh-hk":
        return i18n._(
          /*i18n*/
          {
            id: "DM4gBB"
          }
        );
      case "vi":
        return i18n._(
          /*i18n*/
          {
            id: "fROFIL"
          }
        );
      case "tr":
        return i18n._(
          /*i18n*/
          {
            id: "Kz91g/"
          }
        );
      case "pl":
        return i18n._(
          /*i18n*/
          {
            id: "trnWaw"
          }
        );
      case "se":
        return i18n._(
          /*i18n*/
          {
            id: "UaISq3"
          }
        );
      default:
        return locale;
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Select, { leftSection: /* @__PURE__ */ jsx(IconWorld, { size: 15, color: "#ccc" }), width: 180, size: "xs", required: true, data: Object.keys(localeToNameMap).map((locale) => ({
    value: locale,
    label: getLocaleName(locale)
  })), defaultValue: getClientLocale(), placeholder: i18n._(
    /*i18n*/
    {
      id: "lYGfRP"
    }
  ), onChange: (value) => dynamicActivateLocale(value).then(() => {
    document.cookie = `locale=${value};path=/;max-age=31536000`;
    window.location.reload();
  }) }) });
};
const allFeatures = [{
  icon: IconTicket,
  title: i18n._(
    /*i18n*/
    {
      id: "KgxI80"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "QIxRUI"
    }
  )
}, {
  icon: IconQrcode,
  title: i18n._(
    /*i18n*/
    {
      id: "Vw0KCJ"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "olKKwj"
    }
  )
}, {
  icon: IconCreditCard,
  title: i18n._(
    /*i18n*/
    {
      id: "s6EF6K"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "+4zM7f"
    }
  )
}, {
  icon: IconChartBar,
  title: i18n._(
    /*i18n*/
    {
      id: "vt9xUl"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "NHq3l1"
    }
  )
}, {
  icon: IconPalette,
  title: i18n._(
    /*i18n*/
    {
      id: "g7HIC0"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "hDNwnf"
    }
  )
}, {
  icon: IconDeviceMobile,
  title: i18n._(
    /*i18n*/
    {
      id: "gqnyh0"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "WOpH7O"
    }
  )
}, {
  icon: IconUsers,
  title: i18n._(
    /*i18n*/
    {
      id: "BW6QAz"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "Mokwac"
    }
  )
}, {
  icon: IconShieldCheck,
  title: i18n._(
    /*i18n*/
    {
      id: "nE5o/t"
    }
  ),
  description: i18n._(
    /*i18n*/
    {
      id: "FgRxRP"
    }
  )
}];
const FeaturePanel = () => {
  const selectedFeatures = useMemo(() => {
    const shuffled = [...allFeatures].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: classes.rightPanel, children: [
    /* @__PURE__ */ jsx("div", { className: classes.backgroundImage }),
    /* @__PURE__ */ jsx("div", { className: classes.backgroundOverlay }),
    /* @__PURE__ */ jsx("div", { className: classes.gridPattern }),
    /* @__PURE__ */ jsx("div", { className: `${classes.glowEffect} ${classes.glowTop}` }),
    /* @__PURE__ */ jsx("div", { className: `${classes.glowEffect} ${classes.glowBottom}` }),
    /* @__PURE__ */ jsx("div", { className: classes.overlay, children: /* @__PURE__ */ jsxs("div", { className: classes.content, children: [
      /* @__PURE__ */ jsxs("div", { className: classes.badge, children: [
        /* @__PURE__ */ jsx(IconSparkles, { size: 14 }),
        /* @__PURE__ */ jsx("span", { children: i18n._(
          /*i18n*/
          {
            id: "t3AMTs"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: classes.featureGrid, children: selectedFeatures.map((feature2, index) => {
        const Icon = feature2.icon;
        return /* @__PURE__ */ jsxs("div", { className: classes.feature, children: [
          /* @__PURE__ */ jsx("div", { className: classes.featureIcon, children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxs("div", { className: classes.featureText, children: [
            /* @__PURE__ */ jsx("h3", { children: feature2.title }),
            /* @__PURE__ */ jsx("p", { children: feature2.description })
          ] })
        ] }, index);
      }) })
    ] }) })
  ] });
};
const AuthLayout = () => {
  const me = useGetMe();
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef();
  const handleLogoClick = useCallback(() => {
    clickCountRef.current += 1;
    clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2e3);
    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      showInfo(`HiEvents v${"1.8.0-beta"}`);
    }
  }, []);
  if (me.isSuccess) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/manage/events" });
  }
  return /* @__PURE__ */ jsx("div", { className: classes.authLayout, children: /* @__PURE__ */ jsxs("div", { className: classes.splitLayout, children: [
    /* @__PURE__ */ jsx("div", { className: classes.leftPanel, children: /* @__PURE__ */ jsxs("main", { className: classes.container, children: [
      /* @__PURE__ */ jsx("div", { className: classes.logo, onClick: handleLogoClick, style: {
        cursor: "pointer"
      }, children: /* @__PURE__ */ jsx("img", { src: getConfig("VITE_APP_LOGO_DARK", "/logos/hi-events-stacked-light.svg"), alt: i18n._(
        /*i18n*/
        {
          id: "COnw8D",
          values: {
            0: getConfig("VITE_APP_NAME", "Stratechna Events")
          }
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: classes.wrapper, children: [
        /* @__PURE__ */ jsx(Outlet, {}),
        !isHiEvents() && /* @__PURE__ */ jsx(PoweredByFooter, {}),
        /* @__PURE__ */ jsx("div", { className: classes.languageSwitcher, children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(FeaturePanel, {})
  ] }) });
};
export {
  AuthLayout as default
};
