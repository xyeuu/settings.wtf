module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./dist/settings.wtf",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
