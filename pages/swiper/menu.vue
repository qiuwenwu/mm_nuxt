<template>
  <mm_page id="page_card">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>菜单</span>
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
              <h5>菜单轮播默认块</h5>
              <swiper_menu :list="list">
              </swiper_menu>
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
        code1: `<swiper_menu :list="list"></swiper_menu>`,
        js1: `export default {
	data() {
      return {
        list: [{
          title: "日历",
          url: "/",
          image: "/img/default.png",
          },
          {
            title: "照片",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "天气",
            url: "/",
            image: "/img/default.png",
          }]
        }
      }
}`,
        list: [{
            title: "日历",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "照片",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "天气",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "时钟",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "编辑",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "换行",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "订单",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "方法",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "计算器",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "相机",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "钱包",
            url: "/",
            image: "/img/default.png",
          },
          {
            title: "文件",
            url: "/",
            image: "/img/default.png",
          },
        ]
      }
    }
  }
</script>

<style>
  .menu_box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
