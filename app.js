import React from "react";
import  ReactDOM  from "react-dom/client";
import img1 from "./images/swigy_logo.png"

/*
-Header
  -logo
  -nav items
- Body
    -Search
    -Restaurent Card
        -image
        -Restrauent name,-star rating,food items,time of delivery

        
-footer
*/ 

// Header Component
const Header=()=>{
    return(
        <div className="header">

            <div className="logo-container">
            <img  className="logo" src={img1}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>   
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

//restaurent cards component

const RestaurentCard =(props)=>{
   const {resData}=props;

   const {name,cuisines,avgRatingString,cloudinaryImageId,costForTwo}=resData.info;
   const {slaString} =resData?.info?.sla;
    return(
        <div className="res-card">
            <div className="img-container">
            <img className="res-img"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
              <div class="overlay"><h1>{costForTwo}</h1>
</div>

            </div>
            <div className="details">
            <h4>{name}</h4>
            <h4>⭐️{avgRatingString} • {slaString}</h4>
            <p className="cusines">{cuisines.join(",")}</p>
           
            <p></p>
            </div>

        </div>

    )
}

const resList=[ {
    "info": {
      "id": "73944",
      "name": "Pathans Hotel",
      "cloudinaryImageId": "e0dccvu2xvdzfajo9ccs",
      "locality": "Kuruppam",
      "areaName": "Poothole",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Desserts",
        "Bakery",
        "Chinese"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "20834",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pathans-hotel-kuruppam-poothole-thrissur-73944",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "73953",
      "name": "Hotel Akshaya - Chembotil Lane",
      "cloudinaryImageId": "mko07sgx8v9t3zmvllmb",
      "locality": "Chembottil Lane",
      "areaName": "Poothole",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Kerala",
        "Biryani"
      ],
      "avgRating": 4.5,
      "parentId": "20828",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-akshaya-chembotil-lane-chembottil-lane-poothole-thrissur-73953",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "302937",
      "name": "Sree Radhakrishna Coffee Club",
      "cloudinaryImageId": "ecg4u2exy1tjlc4dhckv",
      "locality": "Kuruppam",
      "areaName": "Poothole",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "Biryani"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "193186",
      "avgRatingString": "4.7",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 20:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sree-radhakrishna-coffee-club-kuruppam-poothole-thrissur-302937",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "265398",
      "name": "Hotel Akshaya - Punkunnam",
      "cloudinaryImageId": "r5mfli8wbcxukj0ehbit",
      "locality": "Sarada Apartment Road",
      "areaName": "Puzhakkal",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese"
      ],
      "avgRating": 4.5,
      "parentId": "97797",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-akshaya-punkunnam-sarada-apartment-road-puzhakkal-thrissur-265398",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "424100",
      "name": "Thomson's Casa",
      "cloudinaryImageId": "g7ausfcdmu0nwyf4kkxe",
      "locality": "Ikkanda Warrier Road",
      "areaName": "Kizhakkumpattukara",
      "costForTwo": "₹236 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Ice Cream",
        "Biryani"
      ],
      "avgRating": 4.5,
      "parentId": "235965",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/thomsons-casa-ikkanda-warrier-road-kizhakkumpattukara-thrissur-424100",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "73945",
      "name": "Hotel Akshaya - Marar Road",
      "cloudinaryImageId": "b6x2rzl2n9b48m0v8gbu",
      "locality": "Marar Road Area",
      "areaName": "Poothole",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Biryani"
      ],
      "avgRating": 4.4,
      "parentId": "97796",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-akshaya-marar-road-marar-road-area-poothole-thrissur-73945",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "656601",
      "name": "Pisharody'S Veg Restaurant",
      "cloudinaryImageId": "c99a8184b9522bffdf43b4978a7a1878",
      "locality": "Kuruppam Road",
      "areaName": "Poothole",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "394730",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pisharodys-veg-restaurant-kuruppam-road-poothole-thrissur-656601",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "356696",
      "name": "The Vigneshwara Grand",
      "cloudinaryImageId": "osoyeazvxjupmkpnqohx",
      "locality": "Chembottil Lane",
      "areaName": "Poothole",
      "costForTwo": "₹280 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "215173",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-vigneshwara-grand-chembottil-lane-poothole-thrissur-356696",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "352441",
      "name": "Krithika Veg Restaurant",
      "cloudinaryImageId": "w2hz9qwqrzow0yjmifw4",
      "locality": "C Achutha Menon Road",
      "areaName": "Poothole",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "121130",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "ABOVE ₹900",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/krithika-veg-restaurant-c-achutha-menon-road-poothole-thrissur-352441",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "73245",
      "name": "Vrindavan",
      "cloudinaryImageId": "smivbeg7hwosiyn7ngc5",
      "locality": "Bennet Road",
      "areaName": "Kizhakkumpattukara",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "4375",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 21:20:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/vrindavan-bennet-road-kizhakkumpattukara-thrissur-73245",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "82518",
      "name": "Hotel Blue Sapphire",
      "cloudinaryImageId": "Swiggy-Dash/c2zbnw6y7qsymm5xxgoe",
      "locality": "North Bus Stand",
      "areaName": "Poothole",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.1,
      "parentId": "20750",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 21:15:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-blue-sapphire-north-bus-stand-poothole-thrissur-82518",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "134664",
      "name": "Hotel Swaminatha Vaibhavam",
      "cloudinaryImageId": "ukgqmgh7pbeukq7kdydm",
      "locality": "Thrissur Kunnamkulam Road",
      "areaName": "Puzhakkal",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "20508",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 9.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "9.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-swaminatha-vaibhavam-kunnamkulam-road-puzhakkal-thrissur-134664",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "268808",
      "name": "Hotel Akshaya - High Road",
      "cloudinaryImageId": "ny8b45g8io0grsjxz7pw",
      "locality": "Pallikkulam",
      "areaName": "Poothole",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Biryani"
      ],
      "avgRating": 4.6,
      "parentId": "97795",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-akshaya-high-road-pallikkulam-poothole-thrissur-268808",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "92287",
      "name": "Hotel Sagar",
      "cloudinaryImageId": "sryppexvteko3mhxz8br",
      "locality": "Nedupurha",
      "areaName": "Poothole",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "8935",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-05 21:55:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-sagar-nedupurha-poothole-thrissur-92287",
      "type": "WEBLINK"
    }
  }
]

//Body Component

const Body=()=>{

const rest=[];
  
   
    return (    

        <div className="body">
            <div className="search">Search</div>
            <div className="restuarent-container">

               {resList.map((restaurent)=>(
                <RestaurentCard key={restaurent.info.id} resData={restaurent}/>
               ))}


                        

               

            </div>
        </div>

    )
}



//top level component

const AppLayout=()=>{
    return(
        <div className="apps">
            <Header/>
            <Body/>
        
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)