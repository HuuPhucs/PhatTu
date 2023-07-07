<template>
  <div>
    <div class="form_table">
      <div class="text_search">
        <div class="ipnut_search">
          <v-card-text>
            <v-text-field
              class="v-text-field"
              :loading="loading"
              density="compact"
              variant="solo"
              label="Tìm kiếm"
              prepend-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:prepend-inner="onClick"
            ></v-text-field>
          </v-card-text>
        </div>

        <div class="input_text">
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="text-none" variant="text">
                Sắp xếp <span class="mdi mdi-menu-down"></span>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>Số 1</v-list-item-title>
                <v-list-item-title>Số 1</v-list-item-title>
                <v-list-item-title>Số 1</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="tabe">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="desserts"
          item-key="stt"
          class="elevation-1 newtable"
        >
          <thead>
            <tr>
              <th style="text-align: center">Thao tác</th>
              <th style="text-align: center; border-left: 1px solid black">
                Phật tử
              </th>
              <th style="text-align: center; border-left: 1px solid black">
                Ngày xuất gia
              </th>
              <th style="text-align: center; border-left: 1px solid black">
                Số điện thoại
              </th>
              <th style="text-align: center; border-left: 1px solid black">
                Số buổi dạo tràng đã tham gia
              </th>
              <th style="text-align: center; border-left: 1px solid black">
                Bài Tập
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.id">
              <td style="width: 120px; text-align: center; height: 60px">
                {{ item.id }}
              </td>
              <td style="width: 250px">
                <div style="display: flex">
                  <div class="Avtimg" @click="openDialog">
                    <v-img :src="item.img"></v-img>
                  </div>

                  <!-- <v-avatar
                    class="avata"
                    image="https://i.pinimg.com/564x/4f/a5/cf/4fa5cfdb53cf7602e857f1a269dba535.jpg"
                    size="40"
                    
                  ></v-avatar> -->
                  <div class="text_tt">
                    {{ item.hoten }}
                  </div>
                </div>
              </td>
              <td>
                <div>
                  {{ item.ngay }}
                </div>
              </td>
              <td>{{ item.sdt }}</td>
              <td>
                {{ item.ddanh }}
              </td>
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
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
export default {
  name: "tableAdmin",
  components: { Profile },
  data: () => ({
    itemsPerPage: 15,
    headers: [
      { title: "Thao tác", key: "id" },
      {
        title: "Phật tử",
        align: "start",
        sortable: false,
        key: "hoten",
      },
      { title: "Ngày xuất gia", key: "ngay" },
      { title: "Số điện thoại", key: "sdt" },
      { title: "Số buổi dạo tràng đã tham gia", key: "ddanh" },
      { title: "Bài Tập", key: "baitap" },
    ],
    desserts: [
      {
        id: 1,
        hoten: "Frozen Yogur tabc@gamil.com ",
        img: "https://i.pinimg.com/564x/06/9a/22/069a22615915b2df55e882bc3535031a.jpg",
        ngay: "12 - 10 - 2002",
        sdt: "024333333",
        ddanh: "True",
        baitap: "Cập Nhật",
        eamil: "abc@gamil.com",
      },
      {
        id: 1,
        hoten: "Frozen Yogur tabc@gamil.com ",
        img: "https://i.pinimg.com/564x/23/ec/d0/23ecd00b04838f67a16d46a9a3eb3d38.jpg",
        ngay: "12 - 10 - 2002",
        sdt: "024333333",
        ddanh: "True",
        baitap: "Cập Nhật",
        eamil: "abc@gamil.com",
      },
      {
        id: 1,
        hoten: "Frozen Yogur tabc@gamil.com ",
        img: "https://i.pinimg.com/236x/fc/5c/13/fc5c13342ec069c03707427c861959b4.jpg",
        ngay: "12 - 10 - 2002",
        sdt: "024333333",
        ddanh: "True",
        baitap: "Cập Nhật",
        eamil: "abc@gamil.com",
      },
      {
        id: 1,
        hoten: "Frozen Yogur tabc@gamil.com ",
        img: "https://i.pinimg.com/236x/b4/65/94/b465945ffbb05a84e43589b71e535450.jpg",
        ngay: "12 - 10 - 2002",
        sdt: "024333333",
        ddanh: "True",
        baitap: "Cập Nhật",
        eamil: "abc@gamil.com",
      },
      {
        id: 1,
        hoten: "Frozen Yogur tabc@gamil.com ",
        img: "https://i.pinimg.com/236x/cd/d8/98/cdd898c1fe5cb166f7f23b415e00bf91.jpg",
        ngay: "12 - 10 - 2002",
        sdt: "024333333",
        ddanh: "True",
        baitap: "Cập Nhật",
        eamil: "abc@gamil.com",
      },
    ],
    dialog: false,
    dialogVisible: false,
  }),
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="css" scoped>
/* dsfffffffffffffffffffffffff */
.form_table {
  border: 1px solid #ededed;
  border-radius: 5px;
  margin-top: 20px;
}
.elevation-1 {
  width: 98%;
  margin: 20px 10px 30px 10px;
  border: 1px solid #ededed;
  border-radius: 3px;
}
/* input_search */
.text_search {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-right: 20px;
  color: red;
}
.input_text {
  margin-top: 20px;
}

.ipnut_search {
  width: 250px;
}

/* //////////////////////// Bên trong dia_log////////////////////////////////// */

/* Hiện thị ảnh */
.Avtimg {
  width: 100px;
  height: 50px;
  clip-path: circle(25px at 50% 50%);
}
.Avtimg {
  overflow: hidden;
  cursor: pointer;
}
.Avtimg:hover {
  transform: scale(1.1);
}

/* ////////////////////////////////// */
.btn_edit {
  width: 100px;
  height: 45px;
  clip-path: circle(20px at 50% 50%);
}
.text_tt {
  color: rgb(39, 37, 37);
}
.text_tt:hover {
  cursor: pointer;
  color: rgb(36, 28, 28);
}
/* /////////////////////////////////// Tabel //////////////////////////////////////////////////// */
.elevation-1 {
  text-align: center;
  border: 1px solid black;
}

.elevation-1 td {
  border: 1px solid black;
}

.avata {
  margin-top: 5px;
  margin-right: 12px;
  cursor: pointer;
}

.btn_edit {
  width: 100px;
  height: 45px;
  clip-path: circle(20px at 50% 50%);
}

.text_tt {
  text-align: left;
  align-items: center;
}

/* Consolidated border */
.elevation-1 td {
  border: 1px solid black;
}

/* Remove duplicated border */
.elevation-1 td:first-child,
.elevation-1 td:last-child {
  border-right: none;
  border-left: none;
}
.elevation-1 td:nth-child(odd) {
  border-right: none;
  border-left: none;
}
.elevation-1 tbody td:nth-last-child(odd) {
  border: 1px solid black;
}
.elevation-1 tbody tr td:last-child {
  border-right: none;
}
.elevation-1 tbody tr td:last-child {
  border-right: none;
}
.elevation-1 tbody tr {
  background-color: blue;
}
</style>
