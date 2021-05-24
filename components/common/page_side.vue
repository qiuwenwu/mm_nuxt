<template>
  <aside class="page_side">
    <mm_modal :show="show" mask="true" display="right" @change="event_change">
      <slot></slot>
    </mm_modal>
  </aside>
</template>

<script>
  export default {
    model: {
      event: 'change',
      prop: 'show'
    },
    props: {
      show: {
        trye: Boolean,
        default: true
      }
    },
    data() {
      return {
        sw: this.show
      }
    },
    methods: {
      event_change(show) {
        this.$emit('change', show);
      }
    }
  }
</script>


<style scoped="scoped">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 16rem;
  }

  .side {
    float: left;
    background: #545c64;
    color: #fff;
  }
</style>
