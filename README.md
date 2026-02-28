# 中文歌词学习内容分析平台

一个用于韩国非母语学习者学习中文歌词的React应用。

## 功能特性

- ✅ 整句展示：清晰展示中文歌词，支持词级交互
- ✅ 词卡提示：鼠标悬停或点击词语查看详细释义和例句
- ✅ 学习分析表：展示教学语块，包括拼音和声调结构
- ✅ 语音朗读：使用Web Speech API实现整句和语块朗读

## 技术栈

- React 18
- TypeScript
- Vite
- TailwindCSS

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/
│   ├── AnalyzePage.tsx      # 主页面组件
│   ├── SentenceView.tsx     # 整句展示组件
│   ├── WordTooltip.tsx      # 词卡组件
│   ├── AnalysisTable.tsx    # 学习分析表组件
│   └── TTSButton.tsx        # 朗读按钮组件
├── data/
│   └── mockData.ts          # Mock数据
├── types.ts                 # TypeScript类型定义
├── App.tsx                  # 应用入口
├── main.tsx                 # 应用启动文件
└── index.css                # 全局样式
```

## 使用说明

1. 页面顶部显示整句中文歌词
2. 鼠标悬停（PC）或点击（移动端）词语可查看词卡
3. 词卡显示中文释义、韩语释义和例句
4. 学习分析表展示教学语块，点击朗读按钮可听取发音
5. 页面顶部有整句朗读按钮

## 环境变量配置

### 本地开发

1. 复制 `.env.example` 文件为 `.env`
2. 在 `.env` 文件中设置以下环境变量：

```env
VITE_OPENAI_API_KEY=your-openai-api-key-here
VITE_OPENAI_API_URL=https://api.openai.com/v1
```

3. 重启开发服务器：`npm run dev`

### Vercel + GitHub 部署（推荐）

#### 第一步：把代码推到 GitHub

确保项目已推送到你的 GitHub 仓库（你当前远程为 `yuuisohe-ui/test`）：

```bash
git add .
git commit -m "准备部署"
git push origin main
```

（若主分支叫 `master`，把 `main` 改成 `master`。）

#### 第二步：用 GitHub 登录并导入 Vercel

1. 打开 [vercel.com](https://vercel.com)，点击 **Sign Up** 或 **Log In**。
2. 选择 **Continue with GitHub**，按提示授权 Vercel 访问你的 GitHub。
3. 登录后点击 **Add New…** → **Project**。
4. 在 **Import Git Repository** 里找到并选择 `yuuisohe-ui/test`（或你放本项目的仓库），点击 **Import**。

#### 第三步：配置项目（一般不用改）

Vercel 会根据仓库里的 `vercel.json` 自动填好：

- **Framework Preset**: Vite  
- **Build Command**: `npm run build`  
- **Output Directory**: `dist`  
- **Install Command**: `npm install`  

直接点击 **Deploy** 即可。若已有配置且无误，无需修改。

#### 第四步：配置环境变量（使用 OpenAI 时必填）

在 Vercel 项目页：

1. 进入 **Settings** → **Environment Variables**。
2. 添加变量：
   - **Name**: `VITE_OPENAI_API_KEY`，**Value**: 你的 OpenAI API 密钥（Production / Preview 都勾选）。
   - **Name**: `VITE_OPENAI_API_URL`，**Value**: `https://api.openai.com/v1`（可选，不填会用默认）。
3. 保存后，在 **Deployments** 里对最新部署点 **⋯** → **Redeploy**，让新环境变量生效。

#### 之后：自动部署

以后每次执行 `git push origin main`（或你的主分支），Vercel 都会自动重新构建并部署。

## 后续开发

当前使用mock数据，后续可接入Opal API获取真实歌词数据。

