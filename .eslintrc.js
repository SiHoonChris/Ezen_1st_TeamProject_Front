module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:vue/essential",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-tabs": ["error", { "allowIndentationTabs": true }],
        "vue/no-multiple-template-root": "off",
        "vue/multi-word-component-names": ["error", {
            "ignores": []
          }]
    }
};
