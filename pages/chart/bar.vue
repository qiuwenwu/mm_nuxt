<template>
	<mm_page id="page_chat">
		<header>
			<mm_warp>
				<mm_container>
					<mm_row>
						<mm_col width="100">
							<mm_view url="/">
								<h3>
									<span>条形图</span>
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
							<chart_bar :vm="vm" id="chartBar" title="条形图" :list="list"></chart_bar>
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
				list: [
					{
						time: "星期一",
						name: "麻辣香锅",
						value: 100
					},
					{
						time: "星期一",
						name: "烤鸡翅",
						value: 20
					},
					{
						time: "星期二",
						name: "麻辣香锅",
						value: 123
					},
					{
						time: "星期二",
						name: "烤鸡翅",
						value: 300
					},
					{
						time: "星期三",
						name: "孜然烤排",
						value: 123
					},
					{
						time: "星期三",
						name: "烤鸡翅",
						value: 333
					},
					{
						time: "星期三",
						name: "电浆爆汁鸡排",
						value: 321
					},
					{
						time: "星期四",
						name: "电浆爆汁鸡排",
						value: 142
					},
					{
						time: "星期四",
						name: "麻辣香锅",
						value: 243
					},
					{
						time: "星期五",
						name: "香辣鸡腿",
						value: 345
					},
					{
						time: "星期六",
						name: "麻辣香锅",
						value: 12
					},
					{
						time: "星期日",
						name: "麻辣香锅",
						value: 52
					}
				],
				vm: {name:"name",time:"time",value:"value"}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
