/**
 * @type {RegExp}
 */
export const RGX_URL = /^(https?:\/\/|mailto:|data:|tel:)/;

/**
 * @type {RegExp}
 */
export const RGX_COLOR_HEX = /^#[a-f0-9]{6}$/;

/**
 * @type {RegExp}
 */
export const RGX_FLOAT = /^([\d.]+)$/;

/**
 * @type {RegExp}
 */
export const RGX_INTEGER = /^(\d+)$/;

/**
 * @type {RegExp}
 * http://emailregex.com/
 */
export const RGX_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

/**
 * @type {RegExp}
 */
export const RGX_PHONE_NUMBER = /^\+?(?:[0-9] ?){6,14}[0-9]$/;

/**
 * Matches UUID v1 - v5 and `nil` UUID.
 * @type {RegExp}
 * @see https://stackoverflow.com/questions/136505/searching-for-uuids-in-text-with-regex
 */
export const RGX_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089AB][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * @type {RegExp}
 * starts with alpha / ends with alpha or digit
 * allows only lower case / no special chars except `-`
 */
export const RGX_SLUG = /^[a-z]([a-z0-9-]*[a-z0-9])?$/;

/**
 * @method isDefined
 * @param  {*} value
 * @return {Boolean}
 */
export const isDefined = (value) => typeof value !== "undefined";

/**
 * @method isValidNumber
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidNumber = (value) => typeof value === "number";

/**
 * @method isValidObject
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidObject = (value) => typeof value === "object" && !isValidArray(value) && value !== null;

/**
 * @method isValidInteger
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidInteger = (value) => {
  if (!isValidNumber(value)) {
    return false;
  }
  return RGX_INTEGER.test(value.toString());
};

/**
 * @method isValidFloat
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidFloat = (value) => {
  if (!isValidNumber(value)) {
    return false;
  }
  return RGX_FLOAT.test(value.toString());
};

/**
 * @method isValidBoolean
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidBoolean = (value) => value === true || value === false;

/**
 * @method isValidString
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidString = (value) => typeof value === "string";

/**
 * @method isValidAndNotEmptyString
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidAndNotEmptyString = (value) => isValidString(value) && value.trim().length > 0;

/**
 * @method isValidArray
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidArray = (value) => Array.isArray(value);

/**
 * @method isValidJSON
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidJSON = (value) =>
  isValidArray(value) ||
  isValidObject(value) ||
  isValidAndNotEmptyString(value) ||
  isValidNumber(value) ||
  value === null;

/**
 * @method isValidEmail
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidEmail = (value) => {
  if (!isValidString(value)) {
    return false;
  }
  return RGX_EMAIL.test(value);
};

/**
 * @method isValidFunction
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidFunction = (value) => typeof value === "function";

/**
 * @method isValidURL
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidURL = (value) => {
  if (!isValidString(value)) {
    return false;
  }
  return RGX_URL.test(value);
};

/**
 * @method isValidHexColor
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidHexColor = (value) => {
  if (!isValidString(value)) {
    return false;
  }
  return RGX_COLOR_HEX.test(value);
};

/**
 * @method isValidUUID
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidUUID = (value) => {
  if (!isValidString(value)) {
    return false;
  }
  return RGX_UUID.test(value);
};

/**
 * @method isNull
 * @param  {*} value
 * @return {Boolean}
 */
export const isNull = (value) => {
  return value === null;
};

/**
 * @method isEmptyObject
 * @param  {*} value
 * @return {Boolean}
 */
export const isEmptyObject = (value) => {
  return isValidObject(value) && !isNull(value) && value.constructor === Object && Object.keys(value).length === 0;
};

/**
 * @method isValidDate
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidDate = (value) => {
  return value instanceof Date && !isNaN(value);
};

/**
 * @method isValidPhoneNumber
 * Accepts all international and local phone numbers,
 * but without any special characters,
 * except `+` and ` `.
 * @param  {*} value
 * @return {Boolean}
 */
export const isValidPhoneNumber = (value) => {
  if (!isValidString(value)) {
    return false;
  }

  // Remove braces, dots, hyphens.
  const clean = value.replace(/[().-]/g, "");

  return RGX_PHONE_NUMBER.test(clean);
};

/**
 * @method isJsonString
 * @param  {string} str
 * @return {Boolean}
 */
export const isJsonString = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
