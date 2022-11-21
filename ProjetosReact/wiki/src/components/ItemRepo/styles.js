import styled from "styled-components";

export const ItemContainer = styled.div`
    min-width: 60vw;
    max-width: 60vw;
    

    border: 1px solid #fff;
    border-radius: .5rem;
    padding: .5rem;
    background-color: #0444;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    

   p.id{
    font-size:.5rem;
    background-color: #b34700;
    padding:.2rem;
    border-radius:.4rem .2rem;
   }

   .firstName-box{
    min-width:35%
    maxc-width:35%

    
   }

   .fullName-box{
    min-width:30%;
   }

   .id-box{
    display: flex;
    min-width: 10%;
    height: 100%;
    align-items: start;
   }

   .btn-box{
    display: flex;
    justify-content: end;
    align-items: center;
   }

   

    h3.fullName {
        font-size: 1rem;
        color: #0ff;
        margin-bottom: .5rem;
        margin-right: 2rem;
        min-width:20%%;
        overflow-x:auto;
    }

    p.fullName {
        
        font-size:16px;
        color: #FAFAFA60;
        margin-right: 2rem;
       
    }

    a.remover {
        width:60%;
        display:inline-block;
        background-color: #f00;
        color: #fff;
        font-weight: 600;
        padding: .3rem;
        text-decoration: none;
        border-radius: .3rem;
        text-align: center;
        display: block;
        &:hover{
            background-color: #161616;
            color: #fff;
        }
        
    }

    a.link{
        text-decoration:none;
        color: #fff ;
        margin: 1rem;
        padding: .3rem;
        background-color: #00f;
        border-radius: .3rem;
        font-weight: 600;
        width: 25%;
        text-align: center;
        &:hover{
            background-color: #161616;
        }
    }

    label{
        font-size: .8rem;
        margin-right: .5rem;
        align-self: start;
        
    }

`