<template>
  <div class="page_root" id="root_index">
    <header>
      <!-- LOGO -->
      <expand_sptite :pos="{ x: 16, y: 16 }">
        <button class="mm_btn btn_link">
          <img style="height: 2.5rem;" src="/img/logo.png" alt="">
          <span style="font-weight: 600;color: #000; display: block;font-size: 0.875rem;">SHELL</span>
        </button>
      </expand_sptite>

      <!-- 左边队列 -->
      <expand_sptite class="tb" v-for="(o, i) in list_left" :key="o.name + i" :client="o.client" :name="o.name"
        :size="o.size" :pos="o.pos" :align="o.align" :tag="o.tag" :type="o.type" :text="$t('root.btn_' + o.name)"
        :src="o.src" background="o.background" :z-index="o.zIndex" @click.native="event_click(o.name)">
      </expand_sptite>

      <!-- 连接钱包 -->
      <expand_sptite :pos="{ x: 8, y: 16 }" :align="{ x: 'right', y: 'top' }">
        <button class="mm_btn btn_link">
          <img style="height: 3rem;" src="/img/metamask.png" alt="">
          <span>{{ $t('root.btn_connect') }}</span>
        </button>
      </expand_sptite>

      <!-- 右边队列 -->
      <expand_sptite class="tb" v-for="(o, i) in list_right" :key="o.name + i" :client="o.client" :name="o.name"
        :size="o.size" :pos="o.pos" :align="o.align" :tag="o.tag" :type="o.type" :text="$t('root.btn_' + o.name)"
        :src="o.src" background="o.background" :z-index="o.zIndex" @click.native="event_click(o.name)">
      </expand_sptite>

      <!-- 语言 -->
      <expand_sptite :pos="{ x: 0, y: 128 }" :align="{ x: 'right', y: 'bottom' }">
        <div class="lang" @click="select_lang()">
          <img style="height: 1.5rem;" :src="'/img/' + lang_type + '.png'" alt="">
          <span>{{ lang_type }}</span>
        </div>
      </expand_sptite>

      <!-- 底部队列 -->
      <expand_sptite v-for="(o, i) in list_bottom" :key="o.name + i" :client="o.client" :name="o.name" :size="o.size"
        :pos="o.pos" :align="o.align" :tag="o.tag" :type="o.type" :text="o.text" :src="o.src" background="o.background"
        :z-index="o.zIndex">
      </expand_sptite>
    </header>

    <!-- 加载  -->
    <main>
      <div class="bg">
        <img class="bg_flash left" src="/img/flash.gif" alt="">
        <img class="bg_flash right" src="/img/flash.gif" alt="">
        <img class="bg_img" src="/img/bg.jpg" alt="">
        <!--        <expand_sptite :pos="{ x: 140, y: 0 }" :align="{ x: 'right', y: 'center' }" v-drag>
          <img src="/img/go.gif" alt="">
        </expand_sptite> -->
      </div>
    </main>

    <mm_modal v-model="show_notice" mask="true" :display="'default'">
      <div class="bg_notice center" @click="show = false">
        <img class="img_notice" src="/img/bg_notice.png" />
        <div class="notice" v-html="'Coming<br/>soon'">
        </div>
      </div>
    </mm_modal>

    <mm_modal v-model="show_nft" mask="true" :display="'default'">
      <nft></nft>
    </mm_modal>

    <mm_modal v-model="show_pool" mask="true" :display="'default'">
      <pool></pool>
    </mm_modal>

    <mm_modal v-model="show_bag" mask="true" :display="'default'">
      <bag></bag>
    </mm_modal>

    <mm_modal v-model="show_update" mask="true" :display="'default'">
      <mm_row>
        <div class="col-12 col-md-4">
          <!-- 锻造 -->
          <update_forge></update_forge>
        </div>

        <div class="col-12 col-md-4">
          <!-- 合成 -->
          <update_compose></update_compose>
        </div>

        <div class="col-12 col-md-4">
          <!-- 分解 -->
          <update_resolve></update_resolve>
        </div>
      </mm_row>

    </mm_modal>

    <mm_modal v-model="show_invite" mask="true" :display="'default'">
      <invite></invite>
    </mm_modal>
  </div>
</template>

<script>
  import expand_sptite from "@/components/mm/expand/expand_sptite.vue";
  import nft from "@/components/diy/nft.vue";
  import bag from "@/components/diy/bag.vue";
  import pool from "@/components/diy/pool.vue";
  import update_forge from "@/components/diy/update_forge.vue";
  import update_compose from "@/components/diy/update_compose.vue";
  import update_resolve from "@/components/diy/update_resolve.vue";
  import invite from "@/components/diy/invite.vue";

  export default {
    components: {
      expand_sptite,
      nft,
      bag,
      pool,
      update_forge,
      invite
    },
    data() {
      return {
        show_update: false,
        show_notice: false,
        show_nft: false,
        show_bag: false,
        show_pool: false,
        show_invite: false,
        list_left: [{
            name: "nft",
            tag: "img",
            src: "/img/nft.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 100
            },
            align: {
              x: "left",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "盲合"
          },
          {
            name: "pool",
            tag: "img",
            src: "/img/pool.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 180
            },
            align: {
              x: "left",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "矿池"
          },
          {
            name: "auction",
            tag: "img",
            src: "/img/auction.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 260
            },
            align: {
              x: "left",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "拍卖"
          },
          {
            name: "ranking",
            tag: "img",
            src: "/img/ranking.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 340
            },
            align: {
              x: "left",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "排名"
          },
          {
            name: "statis",
            tag: "img",
            src: "/img/statis.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 420
            },
            align: {
              x: "left",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "统计"
          }
        ],
        list_right: [{
            name: "bag",
            tag: "img",
            src: "/img/bag.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 100
            },
            align: {
              x: "right",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "背包"
          },
          {
            name: "update",
            tag: "img",
            src: "/img/update.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 180
            },
            align: {
              x: "right",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "升级"
          },
          {
            name: "invite",
            tag: "img",
            src: "/img/invite.png",
            size: {
              width: "44",
              height: "44"
            },
            pos: {
              x: 16,
              y: 260
            },
            align: {
              x: "right",
              y: "top"
            },
            zIndex: 101,
            client: "pad",
            text: "邀请"
          }
        ],
        list_bottom: [{
            name: "telegram",
            tag: "img",
            src: "/img/telegram.png",
            size: {
              width: "32",
              height: "32"
            },
            pos: {
              x: -48,
              y: 24
            },
            align: {
              x: "center",
              y: "bottom"
            },
            zIndex: 101
          },
          {
            name: "twitter",
            tag: "img",
            src: "/img/twitter.png",
            size: {
              width: "32",
              height: "32"
            },
            pos: {
              x: 0,
              y: 24
            },
            align: {
              x: "center",
              y: "bottom"
            },
            zIndex: 101
          },
          {
            name: "facebook",
            tag: "img",
            src: "/img/facebook.png",
            size: {
              width: "32",
              height: "32"
            },
            pos: {
              x: 48,
              y: 24
            },
            align: {
              x: "center",
              y: "bottom"
            },
            zIndex: 101
          }
        ]
      }
    },
    methods: {
      event_click(name) {
        var ne = name.toLocaleLowerCase()
        switch (ne) {
          case "pool":
          case "nft":
            this['show_' + ne] = true;
            break;
          case "bag":
          case "update":
          case "invite":
            this['show_' + ne] = true;
            break;
          case "ranking":
          case "auction":
          case "statis":
            this.show_notice = true;
            break;
        }
      },
      select_lang(lang_type) {
        if (this.lang_type === 'en') {
          this.set_lang('zh')
        } else {
          this.set_lang('en')
        }
      }
    }
  }
</script>

<style>
  #root_index .tb {
    text-align: center;
    min-width: 4rem;
  }

  #root_index .tb span {
    display: block;
    color: #fff;
    text-shadow: #333 3px 4px 5px;
    margin-top: -0.75rem;
  }

  #root_index .bg {
    position: relative;
    width: fit-content;
    z-index: 2;
  }

  #root_index .bg_flash {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 2;
  }

  #root_index .left {
    left: 0;
    top: 0;
  }

  #root_index .right {
    right: 0;
    top: 0;
  }

  #root_index .bg_img {
    min-width: 100vw;
    height: 100vh;
  }

  #root_index main {
    overflow-x: scroll;
  }

  #root_index .btn_link {
    padding: 0 0.5rem;
    line-height: initial;
    height: initial;
    color: #fff;
    font-size: 1rem;
  }

  #root_index .lang {
    background: rgba(255, 255, 255, 0.5);
    padding: .25rem .5rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  #root_index .lang span {
    position: relative;
    top: 0.1rem;
  }

  #root_index .bg_notice {
    position: relative;
  }

  #root_index .bg_notice img {
    width: 100%;
    max-width: calc(100vw - 4rem);
  }

  #root_index .notice {
    position: absolute;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    color: #fff;
    text-shadow: #000 3px 4px 5px;
  }

  #root_index .mm_modal {
    z-index: 300;
  }

  @media (max-width:576px) {
    #root_index .notice {
      font-size: 1.5rem;
    }
  }
</style>
