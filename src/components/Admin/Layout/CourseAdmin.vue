<template v-slot:body="{}">
  <tbody>
    <tr v-for="(item, index) in dsGiamSat" :key="index">
      <td class="text-center" style="min-width: 110px; width: 110px">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              icon
              v-bind="attrs"
              v-on="on"
              @click="showModalThemSua(true, item.hocVienId)"
              class="mx-1 bg-button"
            >
              <v-icon size="22">mdi-account-box</v-icon>
            </v-btn>
          </template>
          <span>Xem thông tin cá nhân</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              icon
              v-bind="attrs"
              v-on="on"
              class="mx-1 bg-button"
              :to="`/giamsat/hocvien/${item.hocVienId}/khoahoc/${item.id}`"
            >
              <v-icon size="22">mdi-view-list</v-icon>
            </v-btn>
          </template>
          <span>Review</span>
        </v-tooltip>
      </td>
      <td style="width: 220px">
        <div class="box-info-hocvien my-2 d-flex align-center">
          <div class="avatar-border">
            <v-avatar size="42">
              <v-img
                :src="
                  item.linkAnhCaNhan
                    ? HOST + '/api/fileupload/download/' + item.linkAnhCaNhan
                    : '/static/img/default-avatar.png'
                "
              ></v-img>
            </v-avatar>
          </div>
          <div class="inner-box-info ml-2">
            <router-link
              :to="`/giamsat/hocvien/${item.hocVienId}/khoahoc/${item.id}`"
              class="mb-0 inner-box-info__name text-decoration--none"
              >{{ item.tenHocVien ? item.tenHocVien : "Lotusian" }}</router-link
            >
            <p class="mb-0 inner-box-info__account">
              {{ item.account ? item.account : "" }}
            </p>
          </div>
        </div>
      </td>
      <td class="text-center">{{ item.tenKhoaHoc }}</td>
      <td class="text-center">{{ item.tenLopHoc }}</td>
      <td class="text-center">{{ item.soBaiDaLam }}</td>
      <td style="width: 330px">
        <div class="d-flex justify-space-around">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                dark
                class="mx-1"
                v-bind="attrs"
                v-on="on"
                color="#FFBA68"
              >
                <v-icon left>mdi-spin mdi-loading</v-icon>
                <b>{{ item.soBaiDoi }}</b>
              </v-chip>
            </template>
            <span>Bài đợi</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                v-bind="attrs"
                v-on="on"
                dark
                class="mx-1"
                color="#FF9B8A"
              >
                <v-icon left>mdi-close</v-icon>
                <b>{{ item.soBaiSai }}</b>
              </v-chip>
            </template>
            <span>Bài sai</span> </v-tooltip
          ><v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                v-bind="attrs"
                v-on="on"
                dark
                class="mx-1"
                color="#1ee58e"
              >
                <v-icon left>mdi-check</v-icon>
                <b>{{ item.soBaiDung }}</b>
              </v-chip>
            </template>
            <span>Bài đúng</span> </v-tooltip
          ><v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-chip v-bind="attrs" v-on="on" class="mx-1">
                <v-icon left>mdi-circle-off-outline</v-icon>
                <b>{{ item.soBaiChuaLam }}</b>
              </v-chip>
            </template>
            <span>Bài chưa làm</span>
          </v-tooltip>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
// import Profile from "../Layoutcon/Profile.vue";
export default {
  name: "CourseAdmin",
  // components: { Profile },
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
      { title: "Sô điện thoại", key: "sdt" },
      { title: "Số buổi dạo tràng dã tham gia", key: "ddanh" },
      { title: "Bài Tập", key: "baitap" },
    ],
    desserts: [
      {
        id: 1,
        hoten: "Frozen Yogurt",
        img: "https://example.com/frozen-yogurt.jpg",
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
.avata {
  margin-right: 12px;
  cursor: pointer;
}
.avata:hover {
  transform: scale(1.1);
}

/* ////////////////////////////////// */
.btn_edit {
  width: 100px;
  height: 45px;
  clip-path: circle(20px at 50% 50%);
}
.ngay_ngay:hover {
  color: red;
  cursor: pointer;
}
/* /////////////////////////////////// Tabel //////////////////////////////////////////////////// */
.newtable {
  text-align: center;
}
.elevation-1 td {
}
</style>
