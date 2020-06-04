import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";
import Signup from "../../components/Signup";
import LayoutBasic from "../../components/LayoutBasic";
import Toast from "../../components/Toast";
import ProTips from "../../components/ProTip/ProTip";

export default class ProTipsPage extends Component {
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
          body:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ea dolores ut eaque cumque, culpa placeat tempore eligendi reprehenderit similique assumenda saepe minima? Expedita eius ducimus mollitia nobis dolore cupiditate, quae facilis optio, pariatur sapiente in voluptas natus debitis. Accusantium repellendus accusamus non quas aliquam iusto cupiditate tenetur voluptas impedit! Nihil quos quisquam dolorem minus neque. Iste voluptatibus minus quam odit accusantium sit sequi est perferendis assumenda! Corrupti, incidunt? Sapiente!",
          backgroundImage: "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/furniture_10.jpg",
        },
        {
          title: "Best way to get out scratches",
          subtitle: "by Joe Scharr",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta modi dolore saepe! Praesentium quos, dolore enim dicta tempora quasi veritatis adipisci at quod delectus officiis voluptatibus vel distinctio natus?",
        },
        {
          title: "best practices",
          body:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias magni soluta eaque dolore. Libero, at numquam dolore voluptatum, sapiente nemo tempora inventore quae beatae quia praesentium necessitatibus cupiditate omnis est ullam sequi nulla illo facere labore sint pariatur soluta excepturi!",
			backgroundImage: "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/furniture_12.jpg",
        },
        {
          title: "Final Tip",
          subtitle: "by Mike",
          body:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, repellat! Exercitationem, maiores illum nostrum cum, nulla mollitia reiciendis iure voluptas facilis, ducimus aspernatur optio provident dolorem adipisci quibusdam alias commodi. Obcaecati tempore dolorem, eos amet, illum repudiandae consequatur soluta labore optio repellendus consequuntur vero aperiam excepturi velit quis? Omnis, ducimus?",
          backgroundImage: "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/furniture_13.jpg",
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
            backgroundName="https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_pro_tips.jpg"
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
          <div>
            {this.state.proTipArray.map((proTip, index) => {
              return (
                <ProTips
                  key={index}
                  tipNumber={index + 1}
                  title={proTip.title}
                  subTitle={proTip.subtitle}
                  backgroundImage={proTip.backgroundImage ? proTip.backgroundImage : ""}
                >
                  {proTip.body}
                </ProTips>
              );
            })}
          </div>
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
            backgroundName="https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/hero_pro_tips.jpg"
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
          <div>
            {this.state.proTipArray.map((proTip, index) => {
              return (
                <ProTips
                  key={index}
                  tipNumber={index + 1}
                  title={proTip.title}
				  subTitle={proTip.subtitle}
				  backgroundImage={proTip.backgroundImage ? proTip.backgroundImage : ""}
                >
                  {proTip.body}
                </ProTips>
              );
            })}
          </div>
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
