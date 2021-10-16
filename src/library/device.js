// import { isValidAndNotEmptyString } from "@thebuzzcast/utils";
import { isValidAndNotEmptyString } from './validators'
import Bowser from "bowser";

/**
 * @method getDeviceInfo
 * @param  {String} ua
 * @return {Object}
 */
export const getDeviceInfo = (ua = window.navigator.userAgent) => Bowser.parse(ua);

/**
 * @method matchesBrowserName
 * @param  {String} ua
 * @param  {String} value
 * @return {Boolean}
 */
const matchesBrowserName = (ua, value) => {
  const browserInfo = getDeviceInfo(ua);
  const {
    browser: { name },
  } = browserInfo;
  if (!isValidAndNotEmptyString(name)) {
    return false;
  }
  return browserInfo.browser.name.match(value);
};

/**
 * @method matchesPlatformType
 * @param  {String} ua
 * @param  {String} value
 * @return {Boolean}
 */
const matchesPlatformType = (ua, value) => {
  const browserInfo = getDeviceInfo(ua);
  const {
    platform: { type },
  } = browserInfo;
  if (!isValidAndNotEmptyString(type)) {
    return false;
  }
  return type.match(value);
};

/**
 * @method matchesOSName
 * @param  {String} ua
 * @param  {String} value
 * @return {Boolean}
 */
const matchesOSName = (ua, value) => {
  const browserInfo = getDeviceInfo(ua);
  const {
    os: { name },
  } = browserInfo;

  if (!isValidAndNotEmptyString(name)) {
    return false;
  }

  return name.match(value);
};

/**
 * @method matchesEngineName
 * @param  {String} ua
 * @param  {String} value
 * @return {Boolean}
 */
const matchesEngineName = (ua, value) => {
  const browserInfo = getDeviceInfo(ua);
  const {
    engine: { name },
  } = browserInfo;
  if (!isValidAndNotEmptyString(name)) {
    return false;
  }
  return name.match(value);
};

export const isChromeBrowser = (ua = window.navigator.userAgent) => matchesBrowserName(ua, "Chrome");

export const isFirefoxBrowser = (ua = window.navigator.userAgent) => matchesBrowserName(ua, "Firefox");

export const isEdgeBrowser = (ua = window.navigator.userAgent) => matchesBrowserName(ua, "Edge");

export const isSafariBrowser = (ua = window.navigator.userAgent) => {
  return !isChromeBrowser(ua) && !isFirefoxBrowser(ua) && !isEdgeBrowser(ua) && matchesBrowserName(ua, "Safari");
};

export const isDesktop = (ua = window.navigator.userAgent) => matchesPlatformType(ua, "desktop");

export const isPhone = (ua = window.navigator.userAgent) => matchesPlatformType(ua, "mobile");

export const isTablet = (ua = window.navigator.userAgent) => matchesPlatformType(ua, "tablet");

export const isMobile = (ua = window.navigator.userAgent) => matchesPlatformType(ua, /(phone|tablet|mobile)/);

export const isiPad = (ua = window.navigator.userAgent) => isMobile(ua) && isSafariBrowser(ua);
export const isiPhone = (ua = window.navigator.userAgent) => isPhone(ua) && isSafariBrowser(ua);
export const isMacOS = (ua = window.navigator.userAgent) => matchesOSName(ua, /macOS/i);

export const isiOS = (ua = window.navigator.userAgent) => matchesOSName(ua, "iOS");

export const isWebkit = (ua = window.navigator.userAgent) => matchesEngineName(ua, /WebKit/i);

export const isWebkitiOS = (ua = window.navigator.userAgent) => isiOS(ua) && isWebkit(ua);

export const isAndroid = (ua = window.navigator.userAgent) => matchesOSName(ua, /Android/i);
