import { PASS, Result } from "../helpers-and-data";
import { getDeviceInfo } from "lib/device";

const cookiesHelpLink = () => {
  const { browser } = getDeviceInfo();
  const base = "https://whatismybrowser.com/guides/how-to-enable-cookies";
  switch (browser.name) {
    case "Chrome": {
      return `${base}/chrome`;
    }
    case "Safari": {
      return `${base}/safari`;
    }
    case "Firefox": {
      return `${base}/firefox`;
    }
    default:
      return base;
  }
};

/**
 * @method testCookies
 * @return {Promise}
 */
export const testCookies = () => {
	//debugger;
  return new Promise((resolve) => {
    const enableCookiesFail = new Result(false, [
      `Please visit ${cookiesHelpLink()} for information on how to enable cookies on your browser.`,
    ]);
    const { cookieEnabled } = navigator;
    document.cookie = "cookietest=1";
    const isCookie = document.cookie.includes("cookietest=");
    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"; // delete cookietest=1
    if (!cookieEnabled || !isCookie) {
      resolve(enableCookiesFail);
    }
    const handleReceiveMessage = (event) => {
      window.removeEventListener("message", handleReceiveMessage);
      if (event.data === "MM:3PCsupported") {
        resolve(PASS);
      } else if (event.data === "MM:3PCunsupported") {
        resolve(enableCookiesFail);
      }
      return new Result(false, ["Internal error: Incorrect data returned"]);
    };
    window.addEventListener("message", handleReceiveMessage);
  });
};
