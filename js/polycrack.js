
/******tr spacer***/
  $(function () {
      $("#space").after('<tr class="tr-spacer"/>');

      $("#myCarousel").carousel({interval: 2500});      

      

      var _url = $(location).attr('href');
      _url = _url.substr(_url.lastIndexOf('/') + 1);
    

      

      var _navigationContent = `
      <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a href="index.html" target="_self" class="logo-img">
          <img src="img/logo.png" alt="logo-img" class="img-responsive">
        </a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">      
       
        <ul class="nav navbar-nav navbar-right">
          <li class="poly-dropdown">
              <a href="features.html" target="_self">About Polycrack</a>
              <ul class="poly-dropdown-wrapper">
                 <li><a href="know-polycrack.html" target="_self">Know Polycrack</a></li>
                 <li><a href="features.html" target="_self">Features</a></li>
                 <li><a href="feedstock.html" target="_self">Feedstock</a></li>
                 <li><a href="management.html" target="_self">Management</a></li>
              </ul>
          </li> 
          <li><a href="process.html" target="_self">The Process</a></li>
          <li><a href="awards.html" target="_self">Awards</a></li>         
          
          <li><a href="faq.html">FAQ</a></li>     
          <li><a href="contact.php">Contact</a></li>     
        </ul>
      </div>
    </div>
      `;

      $('nav').html(_navigationContent);

      var _windowWidth = $(window).width();

      $('.management1-wrapper').mouseenter(function(){
        
        let $this = $(this);
        $this
              .find('.management-heading-paragraph')
              .animate({
                'opacity':'1'
              }, 'slow', function(){
               
                $this.find('.management-heading-paragraph > div > h3')
                .animate(
                  {
                    'bottom':'5px',
                     'opacity':'1'
                  }, 500);

                $this.find('.management-heading-paragraph > div > p')
                .animate(
                  {
                    'bottom':'10px',
                     'opacity':'1'
                  }, 200);

              });
      });

      $('.management1-wrapper').mouseleave(function(){
         let $this = $(this);
         $this
           .find('.management-heading-paragraph')
           .stop(true)
           .animate({
            'opacity':'0.8'
           },'slow', function(){

            $this.find('.management-heading-paragraph > div > h3')
            .animate(
              {
                'bottom':'0px',
                 'opacity':'0'
              }, 200);

            $this.find('.management-heading-paragraph > div > p')
            .animate(
              {
                'bottom':'0px',
                 'opacity':'0'
              }, 500);

           });
      });

      $('.management-heading-paragraph').on('click', function(){
        
        let $this = $(this);
        
        console.log($this.siblings('.getimg').attr('src'));

        $('#close-icon').fadeIn();

        $('.fixed-management-wrapper').animate({
              'width':'100%'
            }, 
        800, function(){
          
          setTimeout(function(){ 
            let $heading = $this.find('h4').html();
            let $content = $this.find('.synopsis-wrapper').html();
            let $img = $this.siblings('.getimg').attr('src');

            
            $('.slide-text-content').find('h3').html($heading);
            $('.slide-text-content > div').html($content);
            $('.slide-text-content > div').find('.synopsis').removeClass('none');
            $('.slide-img-content').find('img').attr('src',$img);

            $('.slide-text-content').find('h3').animate({
              'opacity':1,
              'bottom':'8px'
            }, 500);
            $('.slide-text-content').find('.synopsis').animate({
              'opacity':1,
              'bottom':'8px'
            }, 700);
           }, 200);

        });
      });

      $('.fixed-management-wrapper').on('click', function(){

        
          var $this = $(this);
          $('#close-icon').fadeOut();

          $('.slide-text-content').find('h3').animate({
            'opacity':0,
            'bottom':'0px'
          }, 500);
          $('.slide-text-content').find('.synopsis').animate({
            'opacity':0,
            'bottom':'0px'
          }, 600);

            $this.animate({
              'width':'0%'
            }, 
             1000, function(){
  
            $('.slide-text-content').find('h3').html();
            $('.slide-text-content > div').html();
            $('.slide-text-content > div').find('.synopsis').addClass('none');
             });

             $('body').css({
              'overflow':'visible'
             });
            
      });


      if(_windowWidth < 600)
      {

        $('.management-heading-paragraph').on('click', function(){
           $('#body').css({
             'overflow':'hidden'
           });
        });

          $('.poly-dropdown > a').attr({'href':'javascript:void(0)'});
          
          $('.poly-dropdown > ul').removeClass('poly-dropdown-wrapper').addClass('poly-dropdown-wrapper1');

          var _socialLinks = $('#myNavbar').find('.social').clone();
          $('.social').remove();
          
          

          $('#myNavbar').append(_socialLinks);

          $('.poly-dropdown > a').on('click', function(e){
            e.preventDefault();
            $('.poly-dropdown-wrapper1').slideToggle();
          });
          
          $('.item').each(function(index){
            $(this).find('img').attr('src', 'img/mob/banner/' + (index + 1) + '.jpg');
            console.log($(this).find('img').attr('src'));
          });

          let mobBanner = [
            'about-polycrack',
            'awards',
            'contact',
            'faq',
            'media',
            'process',
            'products',
            'why-polycrack',
            'management'
          ];

          _url = _url.substr(0, _url.indexOf('.'));
          console.log(_url);
          
          $.each(mobBanner, function(index, value){
            if(_url == value)
            {
              console.log(value);
              $('.' + value).attr('src', 'img/mob/banner-image/' + value + '.jpg');
              return false;
            }
          });

      }

      $('a[href="gallery.html"]').parent('li').hide();

      var _footerContent = `
      <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <a href="index.html" class="footer-logo">
            <img src="img/logo.png" alt="polycrack" class="img-responsive" />
          </a>
        
          <ul class="list-inline footer-address">
             <li>
                <a href="javascript:void(0)" class="showAddress highlightAddress" title="usa">USA</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="showAddress" title="india">India</a>
              </li>
              <li>
              <a href="javascript:void(0)" class="showAddress" title="england">UK</a>
            </li>
              
          </ul>

          <p class="hideAddress usa">
              8 The Green,
              Suite # 11795,
              Dover 19901, 
              USA
              <br />
              <i class="fa fa-envelope-o" aria-hidden="true" style="display: inline-block;"></i>
              <a href="mailto:ritesh@polycrack.com" style="color: inherit;">info@polycrack.com</a>
            </p>

            <p class="hideAddress india">
              Enecovery Waste Solutions Pvt. Ltd.
              244 Kuber, Link road,
              Andheri west
              Mumbai 400053
              <br />
              <i class="fa fa-envelope-o" aria-hidden="true" style="display: inline-block;"></i>
              <a href="mailto:ritesh@polycrack.com" style="color: inherit;">info@polycrack.com</a>
            </p>

            <p class="hideAddress england">
              Building no.7 Paynes Park Hitchin
              Hertfordshire - SG5 1EH
              England
              <br />
              <i class="fa fa-envelope-o" aria-hidden="true" style="display: inline-block;"></i>
              <a href="mailto:ritesh@polycrack.com" style="color: inherit;">info@polycrack.com</a>
              <br />
              <i class="fa fa-mobile" aria-hidden="true" style="display: inline-block;"></i>
              <a href="tel:+447740611649" style="color: inherit;">+44 07740611649</a>

            </p>

            

        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div class="link-wrapper">
            <h2>Links</h2>
            <div class="footer-link-divider"></div>
            <ul class="footer-link">
              <li>
                <a href="index.html">
                   Home
                  </a>                  
              </li>
                <li>
                <a href="features.html">
                    About Polycrack
                  </a>                  
              </li>
              <li>
                <a href="process.html">The Process</a>
              </li>
              <li>
                <a href="awards.html">Awards</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="contact.php">Contact</a>
              </li>
            </ul>
          </div>
          
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div class="footer-social-wrapper">
              <h2>Follow us</h2>
              <div class="footer-link-divider"></div>
              <ul class="footer-social-link">
                <li>
                  <a href="https://www.facebook.com/polycrack" target="_blank">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/polycrackgroup/" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/polycrack/">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
      `;

  $('.before-footer').html(_footerContent);


 var lastFooter = `
  <div class="container">
  <div class="row text-center after-footer">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-left">
      <span>
        <a href="privacy-policy.html">Privacy Policy</a>
      </span>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-left">
    <span>
    © 2020 Polycrack Worldwide Ltd. All Rights Reserved.
    </span>
  </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right">
      <a href="http://www.spakcomm.com" target="_blank">Designed with <i class="fa fa-heart" aria-hidden="true"></i> by Spakcomm</a>
    </div>
  </div> 
</div> 
  `;

  $('.footer').html(lastFooter);

});




/******tr spacer***/