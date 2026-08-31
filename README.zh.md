# Relay DSH 会话导入中心

> 未发布适配：本分支已迁移到 DSH `0.1.2-alpha.2`。npm 版本和标签尚未更新；下方已发布版本的安装示例不代表新版兼容性。见[适配说明](docs/dsh-0.1.2-alpha.2.md)。

面向 DeepSeek Harness 的中立会话导入入口。它只提供一个侧栏入口和类型化
Provider 插槽，Codex、Claude 等插件继续拥有各自的扫描与导入流程。

详见 [SPEC.md](./SPEC.md) 与[交付验收](./docs/spec/acceptance.md)。

已在官方 DSH `0.1.1-rc.2` 中同时安装 Codex、Claude Provider 验证：
[展开侧栏](./docs/images/session-import-wide-menu.jpg)与
[折叠侧栏](./docs/images/session-import-rail-menu.jpg)。
