<template>
  <mm_page id="page_btn">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>按钮</span>
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
          <mm_row class="row-1 row-md-2">
            <mm_col>
              <mm_card>
                <div class="card_head">
                  <span>按钮颜色——带背景</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(code1)">复制代码</button>
                  <button class="btn_primary fr" @click="show1 = true">显示代码</button>
                </div>

                <div class="card_body">
                  <mm_btn class="btn_default">默认</mm_btn>
                  <mm_btn class="btn_primary">主要</mm_btn>
                  <mm_btn class="btn_info">信息</mm_btn>
                  <mm_btn class="btn_success">成功</mm_btn>
                  <mm_btn class="btn_warning">错误</mm_btn>
                  <mm_btn class="btn_danger">警告</mm_btn>
                </div>
              </mm_card>
            </mm_col>

            <mm_col>
              <mm_card>
                <div class="card_head">
                  <span>按钮——不带背景</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(code2)">复制代码</button>
                  <button class="btn_primary fr" @click="show2 = true">显示代码</button>
                </div>

                <div class="card_body">
                  <mm_btn class="btn_default-x">默认</mm_btn>
                  <mm_btn class="btn_primary-x">主要</mm_btn>
                  <mm_btn class="btn_info-x">信息</mm_btn>
                  <mm_btn class="btn_success-x">成功</mm_btn>
                  <mm_btn class="btn_warning-x">错误</mm_btn>
                  <mm_btn class="btn_danger-x">警告</mm_btn>
                </div>
              </mm_card>
            </mm_col>

            <mm_col>
              <mm_card>
                <div class="card_head">
                  <span>全屏宽按钮</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(code3)">复制代码</button>
                  <button class="btn_primary fr" @click="show3 = true">显示代码</button>
                </div>

                <div class="card_body">
                  <mm_group><mm_btn class="btn_default">默认</mm_btn></mm_group>
                  <mm_group>
                    <mm_btn class="btn_warning">错误</mm_btn>
                    <mm_btn class="btn_success">成功</mm_btn>
                  </mm_group>

                  <mm_group>
                    <mm_btn class="btn_primary">主要</mm_btn>
                    <mm_btn class="btn_info">信息</mm_btn>
                    <mm_btn class="btn_danger">警告</mm_btn>
                  </mm_group>
                </div>
              </mm_card>
            </mm_col>

            <mm_col>
              <mm_card class="btn-3">
                <div class="card_head">
                  <span>全屏宽按钮圆角</span>
                  <button class="btn_primary-x fr ml-1" @click="$copy(code4)">复制代码</button>
                  <button class="btn_primary fr" @click="show4 = true">显示代码</button>
                </div>

                <div class="card_body">
                  <mm_group class="b-a mtb"><mm_btn class="btn_default">默认</mm_btn></mm_group>
                  <mm_group class="b-a mtb">
                    <mm_btn class="btn_warning">错误</mm_btn>
                    <mm_btn class="btn_success">成功</mm_btn>
                  </mm_group>

                  <mm_group class="b-a mtb">
                    <mm_btn class="btn_primary">主要</mm_btn>
                    <mm_btn class="btn_info">信息</mm_btn>
                    <mm_btn class="btn_danger">警告</mm_btn>
                  </mm_group>
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>

      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_table type="1">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">属性名</th>
                    <th scope="col">属性</th>
                    <th scope="col">输入类型</th>
                    <th scope="col">参数</th>
                    <th scope="col">默认值</th>
                    <th scope="col">描述</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>类型</td>
                    <td>type=""</td>
                    <td>String</td>
                    <td>button submit reset</td>
                    <td>button</td>
                    <td>button是事件按钮 submit是提交按钮 reset是重置按钮</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>链接</td>
                    <td>url=""</td>
                    <td>String</td>
                    <td>自定义</td>
                    <td>无</td>
                    <td>跳转至对应链接 加上http:或https:跳转至对应网址</td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>点击事件</td>
                    <td>@click=""</td>
                    <td>Function</td>
                    <td>自定义</td>
                    <td>无</td>
                    <td>点击时执行的事件结构为</td>
                  </tr>
                </tbody>
              </mm_table>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" display="center">
      <mm_card>
        <div class="card_head center"><span>按钮颜色——带背景</span></div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show1 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show2" mask="true" display="center">
      <mm_card>
        <div class="card_head center"><span>按钮——不带背景</span></div>
        <div class="card_body">
          <expand_pre :code="code2"><code class="html"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show2 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show3" mask="true" display="center">
      <mm_card>
        <div class="card_head center"><span>全屏宽按钮</span></div>
        <div class="card_body">
          <expand_pre :code="code3"><code class="html"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show3 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show4" mask="true" display="center">
      <mm_card>
        <div class="card_head center"><span>全屏宽按钮圆角</span></div>
        <div class="card_body">
          <expand_pre :code="code4"><code class="html"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show4 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
  </mm_page>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      code1: `<mm_btn class="btn_default">默认</mm_btn>
<mm_btn class="btn_primary">主要</mm_btn>
<mm_btn class="btn_info">信息</mm_btn>
<mm_btn class="btn_success">成功</mm_btn>
<mm_btn class="btn_warning">错误</mm_btn>
<mm_btn class="btn_danger">警告</mm_btn>`,

      code2: `<mm_btn class="btn_default-x">默认</mm_btn>
<mm_btn class="btn_primary-x">主要</mm_btn>
<mm_btn class="btn_info-x">信息</mm_btn>
<mm_btn class="btn_success-x">成功</mm_btn>
<mm_btn class="btn_warning-x">错误</mm_btn>
<mm_btn class="btn_danger-x">警告</mm_btn>`,

      code3: `<mm_group>
    <mm_btn class="btn_default">默认</mm_btn>
</mm_group>
<mm_group>
    <mm_btn class="btn_warning">错误</mm_btn>
    <mm_btn class="btn_success">成功</mm_btn>
</mm_group>
<mm_group>
    <mm_btn class="btn_primary">主要</mm_btn>
    <mm_btn class="btn_info">信息</mm_btn>
    <mm_btn class="btn_danger">警告</mm_btn>
</mm_group>`,

      code4: `<mm_group class="b-a mtb"><mm_btn class="btn_default">默认</mm_btn></mm_group>
<mm_group class="b-a mtb">
    <mm_btn class="btn_warning">错误</mm_btn>
    <mm_btn class="btn_success">成功</mm_btn>
</mm_group>
<mm_group class="b-a mtb">
    <mm_btn class="btn_primary">主要</mm_btn>
    <mm_btn class="btn_info">信息</mm_btn>
    <mm_btn class="btn_danger">警告</mm_btn>
</mm_group>`
    };
  }
};
</script>

<style>
#page_btn .h3 {
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(125, 125, 125, 0.25);
}

#page_btn .h3 span {
  float: right;
  color: #999;
  font-size: 1rem;
  padding-top: 0.75rem;
}

#page_btn .attribute {
  width: 50%;
}
</style>
