<template>
  <div>
    <div class="name" style="margin: 20px 0px 30px 0px">
      <p style="margin-top: 20px">
        Home <span class="mdi mdi-chevron-right"></span> Giám sát học tập
      </p>
      <p style="font-size: 20px; margin-top: 10px">Giám sát học viên</p>
    </div>
    <div class="from_input">
      <div class="input">
        <label for="">Pháp danh</label>
        <v-select
          class="v-select"
          variant="outlined"
          :items="['sadsa', 'ádas']"
          placeholder="Tất Cả"
        ></v-select>
      </div>
      <div class="input">
        <label for="">Giới tính</label>
        <v-select
          class="v-select"
          variant="outlined"
          :items="[]"
          placeholder="Tất Cả"
        ></v-select>
      </div>
      <div class="input">
        <label for="">Trạng thái phật tử</label>
        <v-select
          class="v-select"
          variant="outlined"
          :items="[]"
          placeholder="Tất Cả"
        ></v-select>
      </div>
      <div class="input">
        <label for="">Ngày xử lí</label>
        <v-select
          class="v-select"
          variant="outlined"
          :items="[]"
          placeholder="Tất Cả"
        ></v-select>
      </div>

      <div class="input">
        <label for="">Tình trạng bài tập</label>
        <v-select
          :items="[]"
          variant="outlined"
          placeholder="Tất Cả"
        ></v-select>
      </div>
      <div class="input">
        <label for="">Bài tập đã làm từ</label>
        <v-select
          class="v-select"
          variant="outlined"
          :items="[]"
          placeholder="Tất Cả"
        ></v-select>
      </div>
      <div class="input">
        <label for="">Bài tập đã làm đến</label>
        <v-select
          class="v-select"
          variant="outlined"
          :items="[]"
          placeholder="Tất Cả"
        ></v-select>
      </div>
    </div>
    <TableData />
  </div>
</template>

<script>
import TableData from "./Layoutcon/Table.vue";
export default {
  name: "DashboardAdmin",
  components: { TableData },
};
</script>

<style lang="css" scoped>
.from_input {
  border: 1px solid #ededed;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
}
.input {
  margin: 20px;
  width: 260px;
}
.v-select {
  width: 100%;
  border-radius: 30px;
}
</style>
