import { ref,reactive,onMounted } from 'vue'
import { DwebAudioView } from "./dwebaudioview"

export default {
  
    setup() {
      const audioview = new DwebAudioView()
      const plyaBtn = ref(false)
      const fileName = ref('')
      const fileDuration =ref(0)
      const playedTime = ref(0)
      let timer: number | undefined

      onMounted(() => {
        let canvas = document.getElementById('canvas')
        audioview.getCanvasCtx(canvas!)
      })

      // 点击文件选择
      function chooseFile() {
        let dom = document.getElementById('musicFile')
        dom?.click()
      }
      // 文件上传事件
      function inputFile(e:any){
        let file = e.target.files[0]
        audioview.getFileArrayBuffer(file,(type:boolean,buffer:any)=>{
          plyaBtn.value = type
          fileName.value = audioview.fileName
          fileDuration.value = buffer.duration
        })
      }

      //播放
      function play() {
        if (!plyaBtn.value) {
          alert('未加载媒体')
        }else{
          audioview.startPlay(playedTime.value)
          timer = setInterval(()=>{
            if (playedTime.value<fileDuration.value) {
              playedTime.value += 0.1
            }else{
              playedTime.value = 0
              clearInterval(timer)
            }
          },100)
        }
      }

      //暂停
      function pause() {
        audioview.stopPlay()
        clearInterval(timer)
      }

      return {
        fileName:fileName,
        chooseFile:chooseFile,
        inputFile:inputFile,
        play:play,
        pause:pause
      }
    }
  }