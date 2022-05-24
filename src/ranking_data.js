import React from 'react';
import $ from 'jquery';

$.ajax({
    url: './data/lvM8.csv',
    dataType: 'text',
}).done(read_hard);

$(function() {
    $(".level_button.hard_8").click(function(){   

        $.ajax({
            url: './data/lvM8.csv',
            dataType: 'text',
        }).done(read_hard);
    
    }); 
})

$(function() {
    $(".level_button.oni_6").click(function(){   

        $.ajax({
            url: './data/lv6.csv',
            dataType: 'text',
        }).done(read_oni);
    
    }); 
})

$(function() {
    $(".level_button.oni_7").click(function(){   

        $.ajax({
            url: './data/lv7.csv',
            dataType: 'text',
        }).done(read_oni);
    
    }); 
})

$(function() {
    $(".level_button.oni_8").click(function(){   
        $.ajax({
            url: './data/lv8.csv',
            dataType: 'text',
        }).done(read_oni);
    }); 
})

$(function() {
    $(".level_button.oni_9").click(function(){   

        $.ajax({
            url: './data/lv9.csv',
            dataType: 'text',
        }).done(read_oni);
    
    }); 
})

$(function() {
    $(".level_button.oni_10").click(function(){   

        $.ajax({
            url: './data/lv10.csv',
            dataType: 'text',
        }).done(read_lv10);
    
    });
})

// csv메뉴 : title	sub_title	level	ranked	genre1	genre2	individual	first_play	full_combo	do_jo

function read_hard(data) {
    $('#song_ranked').empty();

    var allRows = data.split(/\r/);

    var rank = ["졸업+", "졸업", "최상", "상", "중상", "중", "중하", "하", "최하", "보류"];
    var genres = ["none", "pop", "kids", "ani", "vocal", "games", "var", "classical", "namco"];
    var dan = ["none","1dan","2dan","3dan","4dan","5dan","6dan","7dan","8dan","9dan","10dan","kuroto","meijin","chojin","tatsujin"];
    
    var songs = allRows.length - 2;
    var table2 = '총 ' + songs  + '보면';
    $('.level_songs').empty();
    $('.level_songs').append(table2);
    $('.level_songs_2').empty();
    $('.level_songs_2').append(table2);

    var rank_index = 1; // 테이블 갯 수
    var row = 0; // 줄 수
    var remain = 6; // 남은 열 수 
    
    var table = '<table class = "ranking"> <tr> <th class = "rank_2" rowspan = "10">' + rank[rank_index] + '</th>';

    for (var singleRow = 1; singleRow < allRows.length - 1; singleRow++) {
        var rowCells = allRows[singleRow].split('|');

        if (rowCells[3] != rank_index) {
            
            for (var tmp = 0; tmp < remain % 6; tmp++) {
                table += '<td></td>';
            } // 남은 갯수 채우기

            table += '</tr></table>';
            while (rowCells[3] != rank_index) {
                rank_index ++;
            }          
            row = 0;
            remain = 6;

            table += '<table class = "ranking"> <tr> <th class = "rank_' + rank_index+ '" rowspan = "10">' + rank[rank_index] + '</th>';
        }

        table += '<td><div class = "content_song"><div class = "genre">';
        table += '<div class = ' + genres[rowCells[4]] + '> </div>';

        if (rowCells[5] != 0) {
            table += '<div class = ' + genres[rowCells[5]] + '> </div>';
        }
        else {
            table += '<div class = ' + genres[rowCells[4]] + '> </div>';
        }

        table += '</div>'; // 장르 채우기

        table += '<div class = "Song"><p class = "Title_Hard">' + rowCells[0] + '</p>';
        table += '<p class = "Subtitle">' + rowCells[1] + '</p>';

        table += '<div class = "Bottom_Right">';
        if (rowCells[6] == 1) {
            table += '<canvas class = "individual"> </canvas>';
        }
        if (rowCells[7] == 1) {
            table += '<canvas class = "first_play"> </canvas>';
        }
        if (rowCells[8] == 1) {
            table += '<canvas class = "full_combo"> </canvas>';
        }
		
        table += '</div><div class = "Top_Right">';

        if (rowCells[9] != 0) {
            table += ' <img src="img/' + dan[rowCells[9]] + '.png" style="width:30px;height:30px;">';
        }

        table += '</div></div></div></td>'; // 곡 정보 입력 끝
		remain = (remain - 1);
        
        if (remain == 0) {
            table += '</tr><tr>';
            remain = 6;
        } // 줄 바꿈

    } 

    for(var tmp = 0; tmp < remain % 6; tmp++) {
        table += '<td></td>';
    } // 남은 갯수 채우기
    
    table += '</tr></table>';

    $('#song_ranked').append(table);
}

// csv메뉴 : title	sub_title	level	ranked	genre1	genre2	is_ura	individual	first_play	full_combo  do_jo

function read_lv10(data) {

    $('#song_ranked').empty();

    var allRows = data.split(/\r/);

    var rank = ["졸업+", "졸업", "최상", "상", "중상", "중", "중하", "하", "최하", "보류"];
    var genres = ["none", "pop", "kids", "ani", "vocal", "games", "var", "classical", "namco"];
    var dan = ["none","1dan","2dan","3dan","4dan","5dan","6dan","7dan","8dan","9dan","10dan","kuroto","meijin","chojin","tatsujin"];
    
    var songs = allRows.length - 2;
    var table2 = '총 ' + songs  + '보면';
    $('.level_songs').empty();
    $('.level_songs').append(table2);
    $('.level_songs_2').empty();
    $('.level_songs_2').append(table2);

    var rank_index = 0; // 테이블 갯 수
    var row = 0; // 줄 수
    var remain = 6; // 남은 열 수 
    
    var table = '<table class = "ranking"> <tr> <th class = "rank_0" rowspan = "10">' + rank[rank_index] + '</th>';

    for (var singleRow = 1; singleRow < allRows.length - 1; singleRow++) {

        var rowCells = allRows[singleRow].split('|');

        if (rowCells[3] != rank_index) {
            
            for (var tmp = 0; tmp < remain % 6; tmp++) {
                table += '<td></td>';
            } // 남은 갯수 채우기

            table += '</tr></table>';
            rank_index ++;

            row = 0;
            remain = 6;

            table += '<table class = "ranking"> <tr> <th class = "rank_' + rank_index+ '" rowspan = "10">' + rank[rank_index] + '</th>';
        }

        table += '<td><div class = "content_song"><div class = "genre">';
        table += '<div class = ' + genres[rowCells[4]] + '> </div>';

        if (rowCells[5] != 0) {
            table += '<div class = ' + genres[rowCells[5]] + '> </div>';
        }
        else {
            table += '<div class = ' + genres[rowCells[4]] + '> </div>';
        }

        table += '</div>'; // 장르 채우기

        if (rowCells[6] == 0) {
            table += '<div class = "Song"><p class = "Title">' + rowCells[0] + '</p>';
        }
        else {
            table += '<div class = "Song"><p class = "Title_Ura">' + rowCells[0] + '</p>';
        }

        table += '<p class = "Subtitle">' + rowCells[1] + '</p>';

        table += '<div class = "Bottom_Right">';
        if (rowCells[7] == 1) {
            table += '<canvas class = "individual"> </canvas>';
        }
        if (rowCells[8] == 1) {
            table += '<canvas class = "first_play"> </canvas>';
        }
        if (rowCells[9] == 1) {
            table += '<canvas class = "full_combo"> </canvas>';
        }
		
        table += '</div><div class = "Top_Right">';

        if (rowCells[10] != 0) {
            table += ' <img src="img/' + dan[rowCells[10]] + '.png" style="width:30px;height:30px;">';
        }

        table += '</div></div></div></td>'; // 곡 정보 입력 끝
		remain = (remain - 1);
        
        if (remain == 0) {
            table += '</tr><tr>';
            remain = 6;
        } // 줄 바꿈

    } 

    for(var tmp = 0; tmp < remain % 6; tmp++) {
        table += '<td></td>';
    } // 남은 갯수 채우기
    
    table += '</tr></table>';

    $('#song_ranked').append(table);
}

function read_oni(data) {

    $('#song_ranked').empty();

    var allRows = data.split(/\r/);

    var rank = ["졸업+", "졸업", "최상", "상", "중상", "중", "중하", "하", "최하", "보류"];
    var genres = ["none", "pop", "kids", "ani", "vocal", "games", "var", "classical", "namco"];
    var dan = ["none","1dan","2dan","3dan","4dan","5dan","6dan","7dan","8dan","9dan","10dan","kuroto","meijin","chojin","tatsujin"];
    
    var songs = allRows.length - 2;
    var table2 = '총 ' + songs  + '보면';
    $('.level_songs').empty();
    $('.level_songs').append(table2);
    $('.level_songs_2').empty();
    $('.level_songs_2').append(table2);

    var rank_index = 2; // 테이블 갯 수
    var row = 0; // 줄 수
    var remain = 6; // 남은 열 수 
    
    var table = '<table class = "ranking"> <tr> <th class = "rank_2" rowspan = "10">' + rank[rank_index] + '</th>';

    for (var singleRow = 1; singleRow < allRows.length - 1; singleRow++) {

        var rowCells = allRows[singleRow].split('|');

        if (rowCells[3] != rank_index) {
            
            for (var tmp = 0; tmp < remain % 6; tmp++) {
                table += '<td></td>';
            } // 남은 갯수 채우기

            table += '</tr></table>';
            while (rowCells[3] != rank_index) {
                rank_index ++;
            }          
            row = 0;
            remain = 6;

            table += '<table class = "ranking"> <tr> <th class = "rank_' + rank_index+ '" rowspan = "10">' + rank[rank_index] + '</th>';
        }

        table += '<td><div class = "content_song"><div class = "genre">';
        table += '<div class = ' + genres[rowCells[4]] + '> </div>';

        if (rowCells[5] != 0) {
            table += '<div class = ' + genres[rowCells[5]] + '> </div>';
        }
        else {
            table += '<div class = ' + genres[rowCells[4]] + '> </div>';
        }

        table += '</div>'; // 장르 채우기

        if (rowCells[6] == 0) {
            table += '<div class = "Song"><p class = "Title">' + rowCells[0] + '</p>';
        }
        else {
            table += '<div class = "Song"><p class = "Title_Ura">' + rowCells[0] + '</p>';
        }

        table += '<p class = "Subtitle">' + rowCells[1] + '</p>';

        table += '<div class = "Bottom_Right">';
        if (rowCells[7] == 1) {
            table += '<canvas class = "individual"> </canvas>';
        }
        if (rowCells[8] == 1) {
            table += '<canvas class = "first_play"> </canvas>';
        }
        if (rowCells[9] == 1) {
            table += '<canvas class = "full_combo"> </canvas>';
        }
		
        table += '</div><div class = "Top_Right">';

        if (rowCells[10] != 0) {
            table += ' <img src="img/' + dan[rowCells[10]] + '.png" style="width:30px;height:30px;">';
        }

        table += '</div></div></div></td>'; // 곡 정보 입력 끝
		remain = (remain - 1);
        
        if (remain == 0) {
            table += '</tr><tr>';
            remain = 6;
        } // 줄 바꿈

    } 

    for(var tmp = 0; tmp < remain % 6; tmp++) {
        table += '<td></td>';
    } // 남은 갯수 채우기
    
    table += '</tr></table>';

    $('#song_ranked').append(table);
}