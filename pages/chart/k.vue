<template>
	<mm_page id="page_chat">
		<header class="header">
			<mm_warp>
				<mm_container>
					<mm_row>
						<mm_col width="100">
							<mm_view url="/">
								<h3>
									<span>K线图</span>
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
							<chart_k :list="list" id="chart_k" :vm="vm" ></chart_k>
						</mm_col>
					</mm_row>
				</mm_container>
			</mm_warp>
		</main>
	</mm_page>
</template>

<script>
	export default {
		data: function() {
			return {
				list: [],
				vm: {
					open: "open",
					close: "close",
					lowest: "low",
					highest: "high",
					time: "time",
					volume: "vol"
				}
			}
		},
		methods: {
			getList() {
				var arr = [];
				var month = 1;
				for (var i = 1; i < 600; i++) {
					var num = Math.floor(Math.random() * 1000 + 500);
					var max = num * 1.1;
					var min = num * 0.9;

					// 开盘价
					var open = Math.floor(Math.random() * (max - min + 1) + min);
					// 闭盘价
					var close = Math.floor(Math.random() * (max - min + 1) + min);
					// 最低价
					var low = Math.floor(Math.random() * (max - min + 1) + min);
					// 最高价
					var high = Math.floor(Math.random() * (max - min + 1) + min);
					// 成交量
					var vol = Math.floor(Math.random() * (max - min + 1) + min);

					// 小时
					var hour = Math.floor(Math.random() * 24);
					// 分钟
					var minute = Math.floor(Math.random() * 60);
					// 秒
					var second = Math.floor(Math.random() * 60);

					var day = i % 30;
					if (!day) {
						day = 1;
						month += 1;
						month = month < 13 ? month : 1;
					}

					// 月数拼接
					var month_s = this.splicing(month, 1, 10);
					// 天数拼接
					var day_s = this.splicing(day, 1, 10);
					// 小时拼接
					var hour_s = this.splicing(hour, 1, 10);
					// 分钟拼接
					var minute_s = this.splicing(minute, 1, 10);
					// 秒拼接
					var second_s = this.splicing(second, 1, 10);
					// 日期
					var time = "2020-" + month_s + "-" + day_s + " " + hour_s + ":" + minute_s + ":" + second_s;
					
					// 数组结构
					// arr.push([time, open, close, low, high,vol]);
					
					// 对象结构
					arr.push({
						time,
						open,
						close,
						low,
						high,
						vol
					});
				}
				this.list = arr;
			},
			splicing(num, count, end) {
				var s = num;
				for (var i = 0; i < count; i++) {
					if (num < end) {
						s = "0" + s;
					} else {
						break;
					}
				}
				return s;
			}
		},
		created() {
			this.getList();
		}
	}
</script>

<style>
</style>
