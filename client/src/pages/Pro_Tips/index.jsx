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
      mobileNavHidden: true,
      toastShow: false,
      proTipArray: [
        {
          title: "Keep your kitchen cabinets looking like new",
          subtitle: "by Tom",
          body: (
            <React.Fragment>
              <p>
                Wash with{" "}
                <a
                  href="https://www.lowes.com/pd/Murphy-Oil-Soap-32-Oz-Concentrate/1040895"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Murphy's Oil Soap
                </a>
                . This especially is important around the stove and sink areas.
              </p>
              <p>
                Just mix 2 oz per gallon of water and apply directly to the wood
                surface, be sure to sufficiently dry after applying
              </p>
            </React.Fragment>
          ),
          backgroundImage:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/white2.jpg",
        },
        {
          title: "Another way to keep that fresh look",
          subtitle: "Tubac Woodworks",
          body: (
            <React.Fragment>
              <p>
                Apply <em>generic</em> "lemon oil" liberally- but not dripping.
                Once applied be sure to wipe off any excess and let fully dry
                before using the surface again.
              </p>
              <p>
                This process can be donw around the first year anniversary of
                their installation, then every 6 months after for the following
                two years, then only once a year after that.
              </p>
              <p>
                <a
                  href="https://www.walmart.com/ip/2-Pack-Old-English-Conditions-Protects-Wood-Furniture-Polish-Lemon-Oil-16-oz/683910927"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Old English Lemon Oil
                </a>{" "}
                can be found in your local hardware, grocery, or general supply
                store.
              </p>
            </React.Fragment>
          ),
          backgroundImage:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/woodworking_2.jpg",
        },
        {
          title: "best practices",
          body: (
            <React.Fragment>
              <strong>Drawer sticking a bit?</strong>: Spraying a little bit of
              "WD-40" on the drawer slides is a breat way to help keep them
              operating smoothly. Not too much though as that might create an
              attraction for dirt and grime.
            </React.Fragment>
          ),
          backgroundImage:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/woodworking_5.jpg",
        },
        {
          title: "Scratches",
          body: (
            <React.Fragment>
              <p>
                <em>"Scratches are a bit of trouble."</em> Sometimes you can
                simply apply a little bit of the original stain to the wood can
                help hide it. For deeper scraches{" "}
                <a
                  href="https://www.lowes.com/pd/Minwax-Natural-Pine-Wood-Putty/999914487"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  color putty
                </a>{" "}
                or matching sticks that some of the bigger box stores carry may
                be needed.
              </p>
              <p>
                For <strong>damaged</strong> wood or{" "}
                <strong>deep scratches</strong> the absolute best thing is to
                sand everything down completely and refinish, ensuring that you
                sand the scratch out of the wood so it completely disappears.
              </p>
            </React.Fragment>
          ),
          backgroundImage:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/woodworking_1.jpg",
        },
        {
          title: "Plants",
          subtitle: "by the Online Journal",
          body: (
            <React.Fragment>
              <p>
                <em>
                  "Wood and water don't go well together. Yet it's rare that a
                  day goes by where we don't receive some sort of inquiry about
                  planter drainage and how to water plants without staining, or
                  for that matter, destroying wooden floors, surfaces, or
                  furniture."
                </em>
              </p>
              <p>
                Drainage is important to a plants health, when decorating your
                home be sure to use a{" "}
                <a
                  href="https://www.lowes.com/pd/4-331-in-Orange-Clay-Plant-Saucer/1000189691"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  drainage dish
                </a>{" "}
                under all plants that sit or hang new wooden surfaces.
              </p>
            </React.Fragment>
          ),
          backgroundImage:
            "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/plants_3.jpg",
        },
      ],
    };

    // bind signup and toast
    this.handleSignupResult = this.handleSignupResult.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  componentDidMount() {
    // window reset
    window.scrollTo(0, 0);
    this.setState({ mobileNavHidden: true });
  }

  toggleMobileNav() {
    this.setState({ mobileNavHidden: !this.state.mobileNavHidden });
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
        h2Tag: "Get tips from the Experts!",
        pTag:
          "Taking care of your wood products can be challenge. Here at Tubac Woodworks we frequently hear concerns from our customers about how to keep their wood products safe from stratches, dents, aging, even just regular wear and tear.",
        pTag2:
          "Well We've put together a list of some of the most common questions we receive and the ways we overcome those challenges.",
        pTag3:
          "Here are some of the most frequently asked questions about taking care of your wood products.",
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
          <NavBar
            isHidden={this.state.mobileNavHidden}
            toggle={this.toggleMobileNav}
          />
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
                  backgroundImage={
                    proTip.backgroundImage ? proTip.backgroundImage : ""
                  }
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
          <NavBar
            isHidden={this.state.mobileNavHidden}
            toggle={this.toggleMobileNav}
          />
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
                  backgroundImage={
                    proTip.backgroundImage ? proTip.backgroundImage : ""
                  }
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
