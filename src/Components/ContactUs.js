import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './css/bootstrap.min.css'
import './css/pogo-slider.min.css'
import './css/style.css'
import './css/custom.css'
import Header from './Header'

const ContactUs = () => {
    return (
        <div>
        <Header />
            <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">


                {/* <!-- Popular Programs section --> */}

                {/* margn-top */}
                <div class="section layout_padding ContactUs ">
                    <div class="container">
                        <div class="contactDv">
                            <div class="row">
                                <div class="col-md-3 contaactText">
                                    <div class="contact-info">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <h2>Contact Us</h2>
                                        <h4>We would love to hear from you !</h4>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="contact-form">
                                        <div class="form-group">
                                            <label class="control-label col-sm-10" for="fname">First Name:</label><br />
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-10 mt-4" for="lname">Last Name:</label><br />
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-10 mt-4" for="email">Email:</label><br />
                                            <div class="col-sm-10">
                                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-10 mt-4" for="comment">Comment:</label><br />
                                            <div class="col-sm-10">
                                                <textarea class="form-control" rows="5" id="comment"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class=" col-sm-10 mt-3">
                                                <button type="submit" class="btn btn-default p-3">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- end section --> */}




                <div class="clearfix"></div>


                {/* <!-- ALL JS FILES -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/owlcarousel1/jquery.min.js"></script>
<script src="assets/owlcarousel1/owl.carousel.min.js"></script>
<!-- ALL PLUGINS -->
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/js/jquery.pogo-slider.min.js"></script>
<script src="assets/js/slider-index.js"></script>
<script src="assets/js/smoothscroll.js"></script>
<script src="assets/js/form-validator.min.js"></script>
<script src="assets/js/contact-form-script.js"></script>
<script src="assets/js/isotope.min.js"></script>
<script src="assets/js/images-loded.min.js"></script>
<script src="assets/js/custom.js"></script> */}

                {/* <script>
  $(".btn-group, .dropdown").hover(
  function () {
      $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
      $(this).addClass('open');
  },
  function () {
      $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
      $(this).removeClass('open');
  });
</script> */}


                {/* <script> */}
/* counter js */

                (function ($) {
                    // $.fn.countTo = function (options) {
                    // options = options || {};

                    // return $(this).each(function () {
                    // set options for current element
                    // var settings = $.extend({}, $.fn.countTo.defaults, {
                    // from:            $(this).data('from'),
                    // to:              $(this).data('to'),
                    // speed:           $(this).data('speed'),
                    // refreshInterval: $(this).data('refresh-interval'),
                    // decimals:        $(this).data('decimals')
                    // }, options);

                    // how many times to update the value, and how much to increment the value on each update
                    // var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    // increment = (settings.to - settings.from) / loops;

                    // references & variables that will change with each update
                    //         var self = this,
                    //             $self = $(this),
                    //             loopCount = 0,
                    //             value = settings.from,
                    //             data = $self.data('countTo') || {};

                    //         $self.data('countTo', data);

                    //         // if an existing interval can be found, clear it first
                    //         if (data.interval) {
                    //             clearInterval(data.interval);
                    //         }
                    //         data.interval = setInterval(updateTimer, settings.refreshInterval);

                    //         // initialize the element with the starting value
                    //         render(value);

                    //         function updateTimer() {
                    //             value += increment;
                    //             loopCount++;

                    //             render(value);

                    //             if (typeof(settings.onUpdate) == 'function') {
                    //                 settings.onUpdate.call(self, value);
                    //             }

                    //             if (loopCount >= loops) {
                    //                 // remove the interval
                    //                 $self.removeData('countTo');
                    //                 clearInterval(data.interval);
                    //                 value = settings.to;

                    //                 if (typeof(settings.onComplete) == 'function') {
                    //                     settings.onComplete.call(self, value);
                    //                 }
                    //             }
                    //         }

                    //         function render(value) {
                    //             var formattedValue = settings.formatter.call(self, value, settings);
                    //             $self.html(formattedValue);
                    //         }
                    //     });
                    // };

                    // $.fn.countTo.defaults = {
                    //     from: 0,               // the number the element should start at
                    //     to: 0,                 // the number the element should end at
                    //     speed: 1000,           // how long it should take to count between the target numbers
                    //     refreshInterval: 100,  // how often the element should be updated
                    //     decimals: 0,           // the number of decimal places to show
                    //     formatter: formatter,  // handler for formatting the value before rendering
                    //     onUpdate: null,        // callback method for every time the element is updated
                    //     onComplete: null       // callback method for when the element finishes updating
                    // };

                    // function formatter(value, settings) {
                    //     return value.toFixed(settings.decimals);
                    // }
                    // }(jQuery));

                    // jQuery(function ($) {
                    // // custom formatting example
                    // $('.count-number').data('countToOptions', {
                    // formatter: function (value, options) {
                    //   return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    // }
                    // });

                    // start all the timers
                    // $('.timer').each(count);  

                    // function count(options) {
                    // var $this = $(this);
                    // options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    // $this.countTo(options);
                }
                {/* }); */}
                {/* </script> */}
            </body>
        </div>
    )
}

export default ContactUs
