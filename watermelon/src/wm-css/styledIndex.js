//  采用styled-components这种分离式的样式编码风格
import styled from "styled-components";
//  感觉最后又变回了之前的那种类调用的写法
export const Sidecss = styled.div`
   width:200px;
   height:100%; 
   border-right:1px solid #ccc;
   float:left;
   .first{
      
        width:168px;
        height:48px;
        padding:12px 16px;
   }
   .others{
       width:16px;
       height:10px;
       margin-left:24px;
       margin-right:12px;
       
   }
`;

export const  SetBottom = styled.div`
        border-bottom:1px solid #ccc
`
export const SetCommon = styled.div`
       width:144px;
       height:20px;
       padding:10px 16px;
      
`


export const  SetFont = styled.span`
    font-size:14px
   

`
export const Special = styled.div`
    width:160px;
    height:20px;
    padding:0 0 0 16px;
    color:#606266;
    margin:15.5px 0 12px;

`
export const Copyright = styled.div`
    width:176px;
`

export const Copyfont = styled.p`
    margin: 5px 0 5px 20px;
    color:A3A7AD;
    font-size:12px; 
`