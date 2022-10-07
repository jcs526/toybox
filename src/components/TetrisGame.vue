<template @keydown.left="left()" @keydown.right="right()">
  <div class="hello">
    <div v-for="(line, index) in body" :key="index">
      <span v-for="(dot, index2) in line" :key="index2" :class="{active:dot=='X'||dot=='T'}"> {{ dot }} </span>
    </div>
    <input type="text" @keydown.left="left()" @keydown.right="right()" />
    <div @click="start()">시작</div>
    <div @click="pause()">정지</div>
    <div @click="reset()">리셋</div>
  </div>
</template>

<script>
let game;
export default {
  data() {
    return {
      body: new Array(20).fill(new Array(10).fill(0)),
      startCoord: [0, 4],
      y: 1,
      x: 4,
      playing: false,
      reached: true,
      block: [
        //Z모양
        [
          { y: 0, x: -1 },
          { y: 0, x: 0 },
          { y: 1, x: 0 },
          { y: 1, x: 1 },
        ],
        //역 Z모양
        [
          { y: 0, x: 1 },
          { y: 0, x: 0 },
          { y: 1, x: 0 },
          { y: 1, x: -1 },
        ],
        //L모양
        [
          { y: -1, x: 0 },
          { y: 0, x: 0 },
          { y: 1, x: 0 },
          { y: 1, x: 1 },
        ],
        //역 L모양
        [
          { y: -1, x: 0 },
          { y: 0, x: 0 },
          { y: 1, x: 0 },
          { y: 1, x: -1 },
        ],
        //역 L모양
        [
          { y: -1, x: 0 },
          { y: 0, x: 0 },
          { y: 1, x: 0 },
          { y: 2, x: 0 },
        ],
      ],
      target: [],
    };
  },
  methods: {
    reset() {
      this.body = new Array(20).fill(new Array(10).fill(0));
    },
    modify(y, x, data) {
      console.log(y, x, data);
      let temp = [...this.body[y]];

      temp.splice(x, 1, data);
      this.body.splice(y, 1, temp);
    },
    start() {
      if (!this.playing) {
        game = setInterval(() => {
          // 게임 활성화
          this.playing = true;

          // 블록 바닥 y값
          // this.target.sort((a,b)=>b.y-a.y)[0].y

          // 블록 최좌단
          // this.target.sort((a,b)=>a.x-b.x)[0].x

          // 블록 최우단
          // this.target.sort((a,b)=>a.x-b.x)[this.target.length-1].x

          if (this.reached) {
            let random = Math.floor(Math.random()*4)
            random=3;
            this.target = this.block[random].map((v) => {
              return { y: v.y + this.y, x: v.x + this.x };
            });
            if(random==3||random==4||random==2){
              this.y++;
            }
            this.target.forEach((v) => {
              this.modify(v.y, v.x, "X");
            });
            // this.modify(this.y, this.x, "X");
            console.log("시이이자자작", this.target);
            this.reached = false;
          } else {
            if (
              this.target.sort((a, b) => b.y - a.y)[0].y ==
              this.body.length - 1
            ) {
              console.log("바닥 도달");
              this.reachFloor();
              return;
            } else if (
              this.body[this.target.sort((a, b) => b.y - a.y)[0].y + 1][
                this.x
              ] == "X"
            ) {
              console.log("바닥 도달");
              this.reachFloor();
              return;
            } else if (
              this.target.filter((v) => {
                return (
                  this.body[v.y + 1][v.x] == "X" &&
                  this.target.filter((v2) => v2.x == v.x && v2.y == v.y + 1)
                    .length == 0
                );
              }).length != 0
            ) {
              console.log("바닥 도달");
              this.reachFloor();
              return;
            }

            if (this.target.sort((a, b) => b.y - a.y)[0].y > 0) {
              this.target.forEach((v) => {
                this.modify(v.y, v.x, 0);
              });
            }

            for (let i = 0; i < this.target.length; i++) {
              this.modify(++this.target[i].y, this.target[i].x, "X");
            }
            this.modify(++this.y, this.x, "T");
          }
        }, 1000);
      }
    },
    reachFloor() {
      this.modify(this.y, this.x, "X");
      this.x = this.startCoord[1];
      this.y = this.startCoord[0];
      console.log(this.x, this.y, "으로 리셋");
      this.reached = true;
    },
    pause() {
      clearInterval(game);
      this.playing = false;
    },
    left() {
      console.log("좌로 이동");
      if (
        this.target.filter((v) => {
          return (
            this.body[v.y][v.x - 1] == "X" &&
            this.target.filter((v2) => v2.x == v.x - 1 && v2.y == v.y).length ==
              0
          );
        }).length != 0
      ) {
        return;
      } else if (this.target.sort((a, b) => a.x - b.x)[0].x == 0) {
        return;
      } else {
        this.target.forEach((v) => {
          this.modify(v.y, v.x, 0);
        });
        this.target.forEach((v) => {
          this.modify(v.y, --v.x, "X");
        });
        this.modify(this.y, --this.x, "T");
      }
    },
    right() {
      if (
        this.target.filter((v) => {
          return (
            this.body[v.y][v.x + 1] == "X" &&
            this.target.filter((v2) => v2.x == v.x + 1 && v2.y == v.y).length ==
              0
          );
        }).length != 0
      ) {
        return;
      } else if (this.target.sort((a, b) => b.x - a.x)[0].x == 9) {
        return;
      } else {
        this.target.forEach((v) => {
          this.modify(v.y, v.x, 0);
        });
        this.target.forEach((v) => {
          this.modify(v.y, ++v.x, "X");
        });
        this.modify(this.y, ++this.x, "T");
      }
    },
    down() {
      console.log("아래로 이동");

      if (this.target.sort((a, b) => b.y - a.y)[0].y == this.body.length - 1) {
        console.log("바닥 도달");
        this.reachFloor();
        return;
      } else if (
        this.body[this.target.sort((a, b) => b.y - a.y)[0].y + 1][this.x] == "X"
      ) {
        console.log("바닥 도달");
        this.reachFloor();
        return;
      } else if (
        this.target.filter((v) => {
          return (
            this.body[v.y + 1][v.x] == "X" &&
            this.target.filter((v2) => v2.x == v.x && v2.y == v.y + 1).length ==
              0
          );
        }).length != 0
      ) {
        console.log("바닥 도달");
        this.reachFloor();
        return;
      } else {
        this.target.forEach((v) => {
          this.modify(v.y, v.x, 0);
        });
        this.target.forEach((v) => {
          this.modify(++v.y, v.x, "X");
        });
        this.modify(++this.y, +this.x, "T");
      }
    },
    up() {
      console.log("위 클릭");
      let temp = JSON.parse(JSON.stringify(this.target));
      console.log("처리전", this.target);

      // 시계방향 처리
      temp = temp.map((v) => {
        return {
          x: v.x - this.x,
          y: v.y - this.y,
        };
      });
      console.log("temp", temp);

      temp = temp.map((v) => {
        return {
          x: -v.y + this.x,
          y: v.x + this.y,
        };
      });

      console.log("temp", temp);

      this.target.forEach((v) => {
        this.modify(v.y, v.x, 0);
      });

      this.target = temp;
      this.target.forEach((v) => {
        this.modify(v.y, v.x, "X");
      });
      this.modify(this.y, this.x, "T");
    },
  },
  mounted() {
    console.log(this.body);
    // for(let i=0; i<this.body.length; i++){
    //   console.log("i",i);
    //   for(let j=0; j<this.body[i].length; j++){
    //     console.log("j",j);
    //     this.body.splice(i,1,);
    //   }
    // }
    document.body.addEventListener("keydown", (e) => {
      if (e.keyCode == "38") {
        // up arrow
        this.up();
      } else if (e.keyCode == "40") {
        // down arrow
        this.down();
      } else if (e.keyCode == "37") {
        // left arrow
        this.left();
      } else if (e.keyCode == "39") {
        // right arrow
        this.right();
      }
    });
  },
  watch: {
    body(newV) {
      newV.forEach((v, i) => {
        if (v.filter((v2) => v2 == "X").length == 10) {
          newV.splice(i, 1);
          newV.unshift(new Array(10).fill(0));
        }
      });
    },
  },
};
</script>

<style scoped>
  .active{
    background-color: black;
  }
</style>