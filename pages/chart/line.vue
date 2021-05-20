<template>
	<mm_page id="page_chat">
		<header>
			<mm_warp>
				<mm_container>
					<mm_row>
						<mm_col width="100">
							<mm_view url="/">
								<h3>
									<span>折线图</span>
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
							<chart_line :vm="vm" id="chartLine" title="折线图" :list="list"></chart_line>
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
						time: "2020",
						name: "麻辣香锅",
						value: 100
					},
					{
						time: "2021",
						name: "烤鸡翅",
						value: 20
					},
					{
						time: "2022",
						name: "麻辣香锅",
						value: 123
					},
					{
						time: "2023",
						name: "烤鸡翅",
						value: 300
					},
					{
						time: "2020",
						name: "孜然烤排",
						value: 123
					},
					{
						time: "2020",
						name: "烤鸡翅",
						value: 333
					},
					{
						time: "2021",
						name: "电浆爆汁鸡排",
						value: 321
					},
					{
						time: "2023",
						name: "电浆爆汁鸡排",
						value: 142
					},
					{
						time: "2021",
						name: "麻辣香锅",
						value: 243
					},
					{
						time: "2022",
						name: "香辣鸡腿",
						value: 345
					},
					{
						time: "2023",
						name: "麻辣香锅",
						value: 12
					},
					{
						time: "2024",
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
