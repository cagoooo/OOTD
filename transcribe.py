# -*- coding: utf-8 -*-
import io, sys, time
from faster_whisper import WhisperModel

t0 = time.time()
model = WhisperModel("small", device="cpu", compute_type="int8")
print("model loaded", time.time()-t0, flush=True)

# 日系男生穿搭主題，給初始 prompt 偏向繁中與服飾術語
init = "以下是繁體中文的日系男生穿搭影片，介紹品牌 RAGEBLUE、LOWRYS FARM、LAKOLE，談襯衫、短褲、開襟衫、配色、約會穿搭。"

segments, info = model.transcribe(
    "audio.mp3",
    language="zh",
    initial_prompt=init,
    beam_size=5,
    vad_filter=True,
    vad_parameters=dict(min_silence_duration_ms=500),
)
print("lang:", info.language, "prob:", info.language_probability, flush=True)

txt = io.open("transcript.txt", "w", encoding="utf-8")
srt = io.open("transcript.srt", "w", encoding="utf-8")

def fmt(s):
    h=int(s//3600); m=int((s%3600)//60); sec=s%60
    return "%02d:%02d:%06.3f" % (h,m,sec)

i=0
for seg in segments:
    i+=1
    line = "[%s -> %s] %s" % (fmt(seg.start), fmt(seg.end), seg.text.strip())
    txt.write(line+"\n")
    srt.write(str(i)+"\n")
    srt.write(fmt(seg.start).replace('.',',')+" --> "+fmt(seg.end).replace('.',',')+"\n")
    srt.write(seg.text.strip()+"\n\n")
    txt.flush()
    print(i, fmt(seg.start), seg.text.strip()[:30], flush=True)

txt.close(); srt.close()
print("DONE segments=%d elapsed=%.1fs" % (i, time.time()-t0), flush=True)
