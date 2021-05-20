<template>
  <mm_page id="page_div">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>块</span>
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
          <mm_row class="center">
            <mm_col width="100">
              <mm_view>
                <h5>
                  <span>无圆角</span>
                </h5>
                <div class="center">
                  <mm_btn class="btn_primary-x ml-1" @click.native="$copy(list[0].code)">复制代码</mm_btn>
                  <mm_btn class="btn_primary" @click.native="is_show(0)">显示代码</mm_btn>
                </div>
              </mm_view>
            </mm_col>
            <mm_col width="50">
              <mm_card class="b-n">
                <div class="card_head">块头</div>
                <div class="card_body">
                  <p>&nbsp;</p>内容主体<p>&nbsp;</p>
                </div>
                <div class="card_foot">块脚</div>
              </mm_card>
            </mm_col>
            <mm_col width="50">
              <mm_card class="b-n">
                <div class="card_head">块头</div>
                <div class="card_body">
                  <p>&nbsp;</p>内容主体<p>&nbsp;</p>
                </div>
                <div class="card_foot bt">块脚</div>
              </mm_card>
            </mm_col>

            <mm_col width="100">
              <mm_view>
                <h5>带圆角块</h5>
                <div class="center">
                  <mm_btn class="btn_primary-x ml-1" @click.native="$copy(list[1].code)">复制代码</mm_btn>
                  <mm_btn class="btn_primary" @click.native="is_show(1)">显示代码</mm_btn>
                </div>
              </mm_view>
            </mm_col>
            <mm_col width="50">
              <mm_card class="ba b-a">
                <div class="card_head">块头</div>
                <div class="card_body">
                  <p>&nbsp;</p>内容主体<p>&nbsp;</p>
                </div>
                <div class="card_foot bt">块脚</div>
              </mm_card>
            </mm_col>
            <mm_col width="50">
              <mm_card>
                <div class="card_head">块头</div>
                <div class="card_body">
                  <p>&nbsp;</p>内容主体<p>&nbsp;</p>
                </div>
                <div class="card_foot">块脚</div>
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
          <expand_pre :code="obj.code"><code class="html"></code></expand_pre>
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
        show: false,
        obj: {
          title: "",
          code: ``
        },
        list: [{
            title: "无圆角",
            code: `<mm_card class="b-n">
  <div class="card_head">块头</div>
  <div class="card_body">
    <p>&nbsp;</p>内容主体<p>&nbsp;</p>
  </div>
  <div class="card_foot">块脚</div>
</mm_card>
<mm_card class="b-n">
  <div class="card_head">块头</div>
  <div class="card_body">
    <p>&nbsp;</p>内容主体<p>&nbsp;</p>
  </div>
  <div class="card_foot bt">块脚</div>
</mm_card>`
          },
          {
            title: "带圆角块",
            code: `<mm_card class="ba b-a">
  <div class="card_head">块头</div>
  <div class="card_body">
    <p>&nbsp;</p>内容主体<p>&nbsp;</p>
  </div>
  <div class="card_foot bt">块脚</div>
</mm_card>
<mm_card>
  <div class="card_head">块头</div>
  <div class="card_body">
    <p>&nbsp;</p>内容主体<p>&nbsp;</p>
  </div>
  <div class="card_foot">块脚</div>
</mm_card>`
          }
        ],
      }
    },
    methods: {
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
  #page_div header,
  #page_div footer {
    background: #FDFDFD;
  }
</style>
