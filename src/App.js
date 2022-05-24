import logo from './logo.svg';
import './App.css';
import './ranking.css'

function openPage(pageName, elmnt, color) {

	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("level_info");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	tablinks = document.getElementsByClassName("level_button");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].style.backgroundColor = "";
	  tablinks[i].style.opacity = "0.35";
	}
  
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
	elmnt.style.opacity = "1";
	document.querySelector("#ranking > section.rank_header > img.header_4").src = "img/" + pageName + ".png";
}
 
function hover(obj){if (obj.style.opacity != "1") obj.style.opacity="0.85";}

function hover2(obj){if (obj.style.opacity != "1") obj.style.opacity="0.35";}

const LevelMamu = () => {
	return (
		<section id = "level_mamu">
			<button className = "level_button hard_8" onMouseOut = {'hover2(this)'} onMouseOver = {'hover(this)'} onClick = {"openPage('hard_8', this, 'rgba(65, 75, 43, 1)')"}>
				<img src="img/hard_8.png" width = {'100px'} height = {'100px'} />
			</button>

			<button className = "level_button oni_6" onmouseout='hover2(this)' onmouseover='hover(this)' onclick="openPage('oni_6', this, 'rgba(253, 37, 135, 1)')">
				<img src="img/oni_6.png" width = {'100px'} height = {'100px'} />
			</button>
			
        	<button className = "level_button oni_7" onmouseout='hover2(this)' onmouseover='hover(this)' onclick="openPage('oni_7', this, 'rgba(218, 38, 160.25, 1)')">
				<img src="img/oni_7.png" width = {'100px'} height = {'100px'} />
			</button>
			  
        	<button className = "level_button oni_8" onmouseout='hover2(this)' onmouseover='hover(this)' onclick="openPage('oni_8', this, 'rgba(183, 40, 185.5, 1)')">
				<img src="img/oni_8.png" width = {'100px'} height = {'100px'} />
			</button>
			  
        	<button className = "level_button oni_9" onmouseout='hover2(this)' onmouseover='hover(this)' onclick="openPage('oni_9', this, 'rgba(147, 42, 210.75, 1)')">
				<img src="img/oni_9.png" width = {'100px'} height = {'100px'} />
			</button>
			
        	<button className ="level_button oni_10" onmouseout='hover2(this)' onmouseover='hover(this)' id="defaultOpen" onclick="openPage('oni_10', this, 'rgba(112, 44, 236, 1)')">
				<img src="img/oni_10.png" width = {'100px'} height = {'100px'} />
			</button>
	    </section>
	)
}

const Hard8 = () => {
	return (
		<div id = "hard_8" class = "level_info">
			<div class = "level_info_content">
				<div class = "level_info_icon">
					<img src="img/hard_8.png"/>
					<p class = "level_songs_2"></p>
				</div>
				<table class = "level_info_table">
					<tr>
						<th class = "level_info_table_0">기준</th>
						<th>진행도</th>
					</tr>
					<tr>
						<td class = "level_info_table_0">왕관</td>
						<td>추후</td>
					</tr>
					<tr>
						<td class = "level_info_table_0">극</td>
						<td>추가예정</td>
					</tr>
				</table>
			</div>
			<button onclick="" class="interlock_btn" title="공사중"> 공사중 </button>
			<button onclick="downImg()" class="save_btn" title="서열표 저장하기"> 서열표 저장 </button>
		</div>
	)
}

const Oni6 = () => {
	return (
		<div id = "oni_6" class = "level_info">
			<div class = "level_info_content">
				<div class = "level_info_icon">
					<img src="img/oni_6.png"/>
					<p class = "level_songs_2"></p>
				</div>
				<table class = "level_info_table">
					<tr>
						<th class = "level_info_table_0">기준</th>
						<th>진행도</th>
					</tr>
					<tr>
						<td class = "level_info_table_0">왕관</td>
						<td>추후</td>
					</tr>
					<tr>
						<td class = "level_info_table_0">극</td>
						<td>추가예정</td>
					</tr>
				</table>
			</div>
			<button onclick="" class="interlock_btn" title="공사중"> 공사중 </button>
			<button onclick="downImg()" class="save_btn" title="서열표 저장하기"> 서열표 저장 </button>
		</div>
	)
}

const Oni7 = () => {
	return (
		<div id = "oni_7" class = "level_info">
			<div class = "level_info_content">
				<div class = "level_info_icon">
					<img src="img/oni_7.png"/>
					<p class = "level_songs_2"></p>
				</div>
				<table class = "level_info_table">
					<tr>
						<th class = "level_info_table_0">기준</th>
						<th>진행도</th>
					</tr>
					<tr>
						<td class = "level_info_table_0">왕관</td>
						<td>추후</td>
					</tr>
					<tr>
						<td class = "level_info_table_0">극</td>
						<td>추가예정</td>
					</tr>
				</table>
			</div>
			<button onclick="" class="interlock_btn" title="공사중"> 공사중 </button>
			<button onclick="downImg()" class="save_btn" title="서열표 저장하기"> 서열표 저장 </button>
		</div>
	)
}

const Oni8 = () => {
	return (
		<div id = "oni_8" class = "level_info">
			<div class = "level_info_content">
				<div class = "level_info_icon">
					<img src="img/oni_8.png"/>
					<p class = "level_songs_2"></p>
				</div>
				<table class = "level_info_table">
					<tr>
						<th class = "level_info_table_0">기준</th>
						<th>진행도</th>
					</tr>
					<tr>
						<td class = "level_info_table_0">왕관</td>
						<td>추후</td>
					</tr>
					<tr>
						<td class = "level_info_table_0">극</td>
						<td>추가예정</td>
					</tr>
				</table>
			</div>
			<button onclick="" class="interlock_btn" title="공사중"> 공사중 </button>
			<button onclick="downImg()" class="save_btn" title="서열표 저장하기"> 서열표 저장 </button>
		</div>
	)
}

const Oni9 = () => {
	return (
		<div id = "oni_9" class = "level_info">
			<div class = "level_info_content">
				<div class = "level_info_icon">
					<img src="img/oni_9.png"/>
					<p class = "level_songs_2"></p>
				</div>
				<table class = "level_info_table">
					<tr>
						<th class = "level_info_table_0">기준</th>
						<th>진행도</th>
					</tr>
					<tr>
						<td class = "level_info_table_0">왕관</td>
						<td>추후</td>
					</tr>
					<tr>
						<td class = "level_info_table_0">극</td>
						<td>추가예정</td>
					</tr>
				</table>
			</div>
			<button onclick="" class="interlock_btn" title="공사중"> 공사중 </button>
			<button onclick="downImg()" class="save_btn" title="서열표 저장하기"> 서열표 저장 </button>
		</div>
	)
}

const Oni10 = () => {
	return (
		<div id = "oni_10" class = "level_info">
			<div class = "level_info_content">
				<div class = "level_info_icon">
					<img src="img/oni_10.png"/>
					<p class = "level_songs_2"></p>
				</div>
				<table class = "level_info_table">
					<tr>
						<th class = "level_info_table_0">기준</th>
						<th>진행도</th>
					</tr>
					<tr>
						<td class = "level_info_table_0">왕관</td>
						<td>추후</td>
					</tr>
					<tr>
						<td class = "level_info_table_0">극</td>
						<td>추가예정</td>
					</tr>
				</table>
			</div>
			<button onclick="" class="interlock_btn" title="공사중"> 공사중 </button>
			<button onclick="downImg()" class="save_btn" title="서열표 저장하기"> 서열표 저장 </button>
		</div>
	)
}

function App() {

  return (
    <div>
		<LevelMamu/>
		<Hard8/>
		<Oni6/>
		<Oni7/>
		<Oni8/>
		<Oni9/>
		<Oni10/>
    	<section id = "ranking">
			<section class = "rank_header">
				<img class = "header_background" src = "img/rank_logo.jpg"/>
				<img class = "header_1" src="img/header.png"/>
				<img class = "header_2" src="img/header2.png"/>
				<img class = "header_3" src="img/header3.png"/>
				<img class = "header_4" src="img/oni_10.png"/>
				<div class = "song_total"> <p class = "level_songs"></p> </div>
			</section>
			<section id = "song_ranked"></section>
		</section>

		<section id = "Go_top">
			<button onclick="topFunction()" id="Top_btn" title="Go to top"> Top </button>
		</section>

		<footer id = "footer">
			<ul>
				<li> <a> 누니머기는 엉덩이가 아니다! </a> </li>
				<li> <a> 누니머기는 귀여운 포켓몬이다!</a> </li>
				<li> <a href="#" onClick = {"window.open('https://www.pokemon.com/us/pokedex/snom'); return false"}> 누니머기가 뭔가요? </a> </li>
			</ul>
		</footer>
      
    </div>
  );
}

export default App;
