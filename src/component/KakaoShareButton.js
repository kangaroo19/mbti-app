import React from 'react'
import Button from 'react-bootstrap/Button'
const {Kakao}=window

const KakaoShareButton=({data})=>{
  let url='mbtiapp1.netlify.app'
  let resultUrl=window.location.href
  React.useEffect(()=>{
    Kakao.cleanup()
    Kakao.init('a5fad39d7fc5d2f1636f6819bc3f353a')
    Kakao.isInitialized();
  },[])
    const shareKakao=()=>{
      
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '재미로 알아보는 국가별 MBTI',
          description: `나와 맞는 국가는 ${data.name} 입니다`,
          imageUrl:`https://${url+data.image}`,
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러가기',
            link: {
              mobileWebUrl: url,
              webUrl:url,
            },
          },
          
        ],
      });
    }
  
    return (
        <Button onClick={shareKakao}>카카오톡 공유하기</Button>

    )
}

export default KakaoShareButton