import { build } from 'esbuild'

const b = () =>
  build({
    bundle: true,
    entryPoints: ['./src/index.tsx'],
    banner: {
      js: '#!/usr/bin/env node',
    },
    platform: 'node',
    outfile: '/dist/index.js',
    format: 'cjs',
    // For debug
    minify: false,
  })

Promise.all([b()])