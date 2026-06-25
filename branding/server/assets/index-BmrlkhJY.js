import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { i18n } from "@lingui/core";
import { S as SelectProducts } from "./index-BuijynEC.js";
import { useState, useRef, useEffect } from "react";
import { Y as Helmet, i as isHiEvents, O as OrganizerStatus, a as getConfig, P as PoweredByFooter } from "../entry.server.js";
import { g as eventCoverImageUrl, e as eventHomepageUrl, h as eventCoverImage, i as imageUrl, o as organizerHomepageUrl } from "./urlHelper-CsaWRwIV.js";
import { u as utcToTz, i as isDateInPast } from "./dates-CyL434Z2.js";
import { IconCalendarPlus, IconTicket, IconShare, IconCalendar, IconCalendarOff, IconWorld, IconMapPin, IconExternalLink, IconArrowUpRight, IconMaximize, IconMail } from "@tabler/icons-react";
import { G as GenericErrorPage } from "./index-B-32wjxr.js";
import { Anchor } from "@mantine/core";
import { e as ensureHomepageFontLoaded, s as socialMediaConfig, S as StatusToggle, r as removeTransparency, C as ContactOrganizerModal } from "./index-DtVo_v-I.js";
import { i as isAddressSet, a as getGoogleMapsUrl, f as formatAddress, g as getShortLocationDisplay } from "./addressUtilities-DYMBpDjQ.js";
import { v as validateThemeSettings, c as computeThemeVariables } from "./themeUtils-B--ztbrW.js";
import { u as useOrganizerTrackingPixels, h as hasActivePixels, t as trackPixelEvent, S as ShareComponent, C as CookieConsentBanner } from "./useOrganizerTrackingPixels-B10ufLzk.js";
import { E as EventDateRange } from "./index-reAGrByP.js";
import { C as CalendarOptionsPopover } from "./index-CSwLrvCq.js";
const background = "_background_1nck8_1";
const backgroundOverlay = "_backgroundOverlay_1nck8_23";
const pageWrapper = "_pageWrapper_1nck8_45";
const container = "_container_1nck8_53";
const wrapper = "_wrapper_1nck8_68";
const mainCard = "_mainCard_1nck8_79";
const fadeInUp = "_fadeInUp_1nck8_1";
const heroSection = "_heroSection_1nck8_98";
const coverWrapper = "_coverWrapper_1nck8_103";
const coverLqip = "_coverLqip_1nck8_119";
const coverImage = "_coverImage_1nck8_130";
const heroGradient = "_heroGradient_1nck8_148";
const statusBadges = "_statusBadges_1nck8_155";
const statusBadge = "_statusBadge_1nck8_155";
const eventHeader = "_eventHeader_1nck8_183";
const headerTopRow = "_headerTopRow_1nck8_192";
const organizerPill = "_organizerPill_1nck8_199";
const organizerPillAvatar = "_organizerPillAvatar_1nck8_214";
const organizerPillAvatarPlaceholder = "_organizerPillAvatarPlaceholder_1nck8_222";
const organizerPillName = "_organizerPillName_1nck8_236";
const actionButtons = "_actionButtons_1nck8_242";
const actionButton = "_actionButton_1nck8_242";
const favoriteButton = "_favoriteButton_1nck8_270";
const eventTitle = "_eventTitle_1nck8_275";
const eventMeta = "_eventMeta_1nck8_285";
const metaItem = "_metaItem_1nck8_291";
const metaIconBox = "_metaIconBox_1nck8_297";
const metaContent = "_metaContent_1nck8_319";
const metaPrimary = "_metaPrimary_1nck8_324";
const metaSecondary = "_metaSecondary_1nck8_331";
const metaLink = "_metaLink_1nck8_336";
const addToCalendarButton = "_addToCalendarButton_1nck8_354";
const section = "_section_1nck8_384";
const sectionHeader = "_sectionHeader_1nck8_394";
const sectionTitle = "_sectionTitle_1nck8_401";
const description = "_description_1nck8_410";
const readMoreToggle = "_readMoreToggle_1nck8_465";
const locationContent = "_locationContent_1nck8_488";
const venueDetails = "_venueDetails_1nck8_500";
const venueName = "_venueName_1nck8_506";
const venueAddress = "_venueAddress_1nck8_512";
const directionsLink = "_directionsLink_1nck8_518";
const mapContainer = "_mapContainer_1nck8_536";
const mapPin = "_mapPin_1nck8_562";
const mapOverlay = "_mapOverlay_1nck8_573";
const mapOverlayLabel = "_mapOverlayLabel_1nck8_587";
const ticketsSection = "_ticketsSection_1nck8_604";
const organizerCard = "_organizerCard_1nck8_894";
const organizerAvatar = "_organizerAvatar_1nck8_907";
const organizerAvatarPlaceholder = "_organizerAvatarPlaceholder_1nck8_915";
const organizerContent = "_organizerContent_1nck8_929";
const organizerHeader = "_organizerHeader_1nck8_934";
const organizerName = "_organizerName_1nck8_948";
const organizerLocation = "_organizerLocation_1nck8_963";
const organizerBio = "_organizerBio_1nck8_983";
const organizerActions = "_organizerActions_1nck8_1003";
const socialLinks = "_socialLinks_1nck8_1015";
const socialLink = "_socialLink_1nck8_1015";
const contactButton = "_contactButton_1nck8_1039";
const footerSection = "_footerSection_1nck8_1063";
const footerLinks = "_footerLinks_1nck8_1080";
const footerLink = "_footerLink_1nck8_1080";
const poweredByFooter = "_poweredByFooter_1nck8_1096";
const scrollToTicketsButton = "_scrollToTicketsButton_1nck8_1116";
const onlineEventBadge = "_onlineEventBadge_1nck8_1188";
const classes = {
  background,
  backgroundOverlay,
  pageWrapper,
  container,
  wrapper,
  mainCard,
  fadeInUp,
  heroSection,
  coverWrapper,
  coverLqip,
  coverImage,
  heroGradient,
  statusBadges,
  statusBadge,
  eventHeader,
  headerTopRow,
  organizerPill,
  organizerPillAvatar,
  organizerPillAvatarPlaceholder,
  organizerPillName,
  actionButtons,
  actionButton,
  favoriteButton,
  eventTitle,
  eventMeta,
  metaItem,
  metaIconBox,
  metaContent,
  metaPrimary,
  metaSecondary,
  metaLink,
  addToCalendarButton,
  section,
  sectionHeader,
  sectionTitle,
  description,
  readMoreToggle,
  locationContent,
  venueDetails,
  venueName,
  venueAddress,
  directionsLink,
  mapContainer,
  mapPin,
  mapOverlay,
  mapOverlayLabel,
  ticketsSection,
  "button-input": "_button-input_1nck8_734",
  "hi-product-page-message": "_hi-product-page-message_1nck8_806",
  organizerCard,
  organizerAvatar,
  organizerAvatarPlaceholder,
  organizerContent,
  organizerHeader,
  organizerName,
  organizerLocation,
  organizerBio,
  organizerActions,
  socialLinks,
  socialLink,
  contactButton,
  footerSection,
  footerLinks,
  footerLink,
  poweredByFooter,
  scrollToTicketsButton,
  onlineEventBadge
};
const EventDocumentHead = ({
  event
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const eventSettings = event.settings;
  const products = ((_a = event.product_categories) == null ? void 0 : _a.flatMap((category) => category.products)) ?? [];
  const title = ((eventSettings == null ? void 0 : eventSettings.seo_title) ?? event.title) + " | " + ((_b = event.organizer) == null ? void 0 : _b.name);
  const description2 = (eventSettings == null ? void 0 : eventSettings.seo_description) ?? event.description_preview;
  const keywords = eventSettings == null ? void 0 : eventSettings.seo_keywords;
  const image = eventCoverImageUrl(event);
  const url = eventHomepageUrl(event);
  const startDate = utcToTz(new Date(event.start_date), event.timezone);
  const endDate = event.end_date ? utcToTz(new Date(event.end_date), event.timezone) : void 0;
  const address = {
    "@type": "http://schema.org/PostalAddress",
    streetAddress: (_c = eventSettings == null ? void 0 : eventSettings.location_details) == null ? void 0 : _c.address_line_1,
    addressLocality: (_d = eventSettings == null ? void 0 : eventSettings.location_details) == null ? void 0 : _d.city,
    addressRegion: (_e = eventSettings == null ? void 0 : eventSettings.location_details) == null ? void 0 : _e.state_or_region,
    postalCode: (_f = eventSettings == null ? void 0 : eventSettings.location_details) == null ? void 0 : _f.zip_or_postal_code,
    addressCountry: (_g = eventSettings == null ? void 0 : eventSettings.location_details) == null ? void 0 : _g.country
  };
  Object.keys(address).forEach((key) => address[key] === void 0 && delete address[key]);
  const location = (eventSettings == null ? void 0 : eventSettings.location_details) && Object.keys(address).length > 1 ? {
    "@type": "http://schema.org/Place",
    name: (_h = event.location_details) == null ? void 0 : _h.venue_name,
    address
  } : {};
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "http://schema.org/Event",
    name: title,
    startDate,
    endDate,
    location,
    image: [image],
    description: description2,
    keywords,
    organizer: {
      "@type": "http://schema.org/Organization",
      name: (_i = event.organizer) == null ? void 0 : _i.name,
      url: (_j = event.organizer) == null ? void 0 : _j.website
    },
    url,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: ((_k = event.settings) == null ? void 0 : _k.is_online_event) ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
    currency: event.currency,
    offers: products.map((product) => {
      var _a2, _b2;
      return {
        "@type": "http://schema.org/Offer",
        url,
        price: (_b2 = (_a2 = product == null ? void 0 : product.prices) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.price,
        priceCurrency: event.currency,
        validFrom: startDate,
        availability: (product == null ? void 0 : product.is_available) ? "http://schema.org/InStock" : "http://schema.org/SoldOut"
      };
    })
  };
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: event.status === "DRAFT" ? "DRAFT - " + title : title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description2 }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description2 }),
    image && /* @__PURE__ */ jsx("meta", { property: "og:image", content: image }),
    url && /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: (_l = event.organizer) == null ? void 0 : _l.name }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description2 }),
    image && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: image }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: url }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaOrgJSONLD) })
  ] });
};
const EventNotAvailable = () => {
  return /* @__PURE__ */ jsx(GenericErrorPage, { title: i18n._(
    /*i18n*/
    {
      id: "4JzCvP"
    }
  ), description: i18n._(
    /*i18n*/
    {
      id: "tXadb0"
    }
  ), pageTitle: i18n._(
    /*i18n*/
    {
      id: "4JzCvP"
    }
  ), metaDescription: i18n._(
    /*i18n*/
    {
      id: "tXadb0"
    }
  ), buttonText: isHiEvents() ? i18n._(
    /*i18n*/
    {
      id: "ZCSSd+"
    }
  ) : void 0, buttonUrl: isHiEvents() ? "https://app.hi.events/auth/register?utm_source=app.hi.events&utm_content=organizer-not-found/create-event" : void 0, buttonIcon: /* @__PURE__ */ jsx(IconCalendarPlus, { size: 18 }) });
};
const EventHomepage = ({
  ...loaderData
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const {
    event,
    promoCodeValid,
    promoCode
  } = loaderData;
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const ticketsSectionRef = useRef(null);
  const {
    consentPending,
    consentGranted,
    onConsent
  } = useOrganizerTrackingPixels((_b = (_a = event == null ? void 0 : event.organizer) == null ? void 0 : _a.settings) == null ? void 0 : _b.tracking_pixels);
  useEffect(() => {
    if (event && consentGranted && hasActivePixels()) {
      trackPixelEvent({
        eventName: "ViewContent",
        contentName: event.title,
        contentId: event.id
      });
    }
  }, [event == null ? void 0 : event.id, consentGranted]);
  useEffect(() => {
    let showTimer;
    const checkTicketsPosition = () => {
      if (ticketsSectionRef.current) {
        const rect = ticketsSectionRef.current.getBoundingClientRect();
        const isBelowFold = rect.top > window.innerHeight;
        const isAboveView = rect.bottom < 0;
        const shouldShowButton = isBelowFold || isAboveView;
        setShowScrollButton(shouldShowButton);
      }
    };
    showTimer = setTimeout(() => {
      checkTicketsPosition();
    }, 500);
    const handleScroll = () => {
      checkTicketsPosition();
    };
    const handleResize = () => {
      checkTicketsPosition();
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const scrollToTickets = () => {
    var _a2;
    (_a2 = ticketsSectionRef.current) == null ? void 0 : _a2.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  if (!event) {
    return /* @__PURE__ */ jsx(EventNotAvailable, {});
  }
  const rawThemeSettings = (_c = event == null ? void 0 : event.settings) == null ? void 0 : _c.homepage_theme_settings;
  const themeSettings = validateThemeSettings(rawThemeSettings);
  const cssVars = computeThemeVariables(themeSettings);
  const backgroundType = themeSettings.background_type;
  useEffect(() => {
    ensureHomepageFontLoaded(themeSettings.font_family);
  }, [themeSettings.font_family]);
  const themeStyles = {
    "--event-bg-color": themeSettings.background,
    "--event-content-bg-color": cssVars["--theme-surface"],
    "--event-primary-color": themeSettings.accent,
    "--event-primary-text-color": cssVars["--theme-text-primary"],
    "--event-secondary-color": cssVars["--theme-text-secondary"],
    "--event-secondary-text-color": cssVars["--theme-text-tertiary"],
    "--event-accent-contrast": cssVars["--theme-accent-contrast"],
    "--event-accent-soft": cssVars["--theme-accent-soft"],
    "--event-accent-muted": cssVars["--theme-accent-muted"],
    "--event-border-color": cssVars["--theme-border"],
    "--theme-font-family": cssVars["--theme-font-family"],
    fontFamily: cssVars["--theme-font-family"]
  };
  const coverImageData = eventCoverImage(event);
  const coverImage2 = coverImageData == null ? void 0 : coverImageData.url;
  const organizer = event.organizer;
  const organizerSocials = (_d = organizer == null ? void 0 : organizer.settings) == null ? void 0 : _d.social_media_handles;
  const organizerLogo = imageUrl("ORGANIZER_LOGO", organizer == null ? void 0 : organizer.images);
  const organizerLocation2 = (_e = organizer == null ? void 0 : organizer.settings) == null ? void 0 : _e.location_details;
  const websiteUrl = organizer == null ? void 0 : organizer.website;
  const locationDetails = (_f = event.settings) == null ? void 0 : _f.location_details;
  const isOnlineEvent = (_g = event.settings) == null ? void 0 : _g.is_online_event;
  const hasLocation = isAddressSet(locationDetails) && !isOnlineEvent;
  const socialLinks2 = organizerSocials ? Object.entries(organizerSocials).filter(([platform, handle]) => handle && socialMediaConfig[platform]).map(([platform, handle]) => ({
    platform,
    handle,
    config: socialMediaConfig[platform]
  })) : [];
  const getStatusBadge = () => {
    var _a2;
    const products = event.products || ((_a2 = event.product_categories) == null ? void 0 : _a2.flatMap((c) => c.products || [])) || [];
    if (products.length === 0) {
      return null;
    }
    const availableProducts = products.filter((p) => p.is_available && !p.is_sold_out);
    const allSoldOut = products.every((p) => p.is_sold_out);
    if (allSoldOut) {
      return {
        text: i18n._(
          /*i18n*/
          {
            id: "Mi1rVn"
          }
        ),
        variant: "danger"
      };
    }
    if (availableProducts.length === 0) {
      return null;
    }
    return {
      text: i18n._(
        /*i18n*/
        {
          id: "EUnesn"
        }
      ),
      variant: "success"
    };
  };
  const statusBadge2 = getStatusBadge();
  const mapUrl = ((_h = event.settings) == null ? void 0 : _h.maps_url) || (locationDetails ? getGoogleMapsUrl(locationDetails) : null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    (event == null ? void 0 : event.status) && (event == null ? void 0 : event.id) && /* @__PURE__ */ jsx(StatusToggle, { entityType: "event", entityId: event.id, currentStatus: event.status, entityName: event.title, onSuccess: () => setTimeout(() => {
      window.location.reload();
    }, 1e3) }),
    /* @__PURE__ */ jsxs("main", { className: classes.pageWrapper, style: themeStyles, "data-mode": themeSettings.mode, children: [
      /* @__PURE__ */ jsx("style", { children: `
                        body, .ssr-loader {
                            background-color: ${removeTransparency(themeSettings.background)} !important;
                        }
                    ` }),
      event && /* @__PURE__ */ jsx(EventDocumentHead, { event }),
      coverImage2 && backgroundType === "MIRROR_COVER_IMAGE" ? /* @__PURE__ */ jsx("div", { className: classes.background, style: {
        backgroundImage: `url(${coverImage2})`
      } }) : /* @__PURE__ */ jsx("div", { className: classes.background, style: {
        backgroundColor: "var(--event-bg-color)"
      } }),
      /* @__PURE__ */ jsx("div", { className: classes.backgroundOverlay, style: backgroundType === "MIRROR_COVER_IMAGE" ? {
        "--overlay-color": themeSettings.background
      } : void 0 }),
      /* @__PURE__ */ jsxs("div", { className: classes.container, children: [
        /* @__PURE__ */ jsxs("div", { className: classes.wrapper, children: [
          /* @__PURE__ */ jsxs("div", { className: classes.mainCard, children: [
            /* @__PURE__ */ jsxs("div", { className: classes.heroSection, children: [
              coverImage2 && /* @__PURE__ */ jsxs("div", { className: classes.coverWrapper, style: (coverImageData == null ? void 0 : coverImageData.width) && (coverImageData == null ? void 0 : coverImageData.height) ? {
                "--cover-aspect-ratio": `${coverImageData.width} / ${coverImageData.height}`
              } : void 0, children: [
                (coverImageData == null ? void 0 : coverImageData.lqip_base64) && /* @__PURE__ */ jsx("img", { src: coverImageData.lqip_base64, alt: "", "aria-hidden": "true", className: classes.coverLqip }),
                /* @__PURE__ */ jsx("img", { src: coverImage2, alt: event.title, className: classes.coverImage }),
                /* @__PURE__ */ jsx("div", { className: classes.heroGradient }),
                statusBadge2 && /* @__PURE__ */ jsx("div", { className: classes.statusBadges, children: /* @__PURE__ */ jsxs("span", { className: classes.statusBadge, children: [
                  /* @__PURE__ */ jsx(IconTicket, {}),
                  statusBadge2.text
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: classes.eventHeader, children: [
                /* @__PURE__ */ jsxs("div", { className: classes.headerTopRow, children: [
                  organizer && organizer.status === OrganizerStatus.LIVE ? /* @__PURE__ */ jsxs("a", { href: organizerHomepageUrl(organizer), className: classes.organizerPill, children: [
                    organizerLogo ? /* @__PURE__ */ jsx("img", { src: organizerLogo, alt: organizer.name, className: classes.organizerPillAvatar }) : /* @__PURE__ */ jsx("span", { className: classes.organizerPillAvatarPlaceholder, children: organizer.name.charAt(0).toUpperCase() }),
                    /* @__PURE__ */ jsx("span", { className: classes.organizerPillName, children: organizer.name })
                  ] }) : /* @__PURE__ */ jsxs("div", { className: classes.organizerPill, children: [
                    organizerLogo ? /* @__PURE__ */ jsx("img", { src: organizerLogo, alt: (organizer == null ? void 0 : organizer.name) || "", className: classes.organizerPillAvatar }) : /* @__PURE__ */ jsx("span", { className: classes.organizerPillAvatarPlaceholder, children: ((_i = organizer == null ? void 0 : organizer.name) == null ? void 0 : _i.charAt(0).toUpperCase()) || "?" }),
                    /* @__PURE__ */ jsx("span", { className: classes.organizerPillName, children: organizer == null ? void 0 : organizer.name })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: classes.actionButtons, children: /* @__PURE__ */ jsx(ShareComponent, { title: "Check out this event: " + event.title, text: "Check out this event: " + event.title, url: eventHomepageUrl(event), imageUrl: coverImage2 || void 0, children: /* @__PURE__ */ jsx("button", { className: classes.actionButton, title: i18n._(
                    /*i18n*/
                    {
                      id: "Z8lGw6"
                    }
                  ), children: /* @__PURE__ */ jsx(IconShare, {}) }) }) })
                ] }),
                /* @__PURE__ */ jsx("h1", { className: classes.eventTitle, children: event.title }),
                /* @__PURE__ */ jsxs("div", { className: classes.eventMeta, children: [
                  /* @__PURE__ */ jsxs("div", { className: classes.metaItem, children: [
                    /* @__PURE__ */ jsx("div", { className: classes.metaIconBox, children: /* @__PURE__ */ jsx(IconCalendar, {}) }),
                    /* @__PURE__ */ jsx("div", { className: classes.metaContent, children: /* @__PURE__ */ jsx("div", { className: classes.metaPrimary, children: /* @__PURE__ */ jsx(EventDateRange, { event }) }) }),
                    /* @__PURE__ */ jsx(CalendarOptionsPopover, { event, children: /* @__PURE__ */ jsxs("button", { className: classes.addToCalendarButton, children: [
                      /* @__PURE__ */ jsx(IconCalendarPlus, {}),
                      i18n._(
                        /*i18n*/
                        {
                          id: "oZW/gT"
                        }
                      )
                    ] }) })
                  ] }),
                  event.end_date && isDateInPast(event.end_date) && /* @__PURE__ */ jsxs("div", { className: classes.metaItem, children: [
                    /* @__PURE__ */ jsx("div", { className: classes.metaIconBox, children: /* @__PURE__ */ jsx(IconCalendarOff, {}) }),
                    /* @__PURE__ */ jsx("div", { className: classes.metaContent, children: /* @__PURE__ */ jsx("div", { className: classes.metaPrimary, children: i18n._(
                      /*i18n*/
                      {
                        id: "RzEvf5"
                      }
                    ) }) })
                  ] }),
                  isOnlineEvent && /* @__PURE__ */ jsxs("div", { className: classes.metaItem, children: [
                    /* @__PURE__ */ jsx("div", { className: classes.metaIconBox, children: /* @__PURE__ */ jsx(IconWorld, {}) }),
                    /* @__PURE__ */ jsxs("div", { className: classes.metaContent, children: [
                      /* @__PURE__ */ jsx("div", { className: classes.metaPrimary, children: i18n._(
                        /*i18n*/
                        {
                          id: "WjSpu5"
                        }
                      ) }),
                      /* @__PURE__ */ jsx("div", { className: classes.metaSecondary, children: i18n._(
                        /*i18n*/
                        {
                          id: "nCywLA"
                        }
                      ) })
                    ] })
                  ] }),
                  hasLocation && locationDetails && /* @__PURE__ */ jsxs("div", { className: classes.metaItem, children: [
                    /* @__PURE__ */ jsx("div", { className: classes.metaIconBox, children: /* @__PURE__ */ jsx(IconMapPin, {}) }),
                    /* @__PURE__ */ jsxs("div", { className: classes.metaContent, children: [
                      /* @__PURE__ */ jsx("div", { className: classes.metaPrimary, children: locationDetails.venue_name }),
                      /* @__PURE__ */ jsx("div", { className: classes.metaSecondary, children: formatAddress(locationDetails) }),
                      mapUrl && /* @__PURE__ */ jsxs("a", { href: mapUrl, target: "_blank", rel: "noopener noreferrer", className: classes.metaLink, children: [
                        i18n._(
                          /*i18n*/
                          {
                            id: "Ep3VfY"
                          }
                        ),
                        /* @__PURE__ */ jsx(IconExternalLink, {})
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            (event == null ? void 0 : event.description) && /* @__PURE__ */ jsxs("div", { className: classes.section, children: [
              /* @__PURE__ */ jsx("div", { className: classes.sectionHeader, children: /* @__PURE__ */ jsx("h2", { className: classes.sectionTitle, children: i18n._(
                /*i18n*/
                {
                  id: "uyJsf6"
                }
              ) }) }),
              /* @__PURE__ */ jsx("div", { className: classes.description, dangerouslySetInnerHTML: {
                __html: event.description
              } })
            ] }),
            hasLocation && locationDetails && /* @__PURE__ */ jsxs("div", { className: classes.section, children: [
              /* @__PURE__ */ jsx("div", { className: classes.sectionHeader, children: /* @__PURE__ */ jsx("h2", { className: classes.sectionTitle, children: i18n._(
                /*i18n*/
                {
                  id: "wJijgU"
                }
              ) }) }),
              /* @__PURE__ */ jsxs("div", { className: classes.locationContent, children: [
                /* @__PURE__ */ jsxs("div", { className: classes.venueDetails, children: [
                  /* @__PURE__ */ jsx("div", { className: classes.venueName, children: locationDetails.venue_name }),
                  /* @__PURE__ */ jsx("div", { className: classes.venueAddress, children: formatAddress(locationDetails) }),
                  mapUrl && /* @__PURE__ */ jsxs("a", { href: mapUrl, target: "_blank", rel: "noopener noreferrer", className: classes.directionsLink, children: [
                    /* @__PURE__ */ jsx(IconArrowUpRight, {}),
                    i18n._(
                      /*i18n*/
                      {
                        id: "4CETZY"
                      }
                    )
                  ] })
                ] }),
                mapUrl && /* @__PURE__ */ jsxs("a", { href: mapUrl, target: "_blank", rel: "noopener noreferrer", className: classes.mapContainer, children: [
                  /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 120", preserveAspectRatio: "xMidYMid slice", style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    inset: 0
                  }, children: [
                    /* @__PURE__ */ jsx("rect", { width: "200", height: "120", fill: "var(--accent-soft)" }),
                    /* @__PURE__ */ jsx("path", { d: "M-5 95 Q30 85, 50 90 Q80 100, 110 88 Q140 75, 170 82 Q190 86, 205 80", stroke: "var(--border-color)", strokeWidth: "2", fill: "none", opacity: "0.3" }),
                    /* @__PURE__ */ jsx("line", { x1: "0", y1: "50", x2: "200", y2: "50", stroke: "var(--border-color)", strokeWidth: "2", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("line", { x1: "100", y1: "0", x2: "100", y2: "120", stroke: "var(--border-color)", strokeWidth: "2", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("line", { x1: "0", y1: "25", x2: "200", y2: "25", stroke: "var(--border-color)", strokeWidth: "1.5", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("line", { x1: "0", y1: "70", x2: "85", y2: "70", stroke: "var(--border-color)", strokeWidth: "1.5", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("line", { x1: "115", y1: "70", x2: "200", y2: "70", stroke: "var(--border-color)", strokeWidth: "1.5", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("line", { x1: "50", y1: "0", x2: "50", y2: "120", stroke: "var(--border-color)", strokeWidth: "1.5", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("line", { x1: "150", y1: "0", x2: "150", y2: "75", stroke: "var(--border-color)", strokeWidth: "1.5", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("rect", { x: "110", y: "28", width: "14", height: "10", fill: "var(--border-color)", opacity: "0.25", rx: "1" }),
                    /* @__PURE__ */ jsx("rect", { x: "20", y: "55", width: "12", height: "10", fill: "var(--border-color)", opacity: "0.25", rx: "1" })
                  ] }),
                  /* @__PURE__ */ jsx(IconMapPin, { size: 32, className: classes.mapPin }),
                  /* @__PURE__ */ jsx("div", { className: classes.mapOverlay, children: /* @__PURE__ */ jsxs("span", { className: classes.mapOverlayLabel, children: [
                    /* @__PURE__ */ jsx(IconMaximize, {}),
                    i18n._(
                      /*i18n*/
                      {
                        id: "OaKTzt"
                      }
                    )
                  ] }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: `${classes.section} ${classes.ticketsSection}`, ref: ticketsSectionRef, id: "tickets", children: /* @__PURE__ */ jsx(SelectProducts, { colors: {
              background: "transparent",
              primary: "var(--event-primary-color)",
              primaryText: "var(--event-primary-text-color)",
              secondary: "var(--event-primary-color)",
              secondaryText: "var(--event-accent-contrast)",
              bodyBackground: "var(--event-bg-color)"
            }, continueButtonText: (_j = event.settings) == null ? void 0 : _j.continue_button_text, padding: "0px", event, promoCodeValid, promoCode, showPoweredBy: false }) }),
            organizer && organizer.status === OrganizerStatus.LIVE && /* @__PURE__ */ jsxs("div", { className: classes.section, id: "organizer", children: [
              /* @__PURE__ */ jsx("div", { className: classes.sectionHeader, children: /* @__PURE__ */ jsx("h2", { className: classes.sectionTitle, children: i18n._(
                /*i18n*/
                {
                  id: "G5RhpL"
                }
              ) }) }),
              /* @__PURE__ */ jsxs("div", { className: classes.organizerCard, children: [
                organizerLogo ? /* @__PURE__ */ jsx("img", { src: organizerLogo, alt: organizer.name, className: classes.organizerAvatar }) : /* @__PURE__ */ jsx("div", { className: classes.organizerAvatarPlaceholder, children: organizer.name.charAt(0).toUpperCase() }),
                /* @__PURE__ */ jsxs("div", { className: classes.organizerContent, children: [
                  /* @__PURE__ */ jsx("div", { className: classes.organizerHeader, children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: classes.organizerName, children: /* @__PURE__ */ jsx(Anchor, { href: organizerHomepageUrl(organizer), children: organizer.name }) }),
                    getShortLocationDisplay(organizerLocation2) && /* @__PURE__ */ jsxs("div", { className: classes.organizerLocation, children: [
                      /* @__PURE__ */ jsx(IconMapPin, {}),
                      /* @__PURE__ */ jsx("a", { href: getGoogleMapsUrl(organizerLocation2), target: "_blank", rel: "noopener noreferrer", children: getShortLocationDisplay(organizerLocation2) })
                    ] })
                  ] }) }),
                  organizer.description && /* @__PURE__ */ jsx("div", { className: classes.organizerBio, dangerouslySetInnerHTML: {
                    __html: organizer.description
                  } }),
                  /* @__PURE__ */ jsxs("div", { className: classes.organizerActions, children: [
                    socialLinks2.length > 0 && /* @__PURE__ */ jsx("div", { className: classes.socialLinks, children: socialLinks2.map(({
                      platform,
                      handle,
                      config
                    }) => {
                      const IconComponent = config.icon;
                      const url = config.baseUrl + handle;
                      return /* @__PURE__ */ jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: classes.socialLink, title: platform, children: /* @__PURE__ */ jsx(IconComponent, { size: 18 }) }, platform);
                    }) }),
                    websiteUrl && (() => {
                      try {
                        const hostname = new URL(websiteUrl).hostname;
                        return /* @__PURE__ */ jsx("a", { href: websiteUrl, target: "_blank", rel: "noopener noreferrer", className: classes.socialLink, title: hostname, children: /* @__PURE__ */ jsx(IconWorld, { size: 18 }) });
                      } catch {
                        return null;
                      }
                    })(),
                    /* @__PURE__ */ jsxs("button", { onClick: () => setContactModalOpen(true), className: classes.contactButton, children: [
                      /* @__PURE__ */ jsx(IconMail, {}),
                      i18n._(
                        /*i18n*/
                        {
                          id: "jfC/xh"
                        }
                      )
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: classes.footerSection, children: [
            /* @__PURE__ */ jsxs("div", { className: classes.footerLinks, children: [
              /* @__PURE__ */ jsx(Anchor, { href: getConfig("VITE_PRIVACY_URL", "https://hi.events/privacy-policy?utm_source=app-event-footer"), className: classes.footerLink, children: i18n._(
                /*i18n*/
                {
                  id: "LcET2C"
                }
              ) }),
              /* @__PURE__ */ jsx(Anchor, { href: getConfig("VITE_TOS_URL", "https://hi.events/terms-of-service?utm_source=app-event-footer"), className: classes.footerLink, children: i18n._(
                /*i18n*/
                {
                  id: "xowcRf"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(PoweredByFooter, { className: classes.poweredByFooter })
          ] })
        ] }),
        showScrollButton && /* @__PURE__ */ jsxs("button", { className: classes.scrollToTicketsButton, onClick: scrollToTickets, children: [
          /* @__PURE__ */ jsx(IconTicket, { size: 18 }),
          i18n._(
            /*i18n*/
            {
              id: "u6FPxT"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(ContactOrganizerModal, { opened: contactModalOpen, onClose: () => setContactModalOpen(false), organizer })
      ] }),
      consentPending && /* @__PURE__ */ jsx(CookieConsentBanner, { onConsent })
    ] })
  ] });
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EventHomepage
}, Symbol.toStringTag, { value: "Module" }));
export {
  EventNotAvailable as E,
  EventHomepage as a,
  index as i
};
