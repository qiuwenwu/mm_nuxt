<template>
  <mm_page id="page_modal">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>模态窗</span>
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
              <mm_view>
                <h5>点击按钮测试</h5>
                <mm_btn class="btn_primary" @click.native="is_mask()">遮罩{{ mask }}</mm_btn>
                <mm_btn class="btn_primary" @click.native="mask ? show1 = !show1 : show2 = !show2">显示模态窗
                  {{ mask ? show1 : show2 }}</mm_btn>
                <mm_btn class="btn_primary" @click.native="is_show(0)">显示代码</mm_btn>
              </mm_view>

              <mm_view>
                <h5>出入场方式 {{ value }}</h5>
                <control_radio v-model="value" :options="options"></control_radio>
              </mm_view>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" :display="value">
      <mm_card>
        <div class="card_head">块头</div>
        </div>
        <div class="card_body">
          <p>&nbsp;</p>内容主体<p>&nbsp;</p>
        </div>
        <div class="card_foot">块脚</div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show2" :display="value">
      <mm_card>
        <div class="card_head">块头 <a class="fr btn-link" href="javascript:void(0)" @click="show2 = false">×</a></div>
        </div>
        <div class="card_body">
          <p>&nbsp;</p>内容主体<p>&nbsp;</p>
        </div>
        <div class="card_foot">块脚</div>
      </mm_card>
    </mm_modal>
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
        show1: false,
        show2: false,
        value: "default",
        mask: false,

        options: [{
          name: "默认",
          value: "default"
        }, {
          name: "中间",
          value: "center"
        }, {
          name: "左边",
          value: "left"
        }, {
          name: "右边",
          value: "right"
        }, {
          name: "上边",
          value: "top"
        }, {
          name: "下边",
          value: "bottom"
        }],

        show: false,
        obj: {
          title: "",
          code_html: ``,
          code_js: ``
        },
      }
    },
    methods: {
      is_mask() {
        this.mask = !this.mask;
        this.show1 = false;
        this.show2 = false;
      },
      is_show() {
        this.show = !this.show
        if (this.show) {
          var mask_str = "";
          var value = this.value;
          var close = "";
          var title = "模态窗";

          if (this.mask) {
            title += " 带遮罩";
            mask_str = ` mask="true"`;
          } else {
            close = `
      <a class="fr btn-link"
        href="javascript:void(0)" @click="show = false">×</a>`;
          }

          this.obj = {
            title,
            code_html: `<mm_btn class="btn_primary" @click.native="show = !show">
  显示模态窗 {{ show }}
</mm_btn>
<mm_modal v-model="show"${mask_str} display="${value}">
  <mm_card>
    <div class="card_head">
      <span>块头</span>${close}
    </div>
    <div class="card_body">
      <p>&nbsp;</p>内容主体<p>&nbsp;</p>
    </div>
    <div class="card_foot">块脚</div>
  </mm_card>
</mm_modal>`,
            code_js: `export default {
  data() {
    return {
      show: false
    }
  }
}`
          }
        } else {
          this.obj = {
            title: "",
            code_html: ``,
            code_js: ``
          }
        }
      }
    }
  }
</script>

<style>
</style>
