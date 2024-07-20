// faqs/faqData.js

const faqData = [
    {
        section: "SkyMap",
        questions: [
            {
                question: "How live is SkyMap's tracking and status data?",
                answer: "The data displayed on SkyMap.com is typically 30 seconds delayed from real-time. Maps animate the aircraft position toward the last known position. An aircraft's position on the map may lag real-time by 1-2 minutes."
            },
            {
                question: "How often does the data update or refresh?",
                answer: "Depending on the data source, updates are usually one to four times a minute. For registered members that are logged in, pages will receive more frequent updates."
            },
            {
                question: "How much does a subscription to SkyMap cost?",
                answer: "It's free."
            },
            {
                question: "Where is this data from?",
                answer: "SkyMap compiles, aggregates, and processes data from over 50 government sources (in Europe, the Americas, and Oceania), dozens of airlines, commercial data providers, as well as thousands of receivers in SkyMap's ADS-B flight tracking network. SkyMap's proprietary algorithms calculate delay and arrival time estimates to offer the most up-to-date and reliable flight tracking data on the Internet. Not all worldwide data sources (e.g., most European data) or satellite/VDL data are freely available on SkyMap.com due to government regulations or commercial agreements. You can contact us if you have a commercial need for worldwide data."
            }
        ]
    },
    {
        section: "General",
        questions: [
            {
                question: "Why is it necessary to have a SkyMap account to use the iOS app?",
                answer: "It is actually not necessary to use a SkyMap account for the majority of the functionality in the app. When you launch the iOS app, you will initially be prompted with a screen that asks you to log in, register a new account, or skip. If you choose to skip, you will continue to be able to use the application but you will simply not be able to create any flight alerts. Attempting to create a flight alert (by tapping the 'bell' icon from a flight details screen) will remind you of the requirement to create an account."
            }
        ]
    },
    {
        section: "Flight Page",
        questions: [
            {
                question: "Why do commercial and general-aviation flights appear differently on the flight status page?",
                answer: "Generally, different information is relevant for people tracking commercial flights versus people tracking GA flights. For example, to commercial travelers, the time a flight leaves and arrives at a gate is usually more important than the time the aircraft lands on the runway. This is also what is printed on airline tickets. For GA flights, the summary section is condensed so that the map is more visible on the page without scrolling."
            },
            {
                question: "Why does scheduled landing time occur after scheduled gate arrival time?",
                answer: "SkyMap receives airline schedules months in advance of the flight. Occasionally, the scheduled gate time will not change leading up to departure, even though there may be a departure or arrival delay causing the scheduled landing time to occur after the scheduled gate arrival time."
            },
            {
                question: "Get out of my way, I want to see commercial flights just like I do GA flights.",
                answer: "You can toggle 'Aviator View' in your account settings, or by clicking the gear icon in the summary area of the flight page. This setting will persist across page views."
            }
        ]
    },
    {
        section: "Tracking Data",
        questions: [
            {
                question: "How does SkyMap handle flights around the world? What is SkyMap’s service area?",
                answer: "SkyMap's primary service area includes airspace operated by the United States (including Alaska, Hawaii, Puerto Rico, and Guam), portions of Central America, Canada, Australia, and New Zealand. Flights in the primary service area support real time maps, departure and arrival information, delays, and more. SkyMap's secondary service covers scheduled major airline operations at any airport in the world. Flights in the secondary service area support departure and arrival information. Secondary coverage areas may have real-time positions for ADS-B equipped aircraft operating in SkyMap's ADS-B coverage area. Additionally, some airlines send SkyMap satellite position reports from aircraft worldwide that augments other position data and provides transoceanic coverage as well.For flights arriving in a service area from outside of a service area, SkyMap will be able to track the flight when it nears a service area. For flights departing a service area, SkyMap will be able to track the flight until it leaves the coverage area. Flights may not be tracked beyond that point unless they enter another service area. Not all worldwide data sources (e.g., European data, datalink ARINC/SITA ACARS, etc) are freely available on SkyMap.com due to government regulations or commercial arrangements. You can contact us if you have a commercial need for worldwide data."
            },
            {
                question: "What is a position-only flight?",
                answer: "A position-only flight is a flight for which SkyMap has not received a filed flight plan (for example an airline flight that doesn't report its flight schedule to SkyMap or a VFR flight). In those cases, if we receive position reports via ADS-B or another source, the flight can be trackable as a position-only flight. Note that position-only flights do not have a filed origin, destination, or route, and the aircraft may enter and leave areas of coverage throughout the flight."
            },
            {
                question: "I've noticed more flights than usual, has something changed?",
                answer: "Yes, previously there was an option to 'Show position-only flights' to display flights that did not have a filed flight plan. We have now turned this on for all users"
            },
            {
                question: "I'm noticing more alerts for aircraft I track, what has changed?",
                answer: "We now display position-only flights for all users, therefore if an aircraft you track doesn't file a flight plan, you'll receive un-filed (or 'ad-hoc') flight alerts."
            },
            {
                question: "I'm seeing a lot of flights with no destination. What does that mean?",
                answer: "We now display position-only flights for all users. Therefore if an aircraft doesn't file a flight plan, you'll still be able to track it, but we don't know where its destination is."
            },
            {
                question: "As a Firehose customer, will I suddenly be seeing all of these position only flights?",
                answer: "No, we have left the position-only flights settings as-is for our existing Firehose customers, so you can rely on receiving the same flight information you have set up now."
            },
            {
                question: "Why are planes moving on maps?",
                answer: "As part of SkyMap Live, whenever you see a plane logo on a map beneath the pan and zoom controls, you're seeing new positions of aircraft as quickly as we can get them to you, without the need to refresh the page. However, it's important to note the data is still subject to normal delays imposed by governments. In the US, that means the data is typically delayed 5 minutes."
            },
            {
                question: "Can SkyMap display additional flight information provided on an IFR flight plan such as pilot's name, address, phone number, number of people on board, and color of aircraft?",
                answer: "No, this information is not displayed. SkyMap has this data in some countries, so if you have an operational need for this data, please contact us to discuss."
            },
            {
                question: "Can SkyMap tell me the tail number of a flight operating under a company name / flight number?",
                answer: "Yes. SkyMap.com uses this data to for a variety of features on the SkyMap.com web site. For example, you can usually track a flight by either the flight identifier (e.g., ABC123) or the registration number (e.g., N12345)."
            },
            {
                question: "Can SkyMap track VFR flights? What about a VFR flight with a flight plan?",
                answer: "VFR flight tracking is supported but is subject to the availability of a position source such as radar or ADS-B data. Origin, destination, departure, arrival, and flight plan data may not be available. In Australia, VFR flights are fully supported by SkyMap as long as they have been assigned a transponder code. VFR flight plans are irrelevant and only used by FSS for search and rescue. We suggest ensuring that aircraft are on an IFR flight plan from wheels up to wheels down for proper tracking."
            },
            {
                question: "How does SkyMap handle pop-up IFR flights?",
                answer: "The origin of a pop-up flight will likely be a radial off a VOR or an intersection at the discretion of the controller that opens the flight plan. This will look similar to a flight with a clearance fix (destination) of a VOR radial, Latitude/Longitude, or intersection instead of an airport."
            },
            {
                question: "How far back does SkyMap's airport history go when browsing through recent arrivals and departures?",
                answer: "Although SkyMap keeps the data forever, currently only the most recent seven days of activity are available for viewing."
            },
            {
                question: "What happens if an aircraft cancels an IFR flight plan en-route or prior to arrival?",
                answer: "The cancellation time will be marked as the arrival time for that flight. There is a chance that an aircraft could proceed VFR to another airport and confuse SkyMap, but the most likely scenario is that a pilot cancels IFR just moments prior to arrival, so assuming that the aircraft has arrived is the safest bet."
            },
            {
                question: "I see a consistent discrepancy or anomaly in tracking data. What should I do?",
                answer: "Please use the 'Report inaccurate information' link that is located on most flight tracking pages. You may also bring it up in the public discussions. While we're unable to guarantee a resolution for every discrepancy, SkyMap can research some situations to determine the source of the problem and possibly take action if it leads to a wide scale fix."
            },
            {
                question: "Why does SkyMap show an overly specific or incorrect aircraft description for a particular aircraft type?",
                answer: "A single aircraft type can have multiple names in the ICAO aircraft database. SkyMap picks the first one listed unless it has been pointed out to be inaccurate. As a result, it might display B738 as a 'Boeing BBJ2' rather than 'Boeing 737-800.' Please bring the error up in the public discussions to be corrected."
            },
            {
                question: "Why do the departure and arrival times on a scheduled airline differ from the information on the airline's web site?",
                answer: "Airlines generally display the times that the aircraft departs and arrives from a gate. When available, SkyMap also displays these times for airline flights. However, when these times are not available, SkyMap will display the time that an aircraft takes off from and lands on the runway. At large airports or in various circumstances, there can be a significant difference in gate and runway times due to long taxi times and other delays on the ground."
            },
            {
                question: "Can I track SpaceX's rockets or other space ships (UFOs, etc) on SkyMap during launch or descent?",
                answer: "No, but that would be rather amusing; the SpaceX rockets or UFOs would have to be on an IFR flight plan to be tracked or have an ADS-B OUT transponder. However, SpaceX does live stream the launches and rocket landings."
            },
            {
                question: "How does SkyMap handle \"code share\" flights?",
                answer: "Shared codes."
            },
            {
                question: "Are displayed flight altitudes AGL (above ground level) or MSL (mean sea level)?",
                answer: "Displayed altitudes are dependent on the data source for the position data. SkyMap receives many different types of altitude data, including uncorrected pressure altitude, corrected pressure altitude, flight levels, GPS-based height above mean sea level (MSL) and GPS-based height above ellipsoid. Data received from the FAA or other air navigation service providers is typically MSL. ADS-B data is frequently height above ellipsoid but there are exceptions. In general, it is best to assume altitudes are uncorrected pressure altitudes (a variation of MSL). SkyMap does not display AGL altitudes."
            },
            {
                question: "Does SkyMap receive satcom/VDL data for aircraft with datalink uplinks?",
                answer: "Yes, SkyMap can receive satellite or VHF Data Link (VDL) data from ARINC, ARINC Direct, Garmin, Satcom Direct, SITA, Spidertracks, Honeywell GDC, and UVdatalink. You can contact us if you would like to setup you accounts to show this for your aircraft."
            },
        ]
    },
    {
        section: "Privacy",
        questions: [
            {
                question: "Are blocked tail numbers publicly visible on SkyMap?",
                answer: "No, blocked aircraft flight tracking details are only available to the aircraft owner/operator."
            },
            {
                question: "Can I send proof of ownership to SkyMap for access to track a blocked tail number?",
                answer: "Yes, SkyMap offers flight tracking for blocked aircraft as a service to owner/operators."
            },
            {
                question: "Isn't this information a big security risk? Is SkyMap helping terrorists?",
                answer: "This information is public knowledge and not a security risk. The assertion that knowing aircraft whereabouts, routing, or airport activity promotes terrorism or is a security risk is much like suggesting that train or subway routes and schedules should not be published."
            }
        ]
    },
    {
        section: "Understanding SkyMap",
        questions: [
            {
                question: "What does it mean when a time is in italics?",
                answer: "A time in italics generally means that the time or action is proposed, scheduled, or estimated, if it isn't indicated otherwise. For example, an en route flight will show the arrival time in italics."
            },
            {
                question: "I believe I witnessed a traffic conflict, altitude deviation, or some other anomaly. Should I report it?",
                answer: "Please don't. Rather, read the terms of use and understand that this data is for casual observation only and not for any operational purpose. SkyMap technology was not designed with the intent to observe safety or regulation anomalies, so please do not try to use it for that purpose."
            },
            {
                question: "Can I use SkyMap for operational functions or in flight for navigation or traffic advisories?",
                answer: "Absolutely not. SkyMap is not designed for that, and that violates SkyMap's terms of use."
            },
            {
                question: "Why does SkyMap show two airlines flights operating simultaneously with the same flight number? Is that possible?",
                answer: "Unfortunately, this is not a bug. It seems that some airlines occasionally have duplicate flight numbers in the air at the same time with different origins and destinations. When tracking a flight that is in the air twice, the arrival/departure history will be accurate but the position, speed, and altitude will be unreliable."
            },
            {
                question: "What is the suffix that's appended to an aircraft type, such as C172/G or B738/Q?",
                answer: "The suffix indicates the on-board equipment. For an explanation of each suffix, you can either hover over the code for a tool tip explanation, or view them all on SkyMap's Aircraft Equipment Suffixes list."
            },
            {
                question: "How does SkyMap handle time zones?",
                answer: "By default, SkyMap displays times in the airport's local time zone. For example, if a flight is flying from Houston to Los Angeles with a 4 o'clock departure and arriving in LA 3 hours later, it will show a 4:00 CT departure and 5:00 PT arrival. Registered users can select various time zone and time display preferences including the ability to show all times in your local time zone."
            },
            {
                question: "What do \"(+1)\" and \"(-1)\" mean next to a flight's arrival time?",
                answer: "It means that the flight arrived on either the day after or the day before departure, respectively. The date listed for a flight is the departure date and the '+1' literally means plus one day and '-1' means minus one day."
            },
            {
                question: "When do flights show up as \"Scheduled\" in the activity log?",
                answer: "We display a flight as 'scheduled' as soon as receiving the flight plan. This is generally 30 minutes to 24 hours before a flight. For airline flights, it is closer to 24 hours and for most general aviation flights, closer to two hours. Flight plans that are never activated (no departure) or flight plans that are canceled/retracted prior to departure are not displayed."
            },
            {
                question: "SkyMap sometimes suggests that I use a metro area or terminal area for my searches rather than an airport code. What other cities or terminal areas can I use for areas with multiple airports?",
                answer: "Please consult SkyMap's list of terminal areas and feel free to use them when appropriate."
            },
            {
                question: "What does \"Delayed\" mean on an airport page and why is a delayed flight being displayed above an airborne flight?",
                answer: "To facilitate airport and airport service operators, SkyMap lists scheduled departures on the 'En Route/Scheduled' table when space allows. If there are insufficient en route flights to fill the table, the rest of the table is populated with relevant scheduled flights, sorted by estimated arrival time. In the event that a scheduled (not current en route) arrival is delayed, but could still conceivably arrive before an en route flight (or if no subsequent en route flight exists), SkyMap will display the entry for that flight with the word, 'Delayed' instead of an estimated departure and arrival time.For example, if KVNY (Van Nuys, CA) has two upcoming arrivals and one is from KTEB (Teterboro, NJ), which is en route but two hours from arrival, yet one is from Santa Monica, CA and is delayed (not airborne yet), the Santa Monica flight will be listed above the Teterboro flight, but with the Delayed notation."
            }
        ]
    },
    {
        section: "Maps",
        questions: [
            {
                question: "What, exactly, is represented by the flight route line on a SkyMap map?",
                answer: "The solid line displayed on a SkyMap map is a connected series of points between every position report received for that aircraft. Generally, we receive a position every 15-60 seconds. The dashed line is the planned route of flight per air traffic control. Often times, a flight will deviate from the planned route due to weather, shortcuts, traffic, or other operational factors."
            },
            {
                question: "Why do airplanes only sometimes have the \"data block\" next to them with flight information?",
                answer: "Due to limited screen and resolution real estate, SkyMap Maps has to selectively 'de-clutter' the maps so that data blocks aren't overlapping each other. If you're tracking a single flight and it's near the origin or destination airport, it might not have a data block to ensure that the airport code itself isn't blocked. On the ATC-style displays with many flights, often times there are so many flights in limited space that it's not possible to display data blocks for all of them. On airport maps and flight maps, you can zoom in to an area where you are more interested in seeing a data block. On airport maps, you can hover over a particular flight to see that flight's data block, or let the system automatically cycle through inbound and outbound flights."
            },
            {
                question: "Why does SkyMap not show a position for a flight that recently departed?",
                answer: "When a flight first lifts off, it takes SkyMap a minute or two to acquire the position and orientation. Simply wait a couple minutes and the map should start displaying the position."
            },
            {
                question: "I see a aircraft identification on an area/airport map that I can't track manually or the data says the plane is not airborne. Why is that?",
                answer: "The area and airport maps often display VFR aircraft that we receiving position updates for, but do not receiving flight plan or departure/arrival information. A good indication of this occurring is if the data block for that flight on the map does not show an aircraft type."
            },
            {
                question: "What do the numbers mean below a flight? For example, what does, \"340 446\" mean?",
                answer: "Flight details."
            },
            {
                question: "Why do some flights in a different color only sometimes appear on an airport map?",
                answer: "The airport maps focus on ensuring that you can see flights to/from the airport that you're looking at. When space is available, nearby aircraft with track lines will be included. As you zoom and pan to a more a congested area, the track lines for nearby aircraft may be removed. At a certain point, nearby aircraft will not be displayed entirely."
            },
            {
                question: "I like the VFR sectional style flight tracking maps. Is it possible for me to view an entire sectional chart?",
                answer: "Absolutely. Visit any airport information page and click the 'Sectional' tab. To get to an airport information page, type an airport code (e.g., LAX) in bottom of the form on the left side of every page and click 'View Info'"
            },
            {
                question: "I want to see a 3D map. Can I export the flight track to view it in Google Earth?",
                answer: "SkyMap supports 3D Google Earth flight tracking for all arrived/landed flights. On the 'Status' row in the tracking information, click on the Track flight in Google Earth button and SkyMap will send you a Google Earth KML file to view the flight."
            },
            {
                question: "Where can I make a suggestion about maps?",
                answer: "We're always interested in new ideas. However, the mapping technology is currently under heavy development, please read our announcement posts and feature requests thread in the forums to read about current changes and suggestions."
            },
            {
                question: "When viewing a flight tracking map, why is there sometimes a circle around the airplane or a notice that says estimated position?",
                answer: "When considering the flight's location, the data downlink capabilities of the aircraft, and available data sources, SkyMap will sometimes only have an estimate of a flight's position. Depending on the circumstances, the accuracy of the position may be within a few miles, or other times it may be within several hundred miles. In order to inform you about the position accuracy, SkyMap will use various airplane icons, radius circles and white lines (as opposed to a solid line) to indicate the degree of confidence in the aircraft's position. The wider the radius circle and the fewer solid lines, the less exact the position is. For example, a solid track line and a solid airplane are a precise position whereas a hollow airplane with a large dashed circle and no track is the least precise position."
            },
        ]
    },
    {
        section: "Community",
        questions: [
            {
                question: "What is a Flight Crew and how do I participate?",
                answer: "SkyMap Members can create or join Flight Crews which are virtual groups or communities for sharing remarks (notes), photos, and more among colleagues, friends, and families. A Flight Crew could be specific to an FBO, a charter operator, a flight club, or even to people involved in a particular airplane. You can search for a crew to see if one exists, or click 'Create a new flight crew' to create one and start inviting new members from the SkyMap community. There is no limit to the number of flight crews you create or join. You can decide what information you'd like to share with each crew."
            },
            {
                question: "What is an Automatic Flight Crew and how do I get one?",
                answer: "SkyMap creates automatic Flight Crews for employees of organizations with a significant number of SkyMap membership based on the domain name (e.g., @xyzcompany.com) in your account profile. If you have automatically joined a Flight Crew, you can exchange information with other employees/members of your organization at your discretion. If your organization has an automatic flight crew that you are not a member of, make sure that your email address on file in your account profile is your official work/school/etc address. If you would like to request a new automatic flight crew, please contact us.."
            },
            {
                question: "What is a Remark?",
                answer: "A SkyMap Remark is a per-flight/airport/page notation that allows a SkyMap member to store notes and information for private use or to share with colleagues using SkyMap Flight Crews. For example, an FBO employee could enter passenger preferences or requests as a remark for an N-number. Or, a pilot could enter flight details/background about a specific flight. You can see recent remark annotations from you or members of your flight crews on the remarks activity page."
            },
            {
                question: "How do I share remarks with friends or colleagues?",
                answer: "Use the SkyMap Flight Crew feature to join or create groups that are involved in the same aircraft/airports/customers as you. Then, when creating a remark, you will be given a list of your Flight Crews with checkboxes to indicate which flight crews you want to share that remark with."
            },
            {
                question: "What is an Endorsement?",
                answer: "Endorsements are graphical icons/badges that are awarded to a SkyMap member based on their SkyMap user activity. Endorsements recognize and reward contributions to the SkyMap community. There are a variety of endorsements which may be earned and displayed to the rest of the SkyMap community. For example, a user who has submitted a top-rated Squawk gets a little newspaper badge next to their forum posts, picture uploads, and squawk submissions. You can see all the endorsements you've earned here."
            }
        ]
    },
];

export default faqData;
