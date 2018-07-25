'use strict';


/**
 * Get leaderboards of Top 10 Members that matching the specified criteria. The authentication credential is optional.
 *
 * filter String fieldName=fieldValue (enum[string],optional)  - parameter for filtering the fields according to v3 spec  + type - Filter by type, required + name - Filter by name, one of id and name should be provided + id - Filter by id, one of id and name should be provided 
 * offset Integer number of items to skip. Defaults to 0 (optional)
 * limit Integer max records to return. Defaults to 10 (optional)
 * returns MemeberSearchResponse
 **/
exports.leaderboardsGET = function(filter,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "wins" : 6.02745618307040320615897144307382404804229736328125,
      "skills" : [ {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      }, {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      } ],
      "createdAt" : 5.962133916683182377482808078639209270477294921875,
      "photoURL" : "photoURL",
      "stats" : {
        "DESIGN" : {
          "wins" : 5.63737665663332876420099637471139430999755859375,
          "mostRecentSubmission" : 2.3021358869347654518833223846741020679473876953125,
          "challenges" : 7.061401241503109105224211816675961017608642578125,
          "subTracks" : [ {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          }, {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          } ],
          "mostRecentEventDate" : 5.02500479152029466689555192715488374233245849609375
        },
        "COPILOT" : {
          "contests" : 9.965781217890562260208753286860883235931396484375,
          "activeContests" : 9.3693102714106686335071572102606296539306640625,
          "projects" : 6.683562403749608193948006373830139636993408203125,
          "failures" : 8.7620420127490010742121739895083010196685791015625,
          "fulfillment" : 9.0183481860707832566959041287191212177276611328125,
          "reposts" : 6.438423552598546706349225132726132869720458984375,
          "activeProjects" : 3.557195227068097320710649000830017030239105224609375
        },
        "DATA_SCIENCE" : {
          "wins" : 6.96511769763884558415156789124011993408203125,
          "mostRecentSubmission" : 1.2846590061165319429647979632136411964893341064453125,
          "challenges" : 2.884162126668780246063761296682059764862060546875,
          "MARATHON_MATCH" : {
            "wins" : 6.77832496304801335185175048536621034145355224609375,
            "mostRecentSubmission" : 6.87805222012787620400331434211693704128265380859375,
            "challenges" : 5.94489560761401580890606055618263781070709228515625,
            "rank" : {
              "schoolRank" : 6.70401929795003592715829654480330646038055419921875,
              "maximumRating" : 3.35319334701124294184637619764544069766998291015625,
              "avgNumSubmissions" : 3.093745262666447448651751983561553061008453369140625,
              "rating" : 7.14353804701230643559028976596891880035400390625,
              "competitions" : 0.885137473901165261480628032586537301540374755859375,
              "volatility" : 7.05877035158235610623478351044468581676483154296875,
              "topTenFinishes" : 6.51918095101838179772357761976309120655059814453125,
              "minimumRating" : 0.10263654006109401706225980888120830059051513671875,
              "percentile" : 4.6523964329332461176136348512955009937286376953125,
              "defaultLanguage" : "defaultLanguage",
              "avgRank" : 8.9695787981969115065794539987109601497650146484375,
              "rank" : 7.7403518187411730622216055053286254405975341796875,
              "countryRank" : 3.02057969929162428712743349024094641208648681640625,
              "bestRank" : 3.05761002410493443193217899533919990062713623046875,
              "topFiveFinishes" : 7.04836565559697003635619694250635802745819091796875
            },
            "mostRecentEventDate" : 5.5332583970349862312332334113307297229766845703125,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventDate" : 3.258856561904760695824734284542500972747802734375,
          "SRM" : {
            "wins" : 4.078845849666752343409825698472559452056884765625,
            "mostRecentSubmission" : 0.202532411323639305322785730822943150997161865234375,
            "challenges" : 6.6284642750877420525057459599338471889495849609375,
            "rank" : {
              "minimumRating" : 4.258773108174356281097061582840979099273681640625,
              "percentile" : 1.0414449161182959269211778519093059003353118896484375,
              "defaultLanguage" : "defaultLanguage",
              "schoolRank" : 4.67894798900584873990737833082675933837890625,
              "maximumRating" : 7.26052126480210358039357743109576404094696044921875,
              "rating" : 9.132027271330688478201409452594816684722900390625,
              "competitions" : 0.8774076871421565559927557842456735670566558837890625,
              "rank" : 9.7029638000235660655334868351928889751434326171875,
              "volatility" : 0.519900201872498524124921459588222205638885498046875,
              "countryRank" : 7.93350688173715123951978966942988336086273193359375
            },
            "mostRecentEventDate" : 5.5073869641798811613853104063309729099273681640625,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventName" : "mostRecentEventName"
        },
        "DEVELOP" : {
          "wins" : 4.863159081028840091676102019846439361572265625,
          "mostRecentSubmission" : 6.07389808578115175663469926803372800350189208984375,
          "challenges" : 8.2516257489237574418439180590212345123291015625,
          "subTracks" : [ {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          }, {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          } ],
          "mostRecentEventDate" : 7.2037947498048939820591840543784201145172119140625
        }
      },
      "description" : "description",
      "handle" : "handle",
      "maxRating" : {
        "rating" : 4.3323048218758941629857872612774372100830078125,
        "subTrack" : "subTrack",
        "track" : "track"
      },
      "competitionCountryCode" : "competitionCountryCode",
      "userId" : 2.7977867356748475913263973779976367950439453125,
      "tracks" : [ "tracks", "tracks" ]
    }, {
      "wins" : 6.02745618307040320615897144307382404804229736328125,
      "skills" : [ {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      }, {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      } ],
      "createdAt" : 5.962133916683182377482808078639209270477294921875,
      "photoURL" : "photoURL",
      "stats" : {
        "DESIGN" : {
          "wins" : 5.63737665663332876420099637471139430999755859375,
          "mostRecentSubmission" : 2.3021358869347654518833223846741020679473876953125,
          "challenges" : 7.061401241503109105224211816675961017608642578125,
          "subTracks" : [ {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          }, {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          } ],
          "mostRecentEventDate" : 5.02500479152029466689555192715488374233245849609375
        },
        "COPILOT" : {
          "contests" : 9.965781217890562260208753286860883235931396484375,
          "activeContests" : 9.3693102714106686335071572102606296539306640625,
          "projects" : 6.683562403749608193948006373830139636993408203125,
          "failures" : 8.7620420127490010742121739895083010196685791015625,
          "fulfillment" : 9.0183481860707832566959041287191212177276611328125,
          "reposts" : 6.438423552598546706349225132726132869720458984375,
          "activeProjects" : 3.557195227068097320710649000830017030239105224609375
        },
        "DATA_SCIENCE" : {
          "wins" : 6.96511769763884558415156789124011993408203125,
          "mostRecentSubmission" : 1.2846590061165319429647979632136411964893341064453125,
          "challenges" : 2.884162126668780246063761296682059764862060546875,
          "MARATHON_MATCH" : {
            "wins" : 6.77832496304801335185175048536621034145355224609375,
            "mostRecentSubmission" : 6.87805222012787620400331434211693704128265380859375,
            "challenges" : 5.94489560761401580890606055618263781070709228515625,
            "rank" : {
              "schoolRank" : 6.70401929795003592715829654480330646038055419921875,
              "maximumRating" : 3.35319334701124294184637619764544069766998291015625,
              "avgNumSubmissions" : 3.093745262666447448651751983561553061008453369140625,
              "rating" : 7.14353804701230643559028976596891880035400390625,
              "competitions" : 0.885137473901165261480628032586537301540374755859375,
              "volatility" : 7.05877035158235610623478351044468581676483154296875,
              "topTenFinishes" : 6.51918095101838179772357761976309120655059814453125,
              "minimumRating" : 0.10263654006109401706225980888120830059051513671875,
              "percentile" : 4.6523964329332461176136348512955009937286376953125,
              "defaultLanguage" : "defaultLanguage",
              "avgRank" : 8.9695787981969115065794539987109601497650146484375,
              "rank" : 7.7403518187411730622216055053286254405975341796875,
              "countryRank" : 3.02057969929162428712743349024094641208648681640625,
              "bestRank" : 3.05761002410493443193217899533919990062713623046875,
              "topFiveFinishes" : 7.04836565559697003635619694250635802745819091796875
            },
            "mostRecentEventDate" : 5.5332583970349862312332334113307297229766845703125,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventDate" : 3.258856561904760695824734284542500972747802734375,
          "SRM" : {
            "wins" : 4.078845849666752343409825698472559452056884765625,
            "mostRecentSubmission" : 0.202532411323639305322785730822943150997161865234375,
            "challenges" : 6.6284642750877420525057459599338471889495849609375,
            "rank" : {
              "minimumRating" : 4.258773108174356281097061582840979099273681640625,
              "percentile" : 1.0414449161182959269211778519093059003353118896484375,
              "defaultLanguage" : "defaultLanguage",
              "schoolRank" : 4.67894798900584873990737833082675933837890625,
              "maximumRating" : 7.26052126480210358039357743109576404094696044921875,
              "rating" : 9.132027271330688478201409452594816684722900390625,
              "competitions" : 0.8774076871421565559927557842456735670566558837890625,
              "rank" : 9.7029638000235660655334868351928889751434326171875,
              "volatility" : 0.519900201872498524124921459588222205638885498046875,
              "countryRank" : 7.93350688173715123951978966942988336086273193359375
            },
            "mostRecentEventDate" : 5.5073869641798811613853104063309729099273681640625,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventName" : "mostRecentEventName"
        },
        "DEVELOP" : {
          "wins" : 4.863159081028840091676102019846439361572265625,
          "mostRecentSubmission" : 6.07389808578115175663469926803372800350189208984375,
          "challenges" : 8.2516257489237574418439180590212345123291015625,
          "subTracks" : [ {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          }, {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          } ],
          "mostRecentEventDate" : 7.2037947498048939820591840543784201145172119140625
        }
      },
      "description" : "description",
      "handle" : "handle",
      "maxRating" : {
        "rating" : 4.3323048218758941629857872612774372100830078125,
        "subTrack" : "subTrack",
        "track" : "track"
      },
      "competitionCountryCode" : "competitionCountryCode",
      "userId" : 2.7977867356748475913263973779976367950439453125,
      "tracks" : [ "tracks", "tracks" ]
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get member external accounts
 *
 * handle String 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberExternalAccounts that will be included in response.  + userId - Select the field userId + handle - Select the field handle + behance - Select the field behance + bitbucket - Select the field bitbucket + dribbble - Select the field dribbble + github - Select the field github + linkedin - Select the field linkedin + stackoverflow - Select the field stackoverflow + twitter - Select the field twitter + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy  (optional)
 * returns MemberExternalAccountsResponse
 **/
exports.membersHandleExternalAccountsGET = function(handle,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "github" : {
        "profileURL" : "profileURL",
        "followers" : 1.231513536777255612975068288506008684635162353515625,
        "languages" : "languages",
        "socialId" : "socialId",
        "publicRepos" : 1.024645700144157789424070870154537260532379150390625,
        "handle" : "handle",
        "userId" : 7
      },
      "updatedBy" : "updatedBy",
      "handle" : "handle",
      "linkedin" : {
        "profileURL" : "profileURL",
        "summary" : "summary",
        "skills" : "skills",
        "socialId" : "socialId",
        "name" : "name",
        "handle" : "handle",
        "title" : "title",
        "userId" : 1
      },
      "bitbucket" : {
        "profileURL" : "profileURL",
        "followers" : 7.061401241503109105224211816675961017608642578125,
        "languages" : "languages",
        "repos" : 9.301444243932575517419536481611430644989013671875,
        "handle" : "handle",
        "userId" : 2
      },
      "userId" : 6,
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "twitter" : {
        "profileURL" : "profileURL",
        "socialId" : "socialId",
        "bio" : "bio",
        "handle" : "handle",
        "profileImage" : "profileImage",
        "noOfTweets" : 9.965781217890562260208753286860883235931396484375,
        "userId" : 5
      },
      "createdBy" : "createdBy",
      "behance" : {
        "profileURL" : "profileURL",
        "summary" : "summary",
        "creativeFields" : "creativeFields",
        "name" : "name",
        "projectAppreciations" : 5.962133916683182377482808078639209270477294921875,
        "projectViews" : 5.63737665663332876420099637471139430999755859375,
        "userId" : 1
      },
      "dribbble" : {
        "summary" : "summary",
        "profileURL" : "profileURL",
        "followers" : 2.027123023002321833274663731572218239307403564453125,
        "socialId" : "socialId",
        "name" : "name",
        "handle" : "handle",
        "userId" : 3,
        "likes" : 4.1456080298839363962315474054776132106781005859375,
        "tags" : "tags"
      },
      "stackoverflow" : {
        "profileURL" : "profileURL",
        "topTags" : "topTags",
        "socialId" : "socialId",
        "name" : "name",
        "answers" : 7.4577447736837658709418974467553198337554931640625,
        "questions" : 1.173074250955943309548956676735542714595794677734375,
        "reputation" : 4.9652184929849543237878606305457651615142822265625,
        "userId" : 6
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get member external links
 *
 * handle String 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberExternalLinkData that will be included in response.  + userId - Select the field userId + key - Select the field key + handle - Select the field handle + description - Select the field description + entities - Select the field entities + keywords - Select the field keywords + title - Select the field title + images - Select the field images + source - Select the field source + synchronizedAt - Select the field synchronizedAt + url - Select the field url  (optional)
 * returns MemberExternalLinkDataResponse
 **/
exports.membersHandleExternalLinksGET = function(handle,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "images" : "images",
      "keywords" : "keywords",
      "entities" : "entities",
      "description" : "description",
      "handle" : "handle",
      "source" : "source",
      "title" : "title",
      "userId" : 6,
      "key" : "key",
      "URL" : "URL",
      "synchronizedAt" : 1.46581298050294517310021547018550336360931396484375
    }, {
      "images" : "images",
      "keywords" : "keywords",
      "entities" : "entities",
      "description" : "description",
      "handle" : "handle",
      "source" : "source",
      "title" : "title",
      "userId" : 6,
      "key" : "key",
      "URL" : "URL",
      "synchronizedAt" : 1.46581298050294517310021547018550336360931396484375
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete member external link
 *
 * handle String 
 * key String 
 * returns MemberExternalLinkResponse
 **/
exports.membersHandleExternalLinksKeyDELETE = function(handle,key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "hasErrored" : true,
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : "updatedBy",
      "isDeleted" : true,
      "createdBy" : "createdBy",
      "userId" : 6,
      "key" : "key",
      "URL" : "URL",
      "synchronizedAt" : 1.46581298050294517310021547018550336360931396484375,
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create member external link
 *
 * handle String 
 * body ExternalLinkURLBodyParam 
 * returns ExternalLinkURLResponse
 **/
exports.membersHandleExternalLinksPOST = function(handle,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "url" : "url",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get member financial information
 *
 * handle String 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberFinancial that will be included in response.  + userId - Select the field userId + amount - Select the field amount + status - Select the field status + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy  (optional)
 * returns MemberFinancialResponse
 **/
exports.membersHandleFinancialGET = function(handle,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "amount" : 1.4658129805029452,
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "userId" : 6.02745618307040320615897144307382404804229736328125,
      "status" : "status",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "amount" : 1.4658129805029452,
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "userId" : 6.02745618307040320615897144307382404804229736328125,
      "status" : "status",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get member profile. The authentication credential is optional.
 *
 * handle String 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberProfile that will be included in response.  + maxRating - Select the field maxRating + userId - Select the field userId + firstName - Select the field firstName + lastName - Select the field lastName + description - Select the field description + otherLangName - Select the field otherLangName + handle - Select the field handle + handleLower - Select the field handleLower + status - Select the field status + email - Select the field email + addresses - Select the field addresses + homeCountryCode - Select the field homeCountryCode + competitionCountryCode - Select the field competitionCountryCode + photoURL - Select the field photoURL + tracks - Select the field tracks + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy  (optional)
 * returns MemberProfileResponse
 **/
exports.membersHandleGET = function(handle,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "lastName" : "lastName",
      "addresses" : [ {
        "streetAddr2" : "streetAddr2",
        "zip" : "zip",
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "streetAddr1" : "streetAddr1",
        "updatedBy" : "updatedBy",
        "city" : "city",
        "createdBy" : "createdBy",
        "stateCode" : "stateCode",
        "type" : "type",
        "updatedAt" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "streetAddr2" : "streetAddr2",
        "zip" : "zip",
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "streetAddr1" : "streetAddr1",
        "updatedBy" : "updatedBy",
        "city" : "city",
        "createdBy" : "createdBy",
        "stateCode" : "stateCode",
        "type" : "type",
        "updatedAt" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "updatedBy" : "updatedBy",
      "description" : "description",
      "homeCountryCode" : "homeCountryCode",
      "handle" : "handle",
      "otherLangName" : "otherLangName",
      "userId" : 1,
      "handleLower" : "handleLower",
      "emailVerifyTokenDate" : "2000-01-23T04:56:07.000+00:00",
      "tracks" : [ "tracks", "tracks" ],
      "firstName" : "firstName",
      "photoURL" : "photoURL",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "createdBy" : "createdBy",
      "emailVerifyToken" : "emailVerifyToken",
      "maxRating" : {
        "rating" : 6.02745618307040320615897144307382404804229736328125,
        "subTrack" : "subTrack",
        "track" : "track"
      },
      "newEmail" : "newEmail",
      "competitionCountryCode" : "competitionCountryCode",
      "email" : "email",
      "status" : "status",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update member profile, it will send the email verification if the email is changed
 *
 * handle String 
 * body MemberProfileBodyParam 
 * returns MemberProfileResponse
 **/
exports.membersHandlePUT = function(handle,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "lastName" : "lastName",
      "addresses" : [ {
        "streetAddr2" : "streetAddr2",
        "zip" : "zip",
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "streetAddr1" : "streetAddr1",
        "updatedBy" : "updatedBy",
        "city" : "city",
        "createdBy" : "createdBy",
        "stateCode" : "stateCode",
        "type" : "type",
        "updatedAt" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "streetAddr2" : "streetAddr2",
        "zip" : "zip",
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "streetAddr1" : "streetAddr1",
        "updatedBy" : "updatedBy",
        "city" : "city",
        "createdBy" : "createdBy",
        "stateCode" : "stateCode",
        "type" : "type",
        "updatedAt" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "updatedBy" : "updatedBy",
      "description" : "description",
      "homeCountryCode" : "homeCountryCode",
      "handle" : "handle",
      "otherLangName" : "otherLangName",
      "userId" : 1,
      "handleLower" : "handleLower",
      "emailVerifyTokenDate" : "2000-01-23T04:56:07.000+00:00",
      "tracks" : [ "tracks", "tracks" ],
      "firstName" : "firstName",
      "photoURL" : "photoURL",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "createdBy" : "createdBy",
      "emailVerifyToken" : "emailVerifyToken",
      "maxRating" : {
        "rating" : 6.02745618307040320615897144307382404804229736328125,
        "subTrack" : "subTrack",
        "track" : "track"
      },
      "newEmail" : "newEmail",
      "competitionCountryCode" : "competitionCountryCode",
      "email" : "email",
      "status" : "status",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update photo
 *
 * handle String 
 * body PhotoTokenContentTypeBodyParam 
 * returns StringResponse
 **/
exports.membersHandlePhotoPUT = function(handle,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : "content",
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * generate photo upload url
 *
 * handle String 
 * body PhotoContentTypeBodyParam 
 * returns PhotoTokenURLResponse
 **/
exports.membersHandlePhotoUploadUrlPOST = function(handle,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "preSignedURL" : "preSignedURL",
      "token" : 6.02745618307040320615897144307382404804229736328125,
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get member aggregated skills
 *
 * handle String 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberAggregatedSkills that will be included in response.  + userId - Select the field userId + userHandle - Select the field userHandle + handleLower - Select the field handleLower + skills - Select the field skills + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy  (optional)
 * returns MemberAggregatedSkillsResponse
 **/
exports.membersHandleSkillsGET = function(handle,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "userHandle" : "userHandle",
      "skills" : {
        "key" : {
          "score" : 1.46581298050294517310021547018550336360931396484375,
          "hidden" : true,
          "sources" : [ "sources", "sources" ],
          "tagName" : "tagName"
        }
      },
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "userId" : 6,
      "handleLower" : "handleLower",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update member skills
 *
 * handle String 
 * body MemberEnteredSkillsBodyParam 
 * returns MemberAggregatedSkillsResponse
 **/
exports.membersHandleSkillsPATCH = function(handle,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "userHandle" : "userHandle",
      "skills" : {
        "key" : {
          "score" : 1.46581298050294517310021547018550336360931396484375,
          "hidden" : true,
          "sources" : [ "sources", "sources" ],
          "tagName" : "tagName"
        }
      },
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "userId" : 6,
      "handleLower" : "handleLower",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get member stats
 *
 * handle String 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberStats that will be included in response.  + userId - Select the field userId + handle - Select the field handle + handleLower - Select the field handleLower + maxRating - Select the field maxRating + challenges - Select the field challenges + wins - Select the field wins + develop - Select the field develop + design - Select the field design + dataScience - Select the field dataScience + copilot - Select the field copilot + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy  (optional)
 * returns MemberStatsResponse
 **/
exports.membersHandleStatsGET = function(handle,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "wins" : 5.962133916683182377482808078639209270477294921875,
      "copilot" : {
        "contests" : 8.3782374103486905170257159625180065631866455078125,
        "activeContests" : 9.8974926292155060991717618890106678009033203125,
        "projects" : 7.60686372309257929913428597501479089260101318359375,
        "failures" : 3.78141247307679151390402694232761859893798828125,
        "fulfillment" : 7.835035282970782,
        "reposts" : 3.11120283340319492282333158073015511035919189453125,
        "activeProjects" : 5.87712470611669512976504847756586968898773193359375
      },
      "updatedBy" : "updatedBy",
      "challenges" : 1.46581298050294517310021547018550336360931396484375,
      "handle" : "handle",
      "develop" : {
        "wins" : 2.3021358869347654518833223846741020679473876953125,
        "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
        "challenges" : 5.63737665663332876420099637471139430999755859375,
        "subTracks" : [ {
          "wins" : 3.61607674925191080461672754609026014804840087890625,
          "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
          "challenges" : 9.301444243932575517419536481611430644989013671875,
          "submissions" : {
            "appealSuccessRate" : 6.778324963048013,
            "minScore" : 5.944895607614016,
            "passedScreening" : 6.438423552598546706349225132726132869720458984375,
            "avgPlacement" : 3.353193347011243,
            "reviewSuccessRate" : 1.284659006116532,
            "maxScore" : 6.878052220127876,
            "appeals" : 2.884162126668780246063761296682059764862060546875,
            "avgScore" : 6.704019297950036,
            "numInquiries" : 6.683562403749608193948006373830139636993408203125,
            "submissions" : 8.7620420127490010742121739895083010196685791015625,
            "screeningSuccessRate" : 3.5571952270680973,
            "submissionRate" : 9.018348186070783,
            "passedReview" : 6.96511769763884558415156789124011993408203125,
            "winPercent" : 3.0937452626664474
          },
          "name" : "name",
          "rank" : {
            "overallPercentile" : 1.4894159098541704,
            "activeRank" : 7.3862819483858839220147274318151175975799560546875,
            "overallCountryRank" : 7.4577447736837658709418974467553198337554931640625,
            "reliability" : 5.025004791520295,
            "rating" : 2.027123023002321833274663731572218239307403564453125,
            "minRating" : 9.3693102714106686335071572102606296539306640625,
            "volatility" : 4.9652184929849543237878606305457651615142822265625,
            "overallSchoolRank" : 1.173074250955943309548956676735542714595794677734375,
            "overallRank" : 6.8468526983526398765889098285697400569915771484375,
            "activeSchoolRank" : 1.024645700144157789424070870154537260532379150390625,
            "activeCountryRank" : 1.231513536777255612975068288506008684635162353515625,
            "maxRating" : 9.965781217890562260208753286860883235931396484375,
            "activePercentile" : 4.145608029883936
          },
          "id" : 7.061401241503109105224211816675961017608642578125,
          "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "wins" : 3.61607674925191080461672754609026014804840087890625,
          "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
          "challenges" : 9.301444243932575517419536481611430644989013671875,
          "submissions" : {
            "appealSuccessRate" : 6.778324963048013,
            "minScore" : 5.944895607614016,
            "passedScreening" : 6.438423552598546706349225132726132869720458984375,
            "avgPlacement" : 3.353193347011243,
            "reviewSuccessRate" : 1.284659006116532,
            "maxScore" : 6.878052220127876,
            "appeals" : 2.884162126668780246063761296682059764862060546875,
            "avgScore" : 6.704019297950036,
            "numInquiries" : 6.683562403749608193948006373830139636993408203125,
            "submissions" : 8.7620420127490010742121739895083010196685791015625,
            "screeningSuccessRate" : 3.5571952270680973,
            "submissionRate" : 9.018348186070783,
            "passedReview" : 6.96511769763884558415156789124011993408203125,
            "winPercent" : 3.0937452626664474
          },
          "name" : "name",
          "rank" : {
            "overallPercentile" : 1.4894159098541704,
            "activeRank" : 7.3862819483858839220147274318151175975799560546875,
            "overallCountryRank" : 7.4577447736837658709418974467553198337554931640625,
            "reliability" : 5.025004791520295,
            "rating" : 2.027123023002321833274663731572218239307403564453125,
            "minRating" : 9.3693102714106686335071572102606296539306640625,
            "volatility" : 4.9652184929849543237878606305457651615142822265625,
            "overallSchoolRank" : 1.173074250955943309548956676735542714595794677734375,
            "overallRank" : 6.8468526983526398765889098285697400569915771484375,
            "activeSchoolRank" : 1.024645700144157789424070870154537260532379150390625,
            "activeCountryRank" : 1.231513536777255612975068288506008684635162353515625,
            "maxRating" : 9.965781217890562260208753286860883235931396484375,
            "activePercentile" : 4.145608029883936
          },
          "id" : 7.061401241503109105224211816675961017608642578125,
          "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00"
        } ],
        "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00"
      },
      "userId" : 6,
      "handleLower" : "handleLower",
      "dataScience" : {
        "wins" : 4.078845849666752343409825698472559452056884765625,
        "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
        "challenges" : 3.258856561904760695824734284542500972747802734375,
        "marathonMatch" : {
          "wins" : 0.434313988241488146968549699522554874420166015625,
          "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
          "challenges" : 3.901545264248647004734493748401291668415069580078125,
          "rank" : {
            "schoolRank" : 5.31248970433629619236626240308396518230438232421875,
            "maximumRating" : 0.4182561061793121925944660688401199877262115478515625,
            "avgNumSubmissions" : 6.623518433804886029747649445198476314544677734375,
            "rating" : 2.940964297482789646664969041012227535247802734375,
            "competitions" : 1.7325933120207193116613098027301020920276641845703125,
            "volatility" : 9.183123594773994,
            "topTenFinishes" : 9.2541839462678385785920909256674349308013916015625,
            "minimumRating" : 8.761432466225475224064211943186819553375244140625,
            "percentile" : 3.502657762086401,
            "defaultLanguage" : "defaultLanguage",
            "avgRank" : 8.289659398142969592981899040751159191131591796875,
            "rank" : 1.826870217705811594299802891327999532222747802734375,
            "countryRank" : 5.2991435602753593769875806174241006374359130859375,
            "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00",
            "bestRank" : 4.57393626423225096999658489949069917201995849609375,
            "topFiveFinishes" : 8.863729185622826634016746538691222667694091796875,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00",
          "mostRecentEventName" : "mostRecentEventName"
        },
        "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00",
        "srm" : {
          "wins" : 6.6284642750877420525057459599338471889495849609375,
          "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
          "challenges" : 0.202532411323639305322785730822943150997161865234375,
          "challengeDetails" : [ {
            "challenges" : 5.5073869641798811613853104063309729099273681640625,
            "levelName" : "levelName",
            "failedChallenges" : 4.863159081028840091676102019846439361572265625
          }, {
            "challenges" : 5.5073869641798811613853104063309729099273681640625,
            "levelName" : "levelName",
            "failedChallenges" : 4.863159081028840091676102019846439361572265625
          } ],
          "rank" : {
            "minimumRating" : 0.519900201872498524124921459588222205638885498046875,
            "percentile" : 1.041444916118296,
            "defaultLanguage" : "defaultLanguage",
            "schoolRank" : 9.132027271330688478201409452594816684722900390625,
            "maximumRating" : 9.7029638000235660655334868351928889751434326171875,
            "rating" : 4.258773108174356281097061582840979099273681640625,
            "competitions" : 7.93350688173715123951978966942988336086273193359375,
            "rank" : 4.67894798900584873990737833082675933837890625,
            "volatility" : 0.8774076871421566,
            "countryRank" : 7.26052126480210358039357743109576404094696044921875,
            "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00",
            "mostRecentEventName" : "mostRecentEventName"
          },
          "division1" : [ {
            "problemsSubmitted" : 6.07389808578115175663469926803372800350189208984375,
            "problemsSysByTest" : 4.4596050349586793259959449642337858676910400390625,
            "problemsFailed" : 8.2516257489237574418439180590212345123291015625,
            "levelName" : "levelName"
          }, {
            "problemsSubmitted" : 6.07389808578115175663469926803372800350189208984375,
            "problemsSysByTest" : 4.4596050349586793259959449642337858676910400390625,
            "problemsFailed" : 8.2516257489237574418439180590212345123291015625,
            "levelName" : "levelName"
          } ],
          "division2" : [ {
            "problemsSubmitted" : 6.07389808578115175663469926803372800350189208984375,
            "problemsSysByTest" : 4.4596050349586793259959449642337858676910400390625,
            "problemsFailed" : 8.2516257489237574418439180590212345123291015625,
            "levelName" : "levelName"
          }, {
            "problemsSubmitted" : 6.07389808578115175663469926803372800350189208984375,
            "problemsSysByTest" : 4.4596050349586793259959449642337858676910400390625,
            "problemsFailed" : 8.2516257489237574418439180590212345123291015625,
            "levelName" : "levelName"
          } ],
          "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00",
          "mostRecentEventName" : "mostRecentEventName"
        },
        "mostRecentEventName" : "mostRecentEventName"
      },
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "createdBy" : "createdBy",
      "design" : {
        "wins" : 0.885137473901165261480628032586537301540374755859375,
        "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
        "challenges" : 7.14353804701230643559028976596891880035400390625,
        "subTracks" : [ {
          "wins" : 4.6523964329332461176136348512955009937286376953125,
          "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
          "passedScreening" : 7.04836565559697003635619694250635802745819091796875,
          "challenges" : 0.10263654006109401706225980888120830059051513671875,
          "avgPlacement" : 7.740351818741173,
          "numInquiries" : 6.51918095101838179772357761976309120655059814453125,
          "submissions" : 3.02057969929162428712743349024094641208648681640625,
          "name" : "name",
          "screeningSuccessRate" : 5.533258397034986,
          "submissionRate" : 3.0576100241049344,
          "id" : 7.05877035158235610623478351044468581676483154296875,
          "winPercent" : 8.969578798196912,
          "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "wins" : 4.6523964329332461176136348512955009937286376953125,
          "mostRecentSubmission" : "2000-01-23T04:56:07.000+00:00",
          "passedScreening" : 7.04836565559697003635619694250635802745819091796875,
          "challenges" : 0.10263654006109401706225980888120830059051513671875,
          "avgPlacement" : 7.740351818741173,
          "numInquiries" : 6.51918095101838179772357761976309120655059814453125,
          "submissions" : 3.02057969929162428712743349024094641208648681640625,
          "name" : "name",
          "screeningSuccessRate" : 5.533258397034986,
          "submissionRate" : 3.0576100241049344,
          "id" : 7.05877035158235610623478351044468581676483154296875,
          "winPercent" : 8.969578798196912,
          "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00"
        } ],
        "mostRecentEventDate" : "2000-01-23T04:56:07.000+00:00"
      },
      "maxRating" : {
        "rating" : 6.02745618307040320615897144307382404804229736328125,
        "subTrack" : "subTrack",
        "track" : "track"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get member history statistics
 *
 * handle String 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberHistoryStats that will be included in response.  + userId - Select the field userId + handle - Select the field handle + handleLower - Select the field handleLower + develop - Select the field develop + dataScience - Select the field dataScience + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy  (optional)
 * returns MemberHistoryStatsResponse
 **/
exports.membersHandleStatsHistoryGET = function(handle,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "DATA_SCIENCE" : {
        "MARATHON_MATCH" : {
          "history" : [ {
            "date" : "2000-01-23T04:56:07.000+00:00",
            "challengeId" : 2.3021358869347654518833223846741020679473876953125,
            "percentile" : 3.616076749251911,
            "rating" : 7.061401241503109,
            "challengeName" : "challengeName",
            "placement" : 9.301444243932575517419536481611430644989013671875
          }, {
            "date" : "2000-01-23T04:56:07.000+00:00",
            "challengeId" : 2.3021358869347654518833223846741020679473876953125,
            "percentile" : 3.616076749251911,
            "rating" : 7.061401241503109,
            "challengeName" : "challengeName",
            "placement" : 9.301444243932575517419536481611430644989013671875
          } ]
        },
        "SRM" : {
          "history" : [ {
            "date" : "2000-01-23T04:56:07.000+00:00",
            "challengeId" : 2.3021358869347654518833223846741020679473876953125,
            "percentile" : 3.616076749251911,
            "rating" : 7.061401241503109,
            "challengeName" : "challengeName",
            "placement" : 9.301444243932575517419536481611430644989013671875
          }, {
            "date" : "2000-01-23T04:56:07.000+00:00",
            "challengeId" : 2.3021358869347654518833223846741020679473876953125,
            "percentile" : 3.616076749251911,
            "rating" : 7.061401241503109,
            "challengeName" : "challengeName",
            "placement" : 9.301444243932575517419536481611430644989013671875
          } ]
        }
      },
      "handle" : "handle",
      "userId" : 6,
      "handleLower" : "handleLower",
      "DEVELOP" : {
        "subTracks" : [ {
          "name" : "name",
          "id" : 1.46581298050294517310021547018550336360931396484375,
          "history" : [ {
            "challengeId" : 5.962133916683182377482808078639209270477294921875,
            "ratingDate" : "2000-01-23T04:56:07.000+00:00",
            "newRating" : 5.63737665663332876420099637471139430999755859375,
            "challengeName" : "challengeName"
          }, {
            "challengeId" : 5.962133916683182377482808078639209270477294921875,
            "ratingDate" : "2000-01-23T04:56:07.000+00:00",
            "newRating" : 5.63737665663332876420099637471139430999755859375,
            "challengeName" : "challengeName"
          } ]
        }, {
          "name" : "name",
          "id" : 1.46581298050294517310021547018550336360931396484375,
          "history" : [ {
            "challengeId" : 5.962133916683182377482808078639209270477294921875,
            "ratingDate" : "2000-01-23T04:56:07.000+00:00",
            "newRating" : 5.63737665663332876420099637471139430999755859375,
            "challengeName" : "challengeName"
          }, {
            "challengeId" : 5.962133916683182377482808078639209270477294921875,
            "ratingDate" : "2000-01-23T04:56:07.000+00:00",
            "newRating" : 5.63737665663332876420099637471139430999755859375,
            "challengeName" : "challengeName"
          } ]
        } ]
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete member profile traits
 *
 * handle String 
 * traitIds String traitIds value separated with comma + basic_id + work + skill + education + communities  (optional)
 * returns NullResponse
 **/
exports.membersHandleTraitsDELETE = function(handle,traitIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : "{}",
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get member profile traits
 *
 * handle String 
 * traitIds String traitIds value separated with comma + basic_id + work + skill + education + communities  (optional)
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberProfileTrait that will be included in response.  + traitId - Select the field traitId + categoryName - Select the field categoryName + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy + traits - Select the field traits  (optional)
 * returns MemberProfileTraitResponse
 **/
exports.membersHandleTraitsGET = function(handle,traitIds,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : 1.46581298050294517310021547018550336360931396484375,
      "traits" : {
        "data" : [ "{}", "{}" ]
      },
      "createdBy" : 6.02745618307040320615897144307382404804229736328125,
      "traitId" : "traitId",
      "categoryName" : "categoryName",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : 1.46581298050294517310021547018550336360931396484375,
      "traits" : {
        "data" : [ "{}", "{}" ]
      },
      "createdBy" : 6.02745618307040320615897144307382404804229736328125,
      "traitId" : "traitId",
      "categoryName" : "categoryName",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create member profile traits
 *
 * handle String 
 * body MemberProfileTraitBodyParam 
 * returns MemberProfileTraitResponse
 **/
exports.membersHandleTraitsPOST = function(handle,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : 1.46581298050294517310021547018550336360931396484375,
      "traits" : {
        "data" : [ "{}", "{}" ]
      },
      "createdBy" : 6.02745618307040320615897144307382404804229736328125,
      "traitId" : "traitId",
      "categoryName" : "categoryName",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : 1.46581298050294517310021547018550336360931396484375,
      "traits" : {
        "data" : [ "{}", "{}" ]
      },
      "createdBy" : 6.02745618307040320615897144307382404804229736328125,
      "traitId" : "traitId",
      "categoryName" : "categoryName",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update member profile traits
 *
 * handle String 
 * body MemberProfileTraitBodyParam 
 * returns MemberProfileTraitResponse
 **/
exports.membersHandleTraitsPUT = function(handle,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : 1.46581298050294517310021547018550336360931396484375,
      "traits" : {
        "data" : [ "{}", "{}" ]
      },
      "createdBy" : 6.02745618307040320615897144307382404804229736328125,
      "traitId" : "traitId",
      "categoryName" : "categoryName",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : 1.46581298050294517310021547018550336360931396484375,
      "traits" : {
        "data" : [ "{}", "{}" ]
      },
      "createdBy" : 6.02745618307040320615897144307382404804229736328125,
      "traitId" : "traitId",
      "categoryName" : "categoryName",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * verify the user email
 *
 * handle String 
 * oldEmail String the old email
 * newEmail String the new email
 * token String the verification token
 * returns StringResponse
 **/
exports.membersHandleVerifyPOST = function(handle,oldEmail,newEmail,token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : "content",
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get member distribution statistics
 *
 * filter String fieldName=fieldValue (enum[string],optional)  - parameter for filtering the fields according to v3 spec  + track - Filter by track + subTrack - Filter by subTrack 
 * fields String fields=fieldName1,fieldName2,...,fieldN  - parameter for choosing which fields of MemberDistributionStats that will be included in response.  + track - Select the field track + subTrack - Select the field subTrack + distribution - Select the field distribution + updatedAt - Select the field updatedAt + createdAt - Select the field createdAt + createdBy - Select the field createdBy + updatedBy - Select the field updatedBy  (optional)
 * returns MemberDistributionStatsResponse
 **/
exports.membersStatsDistributionGET = function(filter,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "updatedBy" : "updatedBy",
      "createdBy" : "createdBy",
      "subTrack" : "subTrack",
      "track" : "track",
      "distribution" : {
        "ratingRange1600To1699" : 4.9652184929849543237878606305457651615142822265625,
        "ratingRange2100To2199" : 8.7620420127490010742121739895083010196685791015625,
        "ratingRange1500To1599" : 1.173074250955943309548956676735542714595794677734375,
        "ratingRange2000To2099" : 6.683562403749608193948006373830139636993408203125,
        "ratingRange2200To2299" : 9.0183481860707832566959041287191212177276611328125,
        "ratingRange1300To1399" : 6.8468526983526398765889098285697400569915771484375,
        "ratingRange1800To1899" : 9.965781217890562260208753286860883235931396484375,
        "ratingRange2500To2599" : 6.96511769763884558415156789124011993408203125,
        "ratingRange3000To3099" : 5.94489560761401580890606055618263781070709228515625,
        "ratingRange2600To2699" : 1.2846590061165319429647979632136411964893341064453125,
        "ratingRange1200To1299" : 1.489415909854170383397331534069962799549102783203125,
        "ratingRange1700To1799" : 5.02500479152029466689555192715488374233245849609375,
        "ratingRange1000To1099" : 1.231513536777255612975068288506008684635162353515625,
        "ratingRange1100To1199" : 1.024645700144157789424070870154537260532379150390625,
        "ratingRange2900To2999" : 6.87805222012787620400331434211693704128265380859375,
        "ratingRange2700To2799" : 2.884162126668780246063761296682059764862060546875,
        "ratingRange3600To3699" : 7.05877035158235610623478351044468581676483154296875,
        "ratingRange1900To1999" : 9.3693102714106686335071572102606296539306640625,
        "ratingRange3700To3799" : 6.51918095101838179772357761976309120655059814453125,
        "ratingRange2800To2899" : 6.77832496304801335185175048536621034145355224609375,
        "ratingRange3900To3999" : 4.6523964329332461176136348512955009937286376953125,
        "ratingRange3800To3899" : 0.10263654006109401706225980888120830059051513671875,
        "ratingRange100To199" : 5.962133916683182377482808078639209270477294921875,
        "ratingRange3500To3599" : 0.885137473901165261480628032586537301540374755859375,
        "ratingRange3400To3499" : 7.14353804701230643559028976596891880035400390625,
        "ratingRange600To699" : 3.61607674925191080461672754609026014804840087890625,
        "ratingRange3300To3399" : 3.093745262666447448651751983561553061008453369140625,
        "ratingRange500To599" : 9.301444243932575517419536481611430644989013671875,
        "ratingRange700To799" : 2.027123023002321833274663731572218239307403564453125,
        "ratingRange3100To3199" : 6.70401929795003592715829654480330646038055419921875,
        "ratingRange200To299" : 5.63737665663332876420099637471139430999755859375,
        "ratingRange400To499" : 7.061401241503109105224211816675961017608642578125,
        "ratingRange300To399" : 2.3021358869347654518833223846741020679473876953125,
        "ratingRange2400To2499" : 3.557195227068097320710649000830017030239105224609375,
        "ratingRange900To999" : 7.3862819483858839220147274318151175975799560546875,
        "ratingRange800To899" : 4.1456080298839363962315474054776132106781005859375,
        "ratingRange1400To1499" : 7.4577447736837658709418974467553198337554931640625,
        "ratingRange3200To3299" : 3.35319334701124294184637619764544069766998291015625,
        "ratingRange0To099" : 1.46581298050294517310021547018550336360931396484375,
        "ratingRange2300To2399" : 6.438423552598546706349225132726132869720458984375
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * search members, the authentication credential is optional.
 *
 * filter String fieldName=fieldValue (enum[string],optional)  - parameter for filtering the fields according to v3 spec  + query - Filter by query + handle - Filter by handle + fields - Filter by fields, separated by comma + status - Filter by status  (optional)
 * offset Integer number of items to skip. Defaults to 0 (optional)
 * limit Integer max records to return. Defaults to 10 (optional)
 * returns MemeberSearchResponse
 **/
exports.members_searchGET = function(filter,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "wins" : 6.02745618307040320615897144307382404804229736328125,
      "skills" : [ {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      }, {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      } ],
      "createdAt" : 5.962133916683182377482808078639209270477294921875,
      "photoURL" : "photoURL",
      "stats" : {
        "DESIGN" : {
          "wins" : 5.63737665663332876420099637471139430999755859375,
          "mostRecentSubmission" : 2.3021358869347654518833223846741020679473876953125,
          "challenges" : 7.061401241503109105224211816675961017608642578125,
          "subTracks" : [ {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          }, {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          } ],
          "mostRecentEventDate" : 5.02500479152029466689555192715488374233245849609375
        },
        "COPILOT" : {
          "contests" : 9.965781217890562260208753286860883235931396484375,
          "activeContests" : 9.3693102714106686335071572102606296539306640625,
          "projects" : 6.683562403749608193948006373830139636993408203125,
          "failures" : 8.7620420127490010742121739895083010196685791015625,
          "fulfillment" : 9.0183481860707832566959041287191212177276611328125,
          "reposts" : 6.438423552598546706349225132726132869720458984375,
          "activeProjects" : 3.557195227068097320710649000830017030239105224609375
        },
        "DATA_SCIENCE" : {
          "wins" : 6.96511769763884558415156789124011993408203125,
          "mostRecentSubmission" : 1.2846590061165319429647979632136411964893341064453125,
          "challenges" : 2.884162126668780246063761296682059764862060546875,
          "MARATHON_MATCH" : {
            "wins" : 6.77832496304801335185175048536621034145355224609375,
            "mostRecentSubmission" : 6.87805222012787620400331434211693704128265380859375,
            "challenges" : 5.94489560761401580890606055618263781070709228515625,
            "rank" : {
              "schoolRank" : 6.70401929795003592715829654480330646038055419921875,
              "maximumRating" : 3.35319334701124294184637619764544069766998291015625,
              "avgNumSubmissions" : 3.093745262666447448651751983561553061008453369140625,
              "rating" : 7.14353804701230643559028976596891880035400390625,
              "competitions" : 0.885137473901165261480628032586537301540374755859375,
              "volatility" : 7.05877035158235610623478351044468581676483154296875,
              "topTenFinishes" : 6.51918095101838179772357761976309120655059814453125,
              "minimumRating" : 0.10263654006109401706225980888120830059051513671875,
              "percentile" : 4.6523964329332461176136348512955009937286376953125,
              "defaultLanguage" : "defaultLanguage",
              "avgRank" : 8.9695787981969115065794539987109601497650146484375,
              "rank" : 7.7403518187411730622216055053286254405975341796875,
              "countryRank" : 3.02057969929162428712743349024094641208648681640625,
              "bestRank" : 3.05761002410493443193217899533919990062713623046875,
              "topFiveFinishes" : 7.04836565559697003635619694250635802745819091796875
            },
            "mostRecentEventDate" : 5.5332583970349862312332334113307297229766845703125,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventDate" : 3.258856561904760695824734284542500972747802734375,
          "SRM" : {
            "wins" : 4.078845849666752343409825698472559452056884765625,
            "mostRecentSubmission" : 0.202532411323639305322785730822943150997161865234375,
            "challenges" : 6.6284642750877420525057459599338471889495849609375,
            "rank" : {
              "minimumRating" : 4.258773108174356281097061582840979099273681640625,
              "percentile" : 1.0414449161182959269211778519093059003353118896484375,
              "defaultLanguage" : "defaultLanguage",
              "schoolRank" : 4.67894798900584873990737833082675933837890625,
              "maximumRating" : 7.26052126480210358039357743109576404094696044921875,
              "rating" : 9.132027271330688478201409452594816684722900390625,
              "competitions" : 0.8774076871421565559927557842456735670566558837890625,
              "rank" : 9.7029638000235660655334868351928889751434326171875,
              "volatility" : 0.519900201872498524124921459588222205638885498046875,
              "countryRank" : 7.93350688173715123951978966942988336086273193359375
            },
            "mostRecentEventDate" : 5.5073869641798811613853104063309729099273681640625,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventName" : "mostRecentEventName"
        },
        "DEVELOP" : {
          "wins" : 4.863159081028840091676102019846439361572265625,
          "mostRecentSubmission" : 6.07389808578115175663469926803372800350189208984375,
          "challenges" : 8.2516257489237574418439180590212345123291015625,
          "subTracks" : [ {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          }, {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          } ],
          "mostRecentEventDate" : 7.2037947498048939820591840543784201145172119140625
        }
      },
      "description" : "description",
      "handle" : "handle",
      "maxRating" : {
        "rating" : 4.3323048218758941629857872612774372100830078125,
        "subTrack" : "subTrack",
        "track" : "track"
      },
      "competitionCountryCode" : "competitionCountryCode",
      "userId" : 2.7977867356748475913263973779976367950439453125,
      "tracks" : [ "tracks", "tracks" ]
    }, {
      "wins" : 6.02745618307040320615897144307382404804229736328125,
      "skills" : [ {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      }, {
        "score" : 1.46581298050294517310021547018550336360931396484375,
        "name" : "name"
      } ],
      "createdAt" : 5.962133916683182377482808078639209270477294921875,
      "photoURL" : "photoURL",
      "stats" : {
        "DESIGN" : {
          "wins" : 5.63737665663332876420099637471139430999755859375,
          "mostRecentSubmission" : 2.3021358869347654518833223846741020679473876953125,
          "challenges" : 7.061401241503109105224211816675961017608642578125,
          "subTracks" : [ {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          }, {
            "wins" : 9.301444243932575517419536481611430644989013671875,
            "mostRecentSubmission" : 3.61607674925191080461672754609026014804840087890625,
            "passedScreening" : 2.027123023002321833274663731572218239307403564453125,
            "challenges" : 4.1456080298839363962315474054776132106781005859375,
            "avgPlacement" : 7.3862819483858839220147274318151175975799560546875,
            "numInquiries" : 1.231513536777255612975068288506008684635162353515625,
            "submissions" : 1.024645700144157789424070870154537260532379150390625,
            "name" : "name",
            "screeningSuccessRate" : 1.489415909854170383397331534069962799549102783203125,
            "submissionRate" : 6.8468526983526398765889098285697400569915771484375,
            "id" : 7.4577447736837658709418974467553198337554931640625,
            "winPercent" : 1.173074250955943309548956676735542714595794677734375,
            "mostRecentEventDate" : 4.9652184929849543237878606305457651615142822265625
          } ],
          "mostRecentEventDate" : 5.02500479152029466689555192715488374233245849609375
        },
        "COPILOT" : {
          "contests" : 9.965781217890562260208753286860883235931396484375,
          "activeContests" : 9.3693102714106686335071572102606296539306640625,
          "projects" : 6.683562403749608193948006373830139636993408203125,
          "failures" : 8.7620420127490010742121739895083010196685791015625,
          "fulfillment" : 9.0183481860707832566959041287191212177276611328125,
          "reposts" : 6.438423552598546706349225132726132869720458984375,
          "activeProjects" : 3.557195227068097320710649000830017030239105224609375
        },
        "DATA_SCIENCE" : {
          "wins" : 6.96511769763884558415156789124011993408203125,
          "mostRecentSubmission" : 1.2846590061165319429647979632136411964893341064453125,
          "challenges" : 2.884162126668780246063761296682059764862060546875,
          "MARATHON_MATCH" : {
            "wins" : 6.77832496304801335185175048536621034145355224609375,
            "mostRecentSubmission" : 6.87805222012787620400331434211693704128265380859375,
            "challenges" : 5.94489560761401580890606055618263781070709228515625,
            "rank" : {
              "schoolRank" : 6.70401929795003592715829654480330646038055419921875,
              "maximumRating" : 3.35319334701124294184637619764544069766998291015625,
              "avgNumSubmissions" : 3.093745262666447448651751983561553061008453369140625,
              "rating" : 7.14353804701230643559028976596891880035400390625,
              "competitions" : 0.885137473901165261480628032586537301540374755859375,
              "volatility" : 7.05877035158235610623478351044468581676483154296875,
              "topTenFinishes" : 6.51918095101838179772357761976309120655059814453125,
              "minimumRating" : 0.10263654006109401706225980888120830059051513671875,
              "percentile" : 4.6523964329332461176136348512955009937286376953125,
              "defaultLanguage" : "defaultLanguage",
              "avgRank" : 8.9695787981969115065794539987109601497650146484375,
              "rank" : 7.7403518187411730622216055053286254405975341796875,
              "countryRank" : 3.02057969929162428712743349024094641208648681640625,
              "bestRank" : 3.05761002410493443193217899533919990062713623046875,
              "topFiveFinishes" : 7.04836565559697003635619694250635802745819091796875
            },
            "mostRecentEventDate" : 5.5332583970349862312332334113307297229766845703125,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventDate" : 3.258856561904760695824734284542500972747802734375,
          "SRM" : {
            "wins" : 4.078845849666752343409825698472559452056884765625,
            "mostRecentSubmission" : 0.202532411323639305322785730822943150997161865234375,
            "challenges" : 6.6284642750877420525057459599338471889495849609375,
            "rank" : {
              "minimumRating" : 4.258773108174356281097061582840979099273681640625,
              "percentile" : 1.0414449161182959269211778519093059003353118896484375,
              "defaultLanguage" : "defaultLanguage",
              "schoolRank" : 4.67894798900584873990737833082675933837890625,
              "maximumRating" : 7.26052126480210358039357743109576404094696044921875,
              "rating" : 9.132027271330688478201409452594816684722900390625,
              "competitions" : 0.8774076871421565559927557842456735670566558837890625,
              "rank" : 9.7029638000235660655334868351928889751434326171875,
              "volatility" : 0.519900201872498524124921459588222205638885498046875,
              "countryRank" : 7.93350688173715123951978966942988336086273193359375
            },
            "mostRecentEventDate" : 5.5073869641798811613853104063309729099273681640625,
            "mostRecentEventName" : "mostRecentEventName"
          },
          "mostRecentEventName" : "mostRecentEventName"
        },
        "DEVELOP" : {
          "wins" : 4.863159081028840091676102019846439361572265625,
          "mostRecentSubmission" : 6.07389808578115175663469926803372800350189208984375,
          "challenges" : 8.2516257489237574418439180590212345123291015625,
          "subTracks" : [ {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          }, {
            "wins" : 4.4596050349586793259959449642337858676910400390625,
            "mostRecentSubmission" : 3.901545264248647004734493748401291668415069580078125,
            "challenges" : 0.434313988241488146968549699522554874420166015625,
            "submissions" : {
              "appealSuccessRate" : 2.940964297482789646664969041012227535247802734375,
              "minScore" : 1.7325933120207193116613098027301020920276641845703125,
              "passedScreening" : 8.289659398142969592981899040751159191131591796875,
              "avgPlacement" : 6.623518433804886029747649445198476314544677734375,
              "reviewSuccessRate" : 4.57393626423225096999658489949069917201995849609375,
              "maxScore" : 8.863729185622826634016746538691222667694091796875,
              "appeals" : 9.2541839462678385785920909256674349308013916015625,
              "avgScore" : 1.826870217705811594299802891327999532222747802734375,
              "numInquiries" : 3.502657762086400783374529055436141788959503173828125,
              "submissions" : 9.1831235947739937586220548837445676326751708984375,
              "screeningSuccessRate" : 8.761432466225475224064211943186819553375244140625,
              "submissionRate" : 0.4182561061793121925944660688401199877262115478515625,
              "passedReview" : 5.2991435602753593769875806174241006374359130859375,
              "winPercent" : 5.31248970433629619236626240308396518230438232421875
            },
            "name" : "name",
            "rank" : {
              "overallPercentile" : 8.3782374103486905170257159625180065631866455078125,
              "activeRank" : 7.60686372309257929913428597501479089260101318359375,
              "overallCountryRank" : 3.78141247307679151390402694232761859893798828125,
              "reliability" : 3.11120283340319492282333158073015511035919189453125,
              "rating" : 9.8974926292155060991717618890106678009033203125,
              "minRating" : 5.87712470611669512976504847756586968898773193359375,
              "volatility" : 7.835035282970782333222814486362040042877197265625,
              "overallSchoolRank" : 0.4768402382624514768139079023967497050762176513671875,
              "overallRank" : 3.1497903714250554685349925421178340911865234375,
              "activeSchoolRank" : 2.380090174313445050557902504806406795978546142578125,
              "activeCountryRank" : 3.8041126957310780198895372450351715087890625,
              "maxRating" : 8.675064425986757754571954137645661830902099609375,
              "activePercentile" : 4.5183095178742433972729486413300037384033203125
            },
            "id" : 0.4833312865174044237193129447405226528644561767578125,
            "mostRecentEventDate" : 0.352621920992366444380650136736221611499786376953125
          } ],
          "mostRecentEventDate" : 7.2037947498048939820591840543784201145172119140625
        }
      },
      "description" : "description",
      "handle" : "handle",
      "maxRating" : {
        "rating" : 4.3323048218758941629857872612774372100830078125,
        "subTrack" : "subTrack",
        "track" : "track"
      },
      "competitionCountryCode" : "competitionCountryCode",
      "userId" : 2.7977867356748475913263973779976367950439453125,
      "tracks" : [ "tracks", "tracks" ]
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get member suggestions, only Administrator, Connect Administrator and Connect Manager have permission to this endpoint
 *
 * term String 
 * returns MemberSuggestResponse
 **/
exports.members_suggestTermGET = function(term) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "metadata" : {
      "totalCount" : 6
    },
    "success" : true,
    "content" : [ {
      "photoURL" : "photoURL",
      "firstName" : "firstName",
      "lastName" : "lastName",
      "handle" : "handle",
      "maxRating" : 1.46581298050294517310021547018550336360931396484375,
      "userId" : 6.02745618307040320615897144307382404804229736328125
    }, {
      "photoURL" : "photoURL",
      "firstName" : "firstName",
      "lastName" : "lastName",
      "handle" : "handle",
      "maxRating" : 1.46581298050294517310021547018550336360931396484375,
      "userId" : 6.02745618307040320615897144307382404804229736328125
    } ],
    "status" : 0.80082819046101150206595775671303272247314453125
  },
  "id" : "id",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

