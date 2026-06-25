import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { i18n } from "@lingui/core";
import { H as HeadingCard } from "./index-BE9Hl4pP.js";
import { u as useCreateOrGetStripeConnectDetails } from "./useCreateOrGetStripeConnectDetails-DOi7aebF.js";
import { a as accountClient, u as useGetAccount } from "./useGetAccount-CCd5fT70.js";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { L as LoadingMask } from "./index-CYsdl7UG.js";
import { Text, Stack, Radio, Group, TextInput, Button, Alert, Loader, Title, Grid, ThemeIcon, Anchor } from "@mantine/core";
import { c as classes$1 } from "./ManageAccount.module-Ba0uELKM.js";
import { useState, useEffect, useRef } from "react";
import { IconRefresh, IconAlertCircle, IconClock, IconCheck, IconInfoCircle, IconExternalLink, IconBrandStripe } from "@tabler/icons-react";
import { C as Card } from "./index-jHMtuNEo.js";
import { f as formatCurrency } from "./currency-Br7a8J7F.js";
import { a as showError, b as showSuccess } from "./notifications-BDuA82qR.js";
import { h as api, i as isHiEvents, a as getConfig } from "../entry.server.js";
import { M as Modal } from "./index-AhXgh6Nz.js";
import { t as trackEvent, A as AnalyticsEvents } from "./analytics-Be-jLzn4.js";
import "@mantine/notifications";
import "react-dom/server";
import "react-router";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "classnames";
import "process";
import "axios";
import "@lingui/react";
import "@mantine/modals";
import "@mantine/colors-generator";
const GET_STRIPE_CONNECT_ACCOUNTS_QUERY_KEY = "getStripeConnectAccounts";
const useGetStripeConnectAccounts = (accountId, options) => {
  return useQuery({
    queryKey: [GET_STRIPE_CONNECT_ACCOUNTS_QUERY_KEY, accountId],
    queryFn: async () => {
      const {
        data
      } = await accountClient.getStripeConnectAccounts(accountId);
      return data;
    },
    ...options
  });
};
const stripeInfo = "_stripeInfo_ij88s_1";
const migrationNotice = "_migrationNotice_ij88s_14";
const migrationBanner = "_migrationBanner_ij88s_21";
const platformPanel = "_platformPanel_ij88s_26";
const activePlatform = "_activePlatform_ij88s_30";
const ca = "_ca_ij88s_34";
const paymentClasses = {
  stripeInfo,
  migrationNotice,
  migrationBanner,
  platformPanel,
  activePlatform,
  ca
};
const EU_COUNTRIES = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];
const getVatInfo = (stripeCountry) => {
  if (!stripeCountry || !EU_COUNTRIES.includes(stripeCountry.toUpperCase())) {
    return {
      isEU: false,
      isIreland: false,
      showVatForm: false
    };
  }
  const isIreland = stripeCountry.toUpperCase() === "IE";
  return {
    isEU: true,
    isIreland,
    showVatForm: !isIreland
  };
};
const VatNotice = ({
  stripeCountry
}) => {
  const vatInfo = getVatInfo(stripeCountry);
  if (!vatInfo.isEU) {
    return null;
  }
  if (vatInfo.isIreland) {
    return /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", mt: "sm", children: i18n._(
      /*i18n*/
      {
        id: "y0meFR"
      }
    ) });
  }
  return /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", mt: "sm", children: i18n._(
    /*i18n*/
    {
      id: "UjNWsF"
    }
  ) });
};
const vatClient = {
  getVatSetting: async (accountId) => {
    const response = await api.get(`accounts/${accountId}/vat-settings`);
    return response.data;
  },
  upsertVatSetting: async (accountId, data) => {
    const response = await api.post(`accounts/${accountId}/vat-settings`, data);
    return response.data;
  }
};
const GET_ACCOUNT_VAT_SETTING_QUERY_KEY = "accountVatSetting";
const useGetAccountVatSetting = (accountId, options) => {
  return useQuery({
    queryKey: [GET_ACCOUNT_VAT_SETTING_QUERY_KEY, accountId],
    queryFn: async () => {
      const {
        data
      } = await vatClient.getVatSetting(accountId);
      return data;
    },
    ...options
  });
};
const useUpsertAccountVatSetting = (accountId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      return await vatClient.upsertVatSetting(accountId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ACCOUNT_VAT_SETTING_QUERY_KEY, accountId]
      });
    }
  });
};
const EU_VAT_REGEX = /^[A-Z]{2}[0-9A-Z]{8,15}$/;
const validateVatNumber = (vatNumber) => {
  const trimmed = vatNumber.trim();
  if (trimmed.includes(" ")) {
    return {
      valid: false,
      error: i18n._(
        /*i18n*/
        {
          id: "CabI04"
        }
      )
    };
  }
  const upperCase = trimmed.toUpperCase();
  if (!EU_VAT_REGEX.test(upperCase)) {
    return {
      valid: false,
      error: i18n._(
        /*i18n*/
        {
          id: "PMhxAR"
        }
      )
    };
  }
  return {
    valid: true
  };
};
const ValidationStatusAlert = ({
  status,
  error,
  businessName,
  attempts
}) => {
  switch (status) {
    case "VALID":
      return /* @__PURE__ */ jsxs(Alert, { color: "green", icon: /* @__PURE__ */ jsx(IconCheck, {}), children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: i18n._(
          /*i18n*/
          {
            id: "gPgdNV"
          }
        ) }),
        businessName && /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", children: businessName })
      ] });
    case "PENDING":
    case "VALIDATING":
      return /* @__PURE__ */ jsxs(Alert, { color: "blue", icon: status === "VALIDATING" ? /* @__PURE__ */ jsx(Loader, { size: "xs" }) : /* @__PURE__ */ jsx(IconClock, {}), children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: status === "VALIDATING" ? i18n._(
          /*i18n*/
          {
            id: "imLQ9Y"
          }
        ) : i18n._(
          /*i18n*/
          {
            id: "EmFsMZ"
          }
        ) }),
        /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", children: i18n._(
          /*i18n*/
          {
            id: "ZOmUYW"
          }
        ) })
      ] });
    case "INVALID":
      return /* @__PURE__ */ jsxs(Alert, { color: "red", icon: /* @__PURE__ */ jsx(IconAlertCircle, {}), children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: i18n._(
          /*i18n*/
          {
            id: "RUMiLy"
          }
        ) }),
        /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", children: error || i18n._(
          /*i18n*/
          {
            id: "injXD7"
          }
        ) })
      ] });
    case "FAILED":
      return /* @__PURE__ */ jsxs(Alert, { color: "orange", icon: /* @__PURE__ */ jsx(IconRefresh, {}), children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: i18n._(
          /*i18n*/
          {
            id: "516oLj"
          }
        ) }),
        /* @__PURE__ */ jsxs(Text, { size: "xs", c: "dimmed", children: [
          i18n._(
            /*i18n*/
            {
              id: "x8rEDQ"
            }
          ),
          attempts > 0 && ` (${i18n._(
            /*i18n*/
            {
              id: "BCmibk"
            }
          )}: ${attempts})`
        ] })
      ] });
    default:
      return null;
  }
};
const VatSettingsForm = ({
  account,
  onSuccess,
  showCard = true
}) => {
  var _a;
  const [vatRegistered, setVatRegistered] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [vatError, setVatError] = useState();
  const shouldPoll = vatNumber.trim().length > 0;
  const vatSettingQuery = useGetAccountVatSetting(account.id, {
    refetchInterval: (query) => {
      if (!shouldPoll) {
        return false;
      }
      const data = query.state.data;
      if ((data == null ? void 0 : data.vat_validation_status) === "PENDING" || (data == null ? void 0 : data.vat_validation_status) === "VALIDATING") {
        return 5e3;
      }
      return false;
    }
  });
  const upsertMutation = useUpsertAccountVatSetting(account.id);
  const existingSettings = vatSettingQuery.data;
  useEffect(() => {
    if (existingSettings && !vatRegistered) {
      setVatRegistered(existingSettings.vat_registered ? "yes" : "no");
      setVatNumber(existingSettings.vat_number || "");
    }
  }, [existingSettings, vatRegistered]);
  const handleVatNumberChange = (value) => {
    setVatNumber(value);
    if (vatError) {
      setVatError(void 0);
    }
  };
  const handleSave = async () => {
    if (vatRegistered === "yes" && !vatNumber) {
      showError(i18n._(
        /*i18n*/
        {
          id: "r+lQXT"
        }
      ));
      return;
    }
    if (vatRegistered === "yes") {
      const validation = validateVatNumber(vatNumber);
      if (!validation.valid) {
        setVatError(validation.error);
        showError(validation.error || i18n._(
          /*i18n*/
          {
            id: "N9JsFT"
          }
        ));
        return;
      }
    }
    try {
      const result = await upsertMutation.mutateAsync({
        vat_registered: vatRegistered === "yes",
        vat_number: vatRegistered === "yes" ? vatNumber.toUpperCase().trim() : null
      });
      if (!result.data.vat_registered) {
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "Nfbg76"
          }
        ));
      } else if (result.data.vat_validation_status === "VALID") {
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "gPgdNV"
          }
        ));
      } else if (result.data.vat_validation_status === "INVALID") {
        showError(i18n._(
          /*i18n*/
          {
            id: "vqji3Y"
          }
        ));
      } else if (result.data.vat_validation_status === "PENDING") {
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "UvYql/"
          }
        ));
      } else {
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "Nfbg76"
          }
        ));
      }
      onSuccess == null ? void 0 : onSuccess();
    } catch {
      showError(i18n._(
        /*i18n*/
        {
          id: "l6acRV"
        }
      ));
    }
  };
  const canSave = vatRegistered && (vatRegistered === "no" || vatRegistered === "yes" && vatNumber.trim().length >= 10);
  const isCurrentVatNumber = ((_a = existingSettings == null ? void 0 : existingSettings.vat_number) == null ? void 0 : _a.toUpperCase()) === vatNumber.toUpperCase().trim();
  const formContent = /* @__PURE__ */ jsxs(Stack, { gap: "lg", children: [
    /* @__PURE__ */ jsx(Radio.Group, { value: vatRegistered, onChange: setVatRegistered, label: i18n._(
      /*i18n*/
      {
        id: "Uqefyd"
      }
    ), required: true, children: /* @__PURE__ */ jsxs(Group, { mt: "xs", children: [
      /* @__PURE__ */ jsx(Radio, { value: "no", label: i18n._(
        /*i18n*/
        {
          id: "HSw5l3"
        }
      ) }),
      /* @__PURE__ */ jsx(Radio, { value: "yes", label: i18n._(
        /*i18n*/
        {
          id: "X/azM1"
        }
      ) })
    ] }) }),
    vatRegistered === "yes" && /* @__PURE__ */ jsxs(Stack, { gap: "md", children: [
      /* @__PURE__ */ jsx(TextInput, { label: i18n._(
        /*i18n*/
        {
          id: "pnVh83"
        }
      ), description: i18n._(
        /*i18n*/
        {
          id: "IdULhL"
        }
      ), placeholder: "IE1234567A", value: vatNumber, onChange: (e) => handleVatNumberChange(e.target.value), maxLength: 17, required: true, error: vatError }),
      (existingSettings == null ? void 0 : existingSettings.vat_number) && !vatError && isCurrentVatNumber && /* @__PURE__ */ jsx(ValidationStatusAlert, { status: existingSettings.vat_validation_status, error: existingSettings.vat_validation_error, businessName: existingSettings.business_name, attempts: existingSettings.vat_validation_attempts })
    ] }),
    /* @__PURE__ */ jsxs(Group, { children: [
      /* @__PURE__ */ jsx(Button, { onClick: handleSave, loading: upsertMutation.isPending, disabled: !canSave, children: i18n._(
        /*i18n*/
        {
          id: "6/TNCd"
        }
      ) }),
      vatRegistered === "yes" && !isCurrentVatNumber && /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", children: i18n._(
        /*i18n*/
        {
          id: "QBlhh4"
        }
      ) })
    ] })
  ] });
  if (showCard) {
    return /* @__PURE__ */ jsx(Card, { variant: "lightGray", children: formContent });
  }
  return formContent;
};
const vatSettings = "_vatSettings_arjt8_1";
const classes = {
  vatSettings
};
const VatSettings = ({
  account,
  stripeCountry
}) => {
  const vatSettingQuery = useGetAccountVatSetting(account.id);
  const vatInfo = getVatInfo(stripeCountry);
  if (!vatInfo.isEU) {
    return null;
  }
  const existingSettings = vatSettingQuery.data;
  const needsVatInfo = !existingSettings || existingSettings.vat_registered === null || existingSettings.vat_registered === void 0;
  if (vatInfo.isIreland) {
    return /* @__PURE__ */ jsxs("div", { className: classes.vatSettings, children: [
      /* @__PURE__ */ jsx(Title, { mb: 10, order: 3, children: i18n._(
        /*i18n*/
        {
          id: "sqdl5s"
        }
      ) }),
      /* @__PURE__ */ jsxs(Alert, { color: "blue", icon: /* @__PURE__ */ jsx(IconInfoCircle, {}), mb: "lg", children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, mb: "xs", children: i18n._(
          /*i18n*/
          {
            id: "tJylUv"
          }
        ) }),
        /* @__PURE__ */ jsx(Text, { size: "sm", lh: 1.6, children: i18n._(
          /*i18n*/
          {
            id: "tLf3yJ"
          }
        ) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: classes.vatSettings, children: [
    /* @__PURE__ */ jsx(Title, { mb: 10, order: 3, children: i18n._(
      /*i18n*/
      {
        id: "PCRCCN"
      }
    ) }),
    needsVatInfo && /* @__PURE__ */ jsxs(Alert, { color: "orange", icon: /* @__PURE__ */ jsx(IconAlertCircle, {}), mb: "lg", styles: {
      root: {
        borderLeft: "4px solid var(--mantine-color-orange-6)"
      }
    }, children: [
      /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, mb: "sm", children: i18n._(
        /*i18n*/
        {
          id: "AhwTa1"
        }
      ) }),
      /* @__PURE__ */ jsx(Text, { size: "sm", mb: "sm", lh: 1.6, children: i18n._(
        /*i18n*/
        {
          id: "QGoXh3"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { style: {
        background: "var(--mantine-color-gray-0)",
        padding: "12px",
        borderRadius: "6px",
        marginBottom: "12px",
        border: "1px solid var(--mantine-color-orange-2)"
      }, children: [
        /* @__PURE__ */ jsxs(Text, { size: "xs", mb: "xs", c: "dark.6", children: [
          "• ",
          i18n._(
            /*i18n*/
            {
              id: "AKbElk"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Text, { size: "xs", c: "dark.6", children: [
          "• ",
          i18n._(
            /*i18n*/
            {
              id: "HVwIsd"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        background: "var(--mantine-color-white)",
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid var(--mantine-color-orange-2)"
      }, children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, mb: "xs", c: "dark.7", children: i18n._(
          /*i18n*/
          {
            id: "f30uVZ"
          }
        ) }),
        /* @__PURE__ */ jsxs(Text, { size: "xs", mb: "xs", c: "dark.6", children: [
          "• ",
          i18n._(
            /*i18n*/
            {
              id: "cljs3a"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Text, { size: "xs", c: "dark.6", children: [
          "• ",
          i18n._(
            /*i18n*/
            {
              id: "PYVWEI"
            }
          )
        ] })
      ] })
    ] }),
    !needsVatInfo && /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "lg", lh: 1.6, children: i18n._(
      /*i18n*/
      {
        id: "FlGprQ"
      }
    ) }),
    /* @__PURE__ */ jsx(VatSettingsForm, { account })
  ] });
};
const VatSettingsModal = ({
  account,
  opened,
  onClose
}) => {
  return /* @__PURE__ */ jsxs(Modal, { opened, onClose, heading: i18n._(
    /*i18n*/
    {
      id: "PCRCCN"
    }
  ), children: [
    /* @__PURE__ */ jsx(Text, { size: "sm", mb: "lg", lh: 1.6, children: i18n._(
      /*i18n*/
      {
        id: "QGoXh3"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { style: {
      background: "var(--mantine-color-gray-0)",
      padding: "12px",
      borderRadius: "6px",
      marginBottom: "16px",
      border: "1px solid var(--mantine-color-gray-2)"
    }, children: [
      /* @__PURE__ */ jsxs(Text, { size: "xs", mb: "xs", c: "dark.6", children: [
        "• ",
        i18n._(
          /*i18n*/
          {
            id: "AKbElk"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Text, { size: "xs", c: "dark.6", children: [
        "• ",
        i18n._(
          /*i18n*/
          {
            id: "HVwIsd"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(VatSettingsForm, { account, onSuccess: onClose, showCard: false })
  ] });
};
const formatPercentage = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
};
const MigrationNotice = ({
  stripeData
}) => {
  const caAccount = stripeData.stripe_connect_accounts.find((acc) => acc.platform === "ca");
  const ieAccount = stripeData.stripe_connect_accounts.find((acc) => acc.platform === "ie");
  if (!isHiEvents() || !caAccount || ieAccount && ieAccount.is_setup_complete) {
    return null;
  }
  return /* @__PURE__ */ jsx(Card, { variant: "lightGray", className: paymentClasses.migrationNotice, children: /* @__PURE__ */ jsxs(Group, { gap: "md", mb: "md", align: "flex-start", children: [
    /* @__PURE__ */ jsx(ThemeIcon, { size: "lg", variant: "light", radius: "xl", color: "blue", style: {
      marginTop: "2px"
    }, children: /* @__PURE__ */ jsx(IconInfoCircle, { size: 20 }) }),
    /* @__PURE__ */ jsxs("div", { style: {
      flex: 1
    }, children: [
      /* @__PURE__ */ jsx(Title, { order: 3, mb: "sm", c: "blue.8", children: i18n._(
        /*i18n*/
        {
          id: "nMtNd+"
        }
      ) }),
      /* @__PURE__ */ jsx(Text, { size: "sm", mb: "md", lh: 1.5, c: "dark.6", children: i18n._(
        /*i18n*/
        {
          id: "zCdObC"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { style: {
        background: "var(--mantine-color-gray-0)",
        padding: "16px",
        borderRadius: "6px",
        marginBottom: "16px",
        border: "1px solid var(--mantine-color-gray-2)"
      }, children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, mb: "sm", c: "dark.7", children: i18n._(
          /*i18n*/
          {
            id: "QlwJ9d"
          }
        ) }),
        /* @__PURE__ */ jsxs(Text, { size: "xs", mb: "xs", c: "dark.6", children: [
          "• ",
          i18n._(
            /*i18n*/
            {
              id: "XX32BM"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Text, { size: "xs", mb: "xs", c: "dark.6", children: [
          "• ",
          i18n._(
            /*i18n*/
            {
              id: "54GxeB"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Text, { size: "xs", c: "dark.6", children: [
          "• ",
          i18n._(
            /*i18n*/
            {
              id: "51U9mG"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", fs: "italic", children: i18n._(
        /*i18n*/
        {
          id: "lhAWqI"
        }
      ) })
    ] })
  ] }) });
};
const MigrationBanner = ({
  stripeData
}) => {
  const caAccount = stripeData.stripe_connect_accounts.find((acc) => acc.platform === "ca");
  const ieAccount = stripeData.stripe_connect_accounts.find((acc) => acc.platform === "ie");
  if (!isHiEvents() || !caAccount || ieAccount && ieAccount.is_setup_complete) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Card, { variant: "lightGray", className: paymentClasses.migrationBanner, children: [
    /* @__PURE__ */ jsxs(Group, { gap: "sm", mb: "md", children: [
      /* @__PURE__ */ jsx(ThemeIcon, { size: "lg", variant: "light", radius: "xl", color: "blue", children: /* @__PURE__ */ jsx(IconInfoCircle, { size: 20 }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Title, { order: 3, children: i18n._(
        /*i18n*/
        {
          id: "OqEV/G"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", children: i18n._(
      /*i18n*/
      {
        id: "hTJ4fB"
      }
    ) })
  ] });
};
const PlatformPanel = ({
  platform,
  account,
  isActive,
  onSetupStripe,
  hideLabels = false,
  isMigrationComplete = false
}) => {
  const platformColors = {
    ca: "orange",
    ie: "green"
  };
  return /* @__PURE__ */ jsxs(Card, { variant: "default", className: `${paymentClasses.platformPanel} ${isActive ? paymentClasses.activePlatform : ""} ${paymentClasses[platform]}`, children: [
    /* @__PURE__ */ jsxs(Group, { gap: "sm", mb: "md", justify: "space-between", children: [
      /* @__PURE__ */ jsxs(Group, { gap: "sm", children: [
        /* @__PURE__ */ jsx(ThemeIcon, { size: "md", variant: "light", radius: "xl", color: platformColors[platform], children: (account == null ? void 0 : account.is_setup_complete) ? /* @__PURE__ */ jsx(IconCheck, { size: 16 }) : /* @__PURE__ */ jsx(IconAlertCircle, { size: 16 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Title, { order: 4, children: i18n._(
            /*i18n*/
            {
              id: "V3XvZK"
            }
          ) }),
          isActive && !hideLabels && !isMigrationComplete && /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", children: i18n._(
            /*i18n*/
            {
              id: "BMtue0"
            }
          ) })
        ] })
      ] }),
      !hideLabels && platform === "ca" && isActive && /* @__PURE__ */ jsx(Text, { size: "xs", c: "orange", fw: 500, children: i18n._(
        /*i18n*/
        {
          id: "KMMOAy"
        }
      ) })
    ] }),
    (account == null ? void 0 : account.is_setup_complete) ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "md", children: hideLabels ? i18n._(
        /*i18n*/
        {
          id: "6heFYY"
        }
      ) : platform === "ca" ? isActive ? i18n._(
        /*i18n*/
        {
          id: "U3wiCB"
        }
      ) : i18n._(
        /*i18n*/
        {
          id: "DRykfS"
        }
      ) : i18n._(
        /*i18n*/
        {
          id: "qlaZuT"
        }
      ) }),
      /* @__PURE__ */ jsx(Group, { gap: "xs", children: /* @__PURE__ */ jsx(Anchor, { href: "https://dashboard.stripe.com/", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", wrap: "nowrap", children: [
        /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
          /*i18n*/
          {
            id: "N141o/"
          }
        ) }),
        /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
      ] }) }) })
    ] }) : account ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "md", children: i18n._(
        /*i18n*/
        {
          id: "QUg5y1"
        }
      ) }),
      /* @__PURE__ */ jsx(Button, { variant: "light", size: "sm", leftSection: /* @__PURE__ */ jsx(IconBrandStripe, { size: 16 }), onClick: onSetupStripe, color: platformColors[platform], children: i18n._(
        /*i18n*/
        {
          id: "8BwQeU"
        }
      ) })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "md", children: hideLabels ? i18n._(
        /*i18n*/
        {
          id: "ulV1ju"
        }
      ) : platform === "ca" ? i18n._(
        /*i18n*/
        {
          id: "4qmnU8"
        }
      ) : i18n._(
        /*i18n*/
        {
          id: "spsZys"
        }
      ) }),
      /* @__PURE__ */ jsx(Button, { variant: "light", size: "sm", leftSection: /* @__PURE__ */ jsx(IconBrandStripe, { size: 16 }), onClick: onSetupStripe, color: platformColors[platform], children: platform === "ie" && !hideLabels ? i18n._(
        /*i18n*/
        {
          id: "WNnP3w"
        }
      ) : i18n._(
        /*i18n*/
        {
          id: "UMGQOh"
        }
      ) })
    ] })
  ] });
};
const FeePlanDisplay = ({
  configuration,
  stripeCountry
}) => {
  if (!configuration) return null;
  return /* @__PURE__ */ jsxs("div", { className: paymentClasses.stripeInfo, children: [
    /* @__PURE__ */ jsx(Title, { mb: 10, order: 3, children: i18n._(
      /*i18n*/
      {
        id: "br3Y/y"
      }
    ) }),
    /* @__PURE__ */ jsxs(Text, { size: "sm", c: "dimmed", mb: "lg", children: [
      getConfig("VITE_APP_NAME", "Stratechna Events"),
      " charges platform fees to maintain and improve our services. These fees are automatically deducted from each transaction."
    ] }),
    /* @__PURE__ */ jsx(VatNotice, { stripeCountry }),
    /* @__PURE__ */ jsxs(Card, { variant: "lightGray", children: [
      /* @__PURE__ */ jsx(Title, { order: 4, children: configuration.name }),
      /* @__PURE__ */ jsxs(Grid, { children: [
        configuration.application_fees.percentage > 0 && /* @__PURE__ */ jsx(Grid.Col, { span: {
          base: 12,
          sm: 6
        }, children: /* @__PURE__ */ jsx(Group, { gap: "xs", wrap: "nowrap", children: /* @__PURE__ */ jsxs(Text, { size: "sm", children: [
          i18n._(
            /*i18n*/
            {
              id: "OpKMSn"
            }
          ),
          " ",
          /* @__PURE__ */ jsx(Text, { span: true, fw: 600, children: formatPercentage(configuration.application_fees.percentage) })
        ] }) }) }),
        configuration.application_fees.fixed > 0 && /* @__PURE__ */ jsx(Grid.Col, { span: {
          base: 12,
          sm: 6
        }, children: /* @__PURE__ */ jsx(Group, { gap: "xs", wrap: "nowrap", children: /* @__PURE__ */ jsxs(Text, { size: "sm", children: [
          i18n._(
            /*i18n*/
            {
              id: "YXhom6"
            }
          ),
          " ",
          /* @__PURE__ */ jsx(Text, { span: true, fw: 600, children: formatCurrency(configuration.application_fees.fixed, configuration.application_fees.currency || "USD") })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", mt: "md", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", align: "center", wrap: "nowrap", children: [
      /* @__PURE__ */ jsx(IconAlertCircle, { size: 14 }),
      /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
        /*i18n*/
        {
          id: "T4BMxU"
        }
      ) })
    ] }) })
  ] });
};
const HiEventsConnectStatus = ({
  account
}) => {
  var _a, _b, _c;
  const [fetchStripeDetails, setFetchStripeDetails] = useState(false);
  const [platformToSetup, setPlatformToSetup] = useState();
  const stripeAccountsQuery = useGetStripeConnectAccounts(account.id);
  const stripeDetailsQuery = useCreateOrGetStripeConnectDetails(account.id, fetchStripeDetails, platformToSetup);
  const stripeData = stripeAccountsQuery.data;
  const stripeDetails = stripeDetailsQuery.data;
  const error = stripeDetailsQuery.error;
  const isNewUser = stripeData && stripeData.stripe_connect_accounts.length === 0 && !stripeData.account.stripe_platform;
  const handleSetupStripe = (platform) => {
    setPlatformToSetup(platform);
    if (!stripeDetails) {
      setFetchStripeDetails(true);
      return;
    } else if (stripeDetails.connect_url) {
      if (typeof window !== "undefined") {
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "HiGkFu"
          }
        ));
        window.location.href = stripeDetails.connect_url;
      }
    } else {
      stripeAccountsQuery.refetch();
    }
  };
  useEffect(() => {
    if (fetchStripeDetails && !stripeDetailsQuery.isLoading) {
      setFetchStripeDetails(false);
      if (stripeDetails == null ? void 0 : stripeDetails.connect_url) {
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "HiGkFu"
          }
        ));
        window.location.href = stripeDetails.connect_url;
      } else if (stripeDetails) {
        if (stripeDetails.is_connect_setup_complete) {
          showSuccess(i18n._(
            /*i18n*/
            {
              id: "iN5Cz3"
            }
          ));
        }
        stripeAccountsQuery.refetch();
      }
    }
  }, [fetchStripeDetails, stripeDetailsQuery.isFetched, stripeDetails, stripeAccountsQuery]);
  if (((_a = error == null ? void 0 : error.response) == null ? void 0 : _a.status) === 403) {
    return /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(Group, { gap: "xs", mb: "md", children: [
        /* @__PURE__ */ jsx(ThemeIcon, { size: "lg", radius: "md", variant: "light", children: /* @__PURE__ */ jsx(IconAlertCircle, { size: 20 }) }),
        /* @__PURE__ */ jsx(Title, { order: 2, children: i18n._(
          /*i18n*/
          {
            id: "VTfZPy"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "md", children: (_c = (_b = error == null ? void 0 : error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message })
    ] });
  }
  if (!stripeData) {
    return /* @__PURE__ */ jsx(LoadingMask, {});
  }
  const caAccount = stripeData.stripe_connect_accounts.find((acc) => acc.platform === "ca");
  const ieAccount = stripeData.stripe_connect_accounts.find((acc) => acc.platform === "ie");
  const activePlatform2 = stripeData.account.stripe_platform;
  if (isNewUser || !caAccount && ieAccount) {
    const hasIrelandAccount = !!ieAccount;
    const isIrelandComplete = (ieAccount == null ? void 0 : ieAccount.is_setup_complete) === true;
    let content;
    if (isIrelandComplete) {
      content = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(Group, { gap: "xs", mb: "md", children: [
          /* @__PURE__ */ jsx(ThemeIcon, { size: "sm", variant: "light", radius: "xl", color: "green", children: /* @__PURE__ */ jsx(IconCheck, { size: 16 }) }),
          /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: /* @__PURE__ */ jsx("b", { children: i18n._(
            /*i18n*/
            {
              id: "/3017M"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "lg", children: i18n._(
          /*i18n*/
          {
            id: "vvO1I2"
          }
        ) }),
        /* @__PURE__ */ jsx(Group, { gap: "xs", children: /* @__PURE__ */ jsx(Anchor, { href: "https://dashboard.stripe.com/", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", wrap: "nowrap", children: [
          /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
            /*i18n*/
            {
              id: "N141o/"
            }
          ) }),
          /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
        ] }) }) })
      ] });
    } else if (hasIrelandAccount && !isIrelandComplete) {
      content = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "lg", children: i18n._(
          /*i18n*/
          {
            id: "QUg5y1"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "light", size: "sm", leftSection: /* @__PURE__ */ jsx(IconBrandStripe, { size: 20 }), onClick: () => handleSetupStripe("ie"), children: i18n._(
          /*i18n*/
          {
            id: "hg80P7"
          }
        ) }),
        /* @__PURE__ */ jsx(Group, { gap: "xs", mt: "md", children: /* @__PURE__ */ jsx(Anchor, { href: "https://stripe.com/connect", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
          /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
            /*i18n*/
            {
              id: "WTk/ke"
            }
          ) }),
          /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
        ] }) }) })
      ] });
    } else {
      content = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "lg", children: i18n._(
          /*i18n*/
          {
            id: "E1eze1"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { variant: "light", size: "sm", leftSection: /* @__PURE__ */ jsx(IconBrandStripe, { size: 20 }), onClick: () => handleSetupStripe((account == null ? void 0 : account.stripe_hi_events_primary_platform) || "ie"), children: i18n._(
          /*i18n*/
          {
            id: "UMGQOh"
          }
        ) }),
        /* @__PURE__ */ jsx(Group, { gap: "xs", mt: "md", children: /* @__PURE__ */ jsx(Anchor, { href: "https://stripe.com/connect", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
          /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
            /*i18n*/
            {
              id: "WTk/ke"
            }
          ) }),
          /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
        ] }) }) })
      ] });
    }
    return /* @__PURE__ */ jsxs("div", { className: paymentClasses.stripeInfo, children: [
      /* @__PURE__ */ jsx(Title, { mb: 10, order: 3, children: i18n._(
        /*i18n*/
        {
          id: "EyE8E6"
        }
      ) }),
      content
    ] });
  }
  const isMigrationComplete = (ieAccount == null ? void 0 : ieAccount.is_setup_complete) === true;
  const shouldShowCaAccount = (caAccount == null ? void 0 : caAccount.is_setup_complete) === true;
  return /* @__PURE__ */ jsxs("div", { className: paymentClasses.stripeInfo, children: [
    /* @__PURE__ */ jsx(Title, { mb: 10, order: 3, children: i18n._(
      /*i18n*/
      {
        id: "EyE8E6"
      }
    ) }),
    /* @__PURE__ */ jsx(MigrationBanner, { stripeData }),
    activePlatform2 === "ie" ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(PlatformPanel, { platform: "ie", account: ieAccount, isActive: true, onSetupStripe: () => handleSetupStripe("ie"), hideLabels: isMigrationComplete && !shouldShowCaAccount, isMigrationComplete }),
      shouldShowCaAccount && !isMigrationComplete && /* @__PURE__ */ jsx(PlatformPanel, { platform: "ca", account: caAccount, isActive: false, onSetupStripe: () => handleSetupStripe("ca"), hideLabels: false })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      shouldShowCaAccount && /* @__PURE__ */ jsx(PlatformPanel, { platform: "ca", account: caAccount, isActive: true, onSetupStripe: () => handleSetupStripe("ca"), isMigrationComplete }),
      shouldShowCaAccount && !isMigrationComplete && /* @__PURE__ */ jsx(PlatformPanel, { platform: "ie", account: ieAccount, isActive: false, onSetupStripe: () => handleSetupStripe("ie") }),
      !shouldShowCaAccount && /* @__PURE__ */ jsx(PlatformPanel, { platform: "ie", account: ieAccount, isActive: false, onSetupStripe: () => handleSetupStripe("ie"), hideLabels: true })
    ] }),
    shouldShowCaAccount && ieAccount && !isMigrationComplete && /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", mt: "md", children: i18n._(
      /*i18n*/
      {
        id: "2r6bAy"
      }
    ) })
  ] });
};
const OpenSourceConnectStatus = ({
  account
}) => {
  var _a, _b, _c;
  const [fetchStripeDetails, setFetchStripeDetails] = useState(false);
  const [isReturningFromStripe, setIsReturningFromStripe] = useState(false);
  const stripeDetailsQuery = useCreateOrGetStripeConnectDetails(
    account.id,
    !!(account == null ? void 0 : account.stripe_account_id) || fetchStripeDetails,
    void 0
    // No platform for open-source
  );
  const stripeDetails = stripeDetailsQuery.data;
  const error = stripeDetailsQuery.error;
  const handleSetupStripe = () => {
    if (!stripeDetails) {
      setFetchStripeDetails(true);
      return;
    } else {
      if (typeof window !== "undefined") {
        showSuccess(i18n._(
          /*i18n*/
          {
            id: "HiGkFu"
          }
        ));
        window.location.href = String(stripeDetails == null ? void 0 : stripeDetails.connect_url);
      }
    }
  };
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setIsReturningFromStripe(window.location.search.includes("is_return") || window.location.search.includes("is_refresh"));
  }, []);
  useEffect(() => {
    if (fetchStripeDetails && !stripeDetailsQuery.isLoading) {
      setFetchStripeDetails(false);
      showSuccess(i18n._(
        /*i18n*/
        {
          id: "HiGkFu"
        }
      ));
      window.location.href = String(stripeDetails == null ? void 0 : stripeDetails.connect_url);
    }
  }, [fetchStripeDetails, stripeDetailsQuery.isFetched]);
  if (((_a = error == null ? void 0 : error.response) == null ? void 0 : _a.status) === 403) {
    return /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(Group, { gap: "xs", mb: "md", children: [
        /* @__PURE__ */ jsx(ThemeIcon, { size: "lg", radius: "md", variant: "light", children: /* @__PURE__ */ jsx(IconAlertCircle, { size: 20 }) }),
        /* @__PURE__ */ jsx(Title, { order: 2, children: i18n._(
          /*i18n*/
          {
            id: "VTfZPy"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "md", children: (_c = (_b = error == null ? void 0 : error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: paymentClasses.stripeInfo, children: [
    /* @__PURE__ */ jsx(Title, { mb: 10, order: 3, children: i18n._(
      /*i18n*/
      {
        id: "EyE8E6"
      }
    ) }),
    (stripeDetails == null ? void 0 : stripeDetails.is_connect_setup_complete) ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Group, { gap: "xs", mb: "md", children: [
        /* @__PURE__ */ jsx(ThemeIcon, { size: "sm", variant: "light", radius: "xl", color: "green", children: /* @__PURE__ */ jsx(IconCheck, { size: 16 }) }),
        /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: /* @__PURE__ */ jsx("b", { children: i18n._(
          /*i18n*/
          {
            id: "/3017M"
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "lg", children: i18n._(
        /*i18n*/
        {
          id: "vvO1I2"
        }
      ) }),
      /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
        /* @__PURE__ */ jsx(Anchor, { href: "https://dashboard.stripe.com/", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", wrap: "nowrap", children: [
          /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
            /*i18n*/
            {
              id: "N141o/"
            }
          ) }),
          /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
        ] }) }),
        /* @__PURE__ */ jsx(Text, { span: true, c: "dimmed", children: "•" }),
        /* @__PURE__ */ jsx(Anchor, { href: "https://stripe.com/docs/connect", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
          /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
            /*i18n*/
            {
              id: "Xe2tSS"
            }
          ) }),
          /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
        ] }) })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Text, { size: "sm", c: "dimmed", mb: "lg", children: i18n._(
        /*i18n*/
        {
          id: "BZBYf3"
        }
      ) }),
      /* @__PURE__ */ jsxs(Group, { gap: "md", children: [
        /* @__PURE__ */ jsxs(Button, { variant: "light", size: "sm", leftSection: /* @__PURE__ */ jsx(IconBrandStripe, { size: 20 }), onClick: handleSetupStripe, children: [
          !isReturningFromStripe && !(account == null ? void 0 : account.stripe_account_id) && i18n._(
            /*i18n*/
            {
              id: "UMGQOh"
            }
          ),
          (isReturningFromStripe || (account == null ? void 0 : account.stripe_account_id)) && i18n._(
            /*i18n*/
            {
              id: "hg80P7"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
          /* @__PURE__ */ jsx(Anchor, { href: "https://stripe.com/connect", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
            /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
              /*i18n*/
              {
                id: "WTk/ke"
              }
            ) }),
            /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
          ] }) }),
          /* @__PURE__ */ jsx(Text, { span: true, c: "dimmed", children: "•" }),
          /* @__PURE__ */ jsx(Anchor, { href: "https://stripe.com/docs/connect", target: "_blank", size: "sm", children: /* @__PURE__ */ jsxs(Group, { gap: "xs", children: [
            /* @__PURE__ */ jsx(Text, { span: true, children: i18n._(
              /*i18n*/
              {
                id: "TvY/XA"
              }
            ) }),
            /* @__PURE__ */ jsx(IconExternalLink, { size: 14 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};
const ConnectStatus = ({
  account
}) => {
  if (isHiEvents()) {
    return /* @__PURE__ */ jsx(HiEventsConnectStatus, { account });
  } else {
    return /* @__PURE__ */ jsx(OpenSourceConnectStatus, { account });
  }
};
const PaymentSettings = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const accountQuery = useGetAccount();
  const stripeAccountsQuery = useGetStripeConnectAccounts(((_a = accountQuery.data) == null ? void 0 : _a.id) || 0, {
    enabled: !!((_b = accountQuery.data) == null ? void 0 : _b.id)
  });
  const vatSettingQuery = useGetAccountVatSetting(((_c = accountQuery.data) == null ? void 0 : _c.id) || 0, {
    enabled: !!((_d = accountQuery.data) == null ? void 0 : _d.id) && isHiEvents()
  });
  const [showVatModal, setShowVatModal] = useState(false);
  const [hasCheckedVatModal, setHasCheckedVatModal] = useState(false);
  const hasTrackedStripeConnection = useRef(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasTrackedStripeConnection.current) return;
    if (!stripeAccountsQuery.data) return;
    const urlParams = new URLSearchParams(window.location.search);
    const isReturn = urlParams.get("is_return") === "1";
    if (!isReturn) return;
    const completedAccount = stripeAccountsQuery.data.stripe_connect_accounts.find((acc) => acc.is_setup_complete);
    if (completedAccount) {
      hasTrackedStripeConnection.current = true;
      trackEvent(AnalyticsEvents.STRIPE_CONNECTED);
    }
  }, [stripeAccountsQuery.data]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasCheckedVatModal) return;
    if (!isHiEvents()) {
      setHasCheckedVatModal(true);
      return;
    }
    if (!accountQuery.data || !stripeAccountsQuery.data || vatSettingQuery.isLoading) return;
    const urlParams = new URLSearchParams(window.location.search);
    const isReturn = urlParams.get("is_return") === "1";
    if (!isReturn) {
      setHasCheckedVatModal(true);
      return;
    }
    const completedAccount = stripeAccountsQuery.data.stripe_connect_accounts.find((acc) => acc.is_setup_complete);
    if (!completedAccount) {
      setHasCheckedVatModal(true);
      return;
    }
    const vatInfo = getVatInfo(completedAccount.country);
    if (!vatInfo.isEU || vatInfo.isIreland) {
      setHasCheckedVatModal(true);
      return;
    }
    const existingSettings = vatSettingQuery.data;
    if (existingSettings && existingSettings.vat_registered !== null && existingSettings.vat_registered !== void 0) {
      setHasCheckedVatModal(true);
      return;
    }
    setShowVatModal(true);
    setHasCheckedVatModal(true);
  }, [accountQuery.data, stripeAccountsQuery.data, vatSettingQuery.data, vatSettingQuery.isLoading, hasCheckedVatModal]);
  const handleVatModalClose = () => {
    setShowVatModal(false);
    vatSettingQuery.refetch();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isHiEvents() && accountQuery.data && /* @__PURE__ */ jsx(VatSettingsModal, { account: accountQuery.data, opened: showVatModal, onClose: handleVatModalClose }),
    /* @__PURE__ */ jsx(HeadingCard, { heading: i18n._(
      /*i18n*/
      {
        id: "vcyz2L"
      }
    ), subHeading: i18n._(
      /*i18n*/
      {
        id: "2FzaR1"
      }
    ) }),
    isHiEvents() && stripeAccountsQuery.data && /* @__PURE__ */ jsx(MigrationNotice, { stripeData: stripeAccountsQuery.data }),
    /* @__PURE__ */ jsxs(Card, { className: classes$1.tabContent, children: [
      /* @__PURE__ */ jsx(LoadingMask, {}),
      accountQuery.data && /* @__PURE__ */ jsxs(Grid, { gutter: "xl", children: [
        /* @__PURE__ */ jsx(Grid.Col, { span: {
          base: 12,
          md: 6
        }, children: accountQuery.isFetched && /* @__PURE__ */ jsx(ConnectStatus, { account: accountQuery.data }) }),
        /* @__PURE__ */ jsx(Grid.Col, { span: {
          base: 12,
          md: 6
        }, children: ((_e = accountQuery.data) == null ? void 0 : _e.configuration) && /* @__PURE__ */ jsx(FeePlanDisplay, { configuration: accountQuery.data.configuration, stripeCountry: (_g = (_f = stripeAccountsQuery.data) == null ? void 0 : _f.stripe_connect_accounts.find((acc) => acc.is_setup_complete)) == null ? void 0 : _g.country }) }),
        isHiEvents() && /* @__PURE__ */ jsx(Grid.Col, { span: {
          base: 12
        }, children: accountQuery.data && stripeAccountsQuery.data && /* @__PURE__ */ jsx(VatSettings, { account: accountQuery.data, stripeCountry: (_h = stripeAccountsQuery.data.stripe_connect_accounts.find((acc) => acc.is_setup_complete)) == null ? void 0 : _h.country }) })
      ] })
    ] })
  ] });
};
export {
  PaymentSettings as default
};
