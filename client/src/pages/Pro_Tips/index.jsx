import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import LayoutBasic from "../../components/LayoutBasic";
import Toast from "../../components/Toast";
import ProTips from "../../components/ProTip/ProTip";

export default class Pro_Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      navPos: "absolute",
      toastMsg: [],
      toastShow: false,
      proTipArray: [
        {
          title: "Great Tips",
          subtitle: "by Sean Scharr",
          body: "This is a wonderful place to get tips from.",
        },
        {
          title: "Fantastic Tips",
          subtitle: "by Joe Scharr",
        },
        {
          title: "Best Tips",
          body: "How to clean your wooden table top without damaging the wood.",
        },
        {
          title: "Final Tip",
          subtitle: "by Mike",
          body: "Fantastic way to keep that old desk looking new.",
          backgroundImage: "/cms/images/hero.jpg",
        },
      ],
    };

    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSignupResult(msg) {
    console.log(msg);
    this.setState({ toastMsg: msg, toastShow: true });
  }

  toggleToast() {
    this.setState({ toastShow: !this.state.toastShow });
  }

  render() {
    // content for demo
    // this data will normally be held in a server cand axios called on mount.
    let contentObject = {
      paragraphOne: {
        h2Tag: "Furniture you're going to love.",
        pTag:
          "Our products are available through authorized showrooms, on-line retailers and the Urban Woods website. If there is not a dealer near you then we encourage you to contact us directly for more information.",
        pTag2:
          "Reclaimed wood has many advantages. The grain of the timber has tight growth rings that show the superior density of the wood. The natural patina and color of the old-growth timber is preserved in the manufacturing process.  The results provide a look and feel that can not be replicated in new wood.",
        pTag3:
          "The reclaimed wood was originally harvested and milled 50 to 100 years ago, and has been seasoned in sunny Southern California for decades. The vintage wood has better stability and resistance to future distortion or structural movement.",
      },
    };

    if (this.props.user) {
      return (
        <div className="pro_tips_root">
          <HeroSmart
            login={"Peter"}
            backgroundName="pro_tips_hero"
            title="Pro Tips"
            subTitle="How to keep that like-new look"
          />
          <NavBar styleProp={this.state.navPos} />
          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />
          <Signup submitResult={this.handleSignupResult} />
          <Footer />
          <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            {this.state.toastMsg.map((element) => {
              return <p>{element}</p>;
            })}
          </Toast>
        </div>
      );
    } else {
      return (
        <div className="pro_tips_root">
          <HeroSmart
            login={false}
            backgroundName="pro_tips_hero"
            title="Pro Tips"
            subTitle="How to keep that like-new look"
          />
          <NavBar styleProp={this.state.navPos} />
          <section>
            {this.state.proTipArray.map((proTip, index) => {
              return (
                <ProTips
                  key={index}
                  tipNumber={index}
                  title={proTip.title}
				  subTitle={proTip.subtitle}
                >
                  {proTip.body}
                </ProTips>
              );
            })}
          </section>
          <LayoutBasic
            h2Tag={contentObject.paragraphOne.h2Tag}
            pTag={contentObject.paragraphOne.pTag}
            pTag2={contentObject.paragraphOne.pTag2}
            pTag3={contentObject.paragraphOne.pTag3}
          />
          <Signup submitResult={this.handleSignupResult} />
          <Footer />
          <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            {this.state.toastMsg.map((element) => {
              return <p>{element}</p>;
            })}
          </Toast>
        </div>
      );
    }
  }
}
