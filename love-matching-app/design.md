# 项目目录结构和技术要点

## 目录结构 

love-matching-app/
├── backend/
│ ├── package.json
│ └── server.js
├── frontend/
│ ├── public/
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── src/
│ │ ├── App.css
│ │ ├── App.tsx
│ │ ├── Home.js
│ │ ├── HomePage/
│ │ │ ├── index.tsx
│ │ │ ├── Login.tsx
│ │ │ ├── Register.tsx
│ │ │ └── styles.css
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── reportWebVitals.js
│ │ └── setupTests.js
│ ├── .gitignore
│ ├── package.json
│ └── README.md
└── tsconfig.json

## 技术要点

### 前端
- **框架**: 使用 React 构建用户界面。
- **状态管理**: 使用 React 的 `useState` 和 `useEffect` 钩子管理组件状态和副作用。
- **样式**: 使用 CSS 文件进行样式定义，支持响应式设计。
- **构建工具**: 使用 Create React App 进行项目初始化和构建。
- **测试**: 使用 Jest 和 React Testing Library 进行单元测试。

### 后端
- **框架**: 使用 Express.js 构建 RESTful API。
- **中间件**: 使用 CORS 和 body-parser 处理跨域请求和解析 JSON 请求体。
- **端口**: 后端服务运行在 5000 端口。

### 其他
- **版本控制**: 使用 Git 进行版本管理，`.gitignore` 文件中包含了不需要跟踪的文件和目录。
- **项目结构**: 前后端分离，便于维护和扩展。