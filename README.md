# ACSSUlm 乌尔姆学联网站

乌尔姆中国学生学者联谊会（ACSSUlm）的官方网站，中 / 英 / 德三语。

- 网址：https://acssulm.github.io（组织名不同时，网址里的 `acssulm` 换成组织名）
- 技术：Hugo 生成静态网页，GitHub Pages 免费托管，Pages CMS 当后台
- 费用：全部免费

**日常维护不需要写代码。** 发活动、改通知、改联系方式都在后台用表单完成，见第 2–3 节。

---

## 1. 第一次上线（只做一次）

1. **建组织**：登录 GitHub，点右上角头像，进 **Your organizations**，选 **New organization**，再选 **Free**。组织名建议用 `acssulm`，至少加 2 个 Owner。
2. **建仓库**：在组织页面点 **New repository**：
   - 仓库名必须是 `组织名.github.io`，例如 `acssulm.github.io`
   - 选 **Public**（免费账号只能从公开仓库发布网站）
   - 其他选项不用勾，点 **Create repository**
3. **上传代码**：在新仓库页面点 **uploading an existing file**，把解压后文件夹里的**所有内容**拖进去，点 **Commit changes**。
   - ⚠️ `.github` 文件夹和 `.pages.yml` 是隐藏文件，要先让它们显示出来再拖：Mac 在访达里按 `Cmd + Shift + .`；Windows 在资源管理器点「查看 → 显示 → 隐藏的项目」。
   - 上传后检查仓库里有没有 `.github/workflows/hugo.yml`。如果没有，点 **Add file → Create new file**，文件名填 `.github/workflows/hugo.yml`，把本地这个文件的内容粘贴进去保存。
4. **打开 Pages**：进仓库的 **Settings → Pages**，把 **Source** 选成 **GitHub Actions**。
5. **等它发布**：打开仓库的 **Actions** 标签页，看到绿色 ✓ 就是发布成功，一般要 1–2 分钟。之后访问 `https://组织名.github.io` 就能看到网站。
   - 如果第一次运行在第 4 步之前就失败了（红色 ✗），点进去选 **Re-run all jobs** 再跑一次。

## 2. 发一条活动回顾（后台方式，推荐）

1. 打开 https://app.pagescms.org，点 **Sign in with GitHub**。
2. 第一次用时，按提示把 Pages CMS 安装到学联组织，并允许它访问 `acssulm.github.io` 仓库。这一步需要组织 Owner 操作。
3. 选择仓库 `acssulm.github.io`，左侧点 **活动回顾**，再点 **Add an entry**。
4. 填表：
   - **必填**：中文标题、网址名（英文小写加短横线，例如 `board-game-night`）、日期、类别、一句话简介、中文正文
   - **照片**：封面选一张横图；相册可以一次选多张
   - **英文、德文可以不填**：空着时，英文和德文页面会显示中文原文，并加一句提示
5. 点 **Save**。等 1–2 分钟，网站就自动更新了。

> 照片建议：横图、每张 1 MB 以内。手机原图太大的话，可以先用 https://squoosh.app 压缩一下。
> 注意：只发布当事人同意公开的照片。

## 3. 改首页通知、联系方式

在 Pages CMS 左侧：

- **首页近期通知**：添加、修改或删除通知。每条要填「结束日期」，过了这天会自动隐藏，不用手动删。
- **网站设置**：修改联系邮箱、公众号、新生手册链接、迎新报名链接、合作伙伴和 Impressum 信息。

## 4. 备用方式：直接在 GitHub 网页上改

后台打不开时，也可以直接在 GitHub 网页上改：

- **发活动**：进 `content/events/` 文件夹，打开一个旧活动文件，复制全部内容。然后点 **Add file → Create new file**，文件名按 `年-月-日-英文名.md` 命名（例如 `2026-10-30-board-game-night.md`），把内容粘贴进去，改成新活动的信息后保存。照片上传到 `static/images/events/`。
- **改通知**：编辑 `data/notices.yml`。
- **改联系方式**：编辑 `data/site.yml`。

改 `.yml` 文件时要注意：每行开头的空格要对齐，含有冒号的文字要用英文双引号括起来。

## 5. 改固定页面的文字

「关于学联」「新生指南」「租房」「联系我们」这几页的文字写在 `layouts/page/` 文件夹里：

| 页面 | 文件 |
|---|---|
| 关于学联 | `about.html` |
| 新生指南 | `newcomers.html` |
| 租房 | `housing.html` |
| 联系我们 | `contact.html` |
| Impressum & Datenschutz | `impressum.html` |

每段文字都有三个版本，格式是 `<span class="zh">中文</span><span class="en">English</span><span class="de">Deutsch</span>`。只改尖括号中间的文字，标签本身不要动。如果不确定怎么改，可以把文件交给懂代码的同学或 AI 帮忙。

## 6. 出问题了怎么办

- **网站没更新**：打开 **Actions** 标签页。如果是红色 ✗，点进去看报错。最常见的原因是 `.yml` 文件或活动文件开头 `---` 之间的格式写错（缩进不对、少了引号）。改正后会自动重新发布。
- **改坏了想恢复**：GitHub 会保存每次修改的历史。打开文件，点 **History**，找到改坏之前的版本，把内容复制回来就行。

## 7. 换届交接

1. 在组织的 **People** 页面，把下一任负责人加为 **Owner**。
2. 新负责人登录 Pages CMS，确认能正常编辑。
3. 卸任的人退出组织。

整个过程网址不变，也不需要交接密码。详细的交接清单见学联的传承文档仓库。

## 文件结构

```
content/events/        活动回顾，每个活动一个 .md 文件
data/notices.yml       首页近期通知
data/site.yml          联系方式、链接、合作伙伴
static/images/         图片（活动照片在 events/ 子文件夹）
layouts/               页面模板（固定页面文字在 page/ 子文件夹）
static/css/site.css    样式
static/js/site.js      语言切换等小功能
.pages.yml             后台（Pages CMS）配置
.github/workflows/     自动发布设置
hugo.toml              网站基本设置
```

本地预览（可选，适合懂代码的同学）：安装 Hugo 0.140 extended 版，在本文件夹运行 `hugo server`，然后打开 http://localhost:1313。
