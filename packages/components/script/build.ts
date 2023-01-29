import { spawn } from 'child_process';
import { series, src, dest } from 'gulp';
import { componentPath } from './utils';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';

const run = async (command: string) => {
  const [cmd, ...args] = command.split(' ');
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: componentPath, //执行命令的路径
      stdio: 'inherit', //输出共享给父进程
      shell: true
    });
    app.on('close', resolve);
  });
};
//处理样式
const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/dist/lib`))
    .pipe(dest(`${componentPath}/dist/es`));
};

const buildComponent = async () => {
  await run(`cd ${componentPath}`);
  run('pnpm run build');
};

export default series(
  async () => run(`rimraf ${componentPath}/dist`),
  async () => buildStyle(),
  async () => buildComponent()
);
