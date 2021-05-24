<template>
  <header class="header page_header">
    <mm_warp>
      <mm_container>
        <mm_row>
          <mm_col class="col-12">
          </mm_col>
        </mm_row>
      </mm_container>
    </mm_warp>
  </header>
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
        user: this.$store.state.user
      };
    },
    methods: {

    }
  }
</script>

<style scoped="scoped">
  header {
    background-color: #FDFDFD;
    border-bottom: var(--color_border);
  }

  .action_left {
    padding: 0 0.5rem;
  }

  .action_right {
    float: right;
    padding: 0.5rem 1rem;
    padding-top: 0.625rem;
  }
</style>
