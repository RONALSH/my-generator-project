export interface IProject {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: '电商管理系统',
    description: '基于 Vue3 + Element Plus 开发的电商后台管理系统，支持商品管理、订单管理、用户管理等功能。',
    techStack: ['Vue3', 'Element Plus', 'TypeScript', 'Pinia'],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20ecommerce%20dashboard%20dark%20theme&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 2,
    name: '数据可视化平台',
    description: '使用 ECharts 构建的数据可视化平台，支持多种图表类型和实时数据展示。',
    techStack: ['Vue3', 'ECharts', 'TypeScript', 'Tailwind CSS'],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=data%20visualization%20dashboard%20charts%20dark%20theme&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 3,
    name: '在线协作工具',
    description: '支持多人实时协作的在线文档编辑工具，具有富文本编辑和版本控制功能。',
    techStack: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=online%20collaboration%20tool%20interface%20dark%20theme&image_size=landscape_16_9',
    link: '#'
  },
  {
    id: 4,
    name: '移动端 App',
    description: '跨平台移动应用，提供便捷的生活服务和社交功能。',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=mobile%20app%20interface%20design%20dark%20theme&image_size=landscape_16_9',
    link: '#'
  },
];
