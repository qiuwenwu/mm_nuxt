import Vue from 'vue'
import VueLazyComponent from '@xunlei/vue-lazy-component'

var host = "http://192.168.0.110:8000/";

function init_host(ht) {
  var ht = location.host;
  if (ht.indexOf("127.") !== -1 || ht.indexOf("localhost") !== -1) {
    host = ht || "http://127.0.0.1:8000/";
  } else if (ht.indexOf("192.") !== -1) {
    host = "http://" + ht.replace(/:\d000/, ":8000") + "/";
  } else {
    host = "http://" + ht.replace("cs.", "cs_server.") + "/";
  }
}

console.log("服务器地址：", host);

/**
 * 组件
 */
var Plugin = {
  /**
   * 安装
   * @param {Object} Vue vue类
   * @param {Object} optons 配置参数
   */
  install(Vue, optons) {
    init_host(optons ? optons.host : "http://127.0.0.1:8000/");
    Vue.use(VueLazyComponent)

    // Vue.component('mm_rich', mm_rich);
    var redirect_url = "/";
    Vue.mixin({
      data() {
        return {}
      },
      methods: {
        $check_auth(arr) {
          var admin_id = this.$store.state.user.admin_id;
          if (admin_id) {
            return arr.indexOf(admin_id) !== -1
          } else {
            return false;
          }
        },
        /**
         * 翻译
         * @param {String} word 要翻译的单词
         * @param {Object} func 回调函数
         */
        $translate(word, func) {
          var _this = this;
          this.$get("~/api/dev/translate?word=" + word, {}, function(json) {
            if (json.result) {
              func(json.result);
            } else if (json.error) {
              _this.$toast(json.error.message, 'danger');
            } else {
              _this.$toast('服务端连接错误！', 'danger');
            }
          });
        },
        /**
         * 下载
         * @param {String} url 下载地址
         * @param {String} name 保存的名字
         */
        $download(url, name) {
          var anchor = document.createElement('a');
          if (!name) {
            var arr = url.split("/");
            name = arr[arr.length - 1];
          }
          if ('download' in anchor) {
            anchor.href = url.replace("~/", host);
            anchor.setAttribute("download", name);
            anchor.className = "download-js-link";
            anchor.style.display = "none";
            document.body.appendChild(anchor);
            setTimeout(function() {
              anchor.click();
              document.body.removeChild(anchor);
            }, 66);
            return true;
          }
        },
        /**
         * @description 获取用户信息
         * @param {Function} func 回调函数
         */
        $get_user(func) {
          var _this = this;

          this.$get('~/api/user/state', null, function(json, status) {
            if (json.result) {
              _this.$store.commit('user/set', json.result);
              if (func) {
                func();
              }
            } else if (json.error) {
              // 非法访问或未登录
              _this.$store.commit('user/sign_out');
              _this.$router.push("/sign_in");
            } else {
              _this.$toast('服务器连接失败！');
            }
          });
        },
        /**
         * 跳转地址
         * @param {String} url
         */
        $redirect(url) {
          if (url) {
            redirect_url = url;
          } else {
            return redirect_url;
          }
        },
        /**
         * @description 提示框
         * @param {String} text 提示内容
         * @param {String} type 显示类型
         */
        $toast(text, type = 'dark') {
          if (type == 'danger' || type == 'error') {
            this.$message.error(text);
          } else {
            this.$message({
              message: text,
              type
            });
          }
        },
        /**
         * 转换时间格式
         * @param {String} time 时间字符串
         * @param {String} format 格式
         */
        $toTime(time, format) {
          return time.toTime().toStr(format);
        },
        /**
         * @description 过滤数组
         * @param {Array} arr 被过滤的数组
         * @param {String} key 判断的键
         * @param {Object} value 判断的值
         * @return {Array} 返回过滤后的数组
         */
        $filter(arr, key, value) {
          var ar = [];
          for (var i = 0; i < arr.length; i++) {
            var o = arr[i];
            if (o[key] === value) {
              ar.push(o);
            }
          }
          return ar;
        },

        /**
         * @description 转url字符串
         * @param {Object} obj 被转换的对象
         * @param {String} url 请求地址
         * @return {String} url参数格式字符串
         */
        $toUrl(obj, url) {
          var queryStr = "";
          for (var key in obj) {
            var value = obj[key];
            if (typeof(value) === 'number') {
              if (value > 0) {
                queryStr += "&" + key + "=" + obj[key];
              }
            } else if (value) {
              queryStr += "&" + key + "=" + encodeURI(value);
            }
          }
          if (url) {
            if (url.endWith('?') || url.endWith('&')) {
              return url + queryStr.replace('&', '');
            } else if (url.indexOf('?') === -1) {
              return url + queryStr.replace('&', '?');
            } else {
              return url + queryStr;
            }
          } else {
            return queryStr.replace('&', '');
          }
        },
        /**
         * 转换名称
         * @param {Array} list 数组
         */
        $toName(list, value, value_key = 'name', key = 'value') {
          var ret = "";
          for (var i = 0; i < list.length; i++) {
            var o = list[i];
            if (o[key] === value) {
              ret = o[value_key];
            }
          }
          return ret;
        },
        /**
         * 补全请求url
         * @param {String} url 现地址
         * @return {String} 新地址
         */
        $fullUrl(url) {
          if(url){
            if (url.indexOf("/") === 0) {
              return url.replace('/', host);
            }
            return url.replace('~/', host);
          }
          return "";
        },
        /**
         * GET请求
         * @param {String} url 请求地址
         * @param {Object} body 请求参数
         * @param {Funciton} func 回调函数，可以为空，为空则采用await返回值
         * @return {Object} 返回请求结果
         */
        async $get(url, body, func) {
          url = url.replace('~/', host);
          if (body) {
            url = this.$toUrl(body, url);
          }

          // 设置请求头 - 临时访问牌
          this.$axios.setHeader('x-auth-token', this.$store.state.user.token);
          if (func) {
            // 如果回调函数存在, 则采用异步
            this.$axios.get(url).then((res) => {
              if (res.data && res.data.error && res.data.error.message.indexOf("未") !== -1) {
                this.$store.commit('user/sign_out');
                this.$router.push("/sign_in");
              } else {
                func(res.data);
              }
            }).catch((res) => {
              func(res);
            });
          } else {
            // 否则采用同步
            var res = await this.$axios.get(url);
            return res.data;
          }
        },
        /**
         * POST请求
         * @param {String} url 请求地址
         * @param {Object} body 请求参数
         * @param {Funciton} func 回调函数，可以为空，为空则采用await返回值
         * @return {Object} 返回请求结果
         */
        async $post(url, body, func) {
          url = url.replace('~/', host);
          // 设置请求头 - 临时访问牌
          this.$axios.setHeader('x-auth-token', this.$store.state.user.token);
          // 设置请求头 - 发送的内容类型
          this.$axios.setHeader('Content-Type', 'application/json', ['post']);
          if (func) {
            // 如果回调函数存在, 则采用异步
            this.$axios.post(url, body).then((res) => {
              func(res.data);
            }).catch((res) => {
              func(res);
            });
          } else {
            // 否则采用同步
            var res = await this.$axios.post(url, body);
            return res.data;
          }
        },
        /**
         * 上传文件
         * @param {String} url 请求地址
         * @param {Object} body 请求参数
         * @param {Funciton} func 回调函数，可以为空，为空则采用await返回值
         * @return {Object} 返回请求结果
         */
        async $upload(url, body, func) {
          url = url.replace('~/', host);
          // 设置请求头 - 临时访问牌
          this.$axios.setHeader('x-auth-token', this.$store.state.user.token);
          // 设置请求头 - 发送的内容类型
          this.$axios.setHeader('Content-Type', 'multipart/form-data', ['post']);
          if (func) {
            // 如果回调函数存在, 则采用异步
            this.$axios.post(url, body).then((res) => {
              func(res.data);
            }).catch((res) => {
              func(res);
            });
          } else {
            // 否则采用同步
            var res = await this.$axios.post(url, body);
            return res.data;
          }
        },
        /**
         * POST请求
         * @param {String} url 请求地址
         * @param {Object} body 请求参数
         * @param {Funciton} func 回调函数，可以为空，为空则采用await返回值
         * @return {Object} 返回请求结果
         */
        async $put(url, body, func) {
          // 设置请求头 - 临时访问牌
          this.$axios.setHeader('x-auth-token', this.$store.state.user.token);

          // 设置请求头 - 发送的内容类型
          this.$axios.setHeader('Content-Type', 'application/json', ['put']);

          if (func) {
            // 如果回调函数存在, 则采用异步
            this.$axios.put(url, body).then(func);
          } else {
            // 否则采用同步
            return await this.$axios.put(url, body);
          }
        }
      }
    })

  }
}

var optons = {};

Vue.use(Plugin, optons);
