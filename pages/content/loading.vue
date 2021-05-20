<template>
  <mm_page id="page_loading">
    <!-- 页头 -->
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>加载</span>
                  <span class="fr">&lt; 返回</span>
                </h3>
              </mm_view>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </header>
    <!-- 功能 -->
    <main>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col class="col-6 col-md-3">
              <mm_card>
                <div class="card_head">
                  <span>样式一</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(obj1)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(obj1)">显示代码</button>
                </div>
                <div class="card_body"><mm_loading></mm_loading></div>
              </mm_card>
            </mm_col>
            <mm_col class="col-6 col-md-3">
              <mm_card>
                <div class="card_head">
                  <span>样式二</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(obj2)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(obj2)">显示代码</button>
                </div>
                <div class="card_body"><mm_loading class="loading"></mm_loading></div>
              </mm_card>
            </mm_col>
            <mm_col class="col-6 col-md-3">
              <mm_card>
                <div class="card_head">
                  <span>样式三</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(obj3)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(obj3)">显示代码</button>
                </div>
                <div class="card_body">
                  <mm_loading><i class="fa fa-user"></i></mm_loading>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-6 col-md-3">
              <mm_card>
                <div class="card_head">
                  <span>样式四</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(obj4)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(obj4)">显示代码</button>
                </div>
                <div class="card_body">
                  <mm_loading><img src="/img/logo.png" style="width: 2rem;" /></mm_loading>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-6 col-md-3">
              <mm_card>
                <div class="card_head">
                  <span>样式五</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(obj5)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(obj5)">显示代码</button>
                </div>
                <div class="card_body"><mm_loading display="2"></mm_loading></div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <!-- 模态窗 -->
    <mm_modal v-model="show" mask="true" display="center">
      <mm_card>
        <div class="card_head center">
          <span>{{ obj.title }}</span>
        </div>
        <div class="card_body"><expand_pre :code="obj.code"><code class="html"></code></expand_pre></div>
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
      show: false,

      obj: {
        title: '',
        code: ''
      },

      obj1: {
        title: '样式一',
        code: `<mm_loading></mm_loading>`
      },

      obj2: {
        title: '样式二',
        code: `<mm_loading class="loading"></mm_loading>`
      },

      obj3: {
        title: '样式三',
        code: `<mm_loading><i class="fa fa-user"></i></mm_loading>`
      },

      obj4: {
        title: '样式四',
        code: `<mm_loading><img src="/img/logo_round.png" style="width: 2rem;" /></mm_loading>`
      },

      obj5: {
        title: '样式五',
        code: `<mm_loading display="2"></mm_loading>`
      }
    };
  },
  methods: {
    is_show(o) {
      this.show = !this.show;
      if (this.show) {
        this.obj = o;
      } else {
        this.obj = {
            title: '',
            code: ''
          };
      }
    }
  }
};
</script>

<style>
#page_loading .loading {
  text-align: left;
  max-width: 5rem;
}

#page_loading .loading .state {
  line-height: 1.75;
}

#page_loading .loading .load {
  float: left;
}
#page_loading .card_body {
  text-align: center;
}

.mm_loading {
  margin: auto;
}
</style>
