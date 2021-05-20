<template>
  <mm_page id="page_pre">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>源代码</span>
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
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">带复制
                <button class="btn_primary fr" @click="show1 = true">显示代码</button>
                </div>
                <div class="card_body">
                  <expand_pre :code="code">
                    <code class="javascript"></code>
                  </expand_pre>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">不带复制
                <button class="btn_primary fr" @click="show2 = true">显示代码</button>
                </div>
                <div class="card_body">
                  <expand_pre>
                    <code class="typescript">
                      {{ code }}
                    </code>
                  </expand_pre>
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" display="center">
      <mm_card>
        <div class="card_head">带复制 html</div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">javascript</div>
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
          <div class="card_head">不带复制 html</div>
          <div class="card_body">
            <expand_pre :code="code2"><code class="html"></code></expand_pre>
          </div>
          <div class="card_body">javascript</div>
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
  import expand_pre from '@/components/mm/expand/expand_pre.vue';

  export default {
    components: {
      expand_pre
    },
    data() {
      return {
        show1: false,
        code1: `<expand_pre>
  <code class="typescript">
    {{ code }}
  </code>
</expand_pre>`,
        show2: false,
        code2: `<expand_pre>
  <code class="typescript">
    {{ code }}
  </code>
</expand_pre>`,
        code: `
var date = new Date();
export default {
template: __template__,
	components: {
		expand_pre
	}
}`,
        js:`export default {
components: {
  expand_pre
  },
data() {
  return {
    code: ''
    }
  }
}`
      }
    }
  }
</script>

<style>
</style>
