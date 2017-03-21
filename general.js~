

$(document).ready(function(){
	var currentDate = new Date();
	$("#date").html(currentDate.getFullYear());

	

	
	$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 150) {
    $('#fixedTopToggledVis').css("z-index", 2000);

    
  } else {
    $('#fixedTopToggledVis').css("z-index", -1);
  }
});

$(window).scroll(function() {
    $(".fixedNav").removeClass("in");
    $(".fixedDropdown").removeClass("open");
    $(".topBannerNavCollapse").removeClass("in");
    $(".navDropdown").removeClass("open");
   });

	
	
	
	
	
	for (k=0; k<foresters.length; k++)	{
		var firstNameSpan = "<div class='memberEntries' > <div class='text-left col-xs-12 col-sm-3 col-md-3 col-lg-3 colorSpan' >" + foresters[k].firstName  + " " ;
		console.log(firstNameSpan);
		var lastNameSpan = foresters[k].lastName + "</div><div class='text-left col-xs-12 col-sm-9 col-md-9 col-lg-9'>";
		var companySpan;
		 if(foresters[k].company !== undefined){
			companySpan = foresters[k].company + " - " 
		} else {
			companySpan = "";		
		}
		var address1 = foresters[k].address1 + " - ";
		var cityStateZip = foresters[k].city + ", " + foresters[k].state + " " + foresters[k].zip + " - ";
		var phoneSpan = foresters[k].phone;
		var emailSpan;
		 if(foresters[k].email !== undefined){
			emailSpan = "  - <a href='mailto:" + 	foresters[k].email + "?subject=From the Illinois Consulting Foresters Website&body=Hello, I found you on the Illinois Consulting Foresters website, and I would like to know more about your forestry services.'>"+foresters[k].email+"</a>"
		} else {
			emailSpan = "";		
		}
		if(foresters[k].website !== undefined){
			websiteSpan = "  - <a href='http://" + 	foresters[k].website + "'>"+foresters[k].website+"</a>";
		} else {
			websiteSpan = "";		
		}
		

		
		$("#memberList").append(firstNameSpan+lastNameSpan+companySpan + address1 +cityStateZip + phoneSpan+emailSpan+websiteSpan
	 + "</div></div>")
		

	}
	if($(window).width() > 768){
	var memberListHeight = $("#memberList").height();
	var styleAttr = "height:" + memberListHeight + "px;";
	$("#mapid").css("height", memberListHeight);	
	setTimeout(function(){ 
		mymap.invalidateSize();
		
		
		}, 400);
	}

	

	

	
	
	

$(function() {
    var picCell = $('.picCell');
    var innerPicCell = $('.innerPicCell');
    var h1Test = $('.h1Text');
    var imgSquarePic = $('img.squarePic');
    var minimumWidth;
    var maximumWidth;
    
    if (picCell.width() > imgSquarePic.width()){
    	h1Test.css('width', imgSquarePic.width());
    	minimumWidth = imgSquarePic.width();
    	maximumWidth = picCell.width();
    	h1Test.css('right', ((maximumWidth-minimumWidth)/2));
    	h1Test.css('left', ((maximumWidth-minimumWidth)/2));
    	
    }
    else {
    	h1Test.css('width', picCell.width())

    }
});





})

$(window).resize(function(){
	$(function() {
    var picCell = $('.picCell');
    var innerPicCell = $('.innerPicCell');
    var h1Test = $('.h1Text');
    var imgSquarePic = $('img.squarePic');
    var minimumWidth;
    var maximumWidth;
    
    if (picCell.width() > imgSquarePic.width()){
    	h1Test.css('width', imgSquarePic.width());
    	minimumWidth = imgSquarePic.width();
    	maximumWidth = picCell.width();
    	h1Test.css('right', ((maximumWidth-minimumWidth)/2));
    	h1Test.css('left', ((maximumWidth-minimumWidth)/2));
    	
    }
    else {
    	h1Test.css('width', picCell.width())

    }
});
	
})