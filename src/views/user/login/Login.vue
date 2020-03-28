<template>
 <div class="login">
    <div class="login-wrap">
      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="12" :offset="6" class="logo-container">
              <div class="header-logo">
                <img src="../../../assets/images/shaolei_img/245.png" alt="logo" class="logo" >
              </div>
            </el-col>
            <el-col :span="12" :offset="6" class="login-container">
              <div class="input-container">
                <div style="padding-top: 85px; padding-left: 40px;">
                    <span class="username-img-container">
                      <img src="../../../assets/images/shaolei_img/zhanghao@2x.png" alt="账号图片">
                    </span>
                  <input type="text" class="base-input" placeholder="请输入账户"
                         autocomplete="off"
                         v-model="username">
                </div>

                <div class="password-container">
                    <span class="username-img-container">
                      <img src="../../../assets/images/shaolei_img/mima@2x.png" alt="密码图片">
                    </span>
                  <input class="base-input" placeholder="请输入密码" type='password'
                         autocomplete="off"
                         v-model="password"
                         >
                </div>
                <div class="remember-password">
                  <i class="icon-font icon-iconfontgouxuan remember-info"></i>
                  <span>记住密码</span>
                </div>
                <div class="login-btn" @click="login()">
                  登录
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- <div class="avatar-container">
            <div class="avatar-drop-down" @click="displayAvatars()">
              <i class="iconfont " :class="displayAvatar? 'icon-arrow-right' : 'icon-arrow-left'"></i>
              <span>{{displayAvatar == false? '切换账号': '收起账号'}}</span>
            </div>
        
          </div> -->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" :offset="6" class="version-wrap">
          <p>版本号:V1.2.3 | </p>
          <p>技术服务热线：100-000-1123</p>
        </el-col>

        <!-- <el-dialog size="tiny" v-show="false">
          <ul>
            <li>
              <h2>版本号：1.5.5</h2>
            </li>
          </ul>
          <span slot="footer" class="dialog-footer">
            <el-button>取 消</el-button>
            <el-button>确 定</el-button>
          </span>
        </el-dialog> -->
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
        username: '',
        password: '',
    }
  },
  methods: {
    login() {
      console.log("username", this.username);
      console.log("password", this.password);
      this.$router.push("/")
    },
  }
}
</script>

<style scoped>
.login {
    /* background-color: #f5f5f5; */
    height: 3000px;
  }

  .login-wrap {
    /* background-color: #f5f5f5; */
  }

  .logo-container {
    margin-top: 65px;
  }

  .header-logo {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }

  .logo {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    position: absolute;
    border-radius: 50%;
  }

  .login-container {
    margin-top: -40px;
  }

  .input-container {
    width: 380px;
    height: 342px;
    margin: 0 auto;
    background-color: #1D1F20;
  }

  .user-item-avatar {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    position: absolute;
    left: 13px;
    margin-top: 10px;
  }

  .user-item-span {
    display: inline-block;
  }
  .user-item-online {
    color: #13CE66;
  }

  .avatar-drop-down {
    width: 195px;
    height: 41px;
    line-height: 41px;
    text-align: left;
    text-indent: 20px;
    margin-top: 30px;
    background-color: black;
    border-radius: 20px 0 0 20px;
  }

  .base-input {
    width: 300px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 2px;

    outline: none;

    font-size: 18px;
    text-indent: 45px;
    color: #2f2f2f;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  .username-img-container {
    position: absolute;
    display: inline-block;
    width: 44px;
    height: 44px;
    background-color: #343a40;
  }

  .username-img-container img {
    width: 18px;
    height: 24px;
    margin-left: 11px;
    margin-top: 11px;
  }

  .password-container {
    margin-top: 10px;
    padding-left: 40px;
  }

  .remember-password {
    height: 30px;
    line-height: 30px;
    visibility: hidden;
  }

  .remember-info {
    font-size: 28px;
    width: 28px;
    height: 28px;
    position: absolute;
    display: inline-block;
  }

  .remember-password > span {
    display: inline-block;
    margin-left: 28px;
  }

  .login-btn {
    height: 50px;
    width: 300px;
    background-color: #343a40;
    border-radius: 4px;
    color: #FFFFFF;
    font-size: 22px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-left: 40px;
  }

  .key-board {
    color: #fff;
    text-align: center;
    margin: 0 auto;
    font-family: Verdana, Sans-Serif;
  }

  .version-wrap {
    text-align: center;
    color: #999;
    text-align: center;
    position: fixed;
    bottom: 0;
    padding-bottom: 10px
  }

  .version-wrap > p {
    font-size: 8px;
  }

  .loading-wrap {
    margin-top: 15%;
    text-align: center;
    background-color: #1D1F20;
    height: 100%;
  }

  .avatar-container {
    position: absolute;
    top: 25px;
    right: 0px;
    color: #FFFFFF;
  }

  .user-item {
    width: 195px;
    height: 41px;
    line-height: 41px;
    text-align: left;
    text-indent: 20px;
    margin-top: 10px;
    background-color: black;
    border-radius: 8px 0 0 8px;
    position: relative;
  }
</style>