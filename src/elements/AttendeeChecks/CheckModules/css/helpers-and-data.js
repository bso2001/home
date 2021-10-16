import allCssPropertiesWithValues from "./all-css-properties-with-values.json";

/**
 * @method combinePropertyAndValue
 *  @param {string} property
 *  @param {string} value
 *  @return {string}
 */
const combinePropertyAndValue = (property, value) => {
  return `${property} - ${value}`;
};

/**
 *  @return {Array}
 */
const CSS_VALUES_WHITELIST = [
  ["display", "run-in"],
  ["animation-timing-function", "step-start"],
  ["animation-timing-function", "step-end"],
  ["word-break", "keep-all"],
  ["transition-timing-function", "step-start"],
  ["transition-timing-function", "step-end"],
  ["outline-color", "invert"],
  ["list-style", "georgian"],
  ["list-style", "outside"],
  ["list-style", 'url("foo.png")'],
  ["grid", "auto-flow / 1fr 1fr 1fr"],
  ["grid", "40px 4em 40px auto-flow / 60px 60px"],
  ["grid-auto-flow", "row dense"],
  ["content", "example-counter 0"],
  ["cursor", 'url("foo.png")'],
  ["font", "caption"],
  ["font", "icon"],
  ["font", "menu"],
  ["font", "message-box"],
  ["font", "small-caption"],
  ["font", "status-bar"],
  ["grid", "none"],
  ["grid", '"a a a" "b c c" "b c c"'],
  ["grid", "40px 4em 40px / 60px 60px"],
  ["grid", "60px 60px / 40px 4em 40px"],
  ["grid", "40px 4em 40px / auto-flow 60px 60px"],
  ["grid-area", "foo"],
  ["grid-column", "1"],
  ["grid-column-gap", "100px"],
  ["grid-gap", "1ch"],
  ["grid-gap", "1em"],
  ["grid-row-gap", "100px"],
  ["grid-template", "none"],
  ["list-style-type", "upper-greek"],
  ["outline", "thick double black"],
  ["text-overflow", '"-"'],
  ["transform-origin", "2px"],
  ["transform-origin", "center bottom"],
  ["all", "initial"],
  ["all", "inherit"],
  ["all", "unset"],
  ["quotes", '"«" "»" "‹" "›"'],
  ["text-decoration", "underline overline rgb(255, 48, 40)"],
  ["list-style-image", 'url("foo.png")'],
  ["font-variant", "normal"],
  ["font-variant", "small-caps"],
  ["font-variant", "initial"],
  ["font-variant", "inherit"],
  ["content", "prefix"],
  ["content", 'url("foo.png")'],
  ["background-image", 'url("foo.png")'],
  ["border-image", "initial"],
  ["border-image", "inherit"],
  ["border-image-source", 'url("foo.png")'],
  ["content", '"prefix"'],
].map(([property, value]) => combinePropertyAndValue(property, value));

/**
 *  @return {Array}
 */
const CSS_PROPERTIES_WHITELIST = [
  "tab-size",
  "hanging-punctuation",
  "box-decoration-break",
  "font-size-adjust",
  "text-justify",
  "user-select",
  "scroll-behavior",
  "text-align-last",
  "hyphens",
  "backface-visibility",
];

/**
 *  @return {Object}
 * the following CSS properties and values are transformed in testing
 * box-shadow: 1px 1px 1px 1px black; → box-shadow: black 1px 1px 1px 1px;
 * text-shadow: 1px 1px 1px 1px black; → text-shadow: black 1px 1px 1px 1px;
 * flex: auto; → flex: 1 1 auto;
 * flex: none; → flex: 0 0 auto;
 * filter: drop-shadow(16px 16px 20px blue); → filter: drop-shadow(blue 16px 16px 20px);
 * transform-origin: right bottom 2px; → transform-origin: bottom right 2px;
 * transform-origin: 2px; → transform-origin: 2px center;
 */
const propertiesInfo = allCssPropertiesWithValues;

export { propertiesInfo, combinePropertyAndValue, CSS_VALUES_WHITELIST, CSS_PROPERTIES_WHITELIST };
