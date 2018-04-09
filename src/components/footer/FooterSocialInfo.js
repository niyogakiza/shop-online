import React, { Component } from 'react';
import { Icon, Dimmer } from 'semantic-ui-react';

class FooterSocialInfo extends Component{
    constructor(props){
        super(props);

        this.state = {active: false };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen(){
        this.setState({ active: true})
    }

    handleClose(){
        this.setState({ active: false})
    }

    render(){
        return(
           <div className="social">
               <a href='https://github.com/niyogakiza'>
                   <Icon link name='github' size='big'/>
               </a>
               <Dimmer
                   active={this.state.active}
                   onClickOutside={this.handleClose}
                   page
               >
               <img src="../.././assets/img/qrcode.jpg" style={{ width:300, height:300}}/>
               </Dimmer>
           </div>
        );
    }
}

export default FooterSocialInfo;