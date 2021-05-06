<template>
  <header>
    <div class="warp">
      <el-row>
        <el-col :span="8">
          <div class="action_left">
            <el-button type="text" @click="$emit('change', !isCollapse)">
              <i :class="{'el-icon-s-fold' : !isCollapse,  'el-icon-s-unfold': isCollapse }"></i>
            </el-button>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="action_right">
            <el-dropdown @command="handleCommand">
              <div class="el-dropdown-link">
                <img style="width: 2rem; overflow: hidden; border-radius: 50%;" :src="user.avatar || '/img/avatar.png'"><span style="margin-left: 0.5rem;position: relative;top: -0.55rem;">{{ user.nickname || user.username }}</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/user/info">个人信息</el-dropdown-item>
                <el-dropdown-item command="/user/password">修改密码</el-dropdown-item>
                <el-dropdown-item command="/sign_out" divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </header>
</template>


<script>
  export default {
    model: {
      event: 'change',
      prop: 'isCollapse'
    },
    props: {
      isCollapse: {
        trye: Boolean,
        default: true
      }
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        user: this.$store.state.user
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        if (command === "/sign_out") {
          this.$get("~/api/user/sign_out", {}, (res) => {
            this.$router.push("/sign_in");
          });
        } else {
          this.$router.push(command);
        }
      }
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
