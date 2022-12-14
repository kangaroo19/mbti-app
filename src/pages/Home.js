import React from 'react'
import styled from 'styled-components'
import img from '../img/지구.jpg'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'

function Home(){
    const navigate=useNavigate()
    const handleClickButton=()=>{ //버튼 클릭시 question화면으로 넘어감
        navigate('/question')
    }
    return (
        <>
         <Wrapper>
            <Header>재미로 알아보는 국가별 MBTI</Header>
            <Contents>
                <Title>나에게 맞는 국가는?</Title>
                <LogoImage>
                    <img src={img} alt="" width={350} height={350} className='rounded-circle' />
                </LogoImage>
                <Desc>MBTI를 기반으로 하는 나와 잘맞는 국가 찾기</Desc>
                <Button onClick={handleClickButton} style={{marginTop:'20px',marginBottom:'30px'}}>테스트 시작</Button>
            </Contents>
         </Wrapper>
        </>
    )
}

export default Home

const Wrapper=styled.div`
    background-color:black;
    height:88vh;
    width:100vw;
    color:white;
    
`
const Header=styled.div`
    margin-top:20px;
    font-size:2.2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:600px){
        font-size:1.2rem;
        margin-top:30px;
    }
`
const Title=styled.div`
    font-size:1.8rem;
    margin-top:40px;
    @media screen and (max-width:600px){
        font-size:1rem;
    }
`
const LogoImage=styled.div`
    margin-top:10px;
`

const Desc=styled.div`
    font-size:1.2rem;
    margin-top:20px;
    @media screen and (max-width:600px){
        font-size:0.8rem;
    }
`
const Contents=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column
`