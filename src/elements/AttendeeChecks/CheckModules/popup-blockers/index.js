import { PASS, Result } from "../helpers-and-data";
import { isNull, isDefined } from "@thebuzzcast/utils";
import { getDeviceInfo } from "lib/device";
const POPUP_BLOCKER_DELAY = 3000;

const popupsHelpLink = () => {
  const { browser, platform } = getDeviceInfo();
  const key = `${browser.name} ${platform.type}`;
  switch (key) {
    case "Chrome desktop":
      return "https://support.google.com/chrome/answer/95472";
    case "Safari desktop":
      return "https://support.apple.com/guide/safari/block-pop-ups-sfri40696/mac";
    default:
      return "https://wikihow.com/Allow-Pop–ups";
  }
};

/**
 * @method testPopupBlockers
 * @return {Promise}
 */
export const testPopupBlockers = () => {
  return new Promise((resolve) => {
    let isPopUpsBlocked = false;
    const popupWindow = window.open("", "", "width=1,height=1");
    const handleFail = () => {
      resolve(
        new Result(false, [
          `Please visit ${popupsHelpLink()} for information on how to enable pop-ups on your browser.`,
        ])
      );
    };

    const isPopupWindow = (popupWindow) => !isNull(popupWindow) && isDefined(popupWindow);
    if (!isPopupWindow(popupWindow)) return handleFail();
    try {
      popupWindow.focus();
      setTimeout(() => {
        isPopUpsBlocked =
          !isPopupWindow(popupWindow) ||
          !isDefined(popupWindow.closed) ||
          !isDefined(popupWindow.innerHeight) ||
          popupWindow.innerHeight === 0;

        popupWindow.close();
        if (isPopUpsBlocked) {
          handleFail();
        } else {
          return resolve(PASS);
        }
      }, POPUP_BLOCKER_DELAY);
    } catch (error) {
      handleFail();
    }
  });
};
