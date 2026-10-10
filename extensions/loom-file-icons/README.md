# loom-file-icons

Loom 的默认文件图标主题，由两部分合成。

## 构成

| 部分 | 来源 | 说明 |
| --- | --- | --- |
| 文件图标 | `extensions/theme-seti`（`vs-seti`） | 逐键复制其 `file` / `fileExtensions` / `fileNames` / `languageIds` / `light` 映射与 `seti.woff` |
| 文件夹图标 | `extensions/theme-modern-icons`（`vscode-modern-icons`） | `folder.svg` / `folder-open.svg`，16×16 单色，经 `usesCurrentColor` 以前景色填充 |

上游的 `vs-seti-icon-theme.json` **不定义任何文件夹图标**（无 `folder` / `folderExpanded` / `rootFolder`），
因此文件夹图标必须由本主题补上；`fileIconThemeData.ts:279` 的 rootFolder 回落逻辑使根目录同样使用 `folder` 图标。

## 资源一致性

`scripts/verify-file-icons.mjs` 断言：

- 文件映射与 `theme-seti` 的 `vs-seti-icon-theme.json` 逐键相等；
- `fileicons/seti.woff` 与 `extensions/theme-seti/icons/seti.woff` 字节相等；
- 两个文件夹 SVG 与 `extensions/theme-modern-icons/fileicons/images/` 同名文件字节相等。

上游 Seti 更新后，若该脚本报出差异，按 `theme-seti` 的新内容重新合成本主题的映射段。

## 许可

见 [`media/NOTICE.md`](./media/NOTICE.md)。
