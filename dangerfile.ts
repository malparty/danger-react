import { schedule, danger } from 'danger';
import { istanbulCoverage } from 'danger-plugin-istanbul-coverage';
import { codeCoverage, PluginOptions } from 'danger-plugin-code-coverage';

// MAYBE LOOK AT FILE PATH: RELATIVE? ABSOLUTE? WHERE IS THE APP?
const defaultPluginOptions: PluginOptions[] = [
  {
    title: '# Coverage',
    ignoreCoveragePattern: ['.test.', '.snap'],
    // coverageFilesPath: '.nyc_output/out.json',
    coverageFilesPath: './.nyc_output/out.json',
  },
];


codeCoverage(defaultPluginOptions);

schedule(
  istanbulCoverage({
    // Set a custom success message
    customSuccessMessage: 'Congrats, coverage is good',

    // Set a custom failure message
    customFailureMessage: 'Coverage is a little low, take a look',

    // How to sort the entries in the table
    entrySortMethod: 'alphabetically', // || "least-coverage" || "most-coverage" || "largest-file-size" ||"smallest-file-size" || "uncovered-lines"

    // Add a maximum number of entries to display
    numberOfEntries: 10,

    // The location of the istanbul coverage file.
    coveragePath: './.nyc_output/out.json', // The merged JSON coverage data
    // Alternatively, if you have multiple coverage summaries, you can merge them into one report
    // coveragePaths: ["./dir1/coverage-summary.json", "./dir2/coverage-summary.json"]
    // You can also specify the format, instead of letting it be inferred from the file name
    // coveragePath: { path: '/home/runner/work/danger-react/danger-react/coverage/merged/lcov.info', type: 'lcov' /* ||  "json-summary" */ },

    // Which set of files to summarise from the coverage file.
    reportFileSet: 'all', // || "modified" || "created" || "createdOrModified"

    // What to do when the PR doesn't meet the minimum code coverage threshold
    reportMode: 'message', // || "warn" || "fail"

    // Minimum coverage threshold percentages. Compared against the cumulative coverage of the reportFileSet.
    threshold: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  })
);
