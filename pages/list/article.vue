<template>
  <!-- 文章 -->
  <mm_page id="page_article">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>文章</span>
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
            <mm_col width="25">
              <mm_view>
                <control_select v-model.number="col" :options="options"></control_select>
              </mm_view>
            </mm_col>
            <mm_col width="25">
              <mm_view>
                <mm_btn class="btn_primary" @click.native="set_layout()">切换排版方式</mm_btn>
              </mm_view>
            </mm_col>
            <mm_col width="25">
              <mm_view>
                <button class="btn_primary" @click="border = !border"><span v-if="border">无</span><span v-else>加</span>边框</button>
              </mm_view>
            </mm_col>
            <mm_col width="25">
              <mm_view>
                <button class="btn_primary fr" @click="show1 = true">显示代码</button>
              </mm_view>
            </mm_col>
            <mm_col width="100">
              <mm_view class="card">
                <div class="card_body">
                  <list_article :col="col" :list="list" :class="list_layout[select] + (border ? ' icon-x icon-radius' : '')">
                  </list_article>
                </div>
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
<list_article :col="col" :list="list" :class="list_layout[select] +
(border ? ' icon-x icon-radius' : '')">
</list_article>`,
        js1: `export default {
	data(){
	list_layout: [
	  "item-ltb",
	  "item-rtb",
	  "item-tb"
	],
	list: [{
		article_id: 1,
		title: "测试1",
		image: "/img/default.png",
		create_time: "2021-04-19 21:16",
	  tag: "独播",
		source: "国盛区块链研究院",
		num_comment: 10,
		description: "这是一个图片的描述，为了方便演示排版而写",
		url: "/"
	},
	}
}`,
        border: false,
        select: 1,
        col: 1,
        list_layout: [
          "item-ltb",
          "item-rtb",
          "item-tb"
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
