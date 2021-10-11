import styled from "styled-components";

// 其实，我感觉问题不是很大，主要原因是，在最根上的代码赋值太多了
export  const Main  = styled.div`
     width:1070px;
     height:64px; 
     float:left;
    
     .img{
          width:16px;
          height:12px;
          margin-right:4px;
     }
     .font{
          font-size:14px
     }
     .font_shu{
          font-size:16px;
          color:#ccc;
          margin-right:2px;
         
     }
     .header{
          width:30px;
          height:30px;
          margin:3px;
     }
     .movieImg{
          width:240px;
          height:134px;

     }
     .fontSapn{
      
         margin-left:66px;
       
     }
`


export const Search = styled.div`
    width:534.02px;
    height:40px;
    padding:0 16px;
    margin-top:10px;
    float:left;
    .inputCon{
         width:450px;
         height:40px;
         border:none;
         outline:medium;
         background: rgba(0,0,0,0.05);
    }
`
// 首先，它的是一个指定长宽的容器，你才可以对它进行位置上操作
// 出现问题以后，首先要考虑，我们是否将它转化为了盒子模型。
export const Ulcss = styled.ul`
    width:421px;
    height:40px; 
    float:left;
    margin-top:16px;
    .li{
        width:90.98px;
        height:33px;
        padding:6px 8px 6px 6px; 
        float:left;
        list-style-type:none
        margin-right:40px
        
    } 
`

export const  Avatar = styled.div`
       width:36px;
       height:36px;
       float:left;
       background: #ccc; 
       margin-top:16px;
       margin-left:15px;
`

//  之前的内容脱离了文档流，造成div出现在最上面的问题
export const ShowMovie = styled.div`
     width:1070px;
     height:1080px;
     margin-top:70px;
     background: #ccc;
     padding:16px 0 0;
`

export const SmallMovie = styled.div`
     width:240px;
     height:240px;
     float:left;
     background: Aquamarine;
     margin-left:16px;
     margin-top:10px;
`

export const  Descript = styled.div`
     width: 240px;
     height:92px;
     padding:5px 0 0 0;
     
`
export const Content = styled.div`
     width:166px;
     height:40px;  
     float:left;
     margin-top:7px;
     margin-left:15px;
`
export const Textcss =styled.div`
     width:100px;
     height:20px;
     margin-top:40px;
     margin-bottom:5px;
     margin-left:65px;
` 
