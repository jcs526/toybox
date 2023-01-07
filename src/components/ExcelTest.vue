<template>
  <div>
    <input type="file" @change="readExcel($event)" />
    <div v-for="(item, index) in List" :key="index">이름 : {{ item[2] }}  생일 : {{ item[3] }}</div>
  </div>
</template>

<script>
import Excel from "exceljs";

export default {
  data() {
    return {
      excelFile: null,
      List: [],
    };
  },
  methods: {
    async readExcel(event) {
      let file = event.target.files[0];
      const wb = new Excel.Workbook();
      const reader = new FileReader();

      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        const buffer = reader.result;
        wb.xlsx.load(buffer).then((workbook) => {
          console.log(workbook, "workbook instance");
          workbook.eachSheet((sheet) => {
            sheet.eachRow((row, rowIndex) => {
              if (rowIndex > 1 && rowIndex < 100) {
                this.List.push(row.values);
              }
            });
          });
        });
      };
    },
  },
};
</script>

<style>
</style>