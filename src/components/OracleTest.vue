<template>
  <div>
    <table>
      <tr>
        <th v-for="(column, index) in metaData" :key="index">
          {{ column.name }}
        </th>
      </tr>
      <tr v-for="(item, index2) in responseData" :key="index2">
        <td v-for="(column, index) in metaData" :key="index">
          <span v-if="index2 != modifyingIndex">{{ item[column.name] }}</span>
          <input v-else v-model="modifyingItem[column.name]" />
        </td>
        <span
          v-if="index2 != modifyingIndex"
          @click="[modifyActive(item, index2)]"
          >수정</span
        ><span v-else @click="modify()">완료</span
        >|<span v-if="index2 == modifyingIndex" @click="cancelModify()"
          >취소|</span
        ><span @click="deleteData(item)">삭제</span>
      </tr>
      <tr>
        <td v-for="(column, index) in metaData" :key="index">
          <input class="create" />
        </td>
        <span @click="createDocument()">추가</span>
      </tr>
    </table>
    <br />
    <br />
    <br />
    {{ responseData }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      metaData: [],
      responseData: [],
      modifyingIndex: -1,
      modifyingItem: {},
    };
  },
  mounted() {
    this.readDocument();
  },
  methods: {
    readDocument() {
      let url =
        "http://localhost:11352/ematenapi/interface/api/KGB_VW_GWOACT?eventname=readDocument";
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url,
      };
      axios(options).then((res) => {
        this.metaData = res.data. data.metaData;
        this.responseData = res.data. data.rows;
      });
    },
    deleteData(item) {
      let url =
        "http://localhost:11352/ematenapi/interface/api/KGB_VW_GWOACT?eventname=deleteDocument";
      let options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        url,
        params: item,
      };
      axios(options).then((res) => {
        console.log(res);
        this.readDocument();
      });
    },
    modifyActive(item, index) {
      if (this.modifyingIndex == -1) {
        this.modifyingIndex = index;
        this.modifyingItem = JSON.parse(JSON.stringify(item));
      } else {
        this.cancelModify();
      }
    },
    cancelModify() {
      this.modifyingIndex = -1;
      this.modifyingItem = {};
    },
    modify() {
      let url =
        "http://localhost:11352/ematenapi/interface/api/KGB_VW_GWOACT?eventname=updateDocument";

      let data = this.modifyingItem;
      data.COUNTRY_ID_ORIGINAL =
        this.responseData[this.modifyingIndex].COUNTRY_ID;
      let options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        url,
        data,
      };

      axios(options).then(() => {
        this.cancelModify();
        this.readDocument();
      });
    },
    createDocument() {
      let inputs = [...document.querySelectorAll(".create")];
      let obj = {};

      const keys = Object.values(this.metaData).map((v) => v.name);
      console.log(keys);
      keys.forEach((v, i) => {
        obj[v] = inputs[i].value;
      });

      let url =
        "http://localhost:11352/ematenapi/interface/api/KGB_VW_GWOACT?eventname=createDocument";

      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url,
        data: obj,
      };
      axios(options).then(() => {
        this.readDocument();
      });
    },
  },
};
</script>

<style>
</style>