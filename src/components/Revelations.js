import React from "react";
import comic1 from "../assets/Naring Drag Cover Image.png";
import comic2 from "../assets/Burning Lake Cover Image.png";
import comic1page1 from "../assets/A3_6.png";
import comic1page2 from "../assets/A3_5.png";
import comic2page1 from "../assets/A3_6 (1).png"
import comic2page2 from "../assets/A3_5 (1).png"
import HTMLFlipBook from "react-pageflip";
import cover1 from "../assets/Comic Book Cover-1.png"
import cover2 from "../assets/Comic Book Cover-2.png"



const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="cover" ref={ref} data-density="hard">
        <div>
          <div className="cover-image">{props.children}</div>
        </div>
      </div>
    );
  });
  


const Revelations = ({ menuHandle, setMenuHandle }) => {
  if (menuHandle === 3) {
    return (
      <div className="lineage-wrapper">
        <div
          className="animate__animated animate__zoomIn animate__delay-1s text-box text-box-clrd text-box-share"
          style={{ height: "302px" }}
        >
          <h1 className="animate__animated animate__fadeIn animate__delay-2s">
            Revelations by pema lingpa
          </h1>
          <hr></hr>
          <p className="animate__animated animate__fadeIn animate__delay-3s">
            Pema Lingpa discovered treasures mainly around Bumthang’s valleys
            and regions north of its current borders with Tibet. He revealed
            exclusively physical terma, both texts and relics. In his lifetime,
            Pema Lingpa was able to reveal only 32 out of 108 termas destined
            for him. The collection of texts discovered by him, ‘The Precious
            Collection of Profound Treasure Teachings of the Great Master Pema
            Lingpa’ consists of 21 volumes.
          </p>
        </div>
        <div className="comic-submenu">
          <div
            className="submenu-clickable animate__animated animate__fadeInLeft animate__delay-4s"
            onClick={() => setMenuHandle(3.1)}
          >
            <div className="comic-title">
              REVELATIONS AT <br></br>
              <span>NARING DRAG</span>
            </div>
            <img className="comic-cover" src={cover1} alt="" />
          </div>
          <div
            className="submenu-clickable submenu-clickable-reverse animate__animated animate__fadeInRight animate__delay-5s"
            onClick={() => setMenuHandle(3.2)}
          >
            <div className="comic-title">
              REVELATIONS AT <br></br>
              <span>BURNING LAKE</span>
            </div>
            <img className="comic-cover" src={cover2} alt="" />
          </div>
        </div>
      </div>
    );
  }

  if (menuHandle === 3.1) {
    return (
      <div className="lineage-wrapper">
        <div
          className=" animate__animated animate__zoomIn animate__delay-1s text-box text-box-share text-box-light"
          style={{ height: "375px" }}
        >
          <h1
            className="animate__animated animate__fadeIn animate__delay-2s"
            style={{ fontSize: "32px" }}
          >
            Revelations At <br></br>
            <b style={{ fontSize: "48px" }}>NAring Drag</b>
          </h1>
          <hr></hr>
          <p className="animate__animated animate__fadeIn animate__delay-3s">
            Pema Lingpa is awakened by the voice of a monk, who urges him to
            read a scroll thrust into his hands. The scroll instructs Pema
            Lingpa to gather five friends and go to Naring Drak on a full moon
            night to uncover his destiny. It also contained a key to decode the
            terma. He dives into the lake below the cliff finding a large cave
            with a throne and stacks of texts. The cave’s guardian hands him a
            scroll and asks him to leave. When Pema Lingpa surfaces above water,
            he is propelled up the cliff by the wind. Returning home he shares
            the text with his parents and two masters from Tharpaling Monastery,
            none could read the text. He then uses the key in the scroll to read
            the title of the text, ‘Crystallization of the Tantra of Luminous
            Space’. This text is considered the first of 32 termas revealed by
            Pema Lingpa.
          </p>
        </div>
        <div className="comic-main animate__animated animate__fadeIn animate__delay-4s">
          <img
            src={cover1}
            alt=""
            className="comic-main-cover"
            onClick={() => setMenuHandle(3.11)}
          />
        </div>
      </div>
    );
  }

  if (menuHandle === 3.11) {
    return (
      <div className="comic-book-wrapper">
        <button className="back-btn" onClick={() => setMenuHandle(3.1)}></button>
        <div className="comic-book">
        <HTMLFlipBook
          width={337}
          height={473}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
        //   style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
        >
          <PageCover><img src={comic1} alt=""/> </PageCover>
          <PageCover><img src={comic1page1} alt=""/></PageCover>
          <PageCover><img src={comic1page2} alt=""/></PageCover>
          <PageCover><img src={comic1page1} alt=""/></PageCover>
          <PageCover>see you</PageCover>
        </HTMLFlipBook>
        </div>
        <div className="next-comic" onClick={() => setMenuHandle(3.2)}>
            REVELATIONS AT <br></br>
            <span>BURNING LAKE</span>
          </div>
      </div>
    );
  }

  if (menuHandle === 3.2) {
    return (
      <div className="lineage-wrapper">
        <div
          className=" animate__animated animate__zoomIn animate__delay-1s text-box text-box-share text-box-light"
          style={{ height: "375px" }}
        >
          <h1
            className="animate__animated animate__fadeIn animate__delay-2s"
            style={{ fontSize: "32px" }}
          >
            Revelations At <br></br>
            <b style={{ fontSize: "48px" }}>Burning Lake</b>
          </h1>
          <hr></hr>
          <p className="animate__animated animate__fadeIn animate__delay-3s">
            When the local Choekhor governor hears of the popularity of Pema
            Lingpa, he is not convinced of his authenticity. Assembling a large
            group of people in Naring Drag, he asks Pema Lingpa to prove his
            merit. He declares that he would support Pema Lingpa if he would
            bring out a treasure, failing which he would be punished. Pema
            Lingpa proclaimed “If I am genuine, let me bring back the treasure
            with this lamp still burning. If I am a fraud, let me die in the
            waters below.” He then took a burning butter lamp and dove into the
            lake resurfacing with a box of skulls, a sculpture of the Buddha and
            the butter lamp, still alight. All those who witness the miracle
            became Pema Lingpa’s followers and patrons, and the lake gets its
            name Mebar tsho or Burning Lake.
          </p>
        </div>
        <div className="comic-main animate__animated animate__fadeIn animate__delay-4s">
          <img src={cover2} alt="" className="comic-main-cover" onClick={() => setMenuHandle(3.21)} />
        </div>
      </div>
    );
  }


  if (menuHandle === 3.21) {
    return (
      <div className="comic-book-wrapper">
        <button className="back-btn" onClick={() => setMenuHandle(3.2)}></button>
        <div className="comic-book">
        <HTMLFlipBook
          width={337}
          height={473}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
        //   style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
        >
          <PageCover><img src={comic2} alt=""/> </PageCover>
          <PageCover><img src={comic2page1} alt=""/></PageCover>
          <PageCover><img src={comic2page2} alt=""/></PageCover>
          <PageCover><img src={comic2page1} alt=""/></PageCover>
          <PageCover>see you</PageCover>
        </HTMLFlipBook>
        </div>
        <div className="next-comic" onClick={() => setMenuHandle(3.1)}>
            REVELATIONS AT <br></br>
            <span>NARING DRAG</span>
          </div>
      </div>
    );
  }
};

export default Revelations;
