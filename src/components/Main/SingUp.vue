<template>
  <div>
    <div class="test_khung">
      <h2>Sing Up</h2>
      <v-container>
        <v-row>
          <v-col class="input" cols="6" sm="6">
            <label for="">Firstname</label>
            <div class="input_text">
              <v-text-field
                v-model="text"
                class="mb-2"
                clearable
                variant="solo"
                placeholder="Họ"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="input" cols="12" sm="6">
            <label for="">Lastname</label>
            <div class="input_text">
              <v-text-field
                v-model="text"
                class="mb-2"
                clearable
                variant="solo"
                placeholder="Tên"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="input" cols="12" sm="12">
            <label for="">Email</label>
            <div class="input_text">
              <v-text-field
                v-model="email"
                class="mb-2"
                clearable
                variant="solo"
                placeholder="Số điện thoại hoặc email"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="input" cols="12" sm="12">
            <label for="">Password</label>
            <div class="input_text">
              <v-text-field
                v-model="password"
                class="mb-2"
                clearable
                variant="solo"
                placeholder="Nhập nhật khẩu"
              ></v-text-field>
            </div>
          </v-col>

          <v-col class="input" cols="12" sm="12">
            <label for="">Confirm Password</label>
            <div class="input_text">
              <v-text-field
                v-model="password"
                class="mb-2"
                clearable
                variant="solo"
                placeholder="Nhập lại nhật khẩu"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-btn class="btn_login" block variant="tonal"> Submit </v-btn>
      </v-container>
      <div>
        <p class="text_booton">
          Already have an acount ?
          <router-link to="/" class="link_text">Signin</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.test_khung {
  margin-left: 35%;
  margin-top: 20px;
  width: 550px;
  border: 1px solid #aaa;
  box-shadow: 2px 4px 6px #aaa;
  text-align: center;
  padding: 30px;
  border-radius: 5px;
}
.input {
  text-align: left;
}
/* .input_text {
} */
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
.btn_login {
  height: 40px;
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
