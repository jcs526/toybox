<template>
  <div>
    <div id="container">
      <span
        style="position: absolute"
        v-for="(particle, index) in particles"
        :key="index"
        :style="{
          top: particle.y - py / 2 + 1 + 'px',
          left: particle.x + -px / 2 + 'px',
        }"
        :class="{red:index==1}"
        ><b>ㅇ</b></span
      >
    </div>
    <div @click="start()">시작버튼</div>
    <div @click="end()">종료버튼</div>
  </div>
</template>

<script>
let interval;
export default {
  data() {
    return {
      condition: false,
      sequence: 0,
      px: 5.33,
      py: 18.67,
      particles: [
        // {
        //   x: 100,
        //   y: 250,
        //   vx: 20,
        //   vy: 0,
        // },
        // {
        //   x: 400,
        //   y: 250,
        //   vx: -30,
        //   vy: 0,
        // },
        // {
        //   x: 500,
        //   y: 500,
        //   vx: -30,
        //   vy: 11,
        // },
      ],
    };
  },
  methods: {
    start() {
      interval = setInterval(() => {
        this.moveParticle();
        this.particleCollision();
        // console.log(`${this.sequence}회차 실행중~`);
        this.sequence++;
      }, 20);
    },
    end() {
      clearInterval(interval);
    },
    moveParticle() {
      this.particles.forEach((v,i) => {
        v.x += v.vx;
        v.y += v.vy;
        if (v.x >= 500) {
          v.x = -v.x + 1000;
          v.vx = -v.vx;
        } else if (v.x <= 0) {
          v.x = -v.x;
          v.vx = -v.vx;
        }
        if (v.y >= 500) {
          v.y = -v.y + 1000;
          v.vy = -v.vy;
        } else if (v.y <= 0) {
          v.y = -v.y;
          v.vy = -v.vy;
        }
        // console.log("x : ", v.x);
        // console.log("y : ", v.y);

        if(i==1){
            let div = document.createElement('div');
            div.style.position='absolute';
            div.style.top=v.y - this.py / 2 + 1 + 'px',
            div.style.left=v.x + -this.px / 2 + 'px'
            div.innerText='·';
            document.body.appendChild(div);
        }
      });
    },
    particleCollision() {
      let arr = [];

      for (let i = 0; i < this.particles.length; i++) {
        for (let j = 0; j < this.particles.length; j++) {
          if (arr.includes(i) || arr.includes(j)||i==j) {
            break;
          }
          let p1 = this.particles[i];
          let p2 = this.particles[j];

          let distance = ((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2) ** 0.5;

        //   console.log(i, j, distance);

          if (distance < 8 ** 0.5) {
            arr.push(i, j);

            // let theta1 = Math.acos(p1.x/(p1.x**2+p1.y**2)**0.5)/Math.PI*180;

            // let theta2 = 180-Math.acos(p2.x/(p2.x**2+p2.y**2)**0.5)/Math.PI*180;
            

            let angle = Math.acos((p1.x - p2.x)/distance)/Math.PI*180

            if(distance==0){
                angle=0;
            }
            // angle=0;

            let p1fx  = p2.vx*Math.cos(angle/180*Math.PI)+p1.vy*Math.cos(angle/180*Math.PI+0.5*Math.PI);

            let p1fy  = p2.vx*Math.sin(angle/180*Math.PI)+p1.vy*Math.sin(angle/180*Math.PI+0.5*Math.PI);

            let p2fx  = p1.vx*Math.cos(angle/180*Math.PI)+p2.vy*Math.cos(angle/180*Math.PI+0.5*Math.PI);

            let p2fy = p1.vx*Math.sin(angle/180*Math.PI)+p2.vy*Math.sin(angle/180*Math.PI+0.5*Math.PI);

            console.log("p1",p1,i);
            console.log("p2",p2,j);
            console.log("distance",distance);
            console.log("angle",angle);
            console.log("p1fx",p1fx);
            console.log("p1fy",p1fy);
            console.log("p2fx",p2fx);
            console.log("p2fy",p2fy);

            p1.vx=p1fx;
            p1.vy=p1fy;

            p2.vx=p2fx;
            p2.vy=p2fy;

            
            // let diagonal_p1= (p1.x**2+p1.y**2)**0.5
            // let sin_p1 = p1.y/diagonal_p1;
            // let cos_p1 = p1.x/diagonal_p1;

            // let diagonal_p2= (p2.x**2+p2.y**2)**0.5
            // let sin_p2 = p2.y/diagonal_p2;
            // let cos_p2 = p2.x/diagonal_p2;
          }

          // p1_loc-p2_loc
        }
      }
      console.log("arr2",arr);
    },
  },
  mounted(){
    for(let i =0; i<500; i++){
        this.particles.push({
          x: Math.random()*500,
          y: Math.random()*500,
          vx: Math.random()*10-5,
          vy: Math.random()*10-5,
        },)
    }
  }
};
</script>

<style>
#container {
  border: 1px solid black;
  width: 500px;
  height: 500px;
}
body {
  margin: 0px;
}
.red{
    background: red;
}
</style>