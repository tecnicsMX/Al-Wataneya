define({ 

 onNavigate: function() {  
   
    this.view.preShow = this.onPreshow.bind(this);
   
      if (!this.isUIInitialized) {
        this.createsIntoFeaturedAuctions();
        this.createSegmentDynamically();
//         this.isUIInitialized = true;
         }
   
    this.view.btnRecommended.onClick = this.showRecommendedFilterFlex.bind(this,"recommended");
   this.view.btnEndingSoon.onClick = this.showRecommendedFilterFlex.bind(this,"endingsoon");
    this.view.btnRecentlyViewed.onClick = this.showRecommendedFilterFlex.bind(this,"recentlyviewed");
   this.view.btnYourFavourites.onClick = this.showRecommendedFilterFlex.bind(this,"yourfavourites");
   this.view.btnNewlyListedVehicles.onClick =  this.showRecommendedFilterFlex.bind(this,"newlylisted");
   this.view.flxServiceItem1.onClick = this.navToVehicleInspection.bind(this);
   this.view.flxAuctionCalendarItem1.onClick = this.navToAuctionCalendar.bind(this);
   
 },
  
  onPreshow: function(){
    
     
   
    
    this.toggleFooterIcons();
    
    this.view.btnRecommended.skin = "sknBtnRecommendedFilter";
    this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
    this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
  },
  
  toggleFooterIcons: function()
  {
   this.view.Footer2.flxHL1.setVisibility(true);
  this.view.Footer2.flxHL2.setVisibility(false);
  this.view.Footer2.flxHL3.setVisibility(false);
  this.view.Footer2.flxHL4.setVisibility(false);
  this.view.Footer2.flxHL5.setVisibility(false);
    
  this.view.Footer2.imgHome.src = "homefooteractive.png";
  this.view.Footer2.lblHome.skin = "sknlblCPBoldDisp333333Font200";
  
  this.view.Footer2.imgMegaPhone.src = "auctionsfooter.png";
  this.view.Footer2.lblAuctions.skin = "sknlblCPBoldCapt181818Font100";
    
     this.view.Footer2.imgMyBids.src = "mybidsfooter.png";
   this.view.Footer2.lblMyBids.skin = "sknlblCPBoldCapt181818Font100";
    
    var isLogin =voltmx.store.getItem("isLogin");

    var isUserCreated = voltmx.store.getItem("isUserCreated");
    
   if(isLogin === true &&  isUserCreated === true){
      this.view.Footer2.imgSellCar.setVisibility(false);
      this.view.Footer2.flxProfile.setVisibility(true);
    }
    else{
      this.view.Footer2.imgSellCar.setVisibility(true);
      this.view.Footer2.flxProfile.setVisibility(false);
    }
  },
  
  createSegmentDynamically: function(){
  
   this.view.segCarouselView.widgetDataMap = {
        "imgCarousel": "imgCarousel",
        "lblCarouselSlideHeading": "lblCarouselSlideHeading",
        "lblCarouselSlideSubheading": "lblCarouselSlideSubheading",
        "btnAction": "btnAction"
    };

    // Dummy Data for Segment (Modify as Needed)
    var data = [
        {
            "imgCarousel":"dashboardcarouselnew1.jpg",
            "lblCarouselSlideHeading": "ONLINE AUCTIONS",
            "lblCarouselSlideSubheading": "180 Vehicles available",
            "btnAction": { "text": "VIEW ALL"}
        },
        {
             "imgCarousel":"dashboardcarouselimg2.jpg",
            "lblCarouselSlideHeading": "OUR OTHER SERVICES",
            "lblCarouselSlideSubheading": "Professional servicing, repairs and diagnostics",
            "btnAction": { "text": "VIEW ALL"}
        },
       {
             "imgCarousel":"dashboardcarouselnew2.png",
            "lblCarouselSlideHeading": "FLASH AUCTIONS",
            "lblCarouselSlideSubheading": "Bid Fast, Win Big - Time's Ticking",
            "btnAction": { "text": "VIEW ALL"}
        },
      {
             "imgCarousel":"dashboardcarouselnew3.png",
            "lblCarouselSlideHeading": "PHYSICAL AUCTIONS",
            "lblCarouselSlideSubheading": "From the Floor to Your Hands - Secure Your Asset",
            "btnAction": { "text": "VIEW ALL"}
        }
      
      
    ];

    // Set data to the segment
   this.view.segCarouselView.setData(data);
  
     
    this.view.segCarouselView.pageOnDotImage = "segmentpageonimg.png"; 
    this.view.segCarouselView.pageOffDotImage = "segmentpageoffimg.png";
  },

   createsIntoFeaturedAuctions: function() {
        voltmx.print("entered into function");

        var parentFlex = this.view.flxScrollFilteredItems;
//           parentFlex.removeAll();


        for (var i = 0; i < 5; i++) {
            // Creating the main flex container for each widget

            var flexFeaturedAuctionsItem = new voltmx.ui.FlexContainer({
                id: "flexFeaturedAuctionsItem" + i,
                left: "10dp",
                width: "280dp", 
                height: "90%", 
                zIndex: 1,
                isVisible: true,
//                 skin: "flxContainer45",
//                 top: (i * 330) + "dp",
                skin: "sknFlxFFFFFFBorderCCCCCC2px",
                clipBounds: true
                
            }, {}, {});
          
          
            var flxFeaturedAuctionsItemTop = new voltmx.ui.FlexContainer({
              
             id: "flxFeaturedAuctionsItemTop" + i,
             centerX: "50%",
             height: "50%",
             width: "90%",
             zIndex:1,
             isVisible: true,
             top: "5%",
             skin: "sknFlxWhiteRoundedCorner",
             clipBounds: true  
            },{},{});
          
          var imgFeaturedAuctions = new voltmx.ui.Image2({
                id: "imgFeaturedAuctions" + i,
                isVisible: true,
               src : "car3.png",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });


          var flxFeaturedAuctionsItemBottom  = new voltmx.ui.FlexContainer({
            
              id: "flxFeaturedAuctionsItemBottom" + i,
             centerX: "50%",
             height: "45%",
             width: "100%",
             zIndex: 1,
             isVisible: true,
             top: "55%",
             skin: "sknFlxBasic",
             clipBounds: true,
             layoutType: voltmx.flex.FREE_FORM
            
            
          },{},{});
          
          var lblCarname = new voltmx.ui.Label(
           {
                id: "lblCarname" + i,
                text: "Nissan Sunny 2023", 
                isVisible: true,
                width: "preferred",
                left: "5%",
                top: "10%",
                height: "15%",
                skin: "sknLblCronosPro231f2022pxbold"
          }
          );
          
          var lblLot = new voltmx.ui.Label({
            
                id: "lblLot" + i,
                text: "Lot #:69952",
                isVisible: true,
                width: "preferred",
                left: "5%",
                top: "30%",
                height: "15%",
                skin: "sknLblCronosPro231f2016px"
            
          });
          
             var lblTotalBids = new voltmx.ui.Label({
            
                id: "lblTotalBids" + i,
                text: "Total Bids: 68",
                isVisible: true,
                width: "preferred",
                left: "5%",
                top: "50%",
                height: "15%",
                skin: "sknLblCronosPro231f2016px"
            
          });
          
        
          
          var lblCountDown = new voltmx.ui.Label({
            
            
                id: "lblCountDown" + i,
                text: "11D 7H 02M", 
                isVisible: true,
                width: "preferred",
                height: "15%",
                right: "5%",
                top: "10%",
                skin: "sknLblCronosProd3243716px"
            
            
          });
          
          
          var lblLocation = new voltmx.ui.Label({
            
            
                id: "lblLocation" + i,
                text: "Sharjah", 
                isVisible: true,
                width: "preferred",
                height: "15%",
                right: "5%",
                top: "30%",
                skin: "sknLblCronosPro231f2016px"
            
            
          });
          
          var lblBidRate = new voltmx.ui.Label({
            
                id: "lblBidRate" + i,
                text: "AED 15,000", 
                isVisible: true,
                width: "preferred",
                height: "15%",
                right: "5%",
                top: "50%",
                skin: "sknLblCronosProd32437Bold22px"
          });
          
          
          var flxLikeFromRecommendedFilter = new voltmx.ui.FlexContainer({
              id: "flxLikeFromRecommendedFilter"+i,
            isVisible: true,
            clipBounds: false,
            left: "5%",
            bottom: "10%",
            top: "70%",
            skin: "sknFlx231f20custom120pxround",
            width: "25dp",
            height: "25dp",
            zIndex: 2,
            onClick: this.toggleHeartStatusFromRecommended.bind(this,i)
          },{},{});
          
              var imgHeartIconFromRecommended = new voltmx.ui.Image2({
                id: "imgHeartIconFromRecommended" + i,
                isVisible: true,
               src : "imgdislikenew.png",
               centerY: "50%",
               centerX: "50%",
              width: "55%", 
                height: "55%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });
          
          var flxBidEnable = new voltmx.ui.FlexContainer({
              id: "flxBidEnable"+i,
            isVisible: true,
            clipBounds: false,
            right: "44%",
            bottom: "10%",
            top: "70%",
            skin: "sknFlxBasic",
            width: "25dp",
            height: "25dp",
            zIndex: 2,
            onClick: this.enableAutoBid.bind(this,i)
          },{},{});
          
            var imgAutoBid = new voltmx.ui.Image2({
                id: "imgAutoBid" + i,
                isVisible: true,
               src : "imgautobidnew.png",
               centerY: "50%",
               centerX: "50%",
              width: "100%", 
                height: "100%", 
                imageScaleMode: constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                clipBounds: true
            });

          var btnBidNow = new voltmx.ui.Button({
            
            id: "btnBidNow"+ i,
            right: "5%",
            top: "70%",
            text: "BID NOW",
            skin: "sknBtnBidNow",
            width: "35%",
            height: "20%"
            
          });

          flxFeaturedAuctionsItemTop.add(imgFeaturedAuctions);
          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemTop); 
          flxFeaturedAuctionsItemBottom.add(lblCarname);
          flxFeaturedAuctionsItemBottom.add(lblLot);
          flxFeaturedAuctionsItemBottom.add(lblTotalBids);
          flxFeaturedAuctionsItemBottom.add(lblCountDown);
          flxFeaturedAuctionsItemBottom.add(lblLocation);
          flxFeaturedAuctionsItemBottom.add(lblBidRate);
          flxLikeFromRecommendedFilter.add(imgHeartIconFromRecommended);
          flxBidEnable.add(imgAutoBid);
          flxFeaturedAuctionsItemBottom.add(flxBidEnable);
          flxFeaturedAuctionsItemBottom.add(flxLikeFromRecommendedFilter);
          flxFeaturedAuctionsItemBottom.add(btnBidNow);
          
         
          flexFeaturedAuctionsItem.add(flxFeaturedAuctionsItemBottom);
          parentFlex.add(flexFeaturedAuctionsItem);
        }

        voltmx.print("exit from function");
    },
  
  toggleHeartStatus: function(index){
   var imgHeart = this.view["imgHeartIcon" + index]; // Get the image by ID

    if (imgHeart.src === "heartdislikefeaturedauctions.png") {
        imgHeart.src = "heartlikexx.png"; // Change to liked state
    } else {
        imgHeart.src = "heartdislikefeaturedauctions.png"; // Change back to unliked state
    }
  },
  
  toggleHeartStatusFromRecommended: function(index){
    
     var imgHeart = this.view["imgHeartIconFromRecommended" + index]; // Get the image by ID
     var flxHeart = this.view["flxLikeFromRecommendedFilter" + index];
    if (imgHeart.src === "imgdislikenew.png") {
        flxHeart.skin = "sknFlxd32437custom120pxround";
        imgHeart.src = "heartlikerecommended.png"; // Change to liked state
    } else {
        flxHeart.skin = "sknFlx231f20custom120pxround";
        imgHeart.src = "imgdislikenew.png"; // Change back to unliked state
    }
  },
  
  enableAutoBid: function(index){
    
    alert("Auto bid enabled for "+index);
    
  },

  showRecommendedFilterFlex: function(filter){
    switch(filter){
      case "recommended":
        this.view.btnRecommended.skin = "sknBtnRecommendedFilter";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        break;
      case "endingsoon":
        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilter";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        break;
      case "recentlyviewed":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilter";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";

        break;

      case "yourfavourites":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilter";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilterNormal";
        break;

      case "newlylisted":

        this.view.btnRecommended.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnEndingSoon.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnRecentlyViewed.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnYourFavourites.skin = "sknBtnRecommendedFilterNormal";
        this.view.btnNewlyListedVehicles.skin = "sknBtnRecommendedFilter";
        break;

    }
  },
  
  navToVehicleInspection: function(){
    var x = new voltmx.mvc.Navigation("frmVehicleInspection");
    x.navigate();
  },
  
  navToAuctionCalendar: function(){
    var x = new voltmx.mvc.Navigation("frmAuctionCalendar");
    x.navigate();
  }

 });