$( document ).ready(function() {
$('.page-section').each(function() {
var findbookingsection = $(this).find('.date-range-widget');
if(findbookingsection.length > 0) {
  $(this).addClass('booking-section');
}
});
var checkInDate;
var checkInMonth;
var checkInYear;
var checkOutDate;  
var checkOutMonth;
var checkOutYear;
var childAges;
$('input[name="dates-range"]').daterangepicker({
  //autoUpdateInput: false,
  //startDate: moment(),
  //endDate: moment().add(1, 'days'),
  //"alwaysShowCalendars" : true,
  "maxSpan": {
    "days": 90
  },
  minDate: moment(),
  "opens": "right",
  "autoApply": true,
  locale: {
   format: 'MMMM D, YYYY'
  }
});
$('input[name="dates-range"]').on('apply.daterangepicker', function(ev, picker) {
  //$(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  checkInDate = picker.startDate.format('DD');
  console.log(checkInDate);
  checkInMonth = picker.startDate.format('MM');
  console.log(checkInMonth);
  checkInYear = picker.startDate.format('YYYY');
  console.log(checkInYear);
  checkOutDate = picker.endDate.format('DD');
  console.log(checkInDate);
  checkOutMonth = picker.endDate.format('MM');
  console.log(checkInMonth);
  checkOutYear = picker.endDate.format('YYYY');
  console.log(checkInYear);
  $('.date-range-search').removeClass('disabled');
});
$('input[name="dates-range"]').val('Check-in Date - Check-out Date');
$('input[name="dates-range"]').on('showCalendar.daterangepicker', function(ev, picker) {
  //do something, like clearing an input
  console.log('calender open!');
  if ($('.acr-picker-panel-parent').hasClass('show')){
     $('.acr-picker-panel-parent').toggleClass('show');
  }
  //change left offset
  var leftoffset = $('.daterangepicker.show-calendar').offset().left;
  console.log(leftoffset - 45);
  $( ".daterangepicker.show-calendar" ).offset({ left: leftoffset - 45 });  
});
$('input[name="dates-range"]').on('show.daterangepicker', function(ev, picker) {
  //change left offset
  var leftoffset = $('.daterangepicker.show-calendar').offset().left;
  console.log(leftoffset - 45);
  $( ".daterangepicker.show-calendar" ).offset({ left: leftoffset - 45 });
  // Dialog
});
//Default Checkin,checkout
/*var startDate = $("input[name='daterangepicker_start']").val();
checkInDate = startDate.format('DD');
console.log(checkInDate);
checkInMonth = startDate.format('MM');
console.log(checkInMonth);
checkInYear = startDate.format('YYYY');
console.log(checkInYear);
var endDate = $("input[name='daterangepicker_end']").val();
checkOutDate = endDate.format('DD');
console.log(checkInDate);
checkOutMonth = endDate.format('MM');
console.log(checkInMonth);
checkOutYear = endDate.format('YYYY');
console.log(checkInYear);*/
//
$("#number-picker-adults").dpNumberPicker({
min: 1, // Minimum value.
max: 30, // Maximum value.
value: 2, // Initial value
step: 1, // Incremental/decremental step on up/down change.
format: false,
editable: true,
addText: "+",
subText: "-",
formatter: function(val){return val;},
beforeIncrease: function(){
},
afterIncrease: function(){
},
beforeDecrease: function(){
},
afterDecrease: function(){
},
beforeChange: function(){},
afterChange: function(){
var adultVal = $('#number-picker-adults input').val();
var adultString;
if (adultVal > 1){
   adultString = 'Adults'
}
if (adultVal <= 1){
   adultString = 'Adult'
}
var adultresult = adultVal + ' ' + adultString;
$('.num-adults').html(adultresult);
},
onMin: function(){},
onMax: function(){}
});
$("#number-picker-children").dpNumberPicker({
min: 000, // Minimum value.
max: 10, // Maximum value.
value: 0, // Initial value
step: 1, // Incremental/decremental step on up/down change.
format: false,
editable: true,
addText: "+",
subText: "-",
formatter: function(val){return val;},
beforeIncrease: function(){},
afterIncrease: function(){
  var childVal = $('#number-picker-children input').val();
  if (childVal > 0) {
	var childDropdown = `<select class="child-age-dropdown" name="age" id=":r1g:"><option value="-1">Age needed</option><option value="0">0 years old</option><option value="1">1 year old</option><option value="2">2 years old</option><option value="3">3 years old</option><option value="4">4 years old</option><option value="5">5 years old</option><option value="6">6 years old</option><option value="7">7 years old</option><option value="8">8 years old</option><option value="9">9 years old</option><option value="10">10 years old</option><option value="11">11 years old</option><option value="12">12 years old</option><option value="13">13 years old</option><option value="14">14 years old</option><option value="15">15 years old</option><option value="16">16 years old</option><option value="17">17 years old</option></select>`;
    var childNotice= `<p>To find you a place to stay that fits your entire group along with correct prices, we need to know how old your child will be at check-out</p>`;
    console.log(childVal);
    $('.child-dropdowns').append(childDropdown);
    $('.child-notice').html(childNotice);
  }
},
beforeDecrease: function(){},
afterDecrease: function(){
  var childVal = $('#number-picker-children input').val();
  console.log(childVal);
  $('.child-dropdowns select').last().remove();
  if (childVal == 0){
    $('.child-notice p').remove();
  }
},
beforeChange: function(){},
afterChange: function(){
var childVal = $('#number-picker-children input').val();
var ChildString;
if (childVal > 1){
   ChildString = 'Children'
}
if (childVal <= 1){
   ChildString = 'Child'
}
if (childVal > 0){
   $('#number-picker-children .dp-numberPicker-sub').removeClass('disabled');
}
if (childVal == 0){
   $('#number-picker-children .dp-numberPicker-sub').addClass('disabled');
}
var childresult = childVal + ' ' + ChildString;
$('.num-childern').html(childresult);
},
onMin: function(){},
onMax: function(){}
});
$('#number-picker-children .dp-numberPicker-sub').addClass('disabled');
$("#number-picker-room").dpNumberPicker({
min: 1, // Minimum value.
max: 30, // Maximum value.
value: 1, // Initial value
step: 1, // Incremental/decremental step on up/down change.
format: false,
editable: true,
addText: "+",
subText: "-",
formatter: function(val){return val;},
beforeIncrease: function(){
},
afterIncrease: function(){

},
beforeDecrease: function(){

},
afterDecrease: function(){

},
beforeChange: function(){},
afterChange: function(){
var roomVal = $('#number-picker-room input').val();
var roomString;
if (roomVal > 1){
   roomString = 'Rooms'
}
if (roomVal <= 1){
   roomString = 'Room'
}
var roomresult = roomVal + ' ' + roomString;
$('.num-rooms').html(roomresult);
},
onMin: function(){},
onMax: function(){}
});
//
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
$(".acr-picker-result, .arrow-box .arrow").click(function(){
 $(".acr-picker-panel-parent").toggleClass("show");
 console.log('open!');
});
$(".acr-done a").click(function(){
 $(".acr-picker-panel-parent").toggleClass("show");
 console.log('done!');
});
// Close the dropdown if the user clicks outside of it
//
$( ".date-range-search" ).click(function() { 
 //DateWidgetFnc();
 var adultVal = $('#number-picker-adults input').val(); 
 var childVal = $('#number-picker-children input').val();
 childAges = "";
 $('.child-dropdowns select').each(function() {
  childAges = childAges + `&age=` + $(this).val();
 });
 if (childVal == 0){
   childAges = '';
 }
 var roomVal = $('#number-picker-room input').val();
 var linkBooking = desktopLink + `&nflt=class%3D3%3Bclass%3D4%3Bclass%3D5%3Broomfacility%3D81%3Bclass%3D0%3Bht_id%3D204%3Breview_score%3D80%3Bht_id%3D206%3B&rsf=` + `&checkin_monthday=` + checkInDate + `&checkin_year_month=` + checkInYear + `-` + checkInMonth + `&` + `checkout_monthday=` + checkOutDate + `&checkout_year_month=` + checkOutYear + `-` + checkOutMonth + `&no_rooms=` + roomVal + `&group_adults=` + adultVal + `&group_children=` + childVal + childAges +``;
 console.log(linkBooking);
 window.open(linkBooking);
});

});
