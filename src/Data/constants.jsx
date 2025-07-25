export const REMOVE_ORDER_PRODUCT = "REMOVE_ORDER_PRODUCT";
export const CLEAR_ORDER_PRODUCTS = "CLEAR_ORDER_PRODUCTS";
export const WEBSITE_NAME = "Great's Store";
export const CONTACT_EMAILS = {
  support: `support@${WEBSITE_NAME.toLowerCase()}.com`,
  sales: `sales@${WEBSITE_NAME.toLowerCase()}.com`,
  gmail: `${WEBSITE_NAME.toLowerCase()}@gmail.com`,
};
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
