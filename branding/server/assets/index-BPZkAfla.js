import { jsx, jsxs } from "react/jsx-runtime";
import { Trans } from "@lingui/react";
import { i18n } from "@lingui/core";
import { G as GET_ME_QUERY_KEY, b as userClient, u as useGetMe, a as getConfig } from "../entry.server.js";
import { u as useGetOrganizers } from "./useGetOrganizers-AXXYibKP.js";
import { C as Card } from "./index-jHMtuNEo.js";
import { Container, Center, Button, Stack, PinInput, Text, Select, TextInput } from "@mantine/core";
import { c as classes, L as LoadingContainer, O as OrganizerCreateForm } from "./index-DpBs-ZFl.js";
import { useForm } from "@mantine/form";
import { useMediaQuery, useDebouncedValue } from "@mantine/hooks";
import { u as useCreateEvent } from "./useCreateEvent-BSXiD-dc.js";
import { NavLink, useNavigate } from "react-router";
import { useRef, useEffect, useState } from "react";
import { u as useGetEvents } from "./useGetEvents-C7mVnOST.js";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { u as useResendEmailConfirmation } from "./useResendEmailConfirmation-DWCgfO2b.js";
import { IconMailCheck, IconClock, IconSparkles } from "@tabler/icons-react";
import { a as showError, b as showSuccess } from "./notifications-BDuA82qR.js";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { E as EventCategories } from "./eventCategories-C6QoSDnU.js";
import { t as trackEvent, A as AnalyticsEvents } from "./analytics-Be-jLzn4.js";
import "react-dom/server";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "classnames";
import "process";
import "axios";
import "@mantine/notifications";
import "@mantine/modals";
import "@mantine/colors-generator";
import "./useGetAccount-CCd5fT70.js";
import "./index-CYsdl7UG.js";
import "./currencies-wzczGcKi.js";
import "./timezones-CsvfI1Rm.js";
import "./useFormErrorResponseHandler-DGB-9joJ.js";
const useConfirmEmailWithCode = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      userId,
      code
    }) => {
      return userClient.confirmEmailAddressWithCode(userId, code);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [GET_ME_QUERY_KEY]
      });
    }
  });
};
const CreateOrganizer = ({
  progressInfo
}) => {
  return /* @__PURE__ */ jsxs("div", { className: classes.stepContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: classes.stepHeader, children: [
      progressInfo && /* @__PURE__ */ jsx("div", { className: classes.progressContainer, children: /* @__PURE__ */ jsx("div", { className: classes.progressBar, children: /* @__PURE__ */ jsx("div", { className: classes.progressFill, style: {
        width: `${progressInfo.progressPercentage}%`
      } }) }) }),
      /* @__PURE__ */ jsx("h2", { className: classes.stepTitle, children: i18n._(
        /*i18n*/
        {
          id: "xMO+Ao"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: classes.stepDescription, children: i18n._(
        /*i18n*/
        {
          id: "DovcfC"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: classes.stepContent, children: /* @__PURE__ */ jsx(OrganizerCreateForm, {}) })
  ] });
};
const ConfirmVerificationPin = ({
  progressInfo
}) => {
  const {
    data: userData
  } = useGetMe();
  const confirmEmailMutation = useConfirmEmailWithCode();
  const resendMutation = useResendEmailConfirmation();
  const [resendCooldown, setResendCooldown] = useState(0);
  const [completedPin, setCompletedPin] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const form = useForm({
    initialValues: {
      pin: ""
    },
    validate: {
      pin: (value) => value.length !== 5 ? i18n._(
        /*i18n*/
        {
          id: "n8+Ng/"
        }
      ) : null
    }
  });
  const [debouncedPin] = useDebouncedValue(completedPin, 800);
  useEffect(() => {
    if (debouncedPin.length === 5 && !confirmEmailMutation.isPending) {
      handleSubmit({
        pin: debouncedPin
      });
    }
  }, [debouncedPin]);
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1e3);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);
  const handleSubmit = (values) => {
    confirmEmailMutation.mutate({
      userId: (userData == null ? void 0 : userData.id) || "",
      code: values.pin
    }, {
      onSuccess: () => {
        trackEvent(AnalyticsEvents.SIGNUP_COMPLETED);
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "L86zy2"
          }
        ));
        form.reset();
        setCompletedPin("");
      },
      onError: (error) => {
        var _a, _b;
        showError(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || i18n._(
          /*i18n*/
          {
            id: "rxy0tG"
          }
        ));
        form.reset();
        setCompletedPin("");
      }
    });
  };
  const handleResend = async () => {
    var _a, _b, _c, _d, _e;
    if (!(userData == null ? void 0 : userData.id)) return;
    try {
      await resendMutation.mutateAsync({
        userId: userData.id
      });
      showSuccess(i18n._(
        /*i18n*/
        {
          id: "V53XzQ"
        }
      ));
      setResendCooldown(30);
      form.reset();
    } catch (error) {
      if (((_a = error == null ? void 0 : error.response) == null ? void 0 : _a.status) === 429) {
        const remainingSeconds = ((_d = (_c = (_b = error.response.data) == null ? void 0 : _b.message) == null ? void 0 : _c.match(/\d+/)) == null ? void 0 : _d[0]) || 30;
        setResendCooldown(parseInt(remainingSeconds));
        showError(((_e = error.response.data) == null ? void 0 : _e.message) || i18n._(
          /*i18n*/
          {
            id: "klWBeI"
          }
        ));
      } else {
        showError(i18n._(
          /*i18n*/
          {
            id: "YQ3QSS"
          }
        ));
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: classes.stepContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: classes.stepHeader, children: [
      progressInfo && /* @__PURE__ */ jsx("div", { className: classes.progressContainer, children: /* @__PURE__ */ jsx("div", { className: classes.progressBar, children: /* @__PURE__ */ jsx("div", { className: classes.progressFill, style: {
        width: `${progressInfo.progressPercentage}%`
      } }) }) }),
      /* @__PURE__ */ jsx("h2", { className: classes.stepTitle, children: i18n._(
        /*i18n*/
        {
          id: "v4fiSg"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: classes.stepDescription, children: i18n._(
        /*i18n*/
        {
          id: "Fq/Nx7"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: classes.emailDisplay, children: userData == null ? void 0 : userData.email })
    ] }),
    /* @__PURE__ */ jsx("div", { className: classes.stepContent, children: /* @__PURE__ */ jsx("form", { onSubmit: form.onSubmit(handleSubmit), children: /* @__PURE__ */ jsxs(Stack, { gap: 32, children: [
      /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx(PinInput, { ...form.getInputProps("pin"), inputMode: "numeric", "aria-label": i18n._(
        /*i18n*/
        {
          id: "AdWhjZ"
        }
      ), size: isMobile ? "sm" : "xl", length: 5, placeholder: "•", type: "number", disabled: confirmEmailMutation.isPending, error: !!form.errors.pin, className: classes.pinInput, gap: isMobile ? 8 : "sm", onChange: (value) => {
        form.setFieldValue("pin", value);
        if (value.length === 5) {
          setCompletedPin(value);
        } else {
          setCompletedPin("");
        }
      } }) }),
      /* @__PURE__ */ jsx(Button, { type: "submit", fullWidth: true, size: "lg", loading: confirmEmailMutation.isPending, leftSection: /* @__PURE__ */ jsx(IconMailCheck, { size: 20 }), className: classes.primaryButton, children: confirmEmailMutation.isPending ? i18n._(
        /*i18n*/
        {
          id: "e/cvV1"
        }
      ) : i18n._(
        /*i18n*/
        {
          id: "wCKkSr"
        }
      ) }),
      /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsxs(Stack, { gap: "xs", align: "center", children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", children: i18n._(
          /*i18n*/
          {
            id: "H8kMHT"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "subtle", size: "sm", onClick: handleResend, disabled: resendCooldown > 0 || resendMutation.isPending, loading: resendMutation.isPending, leftSection: resendCooldown > 0 ? /* @__PURE__ */ jsx(IconClock, { size: 16 }) : null, children: resendCooldown > 0 ? i18n._(
          /*i18n*/
          {
            id: "TTpXL3",
            values: {
              resendCooldown
            }
          }
        ) : i18n._(
          /*i18n*/
          {
            id: "mdeIOH"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", ta: "center", className: classes.helpText, children: i18n._(
        /*i18n*/
        {
          id: "MDNyJz"
        }
      ) })
    ] }) }) })
  ] });
};
const CreateEvent = ({
  progressInfo
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const form = useForm({
    initialValues: {
      title: "",
      start_date: dayjs().add(1, "day").hour(19).minute(0).second(0).toDate(),
      end_date: dayjs().add(1, "day").hour(21).minute(0).second(0).toDate(),
      category: ""
    },
    validate: {
      title: (value) => !value ? i18n._(
        /*i18n*/
        {
          id: "WZZzB6"
        }
      ) : null,
      start_date: (value) => !value ? i18n._(
        /*i18n*/
        {
          id: "izRfYP"
        }
      ) : null,
      end_date: (value, values) => {
        if (value && values.start_date && dayjs(value).isBefore(dayjs(values.start_date))) {
          return i18n._(
            /*i18n*/
            {
              id: "PKXt9R"
            }
          );
        }
      }
    }
  });
  const eventMutation = useCreateEvent();
  const navigate = useNavigate();
  const {
    data: organizers,
    isFetched: organizersFetched
  } = useGetOrganizers();
  const {
    data: events,
    isFetched: eventsFetched
  } = useGetEvents({
    pageNumber: 1
  });
  const handleSubmit = (values) => {
    const submitData = {
      ...values,
      start_date: values.start_date ? dayjs(values.start_date).toISOString() : void 0,
      end_date: values.end_date ? dayjs(values.end_date).toISOString() : void 0
    };
    eventMutation.mutate({
      eventData: submitData
    }, {
      onSuccess: (values2) => {
        trackEvent(AnalyticsEvents.FIRST_EVENT_CREATED);
        navigate(`/manage/event/${values2.data.id}/getting-started?new_event=true`);
      }
    });
  };
  useEffect(() => {
    var _a, _b;
    if (organizersFetched) {
      const organizerName = (_a = organizers == null ? void 0 : organizers.data) == null ? void 0 : _a[0].name;
      form.setFieldValue("organizer_id", (_b = organizers == null ? void 0 : organizers.data) == null ? void 0 : _b[0].id);
      form.setFieldValue("title", i18n._(
        /*i18n*/
        {
          id: "NlQ0cx",
          values: {
            organizerName
          }
        }
      ));
    }
  }, [organizersFetched]);
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    form.setFieldValue("category", categoryId);
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }
  };
  useEffect(() => {
    if (eventsFetched && events && events.data.length > 0) {
      navigate(`/manage/events`);
    }
  }, [eventsFetched]);
  return /* @__PURE__ */ jsx(LoadingContainer, { children: /* @__PURE__ */ jsxs("div", { className: classes.stepContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: classes.stepHeader, children: [
      progressInfo && /* @__PURE__ */ jsx("div", { className: classes.progressContainer, children: /* @__PURE__ */ jsx("div", { className: classes.progressBar, children: /* @__PURE__ */ jsx("div", { className: classes.progressFill, style: {
        width: `${progressInfo.progressPercentage}%`
      } }) }) }),
      /* @__PURE__ */ jsx("h2", { className: classes.stepTitle, children: i18n._(
        /*i18n*/
        {
          id: "JQNMrj"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: classes.stepContent, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.onSubmit(handleSubmit), children: [
      /* @__PURE__ */ jsxs(Stack, { gap: 24, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Text, { size: "lg", fw: 600, mb: "lg", children: i18n._(
            /*i18n*/
            {
              id: "FaSXqR"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: classes.categoryGrid, children: EventCategories.map((category) => /* @__PURE__ */ jsxs("button", { type: "button", className: `${classes.categoryCard} ${selectedCategory === category.id ? classes.categoryCardSelected : ""}`, onClick: () => handleCategorySelect(category.id), disabled: eventMutation.isPending, children: [
            /* @__PURE__ */ jsx("div", { className: classes.categoryEmoji, children: category.emoji }),
            /* @__PURE__ */ jsx("div", { className: classes.categoryText, children: category.name })
          ] }, category.id)) }),
          /* @__PURE__ */ jsx("div", { className: classes.categoryDropdown, children: /* @__PURE__ */ jsx(Select, { value: selectedCategory, onChange: (value) => handleCategorySelect(value || ""), data: EventCategories.map((category) => ({
            value: category.id,
            label: `${category.emoji} ${category.name}`
          })), placeholder: i18n._(
            /*i18n*/
            {
              id: "0U6E9W"
            }
          ), size: "lg", required: true, disabled: eventMutation.isPending }) })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(TextInput, { ...form.getInputProps("title"), label: i18n._(
          /*i18n*/
          {
            id: "PYs3rP"
          }
        ), placeholder: i18n._(
          /*i18n*/
          {
            id: "CWOPIK"
          }
        ), size: "lg", required: true, disabled: eventMutation.isPending }) }),
        /* @__PURE__ */ jsxs("div", { className: classes.dateTimeGrid, children: [
          /* @__PURE__ */ jsx(DateTimePicker, { ...form.getInputProps("start_date"), label: i18n._(
            /*i18n*/
            {
              id: "JcQp9p"
            }
          ), placeholder: i18n._(
            /*i18n*/
            {
              id: "dJZTv2"
            }
          ), valueFormat: "MMM DD, h:mm A", size: "lg", required: true, dropdownType: "modal", timePickerProps: {
            format: "12h",
            withDropdown: true
          }, onChange: (value) => {
            form.setFieldValue("start_date", value);
            if (form.values.end_date && value && dayjs(form.values.end_date).isBefore(dayjs(value))) {
              form.setFieldValue("end_date", dayjs(value).add(2, "hours").toDate());
            }
          }, disabled: eventMutation.isPending }),
          /* @__PURE__ */ jsx(DateTimePicker, { ...form.getInputProps("end_date"), label: i18n._(
            /*i18n*/
            {
              id: "48Y16Q"
            }
          ), placeholder: i18n._(
            /*i18n*/
            {
              id: "gTN6Ws"
            }
          ), valueFormat: "MMM DD, h:mm A", size: "lg", dropdownType: "modal", timePickerProps: {
            format: "12h",
            withDropdown: true
          }, minDate: form.values.start_date ?? void 0, date: form.values.start_date ?? void 0, disabled: eventMutation.isPending })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", fullWidth: true, size: "lg", loading: eventMutation.isPending, leftSection: eventMutation.isPending ? null : /* @__PURE__ */ jsx(IconSparkles, { size: 20 }), className: classes.primaryButton, disabled: eventMutation.isPending || !selectedCategory, "aria-label": eventMutation.isPending ? i18n._(
        /*i18n*/
        {
          id: "1YMS+X"
        }
      ) : i18n._(
        /*i18n*/
        {
          id: "nKtyYu"
        }
      ), children: eventMutation.isPending ? i18n._(
        /*i18n*/
        {
          id: "67NsZP"
        }
      ) : i18n._(
        /*i18n*/
        {
          id: "m8WD6t"
        }
      ) })
    ] }) })
  ] }) });
};
const getProgressInfo = (requiresVerification, organizerExists, currentStep) => {
  const totalSteps = requiresVerification ? 3 : 2;
  let currentStepNumber = 1;
  if (requiresVerification) {
    if (currentStep === "verification") currentStepNumber = 1;
    else if (currentStep === "organizer") currentStepNumber = 2;
    else if (currentStep === "event") currentStepNumber = 3;
  } else {
    if (currentStep === "organizer") currentStepNumber = 1;
    else if (currentStep === "event") currentStepNumber = 2;
  }
  const progressPercentage = currentStepNumber / totalSteps * 100;
  return {
    currentStep: currentStepNumber,
    totalSteps,
    progressPercentage
  };
};
const Welcome = () => {
  var _a;
  const {
    data: userData
  } = useGetMe();
  const organizersQuery = useGetOrganizers();
  const organizers = (_a = organizersQuery == null ? void 0 : organizersQuery.data) == null ? void 0 : _a.data;
  const organizerExists = organizersQuery.isFetched && Number(organizers == null ? void 0 : organizers.length) > 0;
  const hasTrackedSignup = useRef(false);
  const requiresVerification = userData && userData.enforce_email_confirmation_during_registration && !userData.is_email_verified;
  useEffect(() => {
    if (!userData || hasTrackedSignup.current) {
      return;
    }
    if (!userData.enforce_email_confirmation_during_registration) {
      hasTrackedSignup.current = true;
      trackEvent(AnalyticsEvents.SIGNUP_COMPLETED);
    }
  }, [userData]);
  return /* @__PURE__ */ jsx("div", { className: classes.welcomeContainer, children: /* @__PURE__ */ jsxs(Container, { size: "sm", className: classes.welcomeContent, children: [
    /* @__PURE__ */ jsxs("div", { className: classes.welcomeHeader, children: [
      /* @__PURE__ */ jsx("div", { className: classes.logo, children: /* @__PURE__ */ jsx("img", { src: getConfig("VITE_APP_LOGO_LIGHT", "/logos/hi-events-text-dark.svg"), alt: `${getConfig("VITE_APP_NAME", "Stratechna Events")} logo`, className: classes.logo }) }),
      /* @__PURE__ */ jsx("h1", { className: classes.welcomeTitle, children: /* @__PURE__ */ jsx(Trans, { id: "QDWsl9", values: {
        0: getConfig("VITE_APP_NAME", "Stratechna Events"),
        1: userData == null ? void 0 : userData.first_name
      } }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: classes.welcomeCard, children: [
      requiresVerification && /* @__PURE__ */ jsx(ConfirmVerificationPin, { progressInfo: getProgressInfo(requiresVerification, organizerExists, "verification") }),
      !requiresVerification && organizerExists && /* @__PURE__ */ jsx(CreateEvent, { progressInfo: getProgressInfo(requiresVerification, organizerExists, "event") }),
      !requiresVerification && !organizerExists && /* @__PURE__ */ jsx(CreateOrganizer, { progressInfo: getProgressInfo(requiresVerification, organizerExists, "organizer") })
    ] }),
    !requiresVerification && organizerExists && /* @__PURE__ */ jsx(Center, { className: classes.skipSection, children: /* @__PURE__ */ jsx(Button, { component: NavLink, to: "/manage/events", variant: "subtle", size: "sm", c: "dimmed", children: i18n._(
      /*i18n*/
      {
        id: "+P0Cn2"
      }
    ) }) })
  ] }) });
};
export {
  CreateEvent,
  CreateOrganizer,
  Welcome as default
};
