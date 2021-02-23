<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Polycrack : Contact</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <!--css for ken burn effect-->
    <link rel="stylesheet" href="css/ken-burns.css">
    <!--css for ken burn effect-->
    <link rel="stylesheet" href="css/libs.css">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/mob.css" rel="stylesheet">
    
    <style type="text/css">
        .banner-wrapper > h1 {
          transform: translate(-22%, -50%);
          -o-transform: translate(-22%, -50%);
          -moz-transform: translate(-22%, -50%);
          -ms-transform: translate(-22%, -50%);
          -webkit-transform: translate(-22%, -50%);
        }
	  </style>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-167409493-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-167409493-1');
</script>

  </head>
  <body>

      <!--navigation-->
     <div class="top-banner"></div>
     <nav class="navbar navbar-inverse"></nav>
     <!--navigation-->

     <div class="banner-wrapper margin-bottom-20">
      <h1>Contact</h1>
      <img src="img/banner/contact.png" alt="About" class="img-responsive" />
  </div>
            
<!--footer-->
      <div class="container">
        <div class="row">
           <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div id="address">
                <strong>Polycrack Worldwide Ltd</strong>     
                <table class="table contact-table">
                  <tr>
                    <td><i class="fa fa-map-marker" aria-hidden="true"></i></td>
                    <td>
                      <span>
                        Building no.7 Paynes Park Hitchin
                        <br />
                        Hertfordshire - SG5 1EH
                        <br />
                        England
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fa fa-envelope-o" aria-hidden="true" style="display: inline-block;"></i></td>
                    <td>
                      <a href="mailto:ritesh@polycrack.com" style="color: inherit;">
                        info@polycrack.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td> <i class="fa fa-mobile" aria-hidden="true" style="display: inline-block;"></i></td>
                    <td>
                      <a href="tel:+447740611649" style="color: inherit;">
                        (+44) 1462 429747
                      </a>
                    </td>
                  </tr>
                </table>
              </div> 
           </div> <!--end col--> 
           <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div id="address">
              <strong>India</strong>    
              <table class="table contact-table">
                <tr>
                  <td><i class="fa fa-map-marker" aria-hidden="true"></i></td>
                  <td>
                    <span>
                      Enecovery Waste Solutions Pvt. Ltd.
                      <br />
                      244 Kuber, Link road,
                      <br />
                      Andheri west
                      <br />
                      Mumbai 400053
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><i class="fa fa-envelope-o" aria-hidden="true" style="display: inline-block;"></i></td>
                  <td>
                    <a href="mailto:ritesh@polycrack.com" style="color: inherit;">
                      info@polycrack.com
                    </a>
                  </td>
                </tr>
              </table>
            </div> 
         </div> <!--end col-->   
         <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div id="address">
            <strong>Polycrack New Zealand Limited</strong>     
            <table class="table contact-table">
              <tr>
                <td><i class="fa fa-map-marker" aria-hidden="true"></i></td>
                <td>
          <span>
            36 Ben Lomond Crescent, 
            <br />
            Pakuranga Heights, 
            <br />
            Auckland, 2010 , New Zealand
          </span>
                </td>
              </tr>
              <tr>
                <td><i class="fa fa-envelope-o" aria-hidden="true" style="display: inline-block;"></i></td>
                <td>
                 <a href="mailto:Info@polycrack.com" style="color: inherit;">Info@polycrack.com</a>
                </td>
              </tr>
              <tr>
                <td> <i class="fa fa-mobile" aria-hidden="true" style="display: inline-block;"></i></td>
                <td>
        <a href="tel:6493901403" style="color: inherit;">
        +6493901403
        </a>
                </td>
              </tr>
            </table>           
          </div> 
       </div> <!--end col-->                     
        </div> <!--end row-->
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <hr class="hr-10" />

            <div class="div-wrapper text-center" style="padding:15px;">
              <?php 

                if($_SERVER['REQUEST_METHOD'] == 'POST')
                {

                $uname = $_POST["uname"];
                $phone = $_POST["mob"];
                $url = $_POST["url"];

                $to = $_POST["from_email"];
                $subject = "Contact Lead";
                $message = "
                  Thank you $uname for contacting us
                ";
                $header = "From: <info@polycrack.com>" ."\r\n";
                $header .= "Content-type:text/html;charset-UTF-8" ."\r\n";

                if(mail($to,$subject,$message,$header))
                {
                echo "Thank You for contacting us";

                  $too = "info@polycrack.com";
                $message1 = "
                  <b>Name : </b> $uname
                  <br />
                  <b>Phone : </b> $phone
                  <br />
                  <b>Website : </b> $url
                ";
                $header1 = "From: <$to>" ."\r\n";
                $header1 .= "Content-type:text/html;charset-UTF-8" ."\r\n";

                mail($too, $subject, $message1, $header1);

                }
                else
                {
                  echo "Email Failed";
                }
                
              }

              ?>

            </div>
            

            
            
          </div>
        </div>
      </div> <!--end container-->
     <!--footer-->
     
     <!--form-->
       <div class="container">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">              
            <script type="text/javascript" src="https://www.formlets.com/static/js/iframeResizer.min.js"></script>
            <!-- <div id="form">
                <iframe id="formlets-iframe" src="https://www.formlets.com/forms/D2MdS3JkPPPOzpmr/?iframe=true" frameborder="0" width="100%"></iframe>
            </div> -->
            <script type="text/javascript" src="https://www.formlets.com/static/js/iframe.js"></script>
            </div> <!--end col--> 
         </div> <!--end row-->
       </div> <!--end container-->
     <!--form-->
     <div class="container">
        <div class="row">
           <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <br class="br-xs-hide" /><br />
           </div> <!--end col-->
        </div> <!--end row-->
     </div> <!--end container-->

     <div class="before-footer"></div>
     <div class="footer"></div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
     <!--js for ken burn effect-->
    <script src="js/custom.js"></script>
    <script src="js/polycrack.js"></script>

    <script>
      $(document).ready(function(){
        
        $('.england').show();

        $('.showAddress').on('click', function(e){
          e.preventDefault();

          $(this).parent('li').siblings('li').find('a').removeClass('highlightAddress');
          $(this).addClass('highlightAddress');

          let attrVal = $(this).attr('title');
          attrVal = '.' + attrVal;
          console.log(attrVal);
          // $(attrVal).show();
          // $(attrVal).siblings('p').hide();

          $(attrVal).slideDown();
          $(attrVal).siblings('p').slideUp();

        });

      });
    </script>
	
  </body>
</html>