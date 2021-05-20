<template>
  <mm_page id="page_btn">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>开关</span>
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
                <div class="card_head">PC版</div>
                <div class="card_body">
                  <mm_view>
                    <h5>
                      <span>样式一</span>
                      <button class="btn_primary fr" @click="is_show(0)">显示代码</button>
                    </h5>
                    <control_switch title="开关" v-model="value"></control_switch>
                  </mm_view>
                  <mm_view>
                    <h5>
                      <span>样式二</span>
                      <button class="btn_primary fr" @click="is_show(1)">显示代码</button>
                    </h5>
                    <control_switch title="开关" v-model="value" display="2"></control_switch>
                  </mm_view>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card class="mobile">
                <div class="card_head">Mobile版本</div>
                <div class="card_body">
                  <mm_view>
                    <h5>
                      <span>样式三</span>
                      <button class="btn_primary fr" @click="is_show(2)">显示代码</button>
                    </h5>
                    <control_switch title="开关" v-model="value"></control_switch>
                  </mm_view>
                  <mm_view>
                    <h5>
                      <span>样式四</span>
                      <button class="btn_primary fr" @click="is_show(3)">显示代码</button>
                    </h5>
                    <control_switch title="开关" v-model="value" display="2"></control_switch>
                  </mm_view>
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
        value: 1,

        show: false,

        obj: {
          title: "",
          code_html: ``,
          code_js: ``
        },

        list: [{
            title: "样式一",
            code_html: `<div class="pc">
  <control_switch title="开关" v-model="value"></control_switch>
</div>`,
            code_js: `export default {
  data() {
    return {
      value: 1
    }
  }
}`
          },
          {
            title: "样式二",
            code_html: `<div class="pc">
  <control_switch title="开关" v-model="value" display="2"></control_switch>
</div>`,
            code_js: `export default {
  data() {
    return {
      value: 1
    }
  }
}`
          },
          {
            title: "样式三",
            code_html: `<div class="mobile">
  <control_switch title="开关" v-model="value"></control_switch>
</div>`,
            code_js: `export default {
  data() {
    return {
      value: 1
    }
  }
}`
          },
          {
            title: "样式四",
            code_html: `<div class="mobile">
  <control_switch title="开关" v-model="value" display="2"></control_switch>
</div>`,
            code_js: `export default {
  data() {
    return {
      value: 1
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

<style>
</style>
