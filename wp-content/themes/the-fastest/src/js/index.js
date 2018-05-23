require('../styles/index.scss');

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tooltip';
import './pages/all.js';
import './common/marketing-events.js';
import {MakeSticky} from './common/sticky-toggle.js';
import {SmartFilters} from './common/smart-filters.js';
import loadVideo from "./common/responsive-video";

console.log(WPAS_APP);
WPAS_APP.loadVideo = loadVideo;
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  jQuery('[data-toggle="tooltip"]').tooltip();
  $('.value').each(function() {
  	var text = $(this).text();
  	$(this).parent().css('width', text);
  });
  $('.block').tooltip();
}

/**
 * THE PROGRAM
**/

if(['page-the-program','single-full-stack','single-web-development'].indexOf(WPAS_APP.view.template)!=-1 || WPAS_APP.view.slug === 'venezuela'){
  
  var maxStickPosition = $('#pricing').offset().top - 20;
  MakeSticky.init('[data-toggle="sticky-onscroll"]', maxStickPosition);
  
  
  var TheProgram = require('./pages/program.js').default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  var Slider = require("bootstrap-slider");
  var mySlider = new Slider('#pricing-slider');
  //var sliderElement = document.querySelector('#pricing-slider');
  mySlider.on('slideStop', function(newValue){
    
    var message = null;
    switch(newValue)
    {
      case 0: 
          message = {
            price: '$1000 deposit + $853 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 1:
          message = {
            price: '$1000 deposit + $445 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 2: 
          message = {
            price: '$1000 deposit + $240 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 3: 
          message = {
            price: '$198 / month (No deposit)',
            details: 'Apply to Skillsfund and get 36 month financing, pay <strong>only $198 per month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
          }
      break;
      case 4: 
          message = {
            price: '$135 / month (No deposit)',
            details: 'Apply to Skillsfund and get 60 month financing, pay <strong>only $135 every month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
          }
      break;
    }
    if(message){
      if(typeof(message.price) == 'string') document.querySelector('#price-label').innerHTML = message.price;
      if(typeof(message.details) == 'string') document.querySelector('#financing-details').innerHTML = message.details;
      if(typeof(message.logo) == 'string'){
        var logoElm = document.querySelector('#financing-logo');
        var templateURL = logoElm.getAttribute('data-templateurl');
        logoElm.src = templateURL + message.logo;
      }
      
      var applyBtn = document.querySelector('#financing-btn');
      applyBtn.innerHTML = message.applyText;
      if(message.applyURL){
        applyBtn.href = message.applyURL;
      }else{
        var defaultURL = applyBtn.getAttribute('data-applylink');
        applyBtn.href = defaultURL;
      }
    }
		
		var paymentPlanCard = document.querySelector('.payment-plan');
		//paymentPlanCard.classList.remove("bg-yellow");
		paymentPlanCard.classList.add("glow");
		window.setTimeout(function(){
		  //paymentPlanCard.classList.add("bg-yellow");
			paymentPlanCard.classList.remove("glow");
		}, 200);
    
  });
  
  require('./pages/pricing.js');

}

/**
 * CALENDAR
**/

if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){
  
  SmartFilters.init({
    loadingAnimation: '.courses .loading-animation',
    resultsContainer: '.courses .list-group',
    filterDropdown: '.dropdown-menu a',
    filters: [
      { button: '#locationSelector', urlKey: 'l', options: '.location-option' },
      { button: '#langSelector', urlKey: 'lang', options: '.lang-option'},
      { button: '#typeSelector', urlKey: 'type', options: '.type-option'}
    ]
  });
  
  MakeSticky.init('[data-toggle="sticky-onscroll"]', 4000);
    
}

/**
 * LOCATION
**/

if(['single-location'].indexOf(WPAS_APP.view.template) != -1){
  require('./pages/location.js');
}

/**
 * PARTNERS
**/

if(WPAS_APP.view.slug === 'partners' || WPAS_APP.view.slug === 'socios'){
  
  jQuery('[data-toggle="tooltip"]').tooltip();
  loadVideo('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
}