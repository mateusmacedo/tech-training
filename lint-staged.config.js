module.exports = {
  '{libs,apps}/**/*.{js,ts,tsx}': [
    'nx affected --target lint --uncommitted --fix=true',
    'nx affected --target test --uncommitted --passWithNoTests',
    'nx format:write --uncommitted',
  ],
};
