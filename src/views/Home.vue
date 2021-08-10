<template>
  <div id="dweb-audio-player">
    <div id="control">
      <div @click="play" class="icon-btn">
        <img src="../assets/icon/play.png" alt="">
      </div>
      <div @click="pause" class="icon-btn">
        <img @click="pause" src="../assets/icon/pause.png" alt="">
      </div>
      <div @click="chooseFile" class="icon-btn">
        <img src="../assets/icon/file.png" alt="">
      </div>
      <input id="musicFile" @change="inputFile($event)" type="file" style="display: none;">
    </div>
    <div id="music-info">
      <marquee v-if="fileName" hspace="20" behavior="scroll" direction="left">{{ fileName }}</marquee>
      <marquee v-else behavior="alternate">未加载媒体文件</marquee>  
    </div>
    <div id="audio-view">
      <canvas id="canvas" width="300" height="250"></canvas>
    </div>
  </div>
</template>


<script>
  import home from './home.ts'
  export default(home)
</script>

<style scoped>
  #dweb-audio-player {
    width: 300px;
    height: 400px;
    box-shadow: 0 2px 12px 0 #00000060;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -150px;
  }
  #control {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  #control .icon-btn{
    border: 1px solid #ccc;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 35px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  #control .icon-btn:hover {
    background-color: #cccccc;
  }
  #control .icon-btn img{
    width: 30px;
    height: 30px;
  }
  #music-info {
    height: 30px;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    font-weight: 300;
    box-shadow: 0 2px 12px 0 #00000060;
  }
</style>