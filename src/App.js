import logo from './logo.svg';
import './App.css';
import Avocado from './Pics/Avocado.jpg'
import Avocado1 from './Pics/Avocado1.jpg'
import cum from './Pics/Cum.png'
import semga from './Pics/semga.png'
import blinchiki from './Pics/Blinchiki.png'
import A from './Pics/145deb81c0abb054a01067e0001b5766.jpeg'
import b from './Pics/Negr.jpg'
import c from './Pics/7480281.jpg'
import N from './Pics/barak-obama.jpg'
import FS from './Pics/FS.png'
import Button from '@mui/material/Button';
import ReactDOM from "react-dom";
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import a from './Pics/1.png'
import B from './Pics/2.png'
import C from './Pics/3.png'
import D from './Pics/4.png'
import E from './Pics/5.png'
import F from './Pics/6.png'
import G from './Pics/7.png'
import H from './Pics/8.png'
import I from './Pics/9.png'
import J from './Pics/10.png'
import K from './Pics/11.png'
import L from './Pics/12.png'
import zv from './Pics/zvezdochki.png'
import t from './Pics/телеф.png'
import m from './Pics/mail.png'
import KART from './Pics/Карты.png'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import { styled } from '@mui/material/styles';

const CButton = styled(Button)`
  color: #20b2aa;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  background-color:#F5A000;
  color:black;
  fontFamily:Montserrat; 
  border-radius: 25px;
  transition: 0.5s;
 

  :hover {
    background-color: #FFFFFF;
    transform: scale(1.1);
  }
`;



const style ={
  display: 'flex',
  position: 'relative',
  backgroundColor: '#2AA020',
  height: '80px',
  alignItems: 'center',
  paddingLeft:'100px',
  paddingRight: '100px',
  gap:'50px',
}
const style2 ={
  display: 'flex',
  position: 'relative',
  backgroundColor: '#2AA020',
  height: '80px',
  alignItems: 'center',
  justifyContent:'center',
  paddingLeft:'100px',
  paddingRight: '100px',
  gap:'180px',
}

function Fruits(){
  return (
    <div>
      <div className='category'>
          <img className='kart' src={a}></img>
          <div className='karniz'>fedeghsj</div>
        </div>
    </div>
  )
}



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <div style={style}>
        <div style={{display:'flex',flexGrow:1}}></div>
          <CButton variant="contained" size="medium" >
            Регистрация
          </CButton>
          <CButton variant="contained" size="medium" >
            Log in
          </CButton>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={Avocado} alt="Avocado" className='Avo' />
        <img src={FS} className='FS' />
      </div>
      <div style={style2} className=''>
          <CButton variant="contained" size="medium"  >
            Главная
          </CButton>
          <CButton variant="contained" size="medium" >
            Каталог
          </CButton>
          <CButton variant="contained" size="medium" >
            Доставка
          </CButton>
      </div>


      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      
      
      
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src={blinchiki}  /></SwiperSlide>
        <SwiperSlide><img src={cum} alt="Avocado1"/></SwiperSlide>
        <SwiperSlide><img src={semga}  /></SwiperSlide>
        <SwiperSlide><img src={cum} alt="Avocado1"  /></SwiperSlide>
        <SwiperSlide><img src={A} alt="Avocado1" className='Avo1' /></SwiperSlide>
        <SwiperSlide><img src={b} alt="Avocado1" className='Avo1' /></SwiperSlide>
        <SwiperSlide><img src={c} alt="Avocado1" className='Avo1' /></SwiperSlide>
        <SwiperSlide><img src={N} alt="Avocado1" className='Avo1' /></SwiperSlide>
      
      </Swiper>
      <div style={{display:'flex',justifyContent:'center',paddingTop:'100px',gap:'30px'}}>
      <NavLink to="">
      <Routes>
      <Route path="" element={<Fruits/>} />
      </Routes>
        <div className='category'>
          <img className='kart' src={a}></img>
          <div className='karniz'>Фрукты</div>
        </div>
      
      </NavLink> 
        <div className='category'>
          <img className='kart' src={B}></img>
          <div className='karniz'>Мясное</div>
        </div>
        <div className='category'>
          <img className='kart' src={C}></img>
          <div className='karniz'>Молочные</div>
        </div>
        <div className='category'>
          <img className='kart' src={D}></img>
          <div className='karniz'>Икра</div>
        </div>
      </div>
        

      <div style={{display:'flex',justifyContent:'center',paddingTop:'50px',gap:'30px'}}>
        <div className='category'>
          <img className='kart' src={E}></img>
          <div className='karniz'>Сладкое</div>
        </div>
        <div className='category'>
          <img className='kart' src={F}></img>
          <div className='karniz'>Соленья</div>
        </div>
        <div className='category'>
          <img className='kart' src={G}></img>
          <div className='karniz'>Консервы</div>
        </div>
        <div className='category'>
          <img className='kart' src={H}></img>
          <div className='karniz'>Крупы</div>
        </div>
      </div>


      <div style={{display:'flex',justifyContent:'center',paddingTop:'50px',gap:'30px'}}>
        <div className='category'>
          <img className='kart' src={I}></img>
          <div className='karniz' style={{lineHeight:'25px',height:'70px'}}>Сладкие напитки</div>
        </div>
        <div className='category'>
          <img className='kart' src={J}></img>
          <div className='karniz'style={{lineHeight:'25px',height:'70px'}}>Сладкая выпечка</div>
        </div>
        <div className='category'>
          <img className='kart' src={K}></img>
          <div className='karniz'>Специи</div>
        </div>
        <div className='category'>
          <img className='kart' src={L}></img>
          <div className='karniz'>Пельмеши</div>
        </div>
      </div>


      <div className='commentsection'>
        <div style={{fontFamily:'Montserrat',fontSize:'24px',fontWeight:'700',textAlign:'start'}}>Что говорят наши покупатели</div>
        <div style={{display:'flex',paddingTop:'50px',position:'relative',justifyContent:'center',gap:'50px'}}>
          <div className='comment'>
            <div style={{display:'flex',gap:'20px'}}>
              <div className='pics'>
                <img src={b} style={{height:'100%'}}></img>
              </div>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start'}}>
                <div className='imena'>Иван Иванов</div>
                <img src={zv}></img>
              </div>
            </div>
            <div className='comtext'>
              Lorem Ipsum  - это текст рыба, часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.
            </div>
          </div>

          <div className='comment'>
            <div style={{display:'flex',gap:'20px'}}>
              <div className='pics'>
                <img src={b} style={{height:'100%'}}></img>
              </div>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start'}}>
                <div className='imena'>Иван Иванов</div>
                <img src={zv}></img>
              </div>
            </div>
            <div className='comtext'>
              Lorem Ipsum  - это текст рыба, часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.
            </div>
          </div>

          <div className='comment'>
            <div style={{display:'flex',gap:'20px'}}>
              <div className='pics'>
                <img src={b} style={{height:'100%'}}></img>
              </div>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start'}}>
                <div className='imena'>Иван Иванов</div>
                <img src={zv}></img>
              </div>
            </div>
            <div className='comtext'>
              Lorem Ipsum  - это текст рыба, часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века.
            </div>
          </div>
        </div>
      </div>


      <div className='podval'>
        <div className='vertic'>
          <div style={{display:'flex',justifyContent:'center'}}><img src={FS} className='FS1' /></div>
          <div style={{display:'flex',gap:'15px',alignItems:'end'}}>
            <img src={t} style={{height:'30px'}}/>
            <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:'5px'}}>
              <div className='imena'>Остались вопросы?</div>
              <div className='cifri'>+7 800 555 35 35</div>
            </div>
          </div>
          <div style={{display:'flex',gap:'15px',alignItems:'end'}}>
            <img src={m} style={{height:'25px'}}/>
            <div className='cifri'>alexanderm@gmail.com</div>
          </div>
        </div >

        <div style={{justifyContent:'center',flexGrow:1,gap:'145px',paddingTop:'50px'}}className='vertic'>
          <div style={{display:'flex',alignItems:'center'}}>
            <div style={{textTransform:'uppercase',flexGrow:1}}className='cifri'>О компании</div>
            <div style={{textTransform:'uppercase',flexGrow:1}}className='cifri'>agb</div>
            <div style={{textTransform:'uppercase',flexGrow:1}}className='cifri'>доставка</div>
            <div style={{textTransform:'uppercase',flexGrow:1}}className='cifri'>контакты</div>
          </div>
          <div style={{display:'flex',justifyContent:'center',position:'relative'}}>
            <img src={KART}></img>
          </div>
          
        </div>
        

      </div>
        
      </BrowserRouter>
    </div>

  );
}

export default App;
