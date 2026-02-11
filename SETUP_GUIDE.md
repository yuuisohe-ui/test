# 项目设置指南

## 重要信息

### 环境变量配置

项目需要以下环境变量才能正常运行：

#### 本地开发环境

创建 `.env` 文件（项目根目录）：

```env
# OpenAI / ChatGPT API 설정
VITE_OPENAI_API_KEY=你的API密钥
VITE_OPENAI_API_URL=https://api.openai.com/v1
```

#### Vercel 部署环境

在 Vercel Dashboard → Settings → Environment Variables 中添加：

- `VITE_OPENAI_API_KEY`: 你的 OpenAI API 密钥
- `VITE_OPENAI_API_URL`: `https://api.openai.com/v1` (可选)

### 启动开发服务器

```bash
npm install          # 首次运行或更新依赖后
npm run dev          # 启动开发服务器
```

访问地址：`http://localhost:5173`

### GitHub 仓库

- 仓库地址：https://github.com/yuuisohe-ui/test
- 所有代码已保存在 GitHub 上

### 重要文件

- `.env` - 环境变量（**不会上传到Git**，需要本地保存）
- `package.json` - 项目依赖配置
- `vite.config.ts` - Vite 构建配置

## 重启后恢复步骤

1. 克隆或拉取最新代码：
   ```bash
   git pull origin main
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 创建 `.env` 文件（如果不存在）：
   ```bash
   cp .env.example .env
   # 然后编辑 .env 文件，填入你的 API 密钥
   ```

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

## 注意事项

- `.env` 文件包含敏感信息，**不要**提交到 Git
- 如果 `.env` 文件丢失，需要重新创建并填入 API 密钥
- Cursor 的对话历史会自动保存，重启后可以继续之前的对话

