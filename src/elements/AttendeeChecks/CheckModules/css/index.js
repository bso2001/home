import {
  propertiesInfo,
  combinePropertyAndValue,
  CSS_PROPERTIES_WHITELIST,
  CSS_VALUES_WHITELIST,
} from "./helpers-and-data";
import { isDefined } from "@thebuzzcast/utils";
import { Result } from "../helpers-and-data";

/**
 * @method testCss
 * @return {Object}
 */
export const testCss = () => {
  const { style } = document.createElement("div");
  const info = [];
  const properties = Object.keys(propertiesInfo);
  let isPassed = true;
  const whitelist = [];

  for (let property of properties) {
    const { values } = propertiesInfo[property];
    if (isDefined(style[property])) {
      values.forEach((value) => {
        style[property] = value;
        if (style[property] !== value) {
          let propertyAndValue = combinePropertyAndValue(property, value);
          if (!CSS_VALUES_WHITELIST.includes(propertyAndValue)) {
            isPassed = false;
            propertyAndValue = `CRITICAL ${propertyAndValue}`;
            whitelist.push([property, value]);
          }
          info.push(propertyAndValue);
        }
      });
    } else {
      if (!CSS_PROPERTIES_WHITELIST.includes(property)) {
        isPassed = false;
        property = `CRITICAL ${property}`;
      }
      info.push(property);
    }
  }

  if (isPassed) {
    info.unshift("The following non-critical CSS properties and/or values were not found");
    return new Result(true, info);
  }
  info.unshift("The following CSS properties and/or values were not found");
  return new Result(false, info);
};
