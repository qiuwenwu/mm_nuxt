import Vue from "vue";
import en from "./lang/en.js";
import zh from "./lang/zh.js";
import hk from "./lang/hk.js";
import jp from "./lang/jp.js";
import ko from "./lang/ko.js";

Vue.prototype.$lang = {
  en,
  zh,
  hk,
  jp,
  ko
};

Vue.mixin({
  data() {
    return {
      lang_type: localStorage.getItem('lang_type') || 'en',
    }
  },
  methods: {
    /**
     * 设置语言
     * @param {String} lang_type
     */
    set_lang(lang_type) {
      this.lang_type = lang_type;
      localStorage.setItem('lang_type', lang_type);
    },
    /**
     * 语言赋值
     * @param {String} key 获取语言
     */
    $t: function(key, ...param) {
      var lang = this.$lang[this.lang_type];
      var arr = key.split('.');
      var value = lang;
      for (var i = 0; i < arr.length; i++) {
        value = value[arr[i]]
        if (value === undefined) {
          console.error("language pack error: " + key + " undefined");
          break;
        } else if (typeof(value) == "string") {
          break;
        }
      }

      if (typeof(value) == "string") {
        for (var i = 0; i < param.length; i++) {
          var reg = new RegExp("\\{" + i + "\\}", 'ig');
          value = value.replace(reg, param[i]);
        }
      }
      return value;
    }
  }
});
