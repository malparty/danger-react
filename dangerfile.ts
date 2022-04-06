import { message, danger } from 'danger';
import { codeCoverage, PluginOptions } from 'danger-plugin-code-coverage';

const modifiedMD = danger.git.modified_files.join('- ');
message('Changed Files in this PR: \n - ' + modifiedMD);

const defaultPluginOptions: PluginOptions[] = [
  {
    title: '# Coverage',
    ignoreCoveragePattern: ['.test.', '.snap'],
    coverageFilesPath: '.nyc_output/out.json', // The merged JSON coverage data
  },
];

codeCoverage(defaultPluginOptions);
