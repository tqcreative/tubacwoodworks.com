import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <StyledRoot id="footer" className="footer_root">
      <div className="footer_wrap">
        <div className="top_wrap">
          <div></div>
        </div>
        <div className="mid_wrap">
          <div>
            <div className="footer_section_1">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <ion-icon name="compass"></ion-icon> 25700 S Via Montana Vista{" "}
                  <span>Green Valley, AZ 85622</span>
                </li>
                <li>
                  <a href="tel:5206250050">
                    <ion-icon name="ios-call"></ion-icon>(520)625-0050
                  </a>
                </li>
                <li>
                  <a href="mailto:info@tubacwoodworks.com">
                    <ion-icon name="mail"></ion-icon> info@tubacwoodworks.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_section_2">
              <h3>Business Hours</h3>
              <ul>
                <li>
                  <ion-icon name="calendar"></ion-icon> Mon-Fri: 9:00am &#8212;
                  5:00pm
                </li>
                <li>
                  <ion-icon name="calendar"></ion-icon> Sat: By appointment only
                </li>
                <li>
                  <ion-icon name="calendar"></ion-icon> Sun: Closed
                </li>
              </ul>
            </div>
            <div className="footer_section_3">
              <h3>Share</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/Tubac-Woodworks-110111612386150/?referrer=services_landing_page">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="/crm">
                    <ion-icon name="ios-person"></ion-icon> <h4>login</h4>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom_wrap">
          <p className="legal">
            Copyright &copy; 2019 Tubac Woodworks, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </StyledRoot>
  );
}

export default Footer;

const StyledRoot = styled.footer`
  overflow: hidden;
  background-color: #2d3436;
  color: #fff;
  font-size: 0.8em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100vw;
  margin: 0 auto;
  padding: 0;

  .footer_wrap {
    width: 100%;
    height: 100%;
    color: #fff;

    .top_wrap,
    .mid_wrap,
    .bottom_wrap {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;

      h3 {
        font-weight: 600;
      }

      div {
        width: 100%;
      }
    }

    .top_wrap {
      min-height: 3em;
      padding: 1em;
      background-color: #a6988d;
    }

    .mid_wrap {
      min-height: 50%;
      font-size: 1.3em;

      a {
        color: #fff;
      }

      div {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
        padding: 1em 0;

        div {
          width: 40vw;
          min-width: 256px;
          height: auto;
          padding: 0 1em 1em 1em;

          ul {
            li {
              padding: 0.25em;
            }
          }
        }

        .footer_section_1 {
          display: block;

          ul {
            li {
              span {
                display: inline-block;
              }
            }
          }
        }
        .footer_section_2 {
          display: block;
        }
        .footer_section_3 {
          display: block;
          font-size: 2em;

          ul {
            li {
              font-size: 1em;
              padding: 4px;
              display: inline-block;

              a {
                display: flex;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: flex-start;
                font-size: 1em;
                color: #fff;

                &:visited,
                &:active {
                  color: #fff;
                }

                &:hover {
                  text-decoration: none;
                }

                h4 {
                  padding: 0 0.5em;
                }
              }
            }
          }

          a {
            color: #fff;

            &:visited,
            &:active {
              color: #fff;
            }

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }

    .bottom_wrap {
      position: relative;
      text-align: center;
      color: #535c68;
      min-height: 5vh;
      background-color: #1e272e;

      .legal {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        text-align: center;
      }
    }
  }

  @media (min-width: 1026px) {
    .mid_wrap {
      div {
        max-width: 1400px;
        margin: auto;
        .footer_section_1,
        .footer_section_2 {
          max-width: 30vw;
        }
        .footer_section_3 {
          max-width: 20vw;
        }
      }
    }
  }

  @media (max-width: 1025px) {
    .footer_wrap {
      .top_wrap,
      .mid_wrap,
      .bottom_wrap {
        div {
          border-bottom: 2px solid;
          padding: 1em 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 1em 0;
          font-size: 0.9em;

          ul {
            li {
              ion-icon {
                padding: 0 0.5em 0 0;
              }
            }
          }
        }

        div:last-child {
          border: none;
        }
      }

      .top_wrap,
      .mid_wrap,
      .bottom_wrap {
        width: 100%;
      }

      .bottom_wrap {
        div {
          h3 {
            text-align: center;
          }
        }
      }

      .mid_wrap {
        h3 {
          text-align: center;
        }

        .footer_section_1,
        .footer_section_2,
        .footer_section_3 {
          width: 75%;
        }

        .footer_section_3 {
          ul {
            display: flex;
            justify-content: center;
            padding-left: 1em;

            li {
              a {
                ion-icon {
                  pad: 0 0.5em;
                }
              }
            }
          }
        }

        div {
          flex-wrap: wrap;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .footer_wrap {
      .top_wrap,
      .mid_wrap,
      .bottom_wrap {
        div {
          border-bottom: 2px solid;
          padding: 1em 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 1em 0;
          font-size: 0.9em;

          ul {
            li {
              ion-icon {
                padding: 0 0.5em 0 0;
              }
            }
          }
        }

        div:last-child {
          border: none;
        }
      }

      .bottom_wrap {
        min-height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          h3 {
            text-align: center;
          }
        }
      }

      .mid_wrap {
        h3 {
          text-align: center;
        }

        .footer_section_1,
        .footer_section_2,
        .footer_section_3 {
          width: 90%;
        }

        .footer_section_3 {
          max-height: 150px;

          ul {
            padding: 0.8em 0 0 1em;
            display: flex;
            justify-content: center;

            li {
              a {
                ion-icon {
                  pad: 0 0.5em;
                }
              }
            }
          }

          ul:last-child {
            border-top: 1px solid #fff;
            width: 100%;
          }
        }

        div {
          flex-wrap: wrap;
        }
      }
    }
  }
`;
