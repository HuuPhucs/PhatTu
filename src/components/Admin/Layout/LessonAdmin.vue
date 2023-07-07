<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="dsGiamSat"
    item-key="stt"
    class="elevation-1"
  >
    <thead>
      <tr>
        <th style="text-align: center; border: 1px solid black">Thao tác</th>
        <th style="text-align: center">Phật tử</th>
        <th style="text-align: center">Ngày xuất gia</th>
        <th style="text-align: center">Số điện thoại</th>
        <th style="text-align: center">Số buổi dạo tràng đã tham gia</th>
        <th style="text-align: center">Bài Tập</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in dsGiamSat" :key="item.id">
        <td>{{ item.id }}</td>
        <td>
          <v-avatar><v-img :src="item.img"></v-img></v-avatar>

          <div>
            {{ item.hoten }}
          </div>
        </td>
        <td>{{ item.ngay }}</td>
        <td>{{ item.sdt }}</td>
        <td>{{ item.ddanh }}</td>
        <td>
          <v-dialog
            v-model="dialogVisible"
            transition="dialog-bottom-transition"
            width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props" class="btn_edit">
                <span class="mdi mdi-pencil"></span
              ></v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar
                  style="text-align: center"
                  title="Sửa thông tin cá nhân"
                ></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">
                    <Profile />
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="isActive.value = false"
                    >Close</v-btn
                  >
                  <v-btn variant="text" @click="isActive.value = true"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </td>
      </tr>
    </tbody>
  </v-data-table>
</template>

<script>
export default {
  name: "LessonAdmin",
  data() {
    return {
      itemsPerPage: 15,
      headers: [
        { title: "#", align: "start", key: "stt", sortable: false },
        { title: "Tên bài học", align: "start", key: "lessonName" },
        { title: "Ngày tạo", align: "start", key: "createDateTime" },
        { title: "Cập nhật", align: "start", key: "updateDateTime" },
        { title: "Loại bài học", align: "start", key: "lessonType" },
        { title: "Thời lượng", align: "start", key: "videoTime" },
        { title: "Action", align: "start", key: "actions" },
      ],
      dsGiamSat: [
        {
          id: 1,
          hoten: "Frozen Yogur tabc@gamil.com ",
          img: "https://i.pinimg.com/564x/4f/a5/cf/4fa5cfdb53cf7602e857f1a269dba535.jpg",
          ngay: "12 - 10 - 2002",
          sdt: "024333333",
          ddanh: "True",
          baitap: "Cập Nhật",
          eamil: "abc@gamil.com",
        },
        {
          id: 1,
          hoten: "Frozen Yogur tabc@gamil.com ",
          img: "https://i.pinimg.com/564x/4f/a5/cf/4fa5cfdb53cf7602e857f1a269dba535.jpg",
          ngay: "12 - 10 - 2002",
          sdt: "024333333",
          ddanh: "True",
          baitap: "Cập Nhật",
          eamil: "abc@gamil.com",
        },
        // Add other items to the dsGiamSat array
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.elevation-1 {
  border: 1px solid black;
  text-align: center;
}
</style>
