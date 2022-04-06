import { codeCoverage, PluginOptions } from 'danger-plugin-code-coverage';

const defaultPluginOptions: PluginOptions[] = [
  {
    title: '# Coverage',
    ignoreCoveragePattern: ['.test.', '.snap'],
    coverageFilesPath: '.nyc_output/out.json', // The merged JSON coverage data
  },
];

codeCoverage(defaultPluginOptions);
