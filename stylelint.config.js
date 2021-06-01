module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "layer",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["font-named-instance"],
      },
    ],
  },
};
