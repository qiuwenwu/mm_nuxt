<template>
  <mm_page id="page_grid">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>栅格</span>
                  <span class="fr">&lt; 返回</span>
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
              <mm_card>
                <div class="card_head">
                  <span>常见栅格布局</span>
                  <mm_btn class="btn_primary fr" @click.native="is_show(0)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_warp>
                    <mm_container>
                      <mm_row class="center grid-x grid-auto">
                        <!-- 100% -->
                        <mm_col width="100">
                          <mm_view>100</mm_view>
                        </mm_col>

                        <!-- 1:3 -->
                        <mm_col width="25">
                          <mm_view>25</mm_view>
                        </mm_col>
                        <mm_col width="75">
                          <mm_view>75</mm_view>
                        </mm_col>

                        <!-- 1:1 -->
                        <mm_col width="50">
                          <mm_view>50</mm_view>
                        </mm_col>
                        <mm_col width="50">
                          <mm_view>50</mm_view>
                        </mm_col>

                        <!-- 1:1:1:1 -->
                        <mm_col width="25">
                          <mm_view>25</mm_view>
                        </mm_col>
                        <mm_col width="25">
                          <mm_view>25</mm_view>
                        </mm_col>
                        <mm_col width="25">
                          <mm_view>25</mm_view>
                        </mm_col>
                        <mm_col width="25">
                          <mm_view>25</mm_view>
                        </mm_col>

                        <!-- 1:4 -->
                        <mm_col width="20">
                          <mm_view>20</mm_view>
                        </mm_col>
                        <mm_col width="80">
                          <mm_view>80</mm_view>
                        </mm_col>

                        <!-- 1:2:1 -->
                        <mm_col width="25">
                          <mm_view>25</mm_view>
                        </mm_col>
                        <mm_col width="50">
                          <mm_view>25</mm_view>
                        </mm_col>
                        <mm_col width="25">
                          <mm_view>25</mm_view>
                        </mm_col>

                        <!-- 1:1:1 -->
                        <mm_col width="33">
                          <mm_view>33</mm_view>
                        </mm_col>
                        <mm_col width="33">
                          <mm_view>33</mm_view>
                        </mm_col>
                        <mm_col width="33">
                          <mm_view>33</mm_view>
                        </mm_col>

                        <!-- 1:2 -->
                        <mm_col width="33">
                          <mm_view>33</mm_view>
                        </mm_col>
                        <mm_col width="66">
                          <mm_view>66</mm_view>
                        </mm_col>

                        <!-- 1:1:1:1:1 -->
                        <mm_col width="20">
                          <mm_view>20</mm_view>
                        </mm_col>
                        <mm_col width="20">
                          <mm_view>20</mm_view>
                        </mm_col>
                        <mm_col width="20">
                          <mm_view>20</mm_view>
                        </mm_col>
                        <mm_col width="20">
                          <mm_view>20</mm_view>
                        </mm_col>
                        <mm_col width="20">
                          <mm_view>20</mm_view>
                        </mm_col>
                      </mm_row>
                    </mm_container>
                  </mm_warp>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                  <span>通过父级改变列数</span>
                  <mm_btn class="btn_primary" @click.native="add()">{{ col }}列</mm_btn>
                  <mm_btn class="btn_primary fr" @click.native="is_show(1)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_warp>
                    <mm_container>
                      <mm_row :col="col" class="center grid-x">
                        <mm_col>
                          <mm_view>1</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>2</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>3</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>4</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>5</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>6</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>7</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>8</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>9</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>10</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>11</mm_view>
                        </mm_col>
                        <mm_col>
                          <mm_view>12</mm_view>
                        </mm_col>
                      </mm_row>
                    </mm_container>
                  </mm_warp>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                  <span>自适应列数</span>
                  <mm_btn class="btn_primary" @click.native="add_num()">{{ num }}列</mm_btn>
                  <mm_btn class="btn_primary fr" @click.native="is_show(2)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_warp>
                    <mm_container>
                      <mm_row class="center grid-x grid-auto">
                        <mm_col v-for="(o, idx) in num" :key="idx">
                          <mm_view>{{ o }}</mm_view>
                        </mm_col>
                      </mm_row>
                    </mm_container>
                  </mm_warp>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                  <span>常见响应式列</span>
                  <mm_btn class="btn_primary fr" @click.native="is_show(3)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_warp>
                    <mm_container>
                      <mm_row :col="1" class="center grid-x">
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>1</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>2</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>3</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>4</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>5</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>6</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>7</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>8</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>9</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>10</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>11</mm_view>
                        </mm_col>
                        <mm_col class="col-lg-2 col-md-3 col-sm-6">
                          <mm_view>12</mm_view>
                        </mm_col>
                      </mm_row>
                    </mm_container>
                  </mm_warp>
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
        <div class="card_head center">
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
        index: 3,
        num: 12,
        show: false,
        obj: {
          title: '',
          code_html: ''
        },
        list: [{
            title: '常见栅格布局',
            code_html: `<mm_warp><mm_container><mm_row class="center grid-x grid-auto">
    <mm_col width="100"><mm_view>100</mm_view></mm_col>
    <mm_col width="25"><mm_view>25</mm_view></mm_col>
    <mm_col width="75"><mm_view>75</mm_view></mm_col>
    <mm_col width="50"><mm_view>50</mm_view></mm_col>
    <mm_col width="50"><mm_view>50</mm_view></mm_col>
    <mm_col width="25"><mm_view>25</mm_view></mm_col>
    <mm_col width="25"><mm_view>25</mm_view></mm_col>
    <mm_col width="25"><mm_view>25</mm_view></mm_col>
    <mm_col width="25"><mm_view>25</mm_view></mm_col>
    <mm_col width="20"><mm_view>20</mm_view></mm_col>
    <mm_col width="80"><mm_view>80</mm_view></mm_col>
    <mm_col width="25"><mm_view>25</mm_view></mm_col>
    <mm_col width="50"><mm_view>25</mm_view></mm_col>
    <mm_col width="25"><mm_view>25</mm_view></mm_col>
    <mm_col width="33"><mm_view>33</mm_view></mm_col>
    <mm_col width="33"><mm_view>33</mm_view></mm_col>
    <mm_col width="33"><mm_view>33</mm_view></mm_col>
    <mm_col width="33"><mm_view>33</mm_view></mm_col>
    <mm_col width="66"><mm_view>66</mm_view></mm_col>
    <mm_col width="20"><mm_view>20</mm_view></mm_col>
    <mm_col width="20"><mm_view>20</mm_view></mm_col>
    <mm_col width="20"><mm_view>20</mm_view></mm_col>
    <mm_col width="20"><mm_view>20</mm_view></mm_col>
    <mm_col width="20"><mm_view>20</mm_view></mm_col>
</mm_row></mm_container></mm_warp>`,
            code_js: ``
          },
          {
            title: '通过父级改变列数',
            code_html: `<mm_warp>
    <mm_container>
        <mm_row :col="col" class="center grid-x">
          <mm_col><mm_view>1</mm_view></mm_col>
          <mm_col><mm_view>2</mm_view></mm_col>
          <mm_col><mm_view>3</mm_view></mm_col>
          <mm_col><mm_view>4</mm_view></mm_col>
          <mm_col><mm_view>5</mm_view></mm_col>
          <mm_col><mm_view>6</mm_view></mm_col>
          <mm_col><mm_view>7</mm_view></mm_col>
          <mm_col><mm_view>8</mm_view></mm_col>
          <mm_col><mm_view>9</mm_view></mm_col>
          <mm_col><mm_view>10</mm_view></mm_col>
          <mm_col><mm_view>11</mm_view></mm_col>
          <mm_col><mm_view>12</mm_view></mm_col>
        </mm_row>
    </mm_container>
</mm_warp>`,
            code_js: `export default {
    data() {
      return {
        index: 3
      }
    },
    methods: {
      add() {
        var index = this.index + 1;
        if (index > 8) { index = 0; }
        this.index = index;
      }
    },
    computed: {
      col() {
        var arr = [1, 2, 3, 4, 5, 6, 8, 10, 12];
        var n = this.index;
        if (n >= arr.length) { n = arr.length; }
        return arr[n];
      }
    }
}`
          },
          {
            title: '自适应列数',
            code_html: `<mm_warp>
    <mm_container>
        <mm_row class="center grid-x grid-auto">
          <mm_col v-for="(o, idx) in num" :key="idx">
                <mm_view>{{ o }}</mm_view>
            </mm_col>
        </mm_row>
    </mm_container>
</mm_warp>`,
            code_js: `export default {
    data() {
      return {
        index: 3
      }
    },
    methods: {
      add() {
        var index = this.index + 1;
        if (index > 8) {
          index = 0;
        }
        this.index = index;
      }
    },
    computed: {
      col() {
        var arr = [1, 2, 3, 4, 5, 6, 8, 10, 12];
        var n = this.index;
        if (n >= arr.length) {
          n = arr.length;
        }
        return arr[n];
      }
    }
}`
          },
          {
            title: '常见响应式列',
            code_html: `<mm_warp><mm_container><mm_row :col="1" class="center grid-x">
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>1</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>2</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>3</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>4</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>5</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>6</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>7</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>8</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>9</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>10</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>11</mm_view>
    </mm_col>
    <mm_col class="col-lg-2 col-md-3 col-sm-6">
        <mm_view>12</mm_view>
    </mm_col>
</mm_row></mm_container></mm_warp>`
          }
        ]
      };
    },
    methods: {
      add() {
        var index = this.index + 1;
        if (index > 8) {
          index = 0;
        }
        this.index = index;
      },
      add_num() {
        this.num += 1;
        if (this.num > 12) {
          this.num = 1;
        }
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
    },
    computed: {
      col() {
        var arr = [1, 2, 3, 4, 5, 6, 8, 10, 12];
        var n = this.index;
        if (n >= arr.length) {
          n = arr.length;
        }
        return arr[n];
      }
    }
  };
</script>

<style></style>
