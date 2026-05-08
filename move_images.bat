@echo off
set SRC=C:\Users\hp140\.gemini\antigravity\brain\5c2b1b8f-c1f3-4397-b369-b45fd5598da3
set DST=c:\Users\hp140\vedanco-website\frontend\public\assets\images

echo Moving realistic images to assets folder...

copy "%SRC%\hero_logistics_highway_realistic_1777868117672.png" "%DST%\hero_highway_real.png"
copy "%SRC%\warehouse_logistics_hub_realistic_1777868137522.png" "%DST%\warehouse_hub_real.png"
copy "%SRC%\global_port_supply_chain_realistic_1777868154414.png" "%DST%\global_port_real.png"
copy "%SRC%\corporate_office_meeting_realistic_1777868169887.png" "%DST%\corporate_meeting_real.png"
copy "%SRC%\sustainability_solar_farm_realistic_1777868183893.png" "%DST%\solar_farm_real.png"

echo ✅ All images moved successfully!
pause
