function main()
{
   let result=printscore();
    let score=document.getElementById("result");
    score.value=result+"分";

}
function printscore()
{
    let res=0;
    res+=fillResult();
    res+=choiceResult();
    res+=multResult();
    res+=judgeResult();
    res+=sketchResult();
    return res;
}

function fillResult() {
    let res=0;
    let ans1=document.getElementById("fill1").value.trim();
    if(/^统一建模语言$/.test(ans1))
    {
        res+=5;
    }
    let ans2=[];
    ans2.push(document.getElementById("fill21").value.trim());
    ans2.push(document.getElementById("fill22").value.trim());
    ans2.push(document.getElementById("fill23").value.trim());

    for(let i of ans2)
    {
        if(/^封装性$/.test(i)||/^多态性$/.test(i)||/^继承性$/.test(i))
        {
            res+=5;
        }
    }
    return res;
}

function choiceResult() {
   let res=0;
   let ans1= (document.getElementById('sChoice1')).getElementsByTagName('input');
   if(ans1[1].checked===true)
   {
       res+=10;
   }
   let ans2=(document.getElementById('sChoice2')).getElementsByTagName('input');
   if(ans2[0].checked===true)
   {
       res+=10;
   }
   return res;
}

function multResult() {
    let res = 0;
    let quiz1 = (document.getElementById('mChoice1')).getElementsByTagName('input');
    if(quiz1[0].checked==true && quiz1[1].checked==true && quiz1[3].checked== true && quiz1[2].checked== false){
        res +=10 ;
    }
    let quiz2 = (document.getElementById('mChoice2')).getElementsByTagName('input');
    if(quiz2[0].checked==true && quiz2[1].checked==true && quiz2[2].checked== true && quiz2[3].checked== false){
        res +=10;
    }
    return res;
}

function judgeResult() {
    let res = 0;
    if (document.getElementById("f1").checked === true) {
        res += 10;
    }
    if (document.getElementById("t2").checked === true) {
        res += 10;
    }
    return res;
}
  function sketchResult() {
      let res=0;
      let ans=document.getElementById("sketch").value.trim();
      if(/^模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。$/.test(ans))
      {
          res+=20;
      }
      return res;
  }
