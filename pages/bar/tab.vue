<template>
  <mm_page id="page_tab">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>标签栏</span>
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
            <mm_col width="100" style="text-align: center;">
              <span>单行无图不换行</span>
              <button class="btn_primary-x" @click="show1 = true">显示代码</button>
            </mm_col>
            <mm_col width="100">
              <mm_view>
                <bar_tab class="display-2" icon_key="" :list="list" :func="func_tab">
                </bar_tab>
              </mm_view>
            </mm_col>
            <mm_col width="100" style="text-align: center;">
              <span>单行有图左右结构不换行</span>
              <button class="btn_primary-x" @click="show2 = true">显示代码</button>
            </mm_col>
            <mm_col width="100">
              <mm_view>
                <bar_tab class="item-lr img-mini display-2" :list="list" :func="func_tab">
                </bar_tab>
              </mm_view>
            </mm_col>
            <mm_col width="100" style="text-align: center;">
              <span>单列无图不换行</span>
              <button class="btn_primary-x" @click="show3 = true">显示代码</button>
            </mm_col>
            <mm_col width="25">
              <mm_view style="height: 25rem;">
                <bar_tab icon_key="" class="display-1" :list="list" :func="func_tab">
                </bar_tab>
              </mm_view>
            </mm_col>
            <mm_col width="75" style="background-color: #efefef;">
              <mm_view>
              </mm_view>
            </mm_col>
            <mm_col width="100" style="text-align: center;">
              <span>单行有图上下结构不换行</span>
              <button class="btn_primary-x" @click="show4 = true">显示代码</button>
            </mm_col>
            <mm_col width="100">
              <mm_view>
                <bar_tab class="display-2 item-tb img-base" :list="list" :func="func_tab">
                </bar_tab>
              </mm_view>
            </mm_col>
            <mm_col width="100" style="text-align: center;">
              <span>单列有图左右结构不换行</span>
              <button class="btn_primary-x" @click="show5 = true">显示代码</button>
            </mm_col>
            <mm_col width="25">
              <mm_view style="height: 25rem;">
                <bar_tab class="display-1 item-lr img-mini" :list="list" :func="func_tab">
                </bar_tab>
              </mm_view>
            </mm_col>
            <mm_col width="75" style="background-color: #efefef;">
              <mm_view>
              </mm_view>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>单行无图不换行 html</span>
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
          <span>单行有图左右结构不换行 html</span>
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
    <mm_modal v-model="show3" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>单列无图不换行 html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code3"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show3 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show4" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>单行有图上下结构不换行 html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code4"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show4 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show5" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>单列有图左右结构不换行 html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code5"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show5 = false">关闭代码</button></mm_group>
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
        code1: `<bar_tab class="display-2" icon_key="" :list="list" :func="func_tab"></bar_tab>
        `,
        show2: false,
        code2: `bar_tab class="item-lr img-mini display-2" :list="list" :func="func_tab"></bar_tab>
        `,
        show3: false,
        code3: `<bar_tab icon_key="" class="display-1" :list="list" :func="func_tab"></bar_tab>
        `,
        show4: false,
        code4: `<bar_tab class="display-2 item-tb img-base" :list="list" :func="func_tab"></bar_tab>
        `,
        show5: false,
        code5: `<bar_tab class="display-1 item-lr img-mini" :list="list" :func="func_tab"></bar_tab>
        `,
js: `export default {
data() {
  return {list: undefined}
  },
  methods: {
    func_tab(o){
      console.log(o);
    },
  }
}`,
        list: undefined
      }
    },
    methods: {
      func_tab(o) {
        console.log(o)
      }
    }
  }
</script>

<style>
</style>
