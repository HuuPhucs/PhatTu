<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-avatar
              class="hien_img"
              image="https://i.pinimg.com/564x/4f/a5/cf/4fa5cfdb53cf7602e857f1a269dba535.jpg"
              size="180px"
            ></v-avatar>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              variant="solo"
              label="Avatar"
            ></v-file-input>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Học viện"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Khóa học"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              variant="outlined"
              placeholder="Placeholder"
              type="date"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Lớp học"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Đã làm"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Linkeln"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Tên tài khoản"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Email"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Mật khẩu"
              variant="outlined"
              placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="12">
            <v-textarea label="Địa chỉ" variant="outlined"></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              label="Tỉnh/thành phố"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              label="Quận/huyện"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              spellcheck="true"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              label="Xã,phường"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              label="Giớ tính"
              :items="['Nam', 'Nữ', 'Khác']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              label="Công việc hiện tại"
              :items="[]"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
              label="Thành viên"
              :items="[]"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "DataCaNhan",
};
</script>

<style lang="css" scoped>
.hien_img {
  margin-left: 35%;
  margin-bottom: 30px;
}
</style>
