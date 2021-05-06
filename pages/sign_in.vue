<template>
  <article class="sign_in">
    <div class="warp">
      <el-row>
        <el-col>
          <el-form :model="form" :rules="rules" ref="form" label-width="60px" class="form">
            <h1>登录</h1>
            <el-form-item label="账号" prop="account">
              <el-input type="text" v-model="form.account" placeholder="用户名 / 手机 / 邮箱">
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password" placeholder="6 到 24 个字符" autocomplete="off">
              </el-input>
            </el-form-item>

            <el-button type="primary" @click="sign_in()">登录</el-button>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </article>
</template>

<script>
  export default {
    data: function() {
      return {
        oauth: {
          signIn: false
        },
        web: this.$store.state.web,
        form: {
          account: "",
          password: ""
        },
        remember_me: 1,
        rules: {
          account: [{
              required: true,
              message: '请输入账号',
              trigger: 'blur'
            },
            {
              min: 5,
              max: 25,
              message: '长度在 5 到 25 个字符',
              trigger: 'blur'
            }
          ],
          passowrd: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 24,
              message: '长度在 6 到 24 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      sign_in() {
        var f = this.form;
        var form = {
          password: $.md5(f.password)
        };
        var account = f.account + '';
        if (account.indexOf('@') !== -1) {
          form.email = account;
        } else if (/1[0-9]{10}/.test(account)) {
          form.phone = account;
        } else {
          form.username = account;
        }
        var _this = this;
        this.$post('~/api/user/sign_in', form, function(res) {
          if (res.result) {
            _this.$store.commit('user/set', res.result);
            if (_this.remember_me) {
              $.db.set('account', account);
            }

            var url = _this.$redirect();
            setTimeout(() => {
              _this.$router.push(url || '/');
            }, 400)

          } else if (res.error) {
            _this.$toast(res.error.message, 'error');
          }
        });
      }
    },
    created() {
      // 判断是否已登录, 已登录直接跳转页面
      var _this = this;
      this.$get('~/api/user/state', null, function(res) {
        if (res.result) {
          _this.$store.commit('user/set', res.result);
          var url = _this.$redirect();
          _this.$router.push(url || '/');
        } else {
          _this.form.account = $.db.get('account');
        }
      });
    }
  }
</script>

<style>
  .sign_in {
    box-sizing: border-box;
    height: 100vh;
    padding: .5rem;
    width: 100%;
    text-align: center;
    background: url(/img/bg.jpg) no-repeat;
    background-size: 100% 100%;
    color: #fff;
  }

  .sign_in .el-form-item__label {
    color: #fff;
  }

  .sign_in .form {
    padding: 1rem;
    margin: auto;
    margin-top: 15rem;
    width: 100%;
    max-width: 25rem;
    transform: translateX(-4rem);
    box-shadow: 0 0 0 1px hsla(240, 0%, 100%, .3) inset,
      0 .5em 1em rgba(50, 50, 50, 0.6);
    text-shadow: 0 1px 1px hsla(240, 0%, 100%, .5);
    overflow: hidden;
    /* background-color: rgba(255, 255, 255, .5); */
    border-radius: 0.5rem;
  }

  .sign_in .form:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: -1;

    background-image: url(/img/bg.jpg);
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(20px);
  }
</style>
