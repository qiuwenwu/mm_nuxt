<template>
  <mm_page id="page_quick">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>快捷导航</span>
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
              <button class="btn_primary-x" @click="show1 = true">显示代码</button>
            </mm_col>
            <mm_col width="100" style="text-align: center;">
              <div style="display: inline-block;">
                <nav_quick class="display_left"></nav_quick>
              </div>
            </mm_col>
            <mm_col width="100" style="height: 2rem;">
            </mm_col>
          </mm_row>
          <mm_row>
            <mm_col width="100" style="text-align: center;">
              <button class="btn_primary-x" @click="show2 = true">显示代码</button>
            </mm_col>
            <mm_col width="100">
              <nav_quick></nav_quick>
            </mm_col>
            <mm_col width="100" style="height: 2rem;">
            </mm_col>
          </mm_row>

          <mm_row>
            <mm_col width="100" style="text-align: center;">
              <button class="btn_primary-x" @click="show3 = true">显示代码</button>
            </mm_col>
            <mm_col width="100" style="text-align: center;">
              <div style="display: inline-block;">
                <nav_quick class="display_right"></nav_quick>
              </div>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js1"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show1 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show2" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js2"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show2 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show3" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js3"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show3 = false">关闭代码</button></mm_group>
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
        code1: `<nav_quick class="display_left"></nav_quick>`,
        js1: `export default {
	data(){
	list: [
	  {
	    title: "娱乐",
	    sub: [{
	    	title: "舞蹈",
	    	url: "#"
	    },
	    {
	    	title: "脱口秀",
	    	url: "#"
	    },
	  }
	]}
}`,
        show2: false,
        code2: `<nav_quick></nav_quick>`,
        js2: `export default {
	data(){
	list: [
	  {
	    title: "娱乐",
	    sub: [{
	    	title: "舞蹈",
	    	url: "#"
	    },
	    {
	    	title: "脱口秀",
	    	url: "#"
	    },
	  }
	]}
}`,
        show3: false,
        code3: `<nav_quick class="display_right"></nav_quick>`,
        js3: `export default {
	data(){
	list: [
	  {
	    title: "娱乐",
	    sub: [{
	    	title: "舞蹈",
	    	url: "#"
	    },
	    {
	    	title: "脱口秀",
	    	url: "#"
	    },
	  }
	]}
}`,
        list: undefined
      }
    },
    methods: {}
  }
</script>

<style scoped>
  main {
    overflow: initial;
  }
</style>
