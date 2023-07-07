<template>
  <div>
    <div class="khung">
      <h2 class="login">Log In</h2>

      <v-form fast-fail=" @submit.prevent">
        <div class="input">
          <label for="">Username</label>
          <div class="input_text">
            <v-text-field
              v-model="email"
              variant="solo"
              placeholder="Nhập số điện thoại hoặc email"
              :rules="thongbaoemail"
            ></v-text-field>
          </div>
        </div>
        <div class="input">
          <label for="">Password</label>
          <div class="input_text">
            <v-text-field
              v-model="password"
              type="password"
              class="mb-2"
              clearable
              variant="solo"
              placeholder="Nhập nhật khẩu"
              :rules="thongbaopass"
            ></v-text-field>
          </div>
        </div>
        <div class="quenpass">
          <router-link to="/path" class="link_text"
            >Forgot Password ?</router-link
          >
        </div>

        <v-btn
          type="submit"
          class="btn_login"
          block
          variant="tonal"
          @click="login"
        >
          Log In
        </v-btn>
      </v-form>

      <div class="content__or-text">
        <span></span>
        <span>OR</span>
        <span></span>
      </div>
      <div class="login_logo">
        <span style="width: 100px" class="mdi mdi-facebook"></span>

        <span class="mdi mdi-google"></span>
      </div>
      <div>
        <p class="text_booton">
          Don't have an account ?
          <router-link to="/singup" class="link_text">Sing Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    thongbaoemail: [
      (value) => {
        if (!value) {
          return "Mời bạn nhập email.";
        } else if (
          !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
        ) {
          return "Vui lòng nhập đúng định dạng email.";
        } else {
          return true;
        }
      },
    ],
    password: "",
    thongbaopass: [
      (value) => {
        if (!value) {
          return "Mời bạn nhập mật khẩu.";
        } else if (value.length < 6 || value.length > 12) {
          return "Mật khẩu phải từ 6 đến 12 ký tự.";
        } else {
          return true;
        }
      },
    ],
  }),
  methods: {
    login() {
      if (this.email === "admin@gmail.com" && this.password === "admin123") {
        this.$router.push("/admin");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="css" scoped>
.khung {
  margin-left: 50%;
  margin-top: 5%;
  width: 430px;
  border: 1px solid #aaa;
  text-align: center;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 2px 4px 6px #aaa;
}
.input {
  text-align: left;
}
.input_text {
  margin-top: 3px;
}
.quenpass {
  text-align: right;
  margin-bottom: 10px;
}
/* login_logo */
.login_logo {
  margin: 10px;
}
.login_logo span {
  margin: 10px;
}
.mdi.mdi-facebook {
  width: 30px; /* Adjust the width value as needed */
}
/* Font chữ */
.login .quenpass .btn_login {
  font-family: "Times New Roman", Times, serif;
}
.link_text {
  color: black;
  text-decoration: none;
}
/* btn  */
.btn_login {
  height: 40px;
  box-shadow: -1px 2px 6px #aaa;
}

/* /////////////////////// */
.content__or-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 13px;
  column-gap: 18px;
  margin-top: 18px;
}

.content__or-text span:nth-child(3),
.content__or-text span:nth-child(1) {
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgb(219, 219, 219);
}
</style>
