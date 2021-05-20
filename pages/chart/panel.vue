<template>
	<mm_page id="page_chat">
		<header>
			<mm_warp>
				<mm_container>
					<mm_row>
						<mm_col width="100">
							<mm_view url="/">
								<h3>
									<span>仪表盘</span>
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
							<chart_panel id="chart_panel" :name="name" :value="value" :color="color" :suffix="suffix"
								:info="info"></chart_panel>
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
				// 参数名
				name: "实境测试",
				// 值在1-0之间
				value: 0.5,
				// 可以设计4个色
				color: [
					[0.25, '#7CFFB2'],
					[0.5, '#FF6E76'],
					[0.75, '#58D9F9'],
					[1, '#FDDD60']
				],
				info: function(value) {
					// 总共9个标识
					if (value === 1) {
						return '1';
					} else if (value === 0.875) {
						return '0.875';
					} else if (value === 0.75) {
						return '0.75';
					} else if (value === 0.625) {
						return '0.625';
					} else if (value === 0.5) {
						return '0.5';
					} else if (value === 0.375) {
						return '0.375';
					} else if (value === 0.25) {
						return '0.25';
					} else if (value === 0.125) {
						return '0.125';
					} else if (value === 0) {
						return '0';
					}
				},
				// 后缀
				suffix: "分"
			}
		},
		methods: {}
	}
</script>

<style>
</style>
