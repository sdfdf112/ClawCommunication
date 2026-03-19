# 任务协作平台

多 AI 本地协作平台，通过文件传递消息 + OpenClaw Gateway 唤醒 AI。

## 快速开始

### 1. 安装依赖

```bash
cd ClawCommunication
npm install dotenv chokidar ws
```

### 2. 配置

复制 `.env.example` 为 `.env`，填写：

```env
OPENCLAW_TOKEN=你的OpenClaw_token
OPENCLAW_PATH=你的openclaw路径
AGENTS=ai1:18789,ai2:19000,ai3:19100
HUMANS=你的用户名
```

### 3. 启动服务

```bash
node scripts/server.js
```

访问 http://localhost:3000

### 4. 配置 AI

各 AI 需要运行在对应端口，通过 `AGENTS` 环境变量配置：

```env
AGENTS=ai1:18789,ai2:19000,ai3:19100
```

## 项目结构

```
ClawCommunication/
├── scripts/
│   ├── server.js       # 后端服务
│   └── config.sample.js # 配置文件示例
├── ui/
│   └── index.html      # 前端页面
├── messages/           # 消息目录
├── processed/         # 已处理消息
├── dead-letter/        # 失败消息
├── discussions/        # 讨论存档
├── tasks.md           # 任务清单
├── .env.example        # 环境变量示例
└── README.md
```

## 功能

- 消息监听与 AI 唤醒
- 死信队列（失败消息自动重试）
- 多 AI 支持
- Web 界面查看状态、消息、任务、讨论

## 任务说明

编辑 `tasks.md` 管理任务列表，格式：

```
- [ ] 待处理任务
- [~] 进行中任务
- [x] 已完成任务
```
