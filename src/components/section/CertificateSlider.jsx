
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import 'swiper/css';
import 'swiper/css/autoplay';
import './certificate.css'


import img0 from '../../images/certificates/img0.jpeg';
import img1 from '../../images/certificates/img1.jpg';
import img2 from '../../images/certificates/img2.jpeg';
import img3 from '../../images/certificates/img3.jpeg';
import img4 from '../../images/certificates/img4.jpeg';
import img5 from '../../images/certificates/img5.jpeg';
import img6 from '../../images/certificates/img6.jpeg';
import img7 from '../../images/certificates/img7.jpeg';
import img8 from '../../images/certificates/img8.jpeg';
import img9 from '../../images/certificates/img9.jpeg';
import img10 from '../../images/certificates/img10.jpeg';

const certificates = [
  { id: 0, image: img0 },
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
];
const Title = styled.div`
  margin-top: 20px;
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const StackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
`;
const items = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

export default function CertificateSlider() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md  ">
      <Title>My Certificates</Title>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {[...certificates, ...certificates].map(cert => (
          <SwiperSlide key={cert.id + '-' + Math.random()}>
            <Container>
            <Wrapper>
                <StackContainer>
            <items>
                <Tilt>
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                
              ></img>
              </Tilt>
           </items>
            </StackContainer>
            </Wrapper>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
