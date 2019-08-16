import React, {Component} from 'react'
import {withRouter} from 'react-router'
import $ from 'jquery'

class About extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
    console.log(this.props);
    const {pathname} = this.props.location;
    if (pathname === "/how-it-works") {
      $("body,html").animate(
      {
        scrollTop: $("#process").offset().top -80
      },
      400 //speed
      );
    }
  }

  render(){
    return(
      <div className="column about-container">
        <div className="aboutus-title"><h1>About us</h1></div>
        <div id="our-story" className="column align-items-center">
          <h3>How it all began...</h3>
          <p>Sniff. is the first customizable soap platform for easily custpmizable soaps kjgc jcg. kgchgc hg gvkgh j vjhgcvkhg chgcjhc // HACK: kugc kg
          kgkhgvk vgvgvvkhv  vkjhgv k v vkhgv kghv kgvhjgvkjhv vkhv hvk v kvgh vkgvkgvg vkhgvhgvk gv ghmvhgvmhgvmhg vv hjv kjhvhjv k vh vh</p>
          <p>Sniff. is the first customizable soap platform for easily custpmizable soaps kjgc jcg. kgchgc hg gvkgh j vjhgcvkhg chgcjhc // HACK: kugc kg
          kgkhgvk vgvgvvkhv  vkjhgv k v vkhgv kghv kgvhjgvkjhv vkhv hvk v kvgh vkgvkgvg vkhgvhgvk gv ghmvhgvmhgvmhg vv hjv kjhvhjv k vh vh</p>
        </div>
        <div id="process" className="column align-items-center">
          <h3>How it works...</h3>
          <p>In the summer of 2019, out on a journey to find soapjytdjytd yf ku kgc kg cvkg ckhg ck gc
          kgc khckckhgck gjhvk uvk ujvk hgv kgh vkhg vhgcvhkgckhgvckgc kg ckg vckhgvkhgvkhgcv kghcgckhgck gk c
          kgc khgv v kh jhvkjhvkjhv kjvh vkjhvkjhv hvkjhv kjhvkhvkhvkhjvkjhvkhvkjhvkjhv k</p>
          <p>In the summer of 2019, out on a journey to find soapjytdjytd yf ku kgc kg cvkg ckhg ck gc
          kgc khckckhgck gjhvk uvk ujvk hgv kgh vkhg vhgcvhkgckhgvckgc kg ckg vckhgvkhgvkhgcv kghcgckhgck gk c
          kgc khgv v kh jhvkjhvkjhv kjvh vkjhvkjhv hvkjhv kjhvkhvkhvkhjvkjhvkhvkjhvkjhv k</p>
        </div>
      </div>
    )
  }
}

export default withRouter(About)
