import React from 'react';
import $ from 'jquery';
import html2canvas from 'html2canvas';

import logo from './logo.svg';
import './ranking.css'
import './App.css'
import './ranking_data'

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openPage(pageName, elmnt, color) {
	var i, tablinks;
  
	tablinks = document.getElementsByClassName("level_button");
	for (i = 0; i < tablinks.length; i++) {
	    if (i === elmnt) {
            tablinks[i].style.backgroundColor = color;
	        tablinks[i].style.opacity = "1";
        }
        else {
            tablinks[i].style.backgroundColor = "";
            tablinks[i].style.opacity = "0.35";
        }
	}
  
	document.getElementsByClassName("level_info")[0].style.backgroundColor = color;
	document.getElementsByClassName("level_info_img")[0].src = "img/" + pageName + ".png";
	document.querySelector("#ranking > section.rank_header > img.header_4").src = "img/" + pageName + ".png";
}

function downImg(){
	html2canvas($("#ranking")[0]).then(function(canvas){
		var myImage = canvas.toDataURL();
		downloadURI(myImage, "서열표.png")
	});
}

function downloadURI(uri, name){
	var link = document.createElement("a")
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
}


const LevelMamu = () => {
	return (
		<section id = "level_mamu">
			<button className = "level_button hard_8"  
                    onClick = {() => {openPage('hard_8', 0, 'rgba(65, 75, 43, 1)')}}>
				<img src="img/hard_8.png" width = {'100px'} height = {'100px'} />
			</button>

			<button className = "level_button oni_6" 
                    onClick = {() => {openPage('oni_6', 1, 'rgba(253, 37, 135, 1)')}}>
				<img src="img/oni_6.png" width = {'100px'} height = {'100px'} />
			</button>
			
        	<button className = "level_button oni_7" 
                    onClick = {() => {openPage('oni_7', 2, 'rgba(218, 38, 160.25, 1)')}}>
				<img src="img/oni_7.png" width = {'100px'} height = {'100px'} />
			</button>
			  
        	<button className = "level_button oni_8" 
                    onClick = {() => {openPage('oni_8', 3, 'rgba(183, 40, 185.5, 1)')}}>
				<img src="img/oni_8.png" width = {'100px'} height = {'100px'} />
			</button>
			  
        	<button className = "level_button oni_9" 
                    onClick = {() => {openPage('oni_9', 4, 'rgba(147, 42, 210.75, 1)')}}>
				<img src="img/oni_9.png" width = {'100px'} height = {'100px'} />
			</button>
			
        	<button className ="level_button oni_10" id="defaultOpen" 
                    onClick = {() => {openPage('oni_10', 5, 'rgba(112, 44, 236, 1)')}}>
				<img src="img/oni_10.png" width = {'100px'} height = {'100px'} />
			</button>
	    </section>
	)
}

const LevelInfo = () => {
	return (
		<div className = "level_info" style = {{backgroundColor : 'rgba(183, 40, 185.5, 1)'}} >
			<div className = "level_info_content">
				<div className = "level_info_icon">
					<img className = "level_info_img" src="img/oni_8.png"/>
					<p className = "level_songs_2"></p>
				</div>
				<table className = "level_info_table">
                    <tbody>
                        <tr>
						    <th className = "level_info_table_0">기준</th>
						    <th>진행도</th>
					    </tr>
					    <tr>
						    <td className = "level_info_table_0">왕관</td>
						    <td>추후</td>
					    </tr>
					    <tr>
						    <td className = "level_info_table_0">극</td>
						    <td>추가예정</td>
					    </tr>
                    </tbody>
				</table>
			</div>
			<button className = "interlock_btn" title = "공사중"> 공사중 </button>
			<button onClick = {() => {downImg()}} className = "save_btn" title = "서열표 저장하기"> 서열표 저장 </button>
		</div>
	)
}

function App() {
  return (
    <div>
        <section id = "level">
		    <LevelMamu/>
            <LevelInfo/>
	    </section>
		
        <section id = "ranking">
			<section className = "rank_header">
				<img className = "header_background" src = "img/rank_logo.jpg"/>
				<img className = "header_1" src="img/header.png"/>
				<img className = "header_2" src="img/header2.png"/>
				<img className = "header_3" src="img/header3.png"/>
				<img className = "header_4" src="img/oni_8.png"/>
				<div className = "song_total"> <p className = "level_songs"></p> </div>
			</section>
			<section id = "song_ranked"></section>
		</section>

        <section id = "Go_top">
			<button id="Top_btn" onClick = {() => {topFunction()}} title="Go to top"> Top </button>
		</section>

        <footer id = "footer">
			<ul>
				<li> <a> 누니머기는 엉덩이가 아니다! </a> </li>
				<li> <a> 누니머기는 귀여운 포켓몬이다!</a> </li>
				<li> <a href="#" onClick = {() => {window.open('https://www.pokemon.com/us/pokedex/snom'); return false}}> 누니머기가 뭔가요? </a> </li>
			</ul>
		</footer>
    </div>
  );
}

export default App;
