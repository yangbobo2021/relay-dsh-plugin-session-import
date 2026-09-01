# Relay DSH Session Import

> **Now supports the latest DSH `0.1.2-alpha.3`.** Plugin `0.2.1` is verified on DSH `0.1.2-alpha.3`, `0.1.2-alpha.2`, and `0.1.1-rc.2`. [Install it and try the latest DSH](https://www.npmjs.com/package/relay-dsh-plugin-session-import) · [Compatibility details](docs/dsh-0.1.2-alpha.3.md).

```bash
npx @deepseek-ai/dsh@0.1.2-alpha.3 plugin --profile web add relay-dsh-plugin-session-import@0.2.1 relay-dsh-plugin-codex@0.2.1
npx @deepseek-ai/dsh@0.1.2-alpha.3 web
```

[![DSH compatibility](https://img.shields.io/badge/DSH-0.1.1--rc.2%20%7C%200.1.2--alpha.2%20%7C%200.1.2--alpha.3-2f7d68)](https://github.com/deepseek-ai/deepseek-harness)

English | [中文](README.zh.md)

Provider-neutral session import hub for DeepSeek Harness. It contributes one
sidebar action and a typed provider slot; import implementations stay in their
provider plugins.

See [SPEC.md](./SPEC.md) and [delivery acceptance](./docs/spec/acceptance.md).

Verified in official DSH `0.1.1-rc.2` with Codex and Claude providers:
[wide sidebar](./docs/images/session-import-wide-menu.jpg) and
[collapsed sidebar](./docs/images/session-import-rail-menu.jpg).
