import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import SubSlide from '../../sub_component/SubSlide';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './simpleslider.css';
import axios from 'axios';

export default class SimpleSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBullets: true,
            infinite: true,
            slideDuration: 450,
            slideInterval: 2000,
        };
        this.images = {
            arrayOfImages: ["check_1.jpg,check_2.jpg"]
        }
    }


componentWillMount() {
            // console.log("Component has mounted");
            axios
                .get("/cms/kitchenbathvanity")
                .then(collectData => {
                    // console.log(collectData.data)
                    // console.log(collectData.data[0].imageArray);
                    // console.log(collectData.data[0].imageArray.length);
                    // console.log(collectData.data[0].imageArray[2]);
                    this.setState({ arrayOfImages: collectData.data[0].imageArray});
                })
        };
        render(props) {
            // console.log(`The image array:", ${this.state.arrayOfImages}`)
          return (
              <div className="slider_root">   
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={45}
              totalSlides={3}
            >
              <Slider>
                <Slide index={0}>
                <div className="item_slider">
                    <SubSlide slideImage={this.state.arrayOfImages}></SubSlide>
                </div>
                </Slide>
                <Slide index={1}>
                <div className="item_slider" style={{backgroundImage: `url(/cms/images/gallery_4.jpg`}}></div>
                </Slide>
                <Slide index={2}>
                <div className="item_slider" style={{backgroundImage: `url(/cms/images/gallery_10.jpg`}}></div>
                </Slide>
              </Slider>
              <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            </div>
          );
        }
      }