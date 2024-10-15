import path from 'path';
import webpack from 'webpack';
import {BuildMode, BuildPaths, BuildPlatform, buildWebpack, BuildOptions} from '@packages/build-config';
// @ts-ignore
import packageJson from './package.json';

interface EnvVariables {
  mode?: BuildMode;
  port: number;	
  analyser?: boolean;
  platform?: BuildPlatform; 
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    favicon: path.resolve(__dirname, 'src/assets', 'app-image.svg'),
    public: path.resolve(__dirname, 'public'),
  }

  const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';
  const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002';

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyser: env.analyser,
    platform: env.platform ?? 'desktop',
  });	

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',
    remotes: {
      shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
      admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
      },
      'react-router-dom': {
        eager: true,
      },
      'react-dom': {
        eager: true,
      },
    },
  }));

  return config;
} ;


