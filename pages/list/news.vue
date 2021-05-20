<template>
  <!-- 新闻 -->
  <mm_page id="page_news">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>新闻</span>
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
              <mm_view>
                <control_select v-model.number="col" :options="options"></control_select>
                <mm_btn class="btn_primary" @click.native="set_layout()">切换排版方式</mm_btn>
                <button class="btn_primary fr" @click="show1 = true">显示代码</button>
              </mm_view>
            </mm_col>
            <mm_col width="100">
              <mm_view class="card">
                <list_news :col="col" :list="list" :class="'list-x ' + list_layout[select]">
                </list_news>
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
        code1: `//-lr左右，-ll左左，--ltb左上下。img-参数【small=>小图标】
由小到大为mini，small，base，big，larger，huge
<list_news :col="col" :list="list" :class="'list-x ' + list_layout[select]"></list_news>`,
        js1: `export default {
	data(){
	list_layout: [
	  "item-ltb img-larger",
	  "item-rtb img-larger",
	  "item-tb",
	],
	list: [{
		id: 1,
		title: "有证据、绝不妥协！特斯拉维权女子家属：我们要退款退车",
		image: "/img/default.png",
		imgs: ["/img/default.png","/img/default.png"],
		description: "这是一个新闻的内容，为了方便演示排版而写这是一个新闻的内容",
		source:"手机凤凰网",
		author:"优质创作者",
		tag:"热点",
		create_time: "2021-04-19 21:16",
		url: "/"
	},
	}
}`,
        select: 2,
        col: 2,
        list_layout: [
          "item-ltb img-larger",
          "item-rtb img-larger",
          "item-tb",
        ],
        options: [{
            name: "1列",
            value: 1
          },
          {
            name: "2列",
            value: 2
          },
          {
            name: "3列",
            value: 3
          },
          {
            name: "4列",
            value: 4
          },
          {
            name: "5列",
            value: 5
          },
          {
            name: "6列",
            value: 6
          },
          {
            name: "8列",
            value: 8
          },
          {
            name: "10列",
            value: 10
          },
          {
            name: "12列",
            value: 12
          }
        ],
        list: undefined
      }
    },
    methods: {
      set_layout() {
        if (this.select < this.list_layout.length - 1) {
          this.select++;
        } else {
          this.select = 0;
        }
      }
    }
  }
</script>

<style>
</style>
