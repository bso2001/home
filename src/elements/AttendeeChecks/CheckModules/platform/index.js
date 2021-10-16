import { Result } from "../helpers-and-data";
import { getDeviceInfo } from "lib/device";

export const IS_RECOMMENDED = {
  tablet: true,
  mobile: false,
  desktop: true,
  tv: false,
};

/**
 * @method testPlatform
 * @return {Object}
 */
export const testPlatform = () => {
  const { platform } = getDeviceInfo();
  if (!platform?.type) {
    return new Result(false, ["Your platform couldn't be identified."]);
  }
  const { type, vendor } = platform;
  let info = [type];
  if (vendor) {
    info.push(vendor);
  }
  if (!IS_RECOMMENDED[type]) {
    info = [
      ...info,
      `Looks like you're using a ${type}.`,
      `For the best experience we recommend using either ${Object.keys(IS_RECOMMENDED).filter(Boolean).join(" or ")}.`,
    ];
  }
  return new Result(true, info);
};
