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

## 后续开发

当前使用mock数据，后续可接入Opal API获取真实歌词数据。

