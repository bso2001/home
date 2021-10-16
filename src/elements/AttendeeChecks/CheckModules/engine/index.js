import { Result } from "../helpers-and-data";
import { getDeviceInfo } from "lib/device";

export const SUPPORTED = {
  EdgeHTML: null,
  Blink: null,
  Trident: null,
  Presto: null,
  Gecko: null,
  WebKit: null,
};

/**
 * @method testEngine
 * @return {Object}
 */
export const testEngine = () => {
  const { engine } = getDeviceInfo();
  if (!engine?.name) {
    return new Result(false, ["Your engine couldn't be identified."]);
  }
  const { name, version } = engine;
  const info = [name];
  if (version) {
    info.push(version);
    const recommended = SUPPORTED[name];
    if (recommended) {
      if (Number(version) < recommended) {
        info.push(`Please consider upgrading to: ${recommended}`);
      }
    }
  }
  return new Result(true, info);
};
