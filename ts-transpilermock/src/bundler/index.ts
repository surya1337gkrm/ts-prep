//before doing this import, copy esbuild.wasm file from node_modules-esbuild-wasm folder and paste in public folder
import * as esbuild from 'esbuild-wasm';
//used to download npm packages directly from unpkg.com instead of npmjs bcoz of cors policy
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

let service: esbuild.Service;

const bundle = async (rawCode: string) => {
  if (!service) {
    service = await esbuild.startService({
      worker: true,
      /*(if we give direct path to wasmURL it will fetch the file from public folder
                or we can pass the unpkg url so that it can fetch the file from unpkg*/
      // wasmURL: '/esbuild.wasm',
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  }

  try {
    const result = await service.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
      jsxFactory:'_React.createElement',
      jsxFragment:'_React.Fragment'
    });
    return { code: result.outputFiles[0].text, err: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { code: '', err: err.message };
    } else {
      throw err;
    }
  }
};

export default bundle;
