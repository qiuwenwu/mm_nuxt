<template>
  <mm_page id="page_card">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>文本</span>
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
              <h5>文字轮播默认块</h5>
              <swiper_text>
                <div slot class="text_block">
                  <h4>公告：</h4>
                  <span>公司政策调整，请各位商家做好准备</span>
                </div>
                <div slot="card1" class="text_block">
                  <h4>留言：</h4>
                  <span>老板快点啊</span>
                </div>
                <div slot="card2" class="text_block">
                  <h4>新发：</h4>
                  <span>催单了，请及时处理！</span>
                </div>
              </swiper_text>
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
        code1: `<swiper_text>
<div slot class="text_block">
<h4>公告：</h4>
<span>公司政策调整，请各位商家做好准备</span>
</div>
<div slot="card1" class="text_block">
<h4>留言：</h4>
<span>老板快点啊</span>
</div>
</swiper_text>`,
        js1: `export default {
	data(){
	list: [{
		title: "公告：",
		content: '公司政策调整，请各位商家做好准备',
		url: "/",
		image: "/img/default.png",
	},
	{
		title: "留言：",
		content: '老板快点啊！',
		url: "/",
		image: "/img/default.png",
	},
	]
	}
}`,
        list: [{
            title: "公告：",
            content: '公司政策调整，请各位商家做好准备',
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "留言：",
            content: '老板快点啊！',
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "新发：",
            content: '催单了，请及时处理！',
            url: "/",
            image: "/img/default.png",
          }
        ]
      }
    }
  }
</script>

<style>

</style>
