# Relay DSH Session Import

> Unreleased adaptation: this branch targets DSH `0.1.2-alpha.2`. npm versions and tags are unchanged; installation examples for published releases do not establish compatibility with the new DSH. See [compatibility notes](docs/dsh-0.1.2-alpha.2.md).

Provider-neutral session import hub for DeepSeek Harness. It contributes one
sidebar action and a typed provider slot; import implementations stay in their
provider plugins.

See [SPEC.md](./SPEC.md) and [delivery acceptance](./docs/spec/acceptance.md).

Verified in official DSH `0.1.1-rc.2` with Codex and Claude providers:
[wide sidebar](./docs/images/session-import-wide-menu.jpg) and
[collapsed sidebar](./docs/images/session-import-rail-menu.jpg).
