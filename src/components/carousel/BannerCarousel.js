import React, { Component } from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import Scroll from '../scroll/Scroll';
import axios from 'axios';
import 'assets/style/carousel.scss';

const { Element } = BannerAnim;
const BgElement = Element.BgElement;


class BannerCarousel extends Component{
    constructor(props){
        super(props);

        this.state = {
            delay: 0,
            dataCarousel: []
        };
        this.openSlide = false;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        axios
            .get('/src/data/carousel.json', {dataType: 'json'})
            .then(res => this.setState({ dataCarousel: res.data }))
            .catch(err => console.log(err));
        Scroll(330, 300);
    }

    componentWillUnmount(){
        this.axios = null;
    }

    onChange(e, int){
        if(int === 1 && e === 'after' && !this.openSlide){
            this.setState({ delay: 600 });
            this.openSlide = true;
        }
    }

    render(){
        const { dataCarousel } = this.state;
        const settings = {
            prefixCls: "carousel-wrap",
            type: "acrossOverlay",
            onChange: this.onChange,
            duration: 1000,
            ease: "easeInOutExpo",
            arrow: false,
            autoPlay: true,
            autoPlaySpeed: 6000
        };

        let itemsBannerCarousel = dataCarousel.map(function(item, index){
            return(
                <Element
                    key={index}
                    prefixCls='carousel-elem'
                    hideProps={{ 2: { reverse: true }}}
                    followParallax={{
                        delay: 1000,
                        data:[
                            { id: 'carousel-title', value: -30, type: 'x'},
                            { id: 'carousel-title', value: 50, type: 'x'}
                        ]
                    }}
                >
                    <BgElement
                        key='bg'
                        className='carousel-bg'
                        style={{
                            backgroundImage: 'url('+ item.url + ')'
                        }}
                    />
                    <TweenOne
                        id='carousel-title'
                        key='title'
                        className="carousel-header"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 600}}
                    >
                        <h2>{item.title}</h2>
                    </TweenOne>
                    <TweenOne
                        id='carousel-text'
                        key='text'
                        animation={{ y:30, opacity: 0, type: 'from', delay: 1200 }}
                    >
                        <p>{item.des}</p>
                    </TweenOne>
                </Element>
            )
        });

        return(
            <BannerAnim
                {...settings}
                ref="banner"
                sync
            >
                {itemsBannerCarousel}
            </BannerAnim>
        );
    }
}

export default BannerCarousel;