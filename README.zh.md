# Relay DSH 会话导入中心

> **现已支持 DSH `0.1.2-rc.1`，并保留对 `0.1.2-alpha.3` 的兼容。** 插件 `0.2.2` 已在两个版本上完成验证。[从 npm 安装](https://www.npmjs.com/package/relay-dsh-plugin-session-import) · [兼容性证据](https://github.com/yangbobo2021/Relay/tree/codex/relay-foundation/dsh-lab/dsh-0.1.2-rc.1-20260903)。

> **发布通道：** `latest` → `0.2.2`；`next` → `0.2.1-rc.1`。

```bash
npx @deepseek-ai/dsh@0.1.2-rc.1 plugin --profile web add relay-dsh-plugin-session-import@0.2.2 relay-dsh-plugin-codex@0.2.2
npx @deepseek-ai/dsh@0.1.2-rc.1 web
```

[![DSH 兼容版本](https://img.shields.io/badge/DSH-0.1.1--rc.2%20%7C%200.1.2--alpha.2%20%7C%200.1.2--alpha.3-2f7d68)](https://github.com/deepseek-ai/deepseek-harness)

[English](README.md) | 中文

面向 DeepSeek Harness 的中立会话导入入口。它只提供一个侧栏入口和类型化
Provider 插槽，Codex、Claude 等插件继续拥有各自的扫描与导入流程。

详见 [SPEC.md](./SPEC.md) 与[交付验收](./docs/spec/acceptance.md)。

已在官方 DSH `0.1.1-rc.2` 中同时安装 Codex、Claude Provider 验证：
[展开侧栏](./docs/images/session-import-wide-menu.jpg)与
[折叠侧栏](./docs/images/session-import-rail-menu.jpg)。
