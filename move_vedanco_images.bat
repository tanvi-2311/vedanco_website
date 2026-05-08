@echo off
set SRC=C:\Users\hp140\.gemini\antigravity\brain\5c2b1b8f-c1f3-4397-b369-b45fd5598da3
set DST=c:\Users\hp140\vedanco-website\frontend\public\assets\images

echo Moving new Vedanco office images to assets folder...

copy "%SRC%\vedanco_office_bg_1777872086352.png" "%DST%\vedanco_office_bg.png"
copy "%SRC%\vedanco_reception_thumb_1777872110630.png" "%DST%\vedanco_reception_thumb.png"

echo ✅ New Vedanco images moved successfully!
pause
