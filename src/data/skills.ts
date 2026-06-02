export interface ISkill {
  name: string;
  category: string;
  level: number;
}

export const skills: ISkill[] = [
  { name: 'Vue.js', category: '前端框架', level: 95 },
  { name: 'React', category: '前端框架', level: 85 },
  { name: 'TypeScript', category: '编程语言', level: 90 },
  { name: 'JavaScript', category: '编程语言', level: 95 },
  { name: 'Node.js', category: '后端技术', level: 80 },
  { name: 'Tailwind CSS', category: '样式框架', level: 90 },
  { name: 'Git', category: '工具', level: 85 },
  { name: 'Docker', category: '工具', level: 70 },
];
