import React, { Component } from "react";
import { NavBar } from "../../components/Navbar";
import HeroSmart from "../../components/HeroSmart";
import Footer from "../../components/Footer";
import styled from "styled-components";

export default class Cookies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      mobileNavHidden: true,
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  componentDidMount() {
    // scroll to 0 0 because it's a react app and will remember how far down the screen it is otherwise.
    window.scrollTo(0, 0);
    this.setState({ mobileNavHidden: true });
  }

  toggleMobileNav() {
    this.setState({ mobileNavHidden: !this.state.mobileNavHidden });
  }

  render() {
    return (
      <div className="error_root">
        <HeroSmart
          login={false}
          backgroundName={"https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/error.jpg"}
          title="Privacy Policy"
          subTitle=""
        />
        <NavBar isHidden={this.state.mobileNavHidden} toggle={this.toggleMobileNav}/>
        <StyledSection>
          <h4>
            Privacy Policy Last updated: <time>5/30/2020</time>{" "}
          </h4>
          <h2>Company Tubac Woodworks LLC</h2>

          <p>
            This Privacey Policy is not all inclusive and does not display all
            Tubac Woodworks company policies.
          </p>

          <p>
            The intention behind this template is to give fundimental
            information about how Tubac Woodworks handles consumer data.
          </p>

          <p>
            Tubac Woodworks does not sell/distribute consumer emails or
            information to third party vendors or partners.
          </p>

          <p>
            Tubac Woodworks, <span>("us", "we", or "our")</span>, operates
            https://www.tubacwoodworks.com. This page informs you of our
            policies regarding the collection, use and disclosure of Personal
            Information we receive from users of the Site.
          </p>

          <p>
            We use your Personal Information only for providing and improving
            the Site and our services. By using the Site, you agree to the
            collection and use of information in accordance with this policy.
            This information includes{" "}
            <span>
              (Signup forms, location services, and Google software for
              Analytics.)
            </span>
          </p>

          <h3>Information Collection And Use</h3>

          <p>
            While using our Site, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but
            is not limited to your name ("Personal Information").
          </p>

          <h3>Log Data</h3>

          <p>
            Data will not be made available to clients/public/or Otherwise, even
            if the information is interprated by the user as their property.
          </p>
          <p>
            Like many site operators, we collect information that your browser
            sends whenever you visit our Site ("Log Data").
          </p>

          <p>
            This Log Data may include information such as your computer's
            Internet Protocol ("IP") address, browser type, browser version, the
            pages of our Site that you visit, the time and date of your visit,
            the time spent on those pages and other statistics.
          </p>

          <p>
            The Log Data section is for businesses that use analytics or
            tracking services in websites or apps, like Google Analytics. F
          </p>

          <h3>Communications</h3>

          <p>
            We may use your Personal Information to contact you with
            newsletters, marketing or promotional materials and other
            information.
          </p>

          <h3>Cookies</h3>

          <p>
            Cookies are files with small amount of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            web site and stored on your computer's hard drive.
          </p>

          <p>
            Like many sites, we use "cookies" to collect information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent. However, if you do not accept cookies, you may
            not be able to use some portions of our Site.
          </p>

          <h3>Security</h3>

          <p>
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage, is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Information,
            we cannot guarantee its absolute security.
          </p>

          <h3>Changes To This Privacy Policy</h3>

          <p>
            This document does reflect complete/most current privacey policy
            information at all times and is updated periodically
          </p>

          <p>
            This Privacy Policy is effective as of (add date) and will remain in
            effect except with respect to any changes in its provisions in the
            future, which will be in effect immediately after being posted on
            this page.
          </p>

          <p>
            We reserve the right to update or change our Privacy Policy at any
            time and you should check this Privacy Policy periodically. Your
            continued use of the Service after we post any modifications to the
            Privacy Policy on this page will constitute your acknowledgment of
            the modifications and your consent to abide and be bound by the
            modified Privacy Policy.
          </p>

          <p>
            If we make any material changes to this Privacy Policy, we will
            notify you either through the email address you have provided us, or
            by placing a prominent notice on our website.
          </p>

          <h3>Credit Card Information and Personal Address</h3>

          <p>
            The database for this website does not store Credit Card information
            and uses hashed passcodes and address information. Tubac Woodworks
            discourages inputing any person information like credit card data
            into any of the weibsites input fields.
          </p>

          <h3>Contact Us</h3>

          <p>
            For addtional information about our company policies please feel
            free to contact us{" "}
            <a href="mailto:info@tubacwoodworks.com">
              {" "}
              info@tubacwoodworks.com
            </a>{" "}
          </p>
        </StyledSection>
        <Footer />
      </div>
    );
  }
}

// ========== //
//   STYLES   //
// ========== //
const StyledSection = styled.section`
  max-width: 1400px;
  padding: 1em;
  margin: 0 auto;

  h2,
  h3 {
      font-weight: 800;
  }

  h4 {
      font-size: 1em;
      font-weight: 200;
  }

  p {
      max-width: 80%;
  }

  a,
  a:hover,
  a:active,
  a:visited {
      color: #c0392b;
      font-weight: 800;
  }

`;
