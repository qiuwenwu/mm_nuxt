<template>
  <mm_page id="page_qrcode">
    <header class="header">
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>二维码</span>
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
                <div class="card_head">扫码跳转（基础）
                  <button class="btn_primary fr" @click="show1 = true">显示代码</button>
                </div>
                <div class="card_body pa center">
                  <expand_qrcode :url="url"></expand_qrcode>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">二维码（内容）
                  <button class="btn_primary fr" @click="show2 = true">显示代码</button>
                </div>
                <div class="card_body pa center">
                  <expand_qrcode :value="value"></expand_qrcode>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">扫码跳转（带图标和大小参数）
                  <button class="btn_primary fr" @click="show3 = true">显示代码</button>
                </div>
                <div class="card_body pa center">
                  <expand_qrcode :url="url" :icon="icon" :width="220"></expand_qrcode>
                </div>
              </mm_card>
            </mm_col>
            <mm_col class="col-12 col-md-6">
              <mm_card>
                <div class="card_head">扫码跳转（带图标和颜色参数）
                  <button class="btn_primary fr" @click="show4 = true">显示代码</button>
                </div>
                <div class="card_body pa center">
                  <expand_qrcode :url="url" :icon="icon" foreground="blue" :width="220"></expand_qrcode>
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <mm_modal v-model="show1" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>扫码跳转（基础） html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code1"><code class="html"></code></expand_pre>
        </div>
        <div class="card_body">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js1"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show1 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show2" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>二维码（内容）html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code2"><code class="html"></code></expand_pre>
        </div>
        <div class="card_head">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js2"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show2 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show3" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>扫码跳转（带图标和大小参数）html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code3"><code class="html"></code></expand_pre>
        </div>
        <div class="card_head">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js3"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show3 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
    <mm_modal v-model="show4" mask="true" display="center">
      <mm_card>
        <div class="card_head">
          <span>扫码跳转（带图标和颜色参数）html</span>
        </div>
        <div class="card_body">
          <expand_pre :code="code4"><code class="html"></code></expand_pre>
        </div>
        <div class="card_head">
          <span>javascript</span>
        </div>
        <div class="card_body">
          <expand_pre :code="js4"><code class="javascript"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show4 = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
  </mm_page>
</template>

<script>
  import expand_qrcode from '@/components/mm/expand/expand_qrcode.vue';

  export default {
    components: {
      expand_qrcode
    },
    data() {
      return {
        show1: false,
        code1: `<expand_qrcode :url="url"></expand_qrcode>`,
        js1:`data() {
  return {
    url: "http://www.baidu.com",
  }
}`,
        show2: false,
        code2: `<expand_qrcode :value="value"></expand_qrcode>`,
        js2:`data() {
  return {
    value: "扫码查看的二维码内容，限255个字"
  }
}`,
        show3: false,
        code3: `<expand_qrcode :url="url" :icon="icon" :width="220"></expand_qrcode>`,
        js3:`data() {
  return {
    url: "http://www.baidu.com",
    icon: "http://localhost:5000/img/logo.png"
  }
}`,
        show4: false,
        code4: `<expand_qrcode :url="url" :icon="icon" foreground="blue" :width="220"></expand_qrcode>`,
        js4:`data() {
  return {
    url: "http://www.baidu.com",
    icon: "http://localhost:5000/img/logo.png",
  }
}`,
        url: "http://www.baidu.com",
        icon: "http://localhost:5000/img/logo.png",
        value: "扫码查看的二维码内容，限255个字"
      }
    }
  }
</script>

<style>
</style>
