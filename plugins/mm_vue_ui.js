"use strict";
import mm_body from "../components/mm/base/mm_body.vue"
import mm_btn from "../components/mm/base/mm_btn.vue"
import mm_card from "../components/mm/base/mm_card.vue"
import mm_code from "../components/mm/base/mm_code.vue"
import mm_col from "../components/mm/base/mm_col.vue"
import mm_container from "../components/mm/base/mm_container.vue"
import mm_content from "../components/mm/base/mm_content.vue"
import mm_foot from "../components/mm/base/mm_foot.vue"
import mm_grid from "../components/mm/base/mm_grid.vue"
import mm_group from "../components/mm/base/mm_group.vue"
import mm_form from "../components/mm/base/mm_form.vue"
import mm_table from "../components/mm/base/mm_table.vue"
import mm_head from "../components/mm/base/mm_head.vue"
import mm_icon from "../components/mm/base/mm_icon.vue"
import mm_item from "../components/mm/base/mm_item.vue"
import mm_list from "../components/mm/base/mm_list.vue"
import mm_loading from "../components/mm/base/mm_loading.vue"
import mm_main from "../components/mm/base/mm_main.vue"
import mm_modal from "../components/mm/base/mm_modal.vue"
import mm_movable from "../components/mm/base/mm_movable.vue"
import mm_nav from "../components/mm/base/mm_nav.vue"
import mm_nav_top from "../components/mm/base/mm_nav_top.vue"
import mm_page from "../components/mm/base/mm_page.vue"
import mm_row from "../components/mm/base/mm_row.vue"
import mm_side from "../components/mm/base/mm_side.vue"
import mm_time from "../components/mm/base/mm_time.vue"
import mm_upload_img from "../components/mm/base/mm_upload_img.vue"
import mm_view from "../components/mm/base/mm_view.vue"
import mm_warp from "../components/mm/base/mm_warp.vue"
import control_checkbox from "../components/mm/control/control_checkbox.vue"
import control_input from "../components/mm/control/control_input.vue"
import control_number from "../components/mm/control/control_number.vue"
import control_pager from "../components/mm/control/control_pager.vue"
import control_radio from "../components/mm/control/control_radio.vue"
import control_reverse from "../components/mm/control/control_reverse.vue"
import control_select from "../components/mm/control/control_select.vue"
import control_switch from "../components/mm/control/control_switch.vue"
import control_file from "../components/mm/control/control_file.vue"
import control_textarea from "../components/mm/control/control_textarea.vue"

export default {
	install(Vue, options) {
		//自定义拖动
		Vue.directive('drag',
			function(el, binding) {
				el.onmousedown = function(e) {
					e.preventDefault();
					let bw = document.body.clientWidth;
					let bh = document.body.clientHeight;
					//鼠标按下，计算当前元素距离可视区的距离
					let disX = e.clientX - el.offsetLeft;
					let disY = e.clientY - el.offsetTop;
					// 计算两边坐标
					document.onmousemove = function(e) {
						let l = 0,
							t = 0;
						// 拖动边界
						if (e.clientX >= bw) {
							l = bw - disX;
						} else if (e.clientX <= 0) {
							{
								l = 0 - disX;
							}
						} else {
							l = e.clientX - disX;
						}
						if (e.clientY >= bh) {
							t = bh - disY;
						} else if (e.clientY <= 0) {
							t = 0 - disY;
						} else {
							t = e.clientY - disY;
						}
						//移动当前元素
						el.style.left = l + 'px';
						el.style.top = t + 'px';
					};
					// 鼠标停止移动时，事件移除
					document.onmouseup = function(e) {
						document.onmousemove = null;
						document.onmouseup = null;
					};
				};
			}
		);

		Vue.component("mm_icon", mm_icon);
		Vue.component("mm_btn", mm_btn);
		Vue.component("mm_loading", mm_loading);
		Vue.component("mm_body", mm_body);
		Vue.component("mm_row", mm_row);
		Vue.component("mm_col", mm_col);
		Vue.component("mm_foot", mm_foot);
		Vue.component("mm_grid", mm_grid);
		Vue.component("mm_group", mm_group);
		Vue.component("mm_head", mm_head);
		Vue.component("mm_item", mm_item);
		Vue.component("mm_list", mm_list);
		Vue.component("mm_main", mm_main);
		Vue.component("mm_modal", mm_modal);
		Vue.component("mm_movable", mm_movable);
		Vue.component("mm_page", mm_page);
		Vue.component("mm_view", mm_view);
		Vue.component("mm_card", mm_card);
		Vue.component("mm_side", mm_side);
		Vue.component("mm_table", mm_table);
		Vue.component("mm_warp", mm_warp);
		Vue.component("mm_container", mm_container);
		Vue.component("mm_content", mm_content);
		Vue.component("mm_form", mm_form);
		Vue.component("control_checkbox", control_checkbox);
		Vue.component("mm_code", mm_code);
		Vue.component("control_input", control_input);
		Vue.component("control_number", control_number);
		Vue.component("mm_time", mm_time);
		Vue.component("control_textarea", control_textarea);
		Vue.component("control_pager", control_pager);
		Vue.component("control_radio", control_radio);
		Vue.component("control_reverse", control_reverse);
		Vue.component("control_select", control_select);
		Vue.component("control_switch", control_switch);
		Vue.component("control_file", control_file);
		Vue.component("mm_nav", mm_nav);
		Vue.component("mm_nav_top", mm_nav_top);
		Vue.component("mm_upload_img", mm_upload_img);
	}
}
