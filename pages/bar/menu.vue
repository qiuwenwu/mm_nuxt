<template>
  <mm_page id="page_chat">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>菜单栏</span>
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
              <span>换行</span>
              <button class="btn_primary-x" @click="show1 = true">显示代码</button>
            </mm_col>
          </mm_row>
          <mm_row>
            <mm_col width="100">
              <mm_view>
                <bar_menu :func="func_menu" :list="list">
                </bar_menu>
              </mm_view>
            </mm_col>
          </mm_row>
          <mm_row>
            <mm_col width="100">
              <span>不换行</span>
              <button class="btn_primary-x" @click="show2 = true">显示代码</button>
            </mm_col>
          </mm_row>
          <mm_row>
            <mm_col width="100">
              <mm_view>
                <bar_menu :func="func_menu" class="display-2">
                </bar_menu>
              </mm_view>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>换行 html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show1 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show2" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>不换行 html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code2"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show2 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
  </mm_page>
</template>

<script>
  import mixin from '@/mixins/page.js'
  export default {
    mixins: [mixin],
    data() {
      return {
        show1: false,
        code1: `<bar_menu :func="func_menu" :list="list"></bar_menu>
        `,
        show2: false,
        code2: `<bar_menu :func="func_menu" class="display-2"></bar_menu>
        `,
        js: `export default {
data() {
  return {list: undefined}
  },
  methods: {
    func_menu(o){
      console.log(o);
    },
  }
}`,
        list: undefined
      }
    },
    methods: {
      func_menu(o) {
        console.log(o);
      }
    }
  }
</script>

<style>
</style>
