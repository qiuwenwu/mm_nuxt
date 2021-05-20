<template>
  <mm_page id="page_card">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>页面</span>
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
              <swiper_vertical_page :func="func_page">
                <div>
                  默认页
                </div>
                <div slot="page1">
                  第一页
                </div>
                <div slot="page2">
                  第二页
                </div>
                <div slot="page3">
                  第三页
                </div>
              </swiper_vertical_page>
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
        code1: `<swiper_vertical_page :func="func_page">
	<div>
		默认页
	</div>
	<div slot="page1">
		第一页
	</div>
	<div slot="page2">
		第二页
	</div>
	<div slot="page3">
		第三页
	</div>
</swiper_vertical_page>`,
        js1: `export default {
data() {
  return {}
},
methods: {
  func_page(index) {
    console.log('触发了', index);
    }
  }
}`
      }
    },
    methods: {
      func_page(index) {
        console.log('触发了', index);
      }
    }
  }
</script>

<style>
</style>
