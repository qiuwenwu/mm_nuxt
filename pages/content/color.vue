<template>
  <mm_page id="page_color">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>颜色</span>
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
                  <span>炫彩</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(list[0].code)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(0)">显示代码</button>
                </div>
                <div class="card_body">
                  <mm_list :col="5">
                    <mm_item><a href="javascript:void(0)" class="wave linear_red-1"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_red-2"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_yellow-1"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_yellow-2"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_green-1"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_green-2"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_blue-1"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_blue-2"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_purple-1"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_purple-2"></a></mm_item>
                  </mm_list>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                  <span>炫彩(无高光)</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(list[1].code)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(1)">显示代码</button>
                </div>
                <div class="card_body">
                  <mm_list :col="5">
                    <mm_item><a href="javascript:void(0)" class="wave linear_red"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_yellow"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_green"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_blue"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave linear_purple"></a></mm_item>
                  </mm_list>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                  <span>常规</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(list[2].code)">复制代码</button>
                  <button class="btn_primary fr" @click="is_show(2)">显示代码</button>
                </div>
                <div class="card_body">
                  <mm_list :col="5">
                    <mm_item><a href="javascript:void(0)" class="wave bg_red"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave bg_yellow"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave bg_green"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave bg_blue"></a></mm_item>
                    <mm_item><a href="javascript:void(0)" class="wave bg_purple"></a></mm_item>
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
      list: [
        {
          title: '炫彩',
          code: `<mm_list :col="5">
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_red-1"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_red-2"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_yellow-1"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_yellow-2"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_green-1"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_green-2"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_blue-1"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_blue-2"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_purple-1"></a>
    </mm_item>
    <mm_item>
        <a href="javascript:void(0)" class="wave linear_purple-2"></a>
    </mm_item>
</mm_list>`
        },
        {
          title: '炫彩(无高光)',
          code: `<mm_list :col="5">
    <mm_item><a href="javascript:void(0)" class="wave linear_red"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave linear_yellow"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave linear_green"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave linear_blue"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave linear_purple"></a></mm_item>
</mm_list>`
        },
        {
          title: '常规',
          code: `<mm_list :col="5">
    <mm_item><a href="javascript:void(0)" class="wave bg_red"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave bg_yellow"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave bg_green"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave bg_blue"></a></mm_item>
    <mm_item><a href="javascript:void(0)" class="wave bg_purple"></a></mm_item>
</mm_list>`
        }
      ]
    };
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
};
</script>

<style>
#page_color .mm_item a {
  display: block;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
}
</style>
