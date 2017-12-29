module.exports = {
    "extends": "standard",
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        "indent": ["error", 4],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
};