import React from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  return (
    //lowercase in the name of className for BEM convention
    <div className="app">
      <h1>TikTok clone</h1>
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/2f70995cbe6cd93735e8450314fe999f/5f52daff/video/tos/useast2a/tos-useast2a-pve-0068/658241dacf4e4473acc043d8b8a2d0c6/?a=1233&br=3380&bt=1690&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009041825250101890722181B08C496&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzN1ZDhydGg0dzMzNzczM0ApZDs2N2Q5OjxlNzloODRnOmcuYWVxa2dnazRfLS1eMTZzcy0xNF8yLl8wNDAwYzJgNi06Yw%3D%3D&vl=&vr="
          channel="my_own_enemy"
          description="YO WOrks"
          song="cant touch this"
          likes={100}
          messages={200}
          shares={300}
        />
        <Video
          url="https://v16m.tiktokcdn.com/6830e19b9a9810952dea4e2bbcc0ce21/5f52e4fb/video/tos/useast2a/tos-useast2a-pve-0068/c634ed900c724eda876e19cf953c7b0d/?a=1233&br=3626&bt=1813&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009041907570101890722184A0BAFEA&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anhxcjY2aTlldTMzZzczM0ApNzU8NTlmZmU0N2U8aTc8aGctNmQ1cmE1YWRfLS0vMTZzc2BgLmMyLTYzMl80LmAvYy06Yw%3D%3D&vl=&vr="
          channel="my_own_enemy"
          description="rrrrree"
          song="such a whore"
          likes={345}
          messages={789}
          shares={390}
        />
      </div>
    </div>
  );
}

export default App;
