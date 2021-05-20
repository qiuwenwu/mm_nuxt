<template>
  <mm_page id="page_pager">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>分页器</span>
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
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">
                  <h5>
                    <span>样式一</span>
                    <mm_btn class="btn_primary fr" @click.native="is_show(0)">显示代码</mm_btn>
                  </h5>
                </div>
                <div class="card_body">
                  <control_pager v-model="query.page" :count="count / query.size" :func="goTo"></control_pager>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">
                  <h5>
                    <span>样式二</span>
                    <mm_btn class="btn_primary fr" @click.native="is_show(1)">显示代码</mm_btn>
                  </h5>
                </div>
                <div class="card_body">
                  <control_pager class="control_pager-x" v-model="query.page" :count="count / query.size" :func="goTo">
                  </control_pager>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">
                  <h5>
                    <span>样式三</span>
                    <mm_btn class="btn_primary fr" @click.native="is_show(2)">显示代码</mm_btn>
                  </h5>
                </div>
                <div class="card_body">
                  <control_pager display="2" v-model="query.page" :count="count / query.size" :func="goTo">
                  </control_pager>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">
                  <h5>
                    <span>样式四</span>
                    <mm_btn class="btn_primary fr" @click.native="is_show(3)">显示代码</mm_btn>
                  </h5>
                </div>
                <div class="card_body">
                  <control_pager display="2" v-model="query.page" :count="count / query.size" :func="goTo"
                    :icons="['首页', '上一页', '下一页', '尾页']"></control_pager>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_body">
                  <p>当前：弟 {{ query.page }} 页</p>
                  <p>每页显示：{{ query.size }} 条</p>
                  <p>总计：{{ count }} 条</p>
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <!-- 模态窗 -->
    <mm_modal v-model="show" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>{{ obj.title }}</span>
        </div>
        <div class="card_body">
          <div class="center"><span>html</span></div>
          <expand_pre :code="obj.code_html"><code class="html"></code></expand_pre>
          <div v-if="obj.code_js" class="center"><span>javascript</span></div>
          <expand_pre v-if="obj.code_js" :code="obj.code_js"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
  </mm_page>
</template>

<script>
  export default {
    data() {
      return {
        query: {
          page: 1,
          size: 30
        },

        count: 2000,

        show: false,

        obj: {
          title: "",
          code_html: ``,
          code_js: ``
        },

        list: [{
            title: "样式一",
            code_html: `<control_pager v-model="query.page" :count="count / query.size"
  :func="goTo"></control_pager>`,
            code_js: `export default {
  data() {
    return {
      query: {
        page: 1,
        size: 30
      },
      count: 2000
    }
  },
  methods: {
    goTo(page) {
      // 可用来做 翻页动画，大于之前页往左翻，小于之前页右翻
      console.log("当前页", page);
      console.log("之前页", this.query.page);
    }
  }
}`
          },
          {
            title: "样式二",
            code_html: `<control_pager v-model="query.page" :count="count / query.size"
  :func="goTo" class="control_pager-x"></control_pager>`,
            code_js: `export default {
  data() {
    return {
      query: {
        page: 1,
        size: 30
      },
      count: 2000
    }
  },
  methods: {
    goTo(page) {
      // 可用来做 翻页动画，大于之前页往左翻，小于之前页右翻
      console.log("当前页", page);
      console.log("之前页", this.query.page);
    }
  }
}`
          },
          {
            title: "样式三",
            code_html: `<control_pager v-model="query.page" :count="count / query.size"
  :func="goTo" display="2"></control_pager>`,
            code_js: `export default {
  data() {
    return {
      query: {
        page: 1,
        size: 30
      },
      count: 2000
    }
  },
  methods: {
    goTo(page) {
      // 可用来做 翻页动画，大于之前页往左翻，小于之前页右翻
      console.log("当前页", page);
      console.log("之前页", this.query.page);
    }
  }
}`
          },
          {
            title: "样式四",
            code_html: `<control_pager display="2" v-model="query.page" :count="count / query.size"
  :func="goTo" :icons="['首页', '上一页', '下一页', '尾页']"></control_pager>`,
            code_js: `export default {
  data() {
    return {
      query: {
        page: 1,
        size: 30
      },
      count: 2000
    }
  },
  methods: {
    goTo(page) {
      // 可用来做 翻页动画，大于之前页往左翻，小于之前页右翻
      console.log("当前页", page);
      console.log("之前页", this.query.page);
    }
  }
}`
          }
        ]
      }
    },
    methods: {
      goTo(page) {
        // 可用来做 翻页动画，大于之前页往左翻，小于之前页右翻
        console.log("当前页", page);
        console.log("之前页", this.query.page);
      },
      is_show(i) {
        this.show = !this.show;
        if (this.show && i >= 0) {
          var o = JSON.stringify(this.list[i]);
          this.obj = JSON.parse(o);
        } else {
          this.obj = {
            title: '',
            code: ''
          };
        }
      }
    }
  }
</script>

<style>
</style>
