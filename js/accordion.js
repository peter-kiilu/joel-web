jQuery(document).ready(function($){

	$('.wpcmsdev-accordion').each(function(index, element){
		$(this).find('.accordion-item-content').hide().first().show().parent().addClass('active');
	});

	$('.wpcmsdev-accordion .accordion-item-title a').click(function(event){
		event.preventDefault();

		if ( ! $(this).parents('.accordion-item').hasClass('active') ) {

			// Set active class
			$(this).parents('.accordion-item').addClass('active').siblings().removeClass('active');

			// Hide others content
			$(this).parents('.accordion-item').siblings().children('.accordion-item-content').slideUp('fast');

			// Show own content
			$(this).parent().siblings('.accordion-item-content').slideDown('fast');
			
Headers
Key: Authorization
Value: Bearer b6ogGQCW1ege0FVs3nDGnn1HyMNe
​
Body
  {
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwOTIzMTUxODIx",
    "Timestamp": "20240923151821",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 10,
    "PartyA": 254742212054,
    "PartyB": 174379,
    "PhoneNumber": 254113292787,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  }

		}
	});
});
