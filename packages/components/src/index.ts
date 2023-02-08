// import { default as sbButton } from './sbButton';

// import { default as sbLink } from './sbLink';

// import { default as sbModal } from './sbModal';

// import { default as sbProgress } from './sbProgress';

// import { default as sbSpin } from './sbSpin';

// import { default as sbResult } from './sbResult';

// import { default as sbIcon } from './sbIcon';

// import { default as sbCol } from './sbCol';

// import { default as sbRow } from './sbRow';

// import { default as sbBread } from './sbBread';

// import { default as sbBreadItem } from './sbBreadItem';

// import { default as sbUpload } from './sbUpload';

// import { default as sbDropDown } from './sbDropDown';

// import { default as sbDropDownMenu } from './sbDropDownMenu';

// import { default as sbDropDownItem } from './sbDropDownItem';

// import { default as sbMenu } from './sbMenu';

// 批量注册

// import type { App } from 'vue';
// const modules = import.meta.glob('./**/index.ts', { eager: true });
// interface component {
//   __file: string;
//   __hmrId: string;
//   install: Function;
//   render: Function;
// }
// type a = Record<string, component>;
// const exModules: a = {};

// export default {
//   install: (app: App) => {
//     Object.entries(modules).forEach((module: any[]) => {
//       const name = module[0].split('/')[1];
//       exModules[name] = module[1].default;
//       app.use(module[1].default);
//     });
//   },
//   ...exModules
// };
