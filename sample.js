$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
                          
    let sum = 0;
    for(let i=0; i<subject_points.length; i++){
      sum += subject_points[i];
    }
    
    $("#sum_indicate").text(sum);
    let ave = sum / subject_points.length;
    $("#average_indicate").text(ave);
  };

  function get_achievement(){
    let result = Number($("#average_indicate").text());
    if(result>=80){
      $("#evaluation").text("A");
    }
    else if(result>=60){
      $("#evaluation").text("B");
    }
    else if(result>=40){
      $("#evaluation").text("C");
    }
    else if(result<40){
      $("#evaluation").text("D");
    };
  };

  function get_pass_or_failure(){
   let subjects = [Number($('#national_language').val()),
                    Number($('#english').val()),
                    Number($('#mathematics').val()),
                    Number($('#science').val()),
                    Number($('#society').val())
                  ];
    let num = subjects.length;
    let judge = "合格";
    for(let i=0; i<num; i++){
      if(subjects[i]<60){
        judge = "不合格";
        break;
      }
    }
    $("#judge").text(judge);
  }

  function judgement(){
    let achievement = $("#evaluation").text();
    let pass_or_failure = $("#judge").text();
    $('#declaration').append(
      `<label id="alert-indicate" class="alert alert-info">
                                  あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  }

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    $('#alert-indicate').remove();
    judgement();
  });
});