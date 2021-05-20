<template>
  <mm_page id="page_list">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>列表</span>
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
                  <h5>
                    <span>通过父级改变列数</span>
                    <mm_btn class="btn_primary" @click.native="add()">{{ col }}列</mm_btn>
                    <mm_btn class="btn_primary fr" @click.native="is_show(0)">显示代码</mm_btn>
                  </h5>
                </div>
                <div class="card_body">
                  <mm_list :col.number="col" class="center list-x">
                    <mm_item>
                      <mm_view>1</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>2</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>3</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>4</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>5</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>6</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>7</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>8</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>9</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>10</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>11</mm_view>
                    </mm_item>
                    <mm_item>
                      <mm_view>12</mm_view>
                    </mm_item>
                  </mm_list>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                  <span>自适应列数</span>
                  <mm_btn class="btn_primary" @click.native="add_num()">{{ num }}列</mm_btn>
                  <mm_btn class="btn_primary fr" @click.native="is_show(1)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_list class="center list-x list-auto">
                    <mm_item v-for="(o, idx) in num" :key="idx">{{ o }}</mm_item>
                  </mm_list>
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
          <div class="center"><span>javascript</span></div>
          <expand_pre :code="obj.code_js"><code class="javascript"></code></expand_pre>
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
        num: 1,
        show: false,
        obj: {
          title: '',
          code_html: ``,
          code_js: ``
        },
        list: [{
            title: '通过父级改变列数',
            code_html: `<mm_list :col="col" class="center list-x">
    <mm_item><mm_view>1</mm_view></mm_item>
    <mm_item><mm_view>2</mm_view></mm_item>
    <mm_item><mm_view>3</mm_view></mm_item>
    <mm_item><mm_view>4</mm_view></mm_item>
    <mm_item><mm_view>5</mm_view></mm_item>
    <mm_item><mm_view>6</mm_view></mm_item>
    <mm_item><mm_view>7</mm_view></mm_item>
    <mm_item><mm_view>8</mm_view></mm_item>
    <mm_item><mm_view>9</mm_view></mm_item>
    <mm_item><mm_view>10</mm_view></mm_item>
    <mm_item><mm_view>11</mm_view></mm_item>
    <mm_item><mm_view>12</mm_view></mm_item>
</mm_list>`,
            code_js: `data() {
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
}`
          },
          {
            title: '自适应列数',
            code_html: `<mm_list class="center list-x list-auto">
    <mm_item v-for="(o, idx) in num" :key="idx">
        {{ o }}
    </mm_item>
</mm_list>`,
            code_js: `data() {
  return {
    num: 1
  }
},
methods: {
  add_num() {
    this.num += 1;
    if (this.num > 12) {
      this.num = 1;
    }
  }
}`
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
