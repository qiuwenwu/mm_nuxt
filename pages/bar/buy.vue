<template>
  <mm_page id="page_chat">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>购买栏</span>
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
              <bar_buy :func="func_buy" :list="list">
              </bar_buy>
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
          <expand_pre :code="js"><code class="javascript"></code></expand_pre>
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
        code1: `<bar_buy :func="func_buy" :list="list"></bar_buy>
        `,
        js: `export default {
 data() {
   return [{
    title: "商铺",
      command: "store",
      icon:"fa-home"
    }, {
      title: "客服",
      command: "customer_service",
      icon:"fa-comments-o"
    }, {
      title: "收藏",
      command: "collect",
      icon:"fa-star"
    },{
      title: "加入购物车",
      command: "cart"
    },{
      title: "立即购买",
      command: "buy"
    }];
   },
   methods: {
     func_buy(o) {
       console.log(o)
     }
   }
 }`,
        select: 0,
        col: "2",
        options: [{
            name: "1列",
            value: "1"
          },
          {
            name: "2列",
            value: "2"
          },
          {
            name: "3列",
            value: "3"
          },
          {
            name: "4列",
            value: "4"
          },
          {
            name: "5列",
            value: "5"
          },
          {
            name: "6列",
            value: "6"
          },
          {
            name: "8列",
            value: "8"
          },
          {
            name: "10列",
            value: "10"
          },
          {
            name: "12列",
            value: "12"
          }
        ],
        list: undefined
      }
    },
    methods: {
      func_buy(o) {
        console.log(o)
      }
    }
  }
</script>

<style>
</style>
