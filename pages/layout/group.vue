<template>
	<mm_page id="page_group">
		<header>
			<mm_warp>
				<mm_container>
					<mm_row>
						<mm_col width="100">
							<mm_view url="/">
								<h3>
									<span>组合框</span>
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
									<span>输入框组合</span>
									<mm_btn class="btn_primary-x fr ml-1" @click.native="copy(list[0].code)">复制代码</mm_btn>
									<mm_btn class="btn_primary fr" @click.native="is_show(0)">显示代码</mm_btn>
								</div>
								<div class="card_body">
									<mm_group>
										<input type="text" />
										<mm_btn class="btn_success-x">按钮</mm_btn>
									</mm_group>
									<br />
									<mm_group>
										<span>介绍</span>
										<input type="text" />
										<mm_btn class="btn_primary-x">按钮</mm_btn>
									</mm_group>
									<br />
									<mm_group>
										<select class="title">
											<optgroup label="分组一">
												<option>选项1</option>
												<option>选项2</option>
												<option>选项3</option>
											</optgroup>
											<optgroup label="分组二">
												<option>选项4</option>
												<option>选项5</option>
												<option>选项6</option>
											</optgroup>
										</select>
										<input type="text" />
										<mm_btn class="btn_warning-x">按钮</mm_btn>
									</mm_group>
								</div>
							</mm_card>
						</mm_col>
						<mm_col width="100">
							<mm_card>
								<div class="card_head">
									<span>按钮组合</span>
									<mm_btn class="btn_primary-x fr ml-1" @click.native="$copy(list[1].code)">复制代码</mm_btn>
									<mm_btn class="btn_primary fr" @click.native="is_show(1)">显示代码</mm_btn>
								</div>
								<div class="card_body">
									<mm_group class="group-1">
										<mm_btn class="btn_default-x">按钮</mm_btn>
										<mm_btn class="btn_default-x">按钮</mm_btn>
									</mm_group>
									<br />
									<mm_group class="b-a">
										<mm_btn class="btn_error">取消</mm_btn>
										<mm_btn class="btn_success">确定</mm_btn>
									</mm_group>
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
					title:"",
					code:``
				},
				list: [
					{
						title: "输入框组合",
						code: `<mm_group>
	<input type="text" />
	<mm_btn class="btn_success-x">按钮</mm_btn>
</mm_group>
<br />
<mm_group>
	<span>介绍</span>
	<input type="text" />
	<mm_btn class="btn_primary-x">按钮</mm_btn>
</mm_group>
<br />
<mm_group>
	<select class="title">
		<optgroup label="分组一">
			<option>选项1</option>
			<option>选项2</option>
			<option>选项3</option>
		</optgroup>
		<optgroup label="分组二">
			<option>选项4</option>
			<option>选项5</option>
			<option>选项6</option>
		</optgroup>
	</select>
	<input type="text" />
	<mm_btn class="btn_warning-x">按钮</mm_btn>
</mm_group>`
					},{
					title:"按钮组合",
					code:`<mm_group class="group-1">
	<mm_btn class="btn_default-x">按钮</mm_btn>
	<mm_btn class="btn_default-x">按钮</mm_btn>
</mm_group>
<br />
<mm_group class="b-a">
	<mm_btn class="btn_error">取消</mm_btn>
	<mm_btn class="btn_success">确定</mm_btn>
</mm_group>`
				}
				]
			}
		},
    methods:{
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
	#page_group .btn-3 .mm_group {
		margin-bottom: 1rem;
	}
</style>
