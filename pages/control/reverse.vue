<template>
  <mm_page id="page_reverse">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>反转器</span>
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
              <mm_card>
                <div class="card_head">
                  <h5>
                    <span>样式一</span>
                    <button class="btn_primary fr" @click="is_show(0)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_reverse title="时间" v-model="query.orderby" :options="options_time" :func="callback">
                  </control_reverse>
                  <control_reverse title="人气" v-model="query.orderby" :options="options_hot" :func="callback">
                  </control_reverse>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">
                  <h5>
                    <span>样式二</span>
                    <button class="btn_primary fr" @click="is_show(1)">显示代码</button>
                  </h5>
                </div>
                <div class="card_body">
                  <control_reverse title="时间" v-model="query.orderby" :options="options_time" :func="callback"
                    display="2"></control_reverse>
                  <control_reverse title="人气" v-model="query.orderby" :options="options_hot" :func="callback"
                    display="2"></control_reverse>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_body">排序方式 {{ query.orderby }}</div>
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
        query: {
          orderby: "`create_time` asc"
        },
        options_time: ["`create_time` asc", "`create_time` desc"],
        options_hot: ["`hot` asc", "`hot` desc"],

        show: false,

        obj: {
          title: "",
          code_html: ``,
          code_js: ``
        },

        list: [{
          title: "样式一",
          code_html: `<control_reverse title="时间" v-model="query.orderby"
  :options="options_time" :func="callback">
</control_reverse>
<control_reverse title="人气" v-model="query.orderby"
  :options="options_hot" :func="callback">
</control_reverse>`,
          code_js: `export default {
  data() {
		return {
			query: {
				orderby: "\`create_time\` asc"
			},
			options_time: ["\`create_time\` asc", "\`create_time\` desc"],
			options_hot: ["\`hot\` asc", "\`hot\` desc"],
    }
  },
  methods: {
  	callback(val) {
  		// 可用于查询
  		console.log('当前值', val);
  	}
  }
}`
        },
        {
          title: "样式二",
          code_html: `<control_reverse title="时间" v-model="query.orderby"
  :options="options_time" :func="callback" display="2">
</control_reverse>
<control_reverse title="人气" v-model="query.orderby"
  :options="options_hot" :func="callback" display="2">
</control_reverse>`,
          code_js: `export default {
  data() {
    return {
      query: {
        orderby: "\`create_time\` asc"
      },
      options_time: ["\`create_time\` asc", "\`create_time\` desc"],
      options_hot: ["\`hot\` asc", "\`hot\` desc"],
    }
  },
  methods: {
    callback(val) {
      // 可用于查询
      console.log('当前值', val);
    }
  }
}`
        }]

      }
    },
    methods: {
      callback(val) {
        // 可用于查询
        console.log('当前值', val);
      },
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
