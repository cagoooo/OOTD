# -*- coding: utf-8 -*-
import io, time
from faster_whisper import WhisperModel

OFFSET = 1015.0  # 切片起點秒數
t0 = time.time()
model = WhisperModel("small", device="cpu", compute_type="int8")

init = "以下是繁體中文的日系男生穿搭影片，介紹品牌 RAGEBLUE、LOWRYS FARM、LAKOLE，談襯衫、短褲、開襟衫、配色、約會穿搭。"
segments, info = model.transcribe(
    "audio_tail.mp3", language="zh", initial_prompt=init,
    beam_size=5, vad_filter=True, vad_parameters=dict(min_silence_duration_ms=500),
)

txt = io.open("transcript_tail.txt", "w", encoding="utf-8")
def fmt(s):
    h=int(s//3600); m=int((s%3600)//60); sec=s%60
    return "%02d:%02d:%06.3f" % (h,m,sec)
i=0
for seg in segments:
    i+=1
    txt.write("[%s -> %s] %s\n" % (fmt(seg.start+OFFSET), fmt(seg.end+OFFSET), seg.text.strip()))
    txt.flush()
txt.close()
# 用 ascii-safe 的方式回報，避免 cp950 崩潰
io.open("tail_done.txt","w",encoding="utf-8").write("DONE segs=%d elapsed=%.1f\n"%(i,time.time()-t0))
