import React from "react";
import Header from "../Header";
import Loader from "../basic/Loader";
import { gsap } from 'gsap';
import { TimelineLite, CSSPlugin } from "gsap/all";


class Main extends React.Component {
    state = {
        isLoading : true,
    }

   
    mainStart = () => {
        gsap.to(".main__cont__title", {duration: 0.1, y:50});

    }

    getSite = () => {
        setTimeout(()=>{
            console.log("두번째 시작");
            this.setState({isLoading: false});
            this.mainStart();
        },1500)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작");
            document.getElementById("loader").classList.remove("loader__active");
            this.getSite();
        }, 4000);
    }

    render() {
        const { isLoading } = this.state;
        return (
          <div id="wrap" className="lock">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Header />
                <main id="main">
                  <section id="mainCont">
                    <div className="main__cont">
                      <div className="main__cont__title">
                        <div className="split">WE PROVIDE</div>
                        <div className="split">VISUAL CODING</div>
                        <div className="split">SOLUTIONS</div>
                        <div className="split">FOR YOU WEBS</div>
                      </div>
                    </div>
                  </section>
                </main>
              </>
            )}
          </div>
        );
      }
}

export default Main;