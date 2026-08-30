# Relay DSH 会话导入中心

面向 DeepSeek Harness 的中立会话导入入口。它只提供一个侧栏入口和类型化
Provider 插槽，Codex、Claude 等插件继续拥有各自的扫描与导入流程。

详见 [SPEC.md](./SPEC.md) 与[交付验收](./docs/spec/acceptance.md)。

已在官方 DSH `0.1.1-rc.2` 中同时安装 Codex、Claude Provider 验证：
[展开侧栏](./docs/images/session-import-wide-menu.jpg)与
[折叠侧栏](./docs/images/session-import-rail-menu.jpg)。
