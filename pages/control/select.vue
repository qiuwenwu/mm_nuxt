<template>
  <mm_page id="page_select">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>选择框</span>
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
          <mm_row class="pb">
            <mm_col class="col-12 col-md-33">
              <mm_card class="pc">
                <div class="card_head">
                  <h5>
                    <span>样式一 (原生)</span>
                    <button class="btn_primary fr" @click="is_show(0)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_select v-model="value" :options="options"></control_select>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-33">
              <mm_card class="pc">
                <div class="card_head">
                  <h5>
                    <span>样式二 (鼠标经过 hover)</span>
                    <button class="btn_primary fr" @click="is_show(1)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_select v-model="value" :options="options" type="hover"></control_select>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-33">
              <mm_card class="pc">
                <div class="card_head">
                  <h5>
                    <span>样式三 (获取焦点 focus)</span>
                    <button class="btn_primary fr" @click="is_show(2)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_select v-model="value" :options="options" type="focus"></control_select>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-33">
              <mm_card class="pc">
                <div class="card_head">
                  <h5>
                    <span>样式四 (点击 click)</span>
                    <button class="btn_primary fr" @click="is_show(3)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_select v-model="value" :options="options" type="click"></control_select>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-33">
              <mm_card class="pc">
                <div class="card_head">
                  <h5>
                    <span>样式五 (带图标)</span>
                    <button class="btn_primary fr" @click="is_show(4)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_select v-model="value" :options="options" type="click" class="select_diy">
                    <mm_icon src="/img/avatar.png"></mm_icon>
                  </control_select>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-33">
              <mm_card class="pc">
                <div class="card_head">
                  <h5>
                    <span>样式六 (多选)</span>
                    <button class="btn_primary fr" @click="is_show(5)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_select v-model="value" :options="options" type="multiple"></control_select>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12">
              <mm_card>
                <div class="card_body">
                  选择结果：{{ value }}
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show" mask="true" display="center">
      <mm_card>
        <div class="card_head center"><span>{{ obj.title }}</span></div>
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
        value: "3",
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
            title: "样式一 (原生)",
            code_html: `<control_select v-model="value" :options="options">
</control_select>`,
            code_js: `export default {
  data() {
    return {
      value: "3",
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
      ]
    }
  }
}`
          },
          {
            title: "样式二 (鼠标经过 hover)",
            code_html: `<control_select v-model="value" :options="options" type="hover">
</control_select>`,
            code_js: `export default {
  data() {
    return {
      value: "3",
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
      ]
    }
  }
}`
          },
          {
            title: "样式三 (获取焦点 focus)",
            code_html: `<control_select v-model="value" :options="options" type="focus">
</control_select>`,
            code_js: `export default {
  data() {
    return {
      value: "3",
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
      ]
    }
  }
}`
          },
          {
            title: "样式四 (点击 click)",
            code_html: `<control_select v-model="value" :options="options" type="click">
</control_select>`,
            code_js: `export default {
  data() {
    return {
      value: "3",
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
      ]
    }
  }
}`
          },

          {
            title: "样式五 (带图标)",
            code_html: `<control_select v-model="value" :options="options" type="click" class="select_diy">
  <mm_icon src="/img/avatar.png"></mm_icon>
</control_select>`,
            code_js: `export default {
  data() {
    return {
      value: "3",
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
      ]
    }
  }
}`
          },
          {
            title: "样式六 (多选)",
            code_html: `<control_select v-model="value" :options="options" type="multiple">
</control_select>`,
            code_js: `export default {
  data() {
    return {
      value: "3",
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
      ]
    }
  }
}`
          }
        ]
      }
    },
    methods: {
      is_show(i) {
        this.show = !this.show;
        if (this.show && i >= 0) {
          var o = this.list[i];
          this.obj = JSON.parse(JSON.stringify(o));
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

<style scoped="scoped">
  #page_select .select_diy img {
    width: 2rem;
  }

  #page_select .card_body {
    padding-bottom: 8rem;
  }
</style>
