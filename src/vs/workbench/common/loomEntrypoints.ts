/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Loom 的界面入口开关。
 *
 * 被产品收起来的原生入口在这里集中登记：实现代码一律保留，只把「露给用户的入口」关掉。
 * 需要恢复某一项时，把对应开关改成 true 即可，不必回到各处实现去改判断。
 *
 * 取值语义：true = 入口可见（恢复原生行为），false = 入口隐藏（Loom 当前形态）。
 */
export type LoomEntrypointId =
	/** 设置以弹窗打开；关掉后设置固定走编辑器标签页。 */
	| 'settingsModal'
	/** 布局密度（紧凑模式）的菜单项与命令。 */
	| 'layoutDensity'
	/** 活动栏右键菜单里的布局项（位置、尺寸、移动侧边栏）。 */
	| 'activityBarLayoutMenu'
	/** 标题栏右上角的 Customize Layout 下拉按钮；命令与快速选择器不随之隐藏。 */
	| 'customizeLayout'
	/** 管理菜单与首选项里的主题子菜单（颜色主题、文件图标主题、产品图标主题）。 */
	| 'themeMenu'
	/** 设置界面里与上述入口相关的设置项（布局控制、密度等）。 */
	| 'layoutSettingsInSettingsEditor';

const ENTRYPOINT_VISIBILITY: Record<LoomEntrypointId, boolean> = {
	settingsModal: false,
	layoutDensity: false,
	activityBarLayoutMenu: false,
	customizeLayout: false,
	themeMenu: false,
	layoutSettingsInSettingsEditor: false
};

/**
 * 自建设置页的编辑器面板 id。
 *
 * 放在这里是为了让设置输入（preferences 层）与面板实现（loomUi 层）都能引用同一个值，
 * 两边互相 import 会绕成环。
 */
export const LOOM_SETTINGS_PANE_ID = 'loom.editor.settings';

/** 某个入口当前是否可见。 */
export function isLoomEntrypointVisible(id: LoomEntrypointId): boolean {
	return ENTRYPOINT_VISIBILITY[id] === true;
}

/** 入口隐藏时的统一判断，读起来更接近调用点的语义。 */
export function isLoomEntrypointHidden(id: LoomEntrypointId): boolean {
	return !isLoomEntrypointVisible(id);
}
