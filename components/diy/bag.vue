<template>
  <div class="windows_bag">
    <div class="windows">
      <div class="windows_head">
        <h2><span>{{ $t('bag.title') }}</span></h2>
      </div>
      <div class="windows_body">
        <div class="bag_grid">
          <mm_list col="3">
            <mm_item v-for="(o, i) in 12" :key="'bag_grid_' + i">
              <div class="item_tool">
                <div class="nft">
                  <img src="/img/icon_shell.png" alt="">
                </div>
              </div>
            </mm_item>
          </mm_list>
        </div>
      </div>
      <div class="windows_foot">
        <mm_row class="row">
          <mm_col class="col-6">
            <div class="balance"><span>{{ $t('bag.title_balance') }}</span><div class="num"></div></div>
          </mm_col>
          <mm_col class="col-3">
            <div class="exchange"><img src="/img/icon_exchange.png" alt=""><span>{{ $t('bag.btn_exchange') }}</span>
            </div>
          </mm_col>
          <mm_col class="col-3">
            <div class="auction"><img src="/img/icon_auction.png" alt=""><span>{{ $t('bag.btn_auction') }}</span>
            </div>
          </mm_col>
        </mm_row>
      </div>
      <div class="windows_bg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    }
  }
</script>

<style class="">
  h4 {
    text-align: center;
  }

  h2 {
    margin-top: 0.5rem;
    color: #00FFFF;
    text-align: center;
  }

  .title_balance {
    color: #00FFFF;
  }

  .btn_exchange {
    color: #00FFFF;
  }

  .btn_auction {
    color: #00FFFF;
  }

  .windows_bag {
    /* background: url('/img/bg_bag.jpg') center center repeat; */
    background: linear-gradient(180deg, rgba(0, 26, 51, 0.9) 0%, rgba(0, 26, 51, 0.8) 100%);
    width: calc(100% - 4rem);
    max-width: 311px;
    margin: auto;
    border-radius: 1rem;
    padding: 1rem;
  }

  .windows {
    border: 2px solid rgb(70 95 95 / 50%);
    border-radius: 0.5rem;
    height: 100%;
    position: relative;
  }

  /*  .windows_bg {
    background: inherit;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    position: absolute;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    -o-filter: blur(5px);
    filter: blur(5px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
  } */

  .bag_grid {
    width: 100%;
    padding: 0.25rem;
    height: 392px;
    overflow-y: auto;
  }

  .bag_grid .mm_item {
    border-radius: 1rem;
    height: 6rem;
    padding: 0.25rem;
  }

  .bag_grid .item_tool {
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    border-radius: 0.5rem;
    overflow: hidden;
    /* box-shadow: rgba(11, 234, 235, 0.2) 0px 0px 18px inset; */
    /*    border-image: -webkit-linear-gradient(#F80, #2ED) 20 20;
    border-image: -moz-linear-gradient(#F80, #2ED) 20 20;
    border-image: -o-linear-gradient(#F80, #2ED) 20 20;
    border-image: linear-gradient(#F80, #2ED) 20 20; */
  }

  .windows_foot {
    color: #00FFFF;
    padding: .5rem;
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.5rem;
  }

  .balance span {
    margin-right: 0.5rem;
	position: relative;
	top: -0.5rem;
  }

  .balance .num {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 0.5rem;
    width: calc(100% - 2.5rem);
    height: 1.5rem;
    margin-right: 0;
  }

  .exchange img {
    width: 1.25rem;
    margin-right: 0.125rem;
  }

  .auction img {
    width: 1.25rem;
    margin-right: 0.125rem;
  }
</style>
