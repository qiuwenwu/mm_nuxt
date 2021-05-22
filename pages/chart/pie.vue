<template>
	<mm_page id="page_chat">
		<header class="header">
			<mm_warp>
				<mm_container>
					<mm_row>
						<mm_col width="100">
							<mm_view url="/">
								<h3>
									<span>饼形图</span>
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
							<mm_view>
								<chart_pie id="chartPie" title="饼状图" :list="list" type="参数">
								</chart_pie>
							</mm_view>
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
				list: [{
						name: "参数1",
						value: 1000
					}, {
						name: "参数2",
						value: 123
					}, {
						name: "参数3",
						value: 10
					}, {
						name: "参数4",
						value: 123
					}

				]
			}
		},
		methods: {}
	}
</script>

<style>
</style>
