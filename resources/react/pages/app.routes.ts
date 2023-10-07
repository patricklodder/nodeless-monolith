export const APP_ROUTES = {
  LOGIN: "/app/login",
  SIGNUP: "/app/signup",
  FORGOT_PASSWORD: "/app/forgot-password",
  HOME: "/",
  DASHBOARD: "/app/dashboard",
  STORES: "/app/stores",
  STORES_INDEX: "/app/stores/dashboard",
  STORES_DASHBOARD: "/app/stores/dashboard/:storeId",
  STORES_INVOICES: "/app/stores/invoices/:storeId",
  STORES_SETTINGS: "/app/stores/settings/:storeId",
  STORES_WEBHOOKS: "/app/stores/webhooks/:storeId",
  STORES_CHECKOUT_APPEARANCE: "/app/stores/appearance/:storeId",
  RESET_PASSWORD: "/app/password-reset/:token",
  ERROR: "/app/404",
  CHECKOUT_INVOICE_DETAILS: "/checkout/:invoiceId",
  DONATIONS: "/app/donation-page",
  DONATION_PAGE_INDEX: "/app/donation-page/dashboard",
  DONATION_PAGE_DASHBOARD: "/app/donation-page/dashboard/:donationPageId/:slug",
  DONATION_PAGE_SETTINGS: "/app/donation-page/settings/:donationPageId/:slug",
  DONATION_PAGE_APPEARANCE:
    "/app/donation-page/appearance/:donationPageId/:slug",
  DONATION_PAGE_WEBHOOKS: "/app/donation-page/webhooks/:donationPageId/:slug",
  PUBLIC_DONATION_PAGE: "/donate/:slug",

  PAYWALL_DASHBOARD: "/app/paywall/dashboard",
  PAYWALL_PAYWALLS: "/app/paywall/paywalls",
  PAYWALL_REQUESTS: "/app/paywall/requests",

  PAYWALL_SINGLE_PAYWALL_DASHBOARD: "/app/paywall/:paywallId/dashboard",
  PAYWALL_SINGLE_PAYWALL_WEBHOOKS: "/app/paywall/:paywallId/webhooks",
  PAYWALL_SINGLE_PAYWALL_SETTINGS: "/app/paywall/:paywallId/settings",
  PAYWALL_SINGLE_PAYWALL_REQUESTS: "/app/paywall/:paywallId/requests",

  PUBLIC_PAYWALL: "/pw/:paywallId",

  WITHDRAW: "/app/withdraw",
  WITHDRAW_DASHBOARD: "/app/withdraw/dashboard",
  WITHDRAW_SETTINGS: "/app/withdraw/settings",
  PAYWALL: "/app/paywall",
  NODELESS_ADDRESS: "/app/nodeless-address",
  NODELESS_ADDRESS_INDEX: "/app/nodeless-address/dashboard",
  NODELESS_ADDRESS_DASHBOARD: "/app/nodeless-address/dashboard/:addressId",
  NODELESS_ADDRESS_SETTINGS: "/app/nodeless-address/settings/:addressId",
  NODELESS_ADDRESS_WEBHOOKS: "/app/nodeless-address/webhooks/:addressId",
  NODELESS_ADDRESS_MESSAGES: "/app/nodeless-address/messages/:addressId",
  PROFILE: "/app/profile",
  PROFILE_ACCOUNT: "/app/profile/account",
  PROFILE_TWO_FACTOR: "/app/profile/2fa",
  PROFILE_NOTIFICATIONS: "/app/profile/notifications",
  PROFILE_API_KEYS: "/app/profile/api-keys",
  PROFILE_REFERRALS: "/app/profile/referrals",
  GATED_INBOX_REQUEST: "/gated-inbox-request/:requestId",
  TRANSACTIONS: "/app/transactions",
  WITHDRAWAL_TRANSACTIONS: "/app/transactions/withdrawal",
  DONATION_TRANSACTIONS: "/app/transactions/donations",
  NODELESS_ADDRESS_TRANSACTIONS: "/app/transactions/nodeless-address",
  STORE_TRANSACTIONS: "/app/transactions/store",

  PAYWALL_REQUEST_TRANSACTIONS: "/app/transactions/paywall-requests",
  REFERRAL_FEES_TRANSACTIONS: "/app/transactions/referral-fees",
  LIGHTNING_ADDRESS_PAYMENT_TRANSACTIONS:
    "/app/transactions/lightning-address-payment",

  PRIVACY_POLICY: "/app/privacy-policy",
  VULNERABILITY_POLICY: "/app/vulnerability-policy",
  TERMS_AND_CONDITIONS: "/app/terms-and-conditions",
  API_DOCS: "https://nodeless.io/api-docs",
  SUPPORT_PORTAL: "https://support.nodeless.io",
};
