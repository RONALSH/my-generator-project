# 技术设计

## 技术栈
- Vue3 + TypeScript + Vite
- Tailwind CSS
- Vue Router（如果需要多页面）

## 项目结构
src/
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
  data/
    projects.ts
    skills.ts
  App.tsx
  main.tsx

## 数据管理
- 项目数据和技能数据存储在 TypeScript 文件中
- 使用数组存储，方便后续添加和修改
