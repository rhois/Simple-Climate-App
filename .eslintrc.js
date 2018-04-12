module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "react/jsx-filename-extension" : 0,
      "react/forbid-prop-types": 0,
      "react/no-unused-prop-types": ['error', {
        customValidators: [],
        skipShapeProps: true,
      }],
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
    },
    "globals": {
      "fetch": true,
      "window": true,
      "document": true,
    }
};
