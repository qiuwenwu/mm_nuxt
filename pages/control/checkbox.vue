<template>
  <mm_page id="page_checkbox">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>复选框</span>
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
              <mm_card class="pc">
                <div class="card_head">
                  <h5>
                    <span>样式一(PC)</span>
                    <button class="btn_primary fr" @click="is_show(0)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_checkbox :symbol="symbol" v-model="value" :options="options"></control_checkbox>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card class="mobile">
                <div class="card_head">
                  <h5>
                    <span>样式二(mobile)</span>
                    <button class="btn_primary fr" @click="is_show(1)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_checkbox :symbol="symbol" v-model="value" :options="options"></control_checkbox>
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_card>
                <div class="card_body">
                  选择结果：{{ value }}
                  <input class="fr" style="width: 4rem;" placeholder="分隔符" v-model="symbol">
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show" mask="true" display="center">
      <mm_card>
        <div class="card_head center"><span>{{obj.title}}</span></div>
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
        value: "",
        symbol: ",",
        options: [{
            name: "选项一",
            value: "1",
          },
          {
            name: "选项二",
            value: "2",
          },
          {
            name: "选项三",
            value: "3",
          }
        ],
        
        show: false,
        obj: {
          title: "",
          code_html: ``,
          code_js: ``
        },

        list: [{
            title: "样式一",
            code_html: `<mm_card class="pc">
  <control_checkbox v-model="value" :options="options"></control_checkbox>
</mm_card>`,
            code_js: `symbol: ",",
value: "",
options: [{
    name: "选项一",
    value: "1",
  },
  {
    name: "选项二",
    value: "2",
  },
  {
    name: "选项三",
    value: "3",
  }
]`
          },
          {
            title: "样式二",
            code_html: `<mm_card class="mobile">
  <control_checkbox v-model="value" :options="options"></control_checkbox>
</mm_card>`,
            code_js: `symbol: ",",
value: "",
options: [{
    name: "选项一",
    value: "1",
  },
  {
    name: "选项二",
    value: "2",
  },
  {
    name: "选项三",
    value: "3",
  }
]`
          }
        ]
      }
    },
    methods: {
      is_show(i) {
        this.show = !this.show;
        if (this.show && i >= 0) {
          var o = JSON.stringify(this.list[i]);
          console.log(o);
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
