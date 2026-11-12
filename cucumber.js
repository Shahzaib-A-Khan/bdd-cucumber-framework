module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['features/support/**/*.ts', 'features/step_definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    publishQuiet: true,
  },
};