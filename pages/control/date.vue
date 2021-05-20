<template>
	<mm_page id="page_chat">
		<header>
			<mm_warp>
				<mm_container>
					<mm_row>
						<mm_col width="100">
							<mm_view url="/">
								<h3>
									<span>日期选择器</span>
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
              <mm_card>
                <div class="card_head">
                  <h5>
                    <span>样式一</span>
                    <mm_btn class="btn_primary fr" @click.native="is_show(0)">显示代码</mm_btn>
                  </h5>
                </div>
                <div class="card_body">
                  <control_date>
                  </control_date>
                </div>
              </mm_card>
						</mm_col>
					</mm_row>
				</mm_container>
			</mm_warp>
		</main>
	</mm_page>
</template>

<script>
	export default {
		data() {
			return {
        show: false,
        obj: {
          title: "",
          code_html: ``,
          code_js: ``
        },
        list: [
          {
            title: "",
            code_html: ``,
            code_js: ``
          }
        ]
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
</style>
