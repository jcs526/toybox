<template>
  <div id="container">
    <canvas id="canvas"></canvas>Cube
    <button @click="selectCube(1)">1번</button>
    <button @click="selectCube(2)">2번</button>
    <button @click="selectCube(3)">3번</button>
    <button @click="selectCube(4)">4번</button>
    <button @click="clear()">삭제</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { x: 250, y: 250, z: 250 },
      coord1: { x: 100, y: 100, z: 100 },
      coord2: { x: -100, y: 100, z: 100 },
      coord3: { x: -100, y: -100, z: 100 },
      coord4: { x: 100, y: -100, z: 100 },
      coord5: { x: 100, y: 100, z: -100 },
      coord6: { x: -100, y: 100, z: -100 },
      coord7: { x: -100, y: -100, z: -100 },
      coord8: { x: 100, y: -100, z: -100 },
      selected: 1,
    };
  },
  methods: {
    selectCube(value) {
      const canvas = document.querySelector("#canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, window.innerWidth / 5, window.innerWidth / 5);
      if (value == 1) {
        //1번째
        ctx.strokeStyle = "black";
        ctx.lineWidth = "2px";

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";

        let crd1 = { x: 100 - 25 * 1.5, y: 100 + 25 * 0.5 };
        let crd2 = { x: 100 - 25 * 0.5, y: 100 - 25 * 0.5 };
        let crd3 = { x: 100 + 25 * 1.5, y: 100 - 25 * 0.5 };
        let crd4 = { x: 100 + 25 * 0.5, y: 100 + 25 * 0.5 };
        let crd5 = { x: 100 - 25 * 1.5, y: 100 + 25 * 2.5 };
        // let crd6 = { x: 100 - 25 * 0.5, y: 100 + 25 * 1.5 };
        let crd7 = { x: 100 + 25 * 1.5, y: 100 + 25 * 1.5 };
        let crd8 = { x: 100 + 25 * 0.5, y: 100 + 25 * 2.5 };

        ctx.beginPath();

        ctx.moveTo(crd5.x, crd5.y); // crd 5
        ctx.lineTo(crd1.x, crd1.y); // crd 1
        ctx.lineTo(crd4.x, crd4.y); // crd 4
        ctx.lineTo(crd8.x, crd8.y); // crd 8
        ctx.fill();

        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(crd1.x, crd1.y); // crd1
        ctx.lineTo(crd2.x, crd2.y); // crd2
        ctx.lineTo(crd3.x, crd3.y); // crd3
        ctx.lineTo(crd4.x, crd4.y); // crd4
        ctx.fill();

        ctx.fillStyle = "rgba(0, 2000, 0, 0.5)";
        ctx.beginPath();
        ctx.moveTo(crd8.x, crd8.y); // crd 8
        ctx.lineTo(crd4.x, crd4.y); // crd 4
        ctx.lineTo(crd3.x, crd3.y); // crd 3
        ctx.lineTo(crd7.x, crd7.y); // crd 7
        ctx.fill();

        //중앙선
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 100 - 50);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(100, 100 + 50 + 25 / 2);
        ctx.lineTo(100, 100 + 50 + 50 + 25 / 2);
        ctx.stroke();
      } else if (value == 2) {
        //2번째
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";

        let crd1 = { x: 100 - 20 * 2, y: 100 };
        let crd2 = { x: 100, y: 100 - 20 };
        let crd3 = { x: 100 + 20 * 2, y: 100 };
        let crd4 = { x: 100, y: 100 + 20 };
        let crd5 = { x: 100 - 20 * 2, y: 100 + 50 };
        // let crd6 = { x: 100, y: 100 - 20 +50};
        let crd7 = { x: 100 + 20 * 2, y: 100 + 50 };
        let crd8 = { x: 100, y: 100 + 20 + 50 };

        ctx.beginPath();

        ctx.moveTo(crd5.x, crd5.y); // crd 5
        ctx.lineTo(crd1.x, crd1.y); // crd 1
        ctx.lineTo(crd4.x, crd4.y); // crd 4
        ctx.lineTo(crd8.x, crd8.y); // crd 8
        ctx.fill();

        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(crd1.x, crd1.y); // crd1
        ctx.lineTo(crd2.x, crd2.y); // crd2
        ctx.lineTo(crd3.x, crd3.y); // crd3
        ctx.lineTo(crd4.x, crd4.y); // crd4
        ctx.fill();

        ctx.fillStyle = "rgba(0, 2000, 0, 0.5)";
        ctx.beginPath();
        ctx.moveTo(crd8.x, crd8.y); // crd 8
        ctx.lineTo(crd4.x, crd4.y); // crd 4
        ctx.lineTo(crd3.x, crd3.y); // crd 3
        ctx.lineTo(crd7.x, crd7.y); // crd 7
        ctx.fill();

        //중앙선
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 100 - 50);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(100, 100 + 50 + 20);
        ctx.lineTo(100, 100 + 50 + 50 + 20);
        ctx.stroke();
      }
      if (value == 3) {
        //3번째
        ctx.strokeStyle = "black";
        ctx.lineWidth = "2px";

        let crd1 = { x: 100 - 25 * 1.5, y: 100 - 25 * 0.5 };
        let crd2 = { x: 100 + 25 * 0.5, y: 100 - 25 * 0.5 };
        let crd3 = { x: 100 + 25 * 1.5, y: 100 + 25 * 0.5 };
        let crd4 = { x: 100 - 25 * 0.5, y: 100 + 25 * 0.5 };
        let crd5 = { x: 100 - 25 * 1.5, y: 100 - 25 * 0.5 + 50 };
        // let crd6 = { x: 100 + 25 * 0.5, y: 100 - 25 * 0.5 +50};
        let crd7 = { x: 100 + 25 * 1.5, y: 100 + 25 * 0.5 + 50 };
        let crd8 = { x: 100 - 25 * 0.5, y: 100 + 25 * 0.5 + 50 };

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.beginPath();
        //파랑
        ctx.moveTo(crd5.x, crd5.y); // crd 5
        ctx.lineTo(crd1.x, crd1.y); // crd 1
        ctx.lineTo(crd4.x, crd4.y); // crd 4
        ctx.lineTo(crd8.x, crd8.y); // crd 8
        ctx.fill();

        //빨강
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(crd1.x, crd1.y); // crd1
        ctx.lineTo(crd2.x, crd2.y); // crd2
        ctx.lineTo(crd3.x, crd3.y); // crd3
        ctx.lineTo(crd4.x, crd4.y); // crd4
        ctx.fill();

        //초록
        ctx.fillStyle = "rgba(0, 2000, 0, 0.5)";
        ctx.beginPath();
        ctx.moveTo(crd8.x, crd8.y); // crd 8
        ctx.lineTo(crd4.x, crd4.y); // crd 4
        ctx.lineTo(crd3.x, crd3.y); // crd 3
        ctx.lineTo(crd7.x, crd7.y); // crd 7
        ctx.fill();

        //중앙선
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 100 - 50);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(100, 100 + 50 + 25 / 2);
        ctx.lineTo(100, 100 + 50 + 50 + 25 / 2);
        ctx.stroke();
      } else if (value == 4) {
        let crd1 = [
          { x: 100 - 25 * 1.5, y: 100 + 25 * 0.5 },
          { x: 100 - 25 * 0.5, y: 100 - 25 * 0.5 },
          { x: 100 + 25 * 1.5, y: 100 - 25 * 0.5 },
          { x: 100 + 25 * 0.5, y: 100 + 25 * 0.5 },
          { x: 100 - 25 * 1.5, y: 100 + 25 * 2.5 },
          { x: 100 - 25 * 0.5, y: 100 + 25 * 1.5 },
          { x: 100 + 25 * 1.5, y: 100 + 25 * 1.5 },
          { x: 100 + 25 * 0.5, y: 100 + 25 * 2.5 },
        ];
        let crd2 = [
          { x: 100 - 20 * 2, y: 100 },
          { x: 100, y: 100 - 20 },
          { x: 100 + 20 * 2, y: 100 },
          { x: 100, y: 100 + 20 },
          { x: 100 - 20 * 2, y: 100 + 50 },
          { x: 100, y: 100 - 20 + 50 },
          { x: 100 + 20 * 2, y: 100 + 50 },
          { x: 100, y: 100 + 20 + 50 },
        ];
        // let crd3 = [
        //   { x: 100 - 25 * 1.5, y: 100 - 25 * 0.5 },
        //   { x: 100 + 25 * 0.5, y: 100 - 25 * 0.5 },
        //   { x: 100 + 25 * 1.5, y: 100 + 25 * 0.5 },
        //   { x: 100 - 25 * 0.5, y: 100 + 25 * 0.5 },
        //   { x: 100 - 25 * 1.5, y: 100 - 25 * 0.5 + 50 },
        //   { x: 100 + 25 * 0.5, y: 100 - 25 * 0.5 + 50 },
        //   { x: 100 + 25 * 1.5, y: 100 + 25 * 0.5 + 50 },
        //   { x: 100 - 25 * 0.5, y: 100 + 25 * 0.5 + 50 },
        // ];

        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");

        for (let i = 1; i <= 100; i++) {
          let arr = [];
          for (let j = 0; j < 8; j++) {
            let x = crd1[j].x + ((crd2[j].x - crd1[j].x) * i) / 100;
            let y = crd1[j].y + ((crd2[j].y - crd1[j].y) * i) / 100;
            let obj = { x, y };
            arr.push(obj);
          }

          console.log(arr);
          ctx.clearRect(0, 0, window.innerWidth / 5, window.innerWidth / 5);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.beginPath();
          //파랑
          ctx.moveTo(arr[4].x, arr[4].y); // crd 5
          ctx.lineTo(arr[0].x, arr[0].y); // crd 1
          ctx.lineTo(arr[3].x, arr[3].y); // crd 4
          ctx.lineTo(arr[7].x, arr[7].y); // crd 8
          ctx.fill();

          //빨강
          ctx.fillStyle = "rgb(200, 0, 0)";
          ctx.beginPath();
          ctx.moveTo(arr[0].x, arr[0].y); // crd1
          ctx.lineTo(arr[1].x, arr[1].y); // crd2
          ctx.lineTo(arr[2].x, arr[2].y); // crd3
          ctx.lineTo(arr[3].x, arr[3].y); // crd4
          ctx.fill();

          //초록
          ctx.fillStyle = "rgba(0, 2000, 0, 0.5)";
          ctx.beginPath();
          ctx.moveTo(arr[7].x, arr[7].y); // crd 8
          ctx.lineTo(arr[3].x, arr[3].y); // crd 4
          ctx.lineTo(arr[2].x, arr[2].y); // crd 3
          ctx.lineTo(arr[6].x, arr[6].y); // crd 7
          ctx.fill();

          //중앙선
          ctx.beginPath();
          ctx.moveTo(100, 100);
          ctx.lineTo(100, 100 - 50);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(100, 100 + 50 + 25 / 2);
          ctx.lineTo(100, 100 + 50 + 50 + 25 / 2);
          ctx.stroke();
        }
      }
    },
    clear() {
      const canvas = document.querySelector("#canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, window.innerWidth / 5, window.innerWidth / 5);
    },
  },
  mounted() {
    const canvas = document.querySelector("#canvas");

    canvas.setAttribute("width", window.innerWidth / 5);
    canvas.setAttribute("height", window.innerWidth / 5);

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(60, 10, 50, 50);

    //2번째
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 100 + 50);
    ctx.lineTo(100 + 50, 100 + 50);
    ctx.lineTo(100 + 50, 100);
    ctx.fill();

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100 + 25, 100 - 25);
    ctx.lineTo(100 + 25 * 3, 100 - 25);
    ctx.lineTo(100 + 25 * 2, 100);
    ctx.fill();

    ctx.fillStyle = "rgba(0, 2000, 0, 0.5)";
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(150 + 25, 100 - 25);
    ctx.lineTo(150 + 25, 100 + 25);
    ctx.lineTo(150, 100 + 50);
    ctx.fill();

    //3번째
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.beginPath();
    ctx.moveTo(200 - 20 * 2, 200 + 20);
    ctx.lineTo(200, 200 + 20 * 2);
    ctx.lineTo(200, 200 + 20 * 2 + 50);
    ctx.lineTo(200 - 20 * 2, 200 + 20 + 50);
    ctx.fill();

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 - 20 * 2, 200 + 20);
    ctx.lineTo(200, 200 + 20 * 2);
    ctx.lineTo(200 + 20 * 2, 200 + 20);
    ctx.fill();

    ctx.fillStyle = "rgba(0, 2000, 0, 0.5)";
    ctx.beginPath();
    ctx.moveTo(200, 200 + 20 * 2);
    ctx.lineTo(200, 200 + 20 * 2 + 50);
    ctx.lineTo(200 + 20 * 2, 200 + 20 * 1 + 50);
    ctx.lineTo(200 + 20 * 2, 200 + 20 * 1);
    ctx.fill();
  },
};
</script>

<style>
#container {
  /* border: 1px solid black; */
  width: 500px;
  height: 500px;
}
canvas {
  border: 1px solid black;
  width: 100%;
  height: 100%;
}
</style>