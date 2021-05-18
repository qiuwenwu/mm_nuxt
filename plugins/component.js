import Vue from 'vue'
import mm_vue_ui from './mm_vue_ui.js'
import mm_component from './mm_component.js'
import Swiper from './swiper.min.js'
import VueHighlightJS from 'vue-highlightjs';

/**
 * 插件
 */
var Plugin = {
  /**
   * 安装
   * @param {Object} Vue vue类
   * @param {Object} optons 配置参数
   */
  install(Vue, optons) {
    Vue.use(mm_vue_ui, optons);
    Vue.use(mm_component, optons);
    Vue.use(VueHighlightJS);
    Vue.prototype.$Swiper = Swiper;
    Vue.prototype.$copy = function(text){
      $.copyText(text);
      $.toast("复制成功！");
    };
  }
};

var optons = {};

Vue.use(Plugin, optons);
