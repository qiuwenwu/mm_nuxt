<template>
  <mm_page id="page_chat">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>用户导航</span>
                  <span class="fr">&lt; 返回</span></router-link>
                </h3>
              </mm_view>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </header>
    <main>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <button class="btn_primary-x" @click="show1 = true">显示代码</button>
            </mm_col>
            <mm_col width="100">
              <mm_view>
                <nav_user>
                </nav_user>
              </mm_view>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js1"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show1 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
  </mm_page>
</template>

<script>
  export default {
    data() {
      return {
        show1: false,
        code1: `<nav_user></nav_user>`,
        js1: `export default {
	data(){
	  list: {
			type: Array,
			default: function() {
				return [{
					title: "个人信息",
					url: ""
				}, {
					title: "账号管理",
					url: ""
				}, {
					title: "修改密码",
					url: ""
				}, {
					title: "退出",
					url: ""
				}]
			}
		},
		obj: {
			type: Object,
			default: function() {
				return {
					username: "姓名xxx",
					url: ""
				}
			}
		}
	},`,
        list: undefined
      }
    },
  }
</script>

<style scoped="scoped">
  main {
    min-height: 100vh;
  }

  main .mm_view {
    overflow: visible;
  }
</style>
