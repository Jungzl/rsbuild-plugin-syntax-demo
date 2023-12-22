import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax';

export default defineConfig({
  plugins: [pluginVue(),pluginCheckSyntax({
    targets: ['chrome >= 69','not op_mini all'],
    ecmaVersion: 2015 ,
  })],
});
