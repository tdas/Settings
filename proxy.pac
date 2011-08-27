function FindProxyForURL(url, host)
{
	var ip = myIpAddress();
//	var proxy_1 = "PROXY proxy.lib.berkeley.edu:7777";
var proxy_1 = "PROXY proxy3.lib.berkeley.edu:7777; PROXY proxy4.lib.berkeley.edu:7777; PROXY proxy2.lib.berkeley.edu:7777";
//	var proxy_2 = "PROXY proxy3.lib.berkeley.edu:7777; PROXY proxy.lib.berkeley.edu:7777";
	var proxy_no  = "DIRECT";

        if (shExpMatch(url, "https://login.alladvantage.com/*"))
             return proxy_no;

	if ( shExpMatch(ip, "128.32.113.136") || 
	     shExpMatch(ip, "128.32.238.86") ||   
	     shExpMatch(ip, "128.32.224.161") ) return proxy_1;

        if ( shExpMatch(ip, "128.32.*.*") ||        // UCB net 1
             shExpMatch(ip, "136.152.*.*") ||       // UCB net 2
             shExpMatch(ip, "169.229.*.*") ||       // UCB net 3
             shExpMatch(ip, "131.243.52.*") ||    // UCB Melvin Calvin Lab. building
             shExpMatch(ip, "199.133.139.*") ||   // UCB net 3
             shExpMatch(ip, "192.101.42.*"))      // Berk pub. & univ. relations
             return proxy_no;

        if (shExpMatch(url, "http://www.dbs.cdlib.org/?CSdb=cat")  ||    // Old Melvyl 07/01/03
            shExpMatch(url, "http://www.dbs.cdlib.org/mw/*") ||
            shExpMatch(url, "http://www.dbs.cdlib.org/mwimg/*"))
             return proxy_no;

        if (shExpMatch(url, "http://melvyl.cdlib.org/*")  ||             // Melvyl-T 07/01/03
            shExpMatch(url, "http://melvyl.cdlib.org:80/*"))             // Melvyl   05/18/05
             return proxy_no;

        if (shExpMatch(url, "http://forecastfox.accuweather.com/*") ||   // Forecast widget
            shExpMatch(url, "http://apple.accuweather.com/*"))           // Forecast widget
             return proxy_no;

        if (shExpMatch(url, "http://www5.oclc.org/questionpoint/*")) //uc library chat for questionpoint.org 1/29/09 - LK
             return proxy_no;

        if (shExpMatch(url, "ftp://*")) //proxy can't ftp, so let it through 4/1/09 - LK
             return proxy_no;
        if (shExpMatch(url, "http://coverart.oclc.org/*"))
             return proxy_no;
        // let through images of book covers in melvyl - lk

         // ***************  End of proxy.head **********************************
	if ( shExpMatch(url, "128.48.141.7/*") ||
	     shExpMatch(url, "http://128.48.141.7/*") ||
	     shExpMatch(url, "http://128.48.120.7/*") ||          // 12-11-01 DK
	     shExpMatch(url, "128.220.50.88/*") ||
	     shExpMatch(url, "140.234.*") ||         //02-10-2009 DZ
	     shExpMatch(url, "63.208.197.*") ||      //02-10-2009 DZ
	     shExpMatch(url, "http://140.109.138.249/*") ||                // 05-15-2008 DZ outdated
	     shExpMatch(url, "http://209.195.157.99/*") ||              //jan 15 2008 DZ
	     shExpMatch(url, "65.209.24.103/*") ||               //jan 15 2008 DZ
	     shExpMatch(url, "http://128.220.50.88/*") ||
	     shExpMatch(url, "209.116.81.4/*") ||
	     shExpMatch(url, "http://209.116.81.4/*") ||
	     shExpMatch(url, "http://206.65.170.81/*") ||	// CRC Handbk of Chem & Phys
	     shExpMatch(url, "http://66.98.205.92/*") ||                       // 01-08-07 DK
	     shExpMatch(url, "http://66.98.205.93:120/*") ||                   // 01-08-07 DK
	     shExpMatch(url, "http://58.68.145.22/*") ||                       // 08-17-10 JS
	     shExpMatch(url, "http://sunsite2.berkeley.edu/dba/*") ||
	     shExpMatch(url, "http://library.berkeley.edu/UCBonly/*") ||
	     shExpMatch(url, "http://www.lib.berkeley.edu/UCBonly/*") ||
	     shExpMatch(url, "http://lib.berkeley.edu/UCBonly/*") ||
	     shExpMatch(url, "http://www.lib.berkeley.edu/EART/UCONLY/*") ||   // 07-08-05 DK
             shExpMatch(url, "http://library.berkeley.edu/*grad/*") ||
             shExpMatch(url, "http://www.lib.berkeley.edu/*grad/*") ||
             shExpMatch(url, "http://lib.berkeley.edu/*grad/*") ||
             shExpMatch(url, "http://www.mip.berkeley.edu:8080/*") ||          // 08-03-06 DK
             shExpMatch(url, "http://www.mip.berkeley.edu/*") ||               // 11-20-06 DK
             shExpMatch(url, "http://uclibs.org/PID/*") ||        // 01-22-04 DK
	     shExpMatch(url, "http://sunsite2.berkeley.edu/Music/restrictForms/reserveForm.html") ||  
	     shExpMatch(url, "http://digitalassets.lib.berkeley.edu/cityarts/ucb/ram/*.ram")|| //11-12-09 LK for city arts 
	     shExpMatch(url, "http://204.144.252.176/*") ||       // Militant Islam  3/13/02
	     shExpMatch(url, "http://198.112.169.132/*") ||       // GaleNet  (1/9/01)
	     shExpMatch(url, "198.112.169.132/*") ||              // GaleNet  (1/9/01)
	     shExpMatch(url, "http://198.112.169.*/*") ||         // GaleNet  (1/9/01)
	     shExpMatch(url, "198.112.169.*/*") ||                // GaleNet  (1/9/01)
	     shExpMatch(url, "http://167.216.170.181/*") ||       // Temp for WoS 11-17-02 DK
	     shExpMatch(url, "http://allafrica.com*") ||          // 02-02-05 DK
             dnsDomainIs(host, ".lunaimaging.com") ||                        // 07-29-03 DK AMICO
             dnsDomainIs(host, ".davidrumsey.com") ||                        // 09-26-03 DK AMICO
	     shExpMatch(url, "http://208.46.217.36/*") ||                    // 09-26-03 DK AMICO
	     shExpMatch(url, "http://www.ilocis.org/*") ||
	     shExpMatch(url, "http://foodchemicalnews.com/*") ||             // 09-16-02 DK
             dnsDomainIs(host, ".foodchemicalnews.com") ||                   // 01-05-04 DK
	     shExpMatch(url, "http://chemistry.org/education/DGRweb") ||     // 04-08-03 DK
	     shExpMatch(url, "http://datalib.library.ualberta.ca/publications/*") ||   // 09-24-03 DK
	     shExpMatch(url, "http://dram.nyu.edu/dram/*") ||                // 06-01-07 DK
             dnsDomainIs(host, "dram.nyu.edu") ||                                // 06-01-0r74 DK
	     shExpMatch(url, "http://www.sourceoecd.com/*") ||               // SourceOECD (1/31/01)
	     shExpMatch(url, "http://www.sourceoecd.org/*") ||               // SourceOECD (2/06/01)
             dnsDomainIs(host, ".sourceoecd.com") ||                         // 09-20-04 DK
             dnsDomainIs(host, ".sourceoecd.org") ||                         // 09-20-04 DK
             dnsDomainIs(host, ".hsdl.org") ||                               // 04-12-06 DK

	     shExpMatch(url, "http://icadb.princeton.edu:8991/*") ||	     // 05-10-10 LK 
	     shExpMatch(url, "http://index4.princeton.edu:4505/*") ||        // 06-24-02 DK mod 06/30/05
	     shExpMatch(url, "http://annals.princeton.edu/*")      ||        // 01-07-11 JS

	     shExpMatch(url, "http://ingentaselect.com/*") ||                // 11-14-02 DK
	     shExpMatch(url, "http://intarch.ac.uk/*") ||                    // 02-18-05 DK
	     shExpMatch(url, "http://internetlaw.pf.com/*") ||               // 09-23-03 DK (Internet Law)
	     shExpMatch(url, "http://isiknowledge.com/*") ||                 // 11-14-02 DK
	     shExpMatch(url, "http://na.jkn21.com/*") ||                     // 09-01-04 DK Japan Knowledge
	     shExpMatch(url, "http://newisiknowledge.com/*") ||              // 11-13-03 DK
	     dnsDomainIs(host, ".newisiknowledge.com") ||                    // 06-23-03 DK
	     dnsDomainIs(host, ".isihighlycited.com") ||                     // 12-21-2007 
	     dnsDomainIs(host, ".isiknowledge.com") ||                       // 11-14-02 DK
	     dnsDomainIs(host, ".isiproducts.com") ||                        // 04-10-06 DK
	     dnsDomainIs(host, ".isiglobalnet2.com") ||                      // 12-20-02 DK
	     dnsDomainIs(host, ".isilinks.com") ||                           // 03-31-03 DK
	     dnsDomainIs(host, ".isihost.com") ||                            // 07-15-04 DK
	     dnsDomainIs(host, ".isitrial.com") ||                           // 07-15-04 DK
	     shExpMatch(url, "http://projecteuclid.org/*") ||                // 05-06-03 DK
	     shExpMatch(url, "http://refworks.com/*") ||                     // 06-10-02 DK
	     shExpMatch(url, "https://refworks.com/*") ||                    // 04-10-03 DK
	     shExpMatch(url, "http://shanana.berkeley.edu/spiro*") ||        // 10/10/01 SPIRO DK
	     shExpMatch(url, "http://www.mip.berkeley.edu/cgi-bin/browse_spiro*") ||     // 10/10/01 SPIRO DK
	     shExpMatch(url, "http://www.mip.berkeley.edu:8080/servlet/Spiro*") ||     // 10/10/01 SPIRO DK
             shExpMatch(url, "http://accuweather.ap.org/*") ||               // 06-06-06 DK (accuweather 01-07-02)
	     dnsDomainIs(host, ".18thcjournals.amdigital.co.uk") ||          // 12-11-07 DZ 
	     dnsDomainIs(host, ".aa.uwpress.com") ||                         // 12-/19-07 DZ  
	     dnsDomainIs(host, ".accuweather.com") ||                        // 04-12-05 DK (part of accuweather)
	     dnsDomainIs(host, ".aanda.org") ||                              // 01-16-07 DK
	     dnsDomainIs(host, ".aacrjournals.org") ||                       // 10-07-04 DK
	     dnsDomainIs(host, ".abc-clio.com") ||
	     shExpMatch(url, "http://abbreviationes.net/*") ||               // 05-03-06 DK TEST
	     dnsDomainIs(host, ".ruhr-uni-bochum.de") ||                     // 05-03-06 DK TEST
	     dnsDomainIs(host, ".academicpress.com") ||
	     dnsDomainIs(host, ".accessible.com") ||               // 07-25-07 DK
	     dnsDomainIs(host, ".accessmedicine.com") ||           // 10-19-04 DK
	     dnsDomainIs(host, ".accessscience.com") ||            // 05-20-05 DK
	     dnsDomainIs(host, ".acm.org") ||
	     dnsDomainIs(host, ".acmuller.net") ||                 // 12-21-04 DK
	     dnsDomainIs(host, ".acponline.org") ||
	     dnsDomainIs(host, ".acs.org") ||
	     dnsDomainIs(host, ".actahort.org") ||                 // 07-14-08 JS
	     dnsDomainIs(host, ".ada.org") ||                      // 08-03-06 DK
	     dnsDomainIs(host, ".aeaweb.org") ||                   // 03-18-09 JS 
	     shExpMatch(url, "http://www.aebnet.nl/*") ||             // 2008-02-01 DZ
	     dnsDomainIs(host, ".against-the-grain.com") ||        // 04-06-09 JS 
	     dnsDomainIs(host, ".ascelibrary.org") ||              // 05-04-05 DK
	     dnsDomainIs(host, ".africanstudiescompanion.com") ||  // 01-29-04 DK
	     dnsDomainIs(host, ".africa-confidential.com") ||      // 02-06-09 JS 
             shExpMatch(url, "http://afsjournals.org/*") ||        // 10-11-10 JS
	     dnsDomainIs(host, ".agu.org") ||                      // 06-09-04 DK Amer Geophys Union
	     dnsDomainIs(host, ".agriculturenetbase.com") ||       // 05-17-07 DK
             shExpMatch(url, "https://www.agronomy.org/*") ||      // 08-10-10 JS
	     dnsDomainIs(host, ".ahajournals.org") ||              // 12-06-02 DK Amer Heart Assoc.
             shExpMatch(url, "http://aimsciences.org/*") ||        // 07-10-03 DK
	     dnsDomainIs(host, ".aiaa.org") ||                     // 10-05-04 DK
	     dnsDomainIs(host, ".aip.org") ||                      // Old Optical Soc. of Am.
	     dnsDomainIs(host, ".airiti.com") ||                   // 04-18-2008 DZ 
	     dnsDomainIs(host, ".airitinpm.com") ||                   // 02-12-10 JS
	     dnsDomainIs(host, ".ajcn.org") ||                     // 04-12-04 DK Am J of Clin. Nutr.
	     shExpMatch(url, "http://ajcp.ascpjournals.org/*") ||   // 06-15-09 JS

	     shExpMatch(url, "http://ajhpcontents.org/*") ||       // 12-03-10 JS  
	     dnsDomainIs(host, ".healthpromotionjournal.com") ||   // 12-03-10 JS 

	     dnsDomainIs(host, ".ajsonline.org") ||                // 12-22-09 JS 
	     dnsDomainIs(host, ".ajph.org") ||                     // 04-12-06 DK 
	     dnsDomainIs(host, ".apha.org") ||                     // 02-10-11 JS
	     shExpMatch(url, "http://ajph.aphapublications.org/*") ||  // 02-10-11 JS
	     dnsDomainIs(host, ".ajsm.org") ||                     // 06-08-04 DK Am J of Sports Med.
	     dnsDomainIs(host, ".ajtmh.org") ||                    // 03-18-04 DK Am J Tropical Med
	     dnsDomainIs(host, ".akkrt.hu") ||                     // 02-25-05 DK
             dnsDomainIs(host, ".opticsinfobase.org") ||           // Optical Soc. of Am. 3/8/01
	     dnsDomainIs(host, ".math.albany.edu") ||
	     dnsDomainIs(host, "nyjm.albany.edu") ||
             shExpMatch(url, "http://eena.alexanderstreet.com/*") ||       // 10-01-09 JS
             shExpMatch(url, "http://Solomon.eena.alexanderstreet.com/*") ||    // 10-01-09 JS
	     dnsDomainIs(host, ".alexanderstreet.com") ||                  // 01-20-04 DK
	     dnsDomainIs(host, ".alexanderstreet2.com") ||                 // 10-29-01 DK
	     dnsDomainIs(host, ".alexanderstreet4.com") ||                 // 06-10-04 DK
	     dnsDomainIs(host, ".alexanderstreet6.com") ||                 // 03-02-04 DK
             shExpMatch(url, "http://allafrica.com/*") ||                  // 10-20-04 DK
	     dnsDomainIs(host, ".allafrica.com") ||                        // 03-09-06 DK
	     dnsDomainIs(host, ".alphamedpress.org") ||                    // 04-15-04 DK
	     dnsDomainIs(host, ".aslo.org") ||                             // 10-15-07 DK
	     dnsDomainIs(host, ".ama-assn.org") ||                         // 03-13-03 DK
	     dnsDomainIs(host, ".americanscientist.org") ||                // 05-18-04 DK
	     dnsDomainIs(host, ".everydaylife.amdigital.co.uk") ||         // 02-19-08 DZ
	     dnsDomainIs(host, ".amdigital.co.uk") ||                      // 02-19-08 DZ
	     dnsDomainIs(host, ".secure.amdigital.co.uk") ||               // 05-16-03 DZ
	     dnsDomainIs(host, ".everydaylife.amdigital.co.uk") ||         // 05-16-03 DK
	     dnsDomainIs(host, ".empire.amdigital.co.uk") ||               // 05-16-03 DK
	     dnsDomainIs(host, ".amjbot.org") ||
	     dnsDomainIs(host, ".amjpathol.org") ||
	     dnsDomainIs(host, ".amponline.co.uk") ||                     // 03-29-06 DK
	     dnsDomainIs(host, ".ams.org") ||
	     shExpMatch(url, "http://ams.org/*")||			  //5/28-10 LK 
	     dnsDomainIs(host, ".allenpress.com") ||                      // 10-29-01 & 06/01/05 DK
	     dnsDomainIs(host, ".amstat.org") ||
	     dnsDomainIs(host, ".anb.org") ||
	     dnsDomainIs(host, ".ancientnarrative.com") ||                // 04-07-09 JS
	     dnsDomainIs(host, ".annualreviews.org") ||
	     dnsDomainIs(host, ".annals.org") ||                           // 06-25-04 DK
	     dnsDomainIs(host, ".annalsnyas.org") ||                       // 10-21-02 DK
	     dnsDomainIs(host, ".annee-philologique.com") ||               // 02-18-03 DK
	     dnsDomainIs(host, ".annotatedleadingcases.com") ||            // 09-17-10 JS
	     dnsDomainIs(host, ".ans.org") ||                              // 02-06-04 DK
	     dnsDomainIs(host, ".anthrosource.net") ||                     // 05-02-05 DK
	     dnsDomainIs(host, ".antiquity.ac.uk") ||                      // 03-27-2008 DZ

	     shExpMatch(url, "http://annual.apabi.com/*") ||             // 04-29-10 JS
	     shExpMatch(url, "http://ceb.apabi.com/*") ||                // 04-29-10 JS
	     shExpMatch(url, "http://dlib.apabi.com/*") ||               // 04-29-10 JS
	     shExpMatch(url, "http://reference.apabi.com/*") ||          // 04-29-10 JS

	     dnsDomainIs(host, ".apidologie.org") ||                       // 08-01-07 DK
	     shExpMatch(url, "http://apimages.ap.org/*") ||                // 07-28-08 JS 
             dnsDomainIs(host, ".apimages.com") || 			   // 07-14-09 JS
	     dnsDomainIs(host, ".appi.org") ||                             // 01-15-10 JS
	     dnsDomainIs(host, ".aps.org") ||
	     dnsDomainIs(host, ".apsnet.org") ||                           // 05-03-05 DK
	     dnsDomainIs(host, ".asmedl.org") ||                           // 10-14-10 JS
	     dnsDomainIs(host, ".atsjournals.org") ||                      // 12-09-03 DK
	     dnsDomainIs(host, ".areditions.com") ||                       // 04-11-05 DK
	     dnsDomainIs(host, ".ari.uni-heidelberg.de") ||                // 07-28-05 DK
	     dnsDomainIs(host, ".archivdigital.info")    ||                // 01-12-10 JS 
	     dnsDomainIs(host, ".archive.thenation.com") ||                // 12-07-01 DK
	     dnsDomainIs(host, ".archivegrid.org") ||                      // 09-05-06 JG
             shExpMatch(url, "http://archivegrid.org/*") ||                // 09-05-06 JG
	     dnsDomainIs(host, ".archivesdirect.amdigital.co.uk") ||       // 08-10-10 JS 
	     dnsDomainIs(host, ".arl.org") ||                              // 07/18/01
	     dnsDomainIs(host, ".artstor.net") ||                          // 03/02/05 DK
	     dnsDomainIs(host, ".artstor.org") ||                          // 11/05/04 DK
             shExpMatch(url, "http://database.asahi.com/*") ||             // 04-19-11 JS
             shExpMatch(url, "http://askart.com/*") ||                     // 04-09-07 DK
	     dnsDomainIs(host, ".askart.com") ||                           // 04-09-07 DK
	     //shExpMatch(url, "http://arxiv.org/*" ) ||                     // 06-07-10 JS 
	     dnsDomainIs(host, ".asm.org") ||                              // 01/28/02 DK
	     dnsDomainIs(host, ".asme.org") ||                             // 04/21/03 DK
	     dnsDomainIs(host, ".asminternational.org") ||                 // 01/21/05 DK
	     dnsDomainIs(host, ".aspbooks.org") ||                         // 09-22-09 JS
	     dnsDomainIs(host, ".aspetjournals.org") ||                    // 04/15/04 DK
	     dnsDomainIs(host, ".astm.org") ||                             // 12/19/02 DK
	     dnsDomainIs(host, ".astrosociety.org") ||                     // 05-18-09 JS 
	     dnsDomainIs(host, ".atypon-link.com") ||                      // 07/28/06 DK
	     dnsDomainIs(host, ".atozmapsonline.com") ||                   // 03-05-09 JS

             dnsDomainIs(host, ".atilf.fr")          ||                    // 02-23-09 JS
             dnsDomainIs(host, ".frantext.fr")       ||                    // 02-23-09 JS
             dnsDomainIs(host, ".cnrs.fr")           ||                    // 02-23-09 JS

             
             //biochemsoctrans 
	     dnsDomainIs(host, ".asnneuro.org")        ||                  // 11-10-10 JS 
	     dnsDomainIs(host, ".biochemsoctrans.org") ||                  // 11-10-10 JS 
	     dnsDomainIs(host, ".biochemist.org") ||                       // 11-10-10 JS 
	     dnsDomainIs(host, ".biolcell.org")        ||                  // 11-10-10 JS 
	     dnsDomainIs(host, ".bioscirep.org")        ||                 // 11-10-10 JS 
	     dnsDomainIs(host, ".babonline.org")        ||                 // 11-10-10 JS 
	     dnsDomainIs(host, ".cellbiolint.org")      ||                 // 11-10-10 JS 
	     dnsDomainIs(host, ".cellbiolintrep.org")   ||                 // 11-10-10 JS 
	     dnsDomainIs(host, ".clinsci.org")          ||                 // 11-10-10 JS 

             shExpMatch(url, "http://symposia.biochemistry.org/*")   ||    // 11-10-10 JS 
             shExpMatch(url, "http://essays.biochemistry.org/*")     ||    // 11-10-10 JS 
             
	     dnsDomainIs(host, ".b-i-t-online.de") ||                      // 09-05-21 JS 
	     dnsDomainIs(host, ".basarchive.org") ||                       // 09-17-07 DK
	     dnsDomainIs(host, ".bdsl-online.de") ||                       // 04-09-02 DK
	     dnsDomainIs(host, ".bepress.com") ||                          // 04-09-02 DK
	     dnsDomainIs(host, "beck-online.beck.de") ||                  // 02-12-2008 DZ
	     dnsDomainIs(host, ".berghahnbooksonline.com") ||              // 05-05-05 DK
	     dnsDomainIs(host, ".bfafh.de") ||                             // 04-25-11 JS
	     dnsDomainIs(host, ".bgbm.org") ||                             // 04-24-06 DK
	     dnsDomainIs(host, ".biblio.tu-bs.de") ||
	     dnsDomainIs(host, ".bibliothek.uni-regensburg.de") ||         // 03-23-04 DK
	     dnsDomainIs(host, ".biolbull.org") ||                         // 10-19-05 DK
	     dnsDomainIs(host, ".biochemj.org") ||
	     dnsDomainIs(host, ".biologists.com") ||
	     dnsDomainIs(host, ".biologists.org") ||
	     dnsDomainIs(host, ".biolreprod.org") ||
	     dnsDomainIs(host, ".bioone.org") ||                           // 02-07-02 DK
	     dnsDomainIs(host, ".biophysj.org") ||
	     dnsDomainIs(host, ".biosciencenetbase.com") ||                // 05-17-07 DK
	     dnsDomainIs(host, ".birds.cornell.edu") ||                    // 01-04-05 DK
	     dnsDomainIs(host, ".bir.org.uk") ||
	     dnsDomainIs(host, "blackwell-synergy.com") ||
	     dnsDomainIs(host, ".blackwellsynergy.com") ||                 // 02-10-05 DK
	     dnsDomainIs(host, ".blldb-online.de") ||                      // 04-28-06 DK TEST
	     dnsDomainIs(host, ".bloodjournal.org") ||                     // 05-21-03 DK
	     dnsDomainIs(host, ".hematologylibrary.org") ||                // 03-27-07 DK
	     dnsDomainIs(host, ".bmjjournals.com") ||
	     dnsDomainIs(host, ".bmj.com") ||                              // 02-02-07 DK
	     dnsDomainIs(host, ".bna.com") ||                              // 01-09-04 DK
	     dnsDomainIs(host, ".booksinprint.com") ||
	     dnsDomainIs(host, ".brill.nl") ||                             // 11-07-06 DK
	     dnsDomainIs(host, ".brillonline.nl") ||                       // 11-07-06 DK
	     dnsDomainIs(host, ".buildinggreen.com") ||                    // 03-27-06 DK
	     dnsDomainIs(host, ".businessnetbase.com") ||                  // 05-17-07 DK
	     dnsDomainIs(host, ".globalbooksinprint.com") ||               // 07-14-03 DK
	     dnsDomainIs(host, ".brepolis.net") ||                         // 12-06-01 DK
	     dnsDomainIs(host, ".bssaonline.org") ||                // 09-13-07 DK
	     dnsDomainIs(host, ".buddhism-dict.net") ||             // 09-05-08 JS 
	     dnsDomainIs(host, ".businessmonitor.com") ||           // 09-09-05 DK
             shExpMatch(url, "http://byronjournal.lupjournals.org/*")   ||    // 05-18-09 JS 
	     dnsDomainIs(host, ".caareviews.org") ||                // 03-18-09 JS
	     dnsDomainIs(host, ".cababstractsplus.org") ||          // 06-25-08 JS 
	     dnsDomainIs(host, "cairn.info") ||                     // 02-01-10 JS
	     dnsDomainIs(host, "calico.org") ||                     // 07-18-07 DK
	     shExpMatch(url, "http://www.fkit.hr/cabeq/*") ||                 // 02-06-08 DZ
	     dnsDomainIs(host, ".cambridgesoft.com") ||             // 03-30-05 DK
	     dnsDomainIs(host, ".cancercell.org") ||                // 01-12-04 DK
	     dnsDomainIs(host, ".catchword.org") ||                 // 02-14-06 DK (Worldbank)
	     shExpMatch(url, "http://cccc.uochb.cas.cz/*") ||   // 04-14-10 JS
	     shExpMatch(url, "http://digital.casalini.it/*") ||     //01-25-08 DZ 
	     dnsDomainIs(host, ".catchword.com") ||
	     dnsDomainIs(host, ".catchword.co.uk") ||
	     dnsDomainIs(host, ".cch.com") ||                       // 06-21-06 DK
             dnsDomainIs(host, ".cchgroup.com") ||                  // 06-26-07 DK
	     dnsDomainIs(host, ".cedram.org") ||                    // 12-04-06 DK (An. de l'Inst. Fourier)
	     dnsDomainIs(host, ".ccinfoweb.ccohs.ca") ||
	     dnsDomainIs(host, ".cell.com") ||                      // 01-12-04 DK
             shExpMatch(url, "http://publishing.cdlib.org/*") || // 04-06-10 LK 
	     shExpMatch(url, "https://request-stage.cdlib.org:4502/*") || // 03-01-08 DZ
             shExpMatch(url, "https://request-stage.cdlib.org:4503/*") || // 03-01-08 DZ
             shExpMatch(url, "https://request-stage.cdlib.org:4504/*") || // 03-01-08 DZ
             shExpMatch(url, "http://ucelinks.cdlib.org:8888/*") || // 11-17-05 DK
             shExpMatch(url, "http://imageservice.cdlib.org/*") ||  // 11-17-05 DK
             shExpMatch(url, "http://texts.cdlib.org/*") ||         // 11-16-05 DK
             shExpMatch(url, "http://content.cdlib.org/*") ||       // 11-16-05 DK
             shExpMatch(url, "http://ucill.cdlib.org:8082/*") ||    // 10-24-07 DK
             shExpMatch(url, "http://melvyl.cdlib.org/*") ||        // 11-13-06 DK
             shExpMatch(url, "http://www.cdlib.org/inside/help/*") ||               // 01-25-07 DK
             shExpMatch(url, "http://ceb.com/*") ||                 // 09-07-10 JS
             dnsDomainIs(host, ".ceeol.com")    ||                  // 11-25-09 JS
	     dnsDomainIs(host, ".chicagomanualofstyle.org") ||      // 12-21-06 DK
             shExpMatch(url, "http://cip.cornell.edu/*") ||         // 08-01-06 DK
	     dnsDomainIs(host, ".chadwyck.com") ||
	     dnsDomainIs(host, ".chadwyck.co.uk") ||
             dnsDomainIs(host, ".chant.org") || 		    // 09-02-10 LK 
	     shExpMatch(url, "https://www.chant.org/*")      ||     // 02-20-09 JS
	     dnsDomainIs(host, ".champion-electronique.com") ||     // 05-20-04 DK Dictionnaire
	     dnsDomainIs(host, ".champion-electronique.net") ||     // 11-29-07 DK Dictionnaire
             shExpMatch(url, "http://213.56.90.4/*") ||             // 05-20-04 DK Dictionnaire
	     dnsDomainIs(host, ".chelonianjournals.org") ||         // 09-29-10 JS
	     dnsDomainIs(host, ".chembiol.com") ||                  // 01-12-04 DK
             shExpMatch(url, "http://chemeducator.org/tceinst/*") ||        // 02-19-04 DK
             dnsDomainIs(host, ".chem.wisc.edu") ||                 // DK 7-30-01
             shExpMatch(url, "http://www.classiques-garnier.com/numerique-bases/*") ||   // 01-09-09 JS 
             dnsDomainIs(host, ".divched.org") ||                   // 02-05-04 DK (for .chem.wisc.edu)
             dnsDomainIs(host, ".chemnetbase.com") ||               // DK 02-20-02
             shExpMatch(url, "http://poc.chemnetbase.com/*") ||     // 08-16-10 JS
	     dnsDomainIs(host, ".chemlibnetbase.com") ||            // 05-17-07 DK
             shExpMatch(url, "http://image2.5read.com/*") ||            // 04-17-2008 DZ 
             dnsDomainIs(host, ".image2.5read.com") ||               // 04-15-2008 DZ 
             dnsDomainIs(host, ".img.chinamaxx.net") ||              // 04-15-2008 DZ 
             dnsDomainIs(host, ".read.chinamaxx.net") ||             // 04-15-2008 DZ 
             dnsDomainIs(host, ".chinamaxx.net") ||                 // 01-22-07 DK
             dnsDomainIs(host, ".chinamaxx.net:8080") ||             // 04-11-08 DZ
             dnsDomainIs(host, ".chinadevelopmentbrief.com") ||     // 05-15-07 DK
	     dnsDomainIs(host, ".civilengineeringnetbase.com") ||   // 05-17-07 DK
             dnsDomainIs(host, ".duxiu.com") ||                     // 04-25-07 DK (for Chinamaxx)
             dnsDomainIs(host, ".sslibrary.com") ||                 // 04-25-07 DK (for Chinamaxx)
             dnsDomainIs(host, ".ssreader.com") ||                  // 04-25-07 DK (for Chinamaxx)
             dnsDomainIs(host, ".chineseplantscience.com") ||       // 07-05-06 DK
	     shExpMatch(url, "http://chinadataonline.org/*") ||     // 04-27-05 DK
	     shExpMatch(url, "http://141.211.136.211/*") ||         // 04-27-05 DK
	     shExpMatch(url, "http://141.211.142.26/*") ||          // 09-14-05 DK China Data Center
             shExpMatch(url, "https://cindasdata.com/*") ||         // 05-24-05 CINDAS
             shExpMatch(url, "http://cindasdata.com/*") ||          // 05-24-05 CINDAS
             shExpMatch(url, "cindasdata.com/*") ||                 // 05-24-05 CINDAS
             dnsDomainIs(host, "cindasdata.com") ||                 // 05-24-05 CINDAS
             dnsDomainIs(host, ".cjche.ca") ||                      // 04-19-07 DK
             dnsDomainIs(host, ".clarku.edu") ||                    // 02-15-06 DK
             dnsDomainIs(host, ".cms.math.ca") ||                   // DK 06-11-02
             shExpMatch(url, "http://data.cnki.net/*") ||           // 02-01-11 JS
             dnsDomainIs(host, "cognet.mit.edu") ||                 // DK 03-12-02
             dnsDomainIs(host, ".columbiagrangers.org") ||          // 12-07-04 DK
             dnsDomainIs(host, ".communication.gc.ca") ||           // 12-07-05 DK
             dnsDomainIs(host, ".companiontophonology.com") ||      // 05-12-11 JS 
             dnsDomainIs(host, ".conference-board.org") ||          // 07-08-02 DK
             dnsDomainIs(host, ".cotar-online.co.il") ||            // 08-20-10 JS
             dnsDomainIs(host, ".hbcpnetbase.com") ||               // DK 02-20-02 Handbook of Chem & Phys
             shExpMatch(url, "http://208.254.79.26/*") ||           // 09-16-04 DK Handbook of Chem & Phys
             shExpMatch(url, "https://www.crops.org/*") ||          // 08-10-10 JS  
             dnsDomainIs(host, ".crcpress.com") ||                  // 09-16-04 DK Handbook of Chem & Phys
             dnsDomainIs(host, ".atsdr.net") ||                     // DK 02-20-02
             shExpMatch(url, "https://checkpoint.riag.com/*") ||    // LK 6-23-09	  
	     shExpMatch(url, "http://checkpoint.riag.com/*") ||     // JG 08-30-05
	     dnsDomainIs(host, ".chemistry.org") ||                 // 04-08-03 DK
             shExpMatch(url, "http://chronicle.com/*") ||           // 02-24-06 DK
	     dnsDomainIs(host, ".ciaonet.org") ||
	     dnsDomainIs(host, ".cleantechnetbase.com") ||          // 10-18-07 DZ
	     dnsDomainIs(host, ".clinchem.org") ||                  // 07-14-03 DK
	     dnsDomainIs(host, ".math-cs.cmsu.edu") ||
	     dnsDomainIs(host, ".cnbksy.com")       ||              // 08-06-08 JS
	     dnsDomainIs(host, ".collegesource.org") ||
	     dnsDomainIs(host, ".columbiagazetteer.org") ||         // 02-03-03 DK
	     dnsDomainIs(host, ".combinatorics.org") ||
	     dnsDomainIs(host, ".comp-index.com") ||
	     dnsDomainIs(host, ".complianceweek.com") ||           // 04-11-07 DK
	     dnsDomainIs(host, ".computer.org") ||
	     dnsDomainIs(host, ".computernetbase.com") ||          // 10-18-07 DZ
	     dnsDomainIs(host, ".corptech.com") ||                 // DK 09-15-04
	     dnsDomainIs(host, ".corneajrnl.com") ||               // DK 10-01-01
	     dnsDomainIs(host, ".lwwonline.com") ||                // DK 10-04-01 (for corneajrnl)
	     dnsDomainIs(host, ".cqpress.com") ||
	     dnsDomainIs(host, ".crcjournals.com") ||              // 09-24-02 DK
             dnsDomainIs(host, ".crcnetbase.com") ||               // 02-13-06 DK
             shExpMatch(url, "http://dds.crl.edu/*") ||            // 12-22-08 JS
             shExpMatch(url, "http://catalog.crl.edu/*") ||        // 12-22-08 JS
	     dnsDomainIs(host, ".cro2.org") ||                     // 01-27-11 JS
	     dnsDomainIs(host, ".csa.com") ||
	     dnsDomainIs(host, ".csa2.com") ||
	     dnsDomainIs(host, ".csa3.com") ||
	     dnsDomainIs(host, ".cshlp.org") ||                    // 08-05-08 JS 
	     dnsDomainIs(host, ".cshl-symposium.org") ||           // 09-10-04 DK
             shExpMatch(url, "http://cshmonographs.org/*") ||      // 06-22-10 JS
	     dnsDomainIs(host, ".cshprotocols.org") ||             // 07-23-07 DK
	     dnsDomainIs(host, ".csj.jp") ||                       // 03-03-04 DK
	     dnsDomainIs(host, ".publish.csiro.au") ||             // 01-16-03 DK CSIRO
	     dnsDomainIs(host, ".journals.cup.org") ||
	     dnsDomainIs(host, ".cambridge.org") ||                // DK 01/29/03
	     dnsDomainIs(host, ".current-biology.com") ||          // 01-12-04 DK
             shExpMatch(url, "http://cumincad.scix.net/*") ||      // 03-21-11 JS
	     dnsDomainIs(host, ".cup.cam.ac.uk") ||                // DK 05/08/03
	     dnsDomainIs(host, ".currentdigest.org") ||            // 03-30-04 DK
	     dnsDomainIs(host, ".datapages.com") ||                // 03-27-07 DK
	     dnsDomainIs(host, ".dbpia.co.kr") ||                  // 01-16-04 DK
             shExpMatch(url, "http://db.saur.de/DLO/*")   || //03-25-09 JS 
	     dnsDomainIs(host, ".degruyter.com") ||                // DK 09-20-01
	     dnsDomainIs(host, ".degruyter.de") ||                 // DK 09-26-01
	     dnsDomainIs(host, ".dekker.com") ||                   // DK 04-03-02
             shExpMatch(url, "http://dekker.com/*") ||             // 10-07-04 DK
	     dnsDomainIs(host, ".demarque.com") ||                 // 02-06-2008 DZ 
	     dnsDomainIs(host, ".ddp-ext.worldbank.org") ||        // 03-27-2008 DZ 
	     dnsDomainIs(host, ".developmentalcell.com") ||        // 01-12-04 DK
	     dnsDomainIs(host, ".djnr.com") ||
	     dnsDomainIs(host, ".dhs.ca.gov") ||                   // 12-18-02 DK (mod 08-02-07 DK)
	     dnsDomainIs(host, ".dialog.com") ||                   // 06-02-03 DK World News Connection
	     dnsDomainIs(host, ".dictionaryofeconomics.com") ||    // 01-11-10 JS
             shExpMatch(url, "http://digitalcommons.library.arizona.edu/*")    ||  // 03-02-10 JS
	     dnsDomainIs(host, ".digitalpublishingguide.com") ||   // 09-23-03 DK
	     dnsDomainIs(host, ".digizeitschriften.de") ||         // 07-24-07 DK
	     dnsDomainIs(host, ".discoverygate.com") ||            // 09-27-07 DK
	     dnsDomainIs(host, ".dl.begellhouse.com") ||	   // 07/26/10 LK	
             shExpMatch(url, "http://dl.begellhouse.com/*")    ||  // 07-14-09 JS
	     dnsDomainIs(host, ".dramonline.org") ||               // 10-09-09 JS
	     dnsDomainIs(host, ".dsdigital.de")   ||               // 01-12-10 JS 
	     dnsDomainIs(host, ".dukeupress.edu") ||               // 12-09-05 DK 
	     dnsDomainIs(host, ".dukejournals.org") ||             // 06-16-06 DK 
	     dnsDomainIs(host, ".dyabola.de") ||                   // 12-18-03 DK 
	     dnsDomainIs(host, ".earlymodernitaly.com") ||         // 06-11-03 DK
	     dnsDomainIs(host, ".earthscanjournals.com") ||        // 04-19-07 DK
	     dnsDomainIs(host, ".earthscape.org") ||               // 07-24-07 DK
	     dnsDomainIs(host, ".ebiblioteka.ru") ||               // 04-07-04 DK
	     dnsDomainIs(host, ".ebmonline.org") ||                // 04-15-04 DK
	     dnsDomainIs(host, ".eblib.com") ||                    // 09-12-07 DK
	     dnsDomainIs(host, ".ebrary.com") ||                   // 09-11-07 DK
	     dnsDomainIs(host, ".ebsco.com") ||
	     dnsDomainIs(host, ".ebscohost.com") ||           // 07-28-06 DK
	     dnsDomainIs(host, ".ecoamericas.com") ||
	     dnsDomainIs(host, ".ecosante.org") ||            // 10-22-10 JS 
	     dnsDomainIs(host, ".ecosal.org") ||              // 03-09-06 DK
	     dnsDomainIs(host, ".ed-phys.fr") ||
	     dnsDomainIs(host, ".edpsciences.com") ||
	     dnsDomainIs(host, ".edpsciences.org") ||         // 04-14-03 DK
	     dnsDomainIs(host, ".edpsciences.fr") ||          // 02-26-02 DK
	     dnsDomainIs(host, ".edpsciences-usa.org") ||     // 02-26-02 DK
	     dnsDomainIs(host, ".edreview.org") ||            // 09-26-05 DK
	     dnsDomainIs(host, ".edrs.com") ||
	     dnsDomainIs(host, ".edweek.org")          ||     // 12-20-10 JS
             shExpMatch(url, "http://ehrafarchaeology.yale.edu/*") ||     // 04-29-09 JS
             shExpMatch(url, "http://ehrafworldcultures.yale.edu/*") ||  // 04-29-09 JS
             shExpMatch(url, "https://www.etde.org/*") ||     // 11-14-08 JS
	     dnsDomainIs(host, "hood.ei.org") ||
	     dnsDomainIs(host, ".eastview.com") ||            // 02-20-02 DK China Acad Jour
	     shExpMatch(url, "http://ucsdskqs.eastview.com/*") ||     // 02-25-11 JS
	     shExpMatch(url, "http://211.151.91.68/*") ||     // 02-27-04 DK China Acad Jour
	     shExpMatch(url, "http://211.151.91.78/*") ||     // 02-27-04 DK China Acad Jour
	     shExpMatch(url, "http://211.151.91.79/*") ||     // 02-13-04 DK China Acad Jour
	     dnsDomainIs(host, ".economicsnetbase.com") ||    // 05-17-07 DK
	     shExpMatch(url, "http://www.edata-center.com/journals/38cb2223012b73f2.html") ||  // 01-22-09 JS 
             dnsDomainIs(host, ".edata-center.com") ||	      // 07-14-09 JS	
	     dnsDomainIs(host, ".eenews.net") ||              // 01-15-02 DK
	     dnsDomainIs(host, ".eiu.com") ||
	     dnsDomainIs(host, ".ejbjs.org") ||                           // DK 10-04-01

             // Digital Plant Atlas 
             shExpMatch(url, "http://econ.eldoc.ub.rug.nl/*") ||     // 02-18-11 JS
             shExpMatch(url, "http://seeds.eldoc.ub.rug.nl/*") ||     // 02-18-11 JS


	     dnsDomainIs(host, ".ammonsscientific.com")   ||    // 04/07/2008 DZ
	     shExpMatch(url, "http://www.fdpsa.com/*") ||       // 04/07/2008 DZ 
             shExpMatch(url, "http://spuc.egreenapple.com/*") ||  // 06-28-11 JS
	     dnsDomainIs(host, ".electricalengineeringnetbase.com") ||    // 05-17-07 DK
	     dnsDomainIs(host, ".electronicipc.com") ||                   // 05-02-05 DK
	     dnsDomainIs(host, ".elecpubs.sae.org") ||        // SAE Standards & Pubs 01/30/01
	     dnsDomainIs(host, ".electrochem.org") ||         // 04-18-06 DK
	     dnsDomainIs(host, ".elr.info") ||                // 07-18-03 DK Environ Law Rep
             shExpMatch(url, "http://totalaccess.emarketer.com/*") || // 06-08-11 JS 
	     dnsDomainIs(host, ".emerald-library.com") ||
	     dnsDomainIs(host, ".emeraldinsight.com") ||      // 06-08-05 DK
	     dnsDomainIs(host, ".emboj.org") ||
	     dnsDomainIs(host, ".npgjournals.com") ||         // 11-15-05 DK
	     dnsDomainIs(host, ".emergence.org") ||           // 08-28-08 JS	
	     dnsDomainIs(host, ".emis.de") ||
	     dnsDomainIs(host, ".emusicinprint.com") ||       // 06-04-02 DK
	     dnsDomainIs(host, ".emusicquest.com") ||         // 06-16-02 DK
	     dnsDomainIs(host, ".ems-ph.org") ||              // 10-12-04 DK
	     dnsDomainIs(host, ".ency-astro.com") ||          // 07/13/01
	     dnsDomainIs(host, ".encykorea.com") ||           // 01/16/04 DK
	     dnsDomainIs(host, ".endocrinology-journals.org") ||    // 10/22/04 DK
	     dnsDomainIs(host, ".endojournals.org") ||        // 01/13/03 DK (Endocr. Soc. Journals)

             //Energy central resources
             shExpMatch(url, "http://pro.energycentral.com/*") || // 11/24/10 JS 
	     dnsDomainIs(host, ".energypulse.net") ||             // 11/24/10 JS
	     dnsDomainIs(host, ".energycentral.com") ||           // 11/24/10 JS

             //L'Enseignement mathematique
	     dnsDomainIs(host, ".e-lib.ch") ||              // 11-29-10 JS
	     dnsDomainIs(host, ".unige.ch") ||              // 11-29-10 JS 
             shExpMatch(url, "http://retro.seals.ch/*") ||  // 11-29-10 JS 


	     dnsDomainIs(host, ".engnetbase.com") ||          // 11-14-01 DK
	     dnsDomainIs(host, ".engineeringvillage.com") ||  // 09-16-10 LK 
	     dnsDomainIs(host, ".engineeringvillage2.org") || // 01-21-05 DK
	     dnsDomainIs(host, ".entsoc.org") ||              // 06-02-05 DK
             dnsDomainIs(host, "enterprise.micronexx.com") || // 05-29-08 LK
	     dnsDomainIs(host, ".envplan.com") ||             // DK 7-30-01
             dnsDomainIs(host, ".environetbase.com") ||       // 09-16-02 DK
             dnsDomainIs(host, ".epnet.com") ||               // 09-15-04 DK
             dnsDomainIs(host, ".epw.in") ||                  // 06-17-08 JS 
	     dnsDomainIs(host, ".ergonomicsnetbase.com") ||   // 05-17-07 DK
             dnsDomainIs(host, ".erudit.org") ||              // 09-13-07 DK
             shExpMatch(url, "http://webserver.erwin-rauner.de/crophius/*") || // 02-12-09 JS
             shExpMatch(url, "http://erj.ersjournals.com/*") ||  // 05-19-10  JS
             dnsDomainIs(host, ".esajournals.org") ||         // DK 2-07-02 fixed 2-11-02
             shExpMatch(url, "http://www.escholarship.org/editions/*") ||   // 05-27-08 JS  
             shExpMatch(url, "http://myesv.info/*")  ||       // 01-12-10 JS  
             shExpMatch(url, "http://esv.info/*")  || 	      // 01-12-10 JS  
             dnsDomainIs(host, ".myesv.info")   ||               // 01-12-10 JS 
             dnsDomainIs(host, ".esv.info")   ||               // 01-12-10 JS 
             dnsDomainIs(host, ".etsupp.com") ||              // 08-19-03 DK (Proquest Man. Intern. Rev.)
             dnsDomainIs(host, ".eupjournals.com") ||         // 09-16-08 JS 
             dnsDomainIs(host, ".euromonitor.com") ||         // DK 12-06-01 Global Market Info Db
             dnsDomainIs(host, ".europaworld.com") ||         // 12-07-04 DK
             dnsDomainIs(host, ".evolutionary-ecology.com") ||        // 07-08-03 DK
             dnsDomainIs(host, ".extenza-eps.com") ||         // 09-23-03 DK (Neurocase)
             dnsDomainIs(host, ".e-enlightenment.com") ||     // 09-29-10 JS
	     dnsDomainIs(host, ".factiva.com") ||             // 06-17-02 DK
	     dnsDomainIs(host, ".familiesinsociety.org") ||   // 09-08-10 JS
	     dnsDomainIs(host, ".f1000biology.com") ||        // 03-08-06 JG
	     dnsDomainIs(host, ".f1000medicine.com") ||       // 07-10-07 DK
	     dnsDomainIs(host, ".familyprocess.org") ||       // 07-30-03 DK
	     dnsDomainIs(host, ".fasebj.org" ) ||             // DK 10-28-02
	     dnsDomainIs(host, ".fass.org" ) ||               // 04-15-04 DK
	     dnsDomainIs(host, ".fao.org" ) ||                // 05-23-05 DK FAO
	     dnsDomainIs(host, ".faulkner.com" ) ||           // 01-15-03 DK Faulkner Advisory


             // CRL-sponsored trial online version of German newspaper, will expire
             shExpMatch(url, "http://business-archiv.faz.net/*")  || 	      // 06-15-11 JS  
         
	     dnsDomainIs(host, ".febsjournal.org") ||         // 06-30-05 DK
	     dnsDomainIs(host, ".fedworld.gov") ||
	     dnsDomainIs(host, ".fisheries.org") ||           // 06-23-03 DK
	     dnsDomainIs(host, ".foreignlawguide.com" ) ||    // DK 9-26-01
	     dnsDomainIs(host, ".forensicnetbase.com" ) ||    // 09-16-02 DK
	     dnsDomainIs(host, ".foodnetbase.com" ) ||        // 02-03-03 DK
	     dnsDomainIs(host, ".frost.com") ||               // 05-06-11 JS 
	     dnsDomainIs(host, ".frymulti.com") ||            // 10-08-04 DK
	     dnsDomainIs(host, ".gale.com") ||                // GaleNet (01/26/01)
	     dnsDomainIs(host, ".galegroup.com") ||
	     dnsDomainIs(host, ".galenet.com") ||
	     dnsDomainIs(host, ".galenet.gale.com") ||
	     dnsDomainIs(host, ".gbv.de") ||
	     dnsDomainIs(host, ".genesdev.org") ||
	     dnsDomainIs(host, ".genetics.org") ||
	     dnsDomainIs(host, ".genome.org") ||
             shExpMatch(url, "http://genomebiology.com") ||        // 03-23-04 DK
             shExpMatch(url, "http://genomebiology.com/*") ||      // 03-23-04 DK
	     dnsDomainIs(host, ".geosociety.org") ||               // 08/25/09 JS 
	     dnsDomainIs(host, ".geography.org.uk") ||             // 11/16/10 JS 

	     dnsDomainIs(host, ".getthatmag.com") ||               // 11/20/09 JS 
	     dnsDomainIs(host, ".getthatmag.co.uk") ||             // 11/25/09 JS 
	     dnsDomainIs(host, ".blueprintmagazine.co.uk") ||      // 11/23/09 JS 
             shExpMatch(url, "http://viewer.zmags.co.uk/*") ||     // 11/23/09 JS
             shExpMatch(url, "http://zview1.zmags.co.uk/*") ||     // 11/23/09 JS
             shExpMatch(url, "http://zview1.zmags.com/*") ||     // 11/25/09 JS
             shExpMatch(url, "http://zviewer.zmags.com/*") ||     // 11/25/09 JS
             shExpMatch(url, "http://stats.zmags.com/*")  ||       // 11/23/09 JS 
             dnsDomainIs(host, ".zmags.com")  ||                   // 11/25/09 JS 
              
	     dnsDomainIs(host, ".ggimg.com") ||                    // 11-02-05 DK
	     dnsDomainIs(host, ".globalfindata.com") ||            // DK 04-30-02
	     dnsDomainIs(host, ".globalfinancialdata.com") ||      // JG 08-30-05
	     dnsDomainIs(host, ".globalroadwarrior.com") ||        // JS 05-23-08
	     dnsDomainIs(host, ".global-sci.org") ||               // JS 07-01-08
	     dnsDomainIs(host, ".greenwood.com") ||                // 08-11-08 JS
	     dnsDomainIs(host, ".grolier.com") ||
	     dnsDomainIs(host, ".groveart.com") ||
	     dnsDomainIs(host, ".grovemusic.com") ||               // 02/23/01
             shExpMatch(url, "http://geology.gsapubs.org/*") ||    // 06/17/11 JS
             shExpMatch(url, "http://gsabulletin.gsapubs.org/*") ||  // 08/25/09 JS
	     dnsDomainIs(host, ".guidetoreference.org") ||         // 02/17/09 JS
             shExpMatch(url, "http://guji.unihan.com.cn/*") ||     // 08/17/10 JS
	     dnsDomainIs(host, ".gutenberg-e.org") ||              // 02/23/01

	     dnsDomainIs(host, ".haraldfischerverlag.de") ||       // 05/25/11 JS 
	     dnsDomainIs(host, ".trew-letters.com")       ||       // 05/25/11 JS 

	     dnsDomainIs(host, ".harcourt-international.com") ||
	     dnsDomainIs(host, ".harpweek.com") ||
	     dnsDomainIs(host, ".hartjournals.co.uk") ||           // 09-19-08 JS
	     dnsDomainIs(host, ".haworthpressinc.com") ||          // 04-04-03 DK
	     dnsDomainIs(host, ".haworthpress.com") ||             // 02-12-04 DK
             shExpMatch(url, "http://haworthpress.com/*") ||       // 02-04-04 DK
             shExpMatch(url, "https://haworthpress.com/*") ||      // 11-19-2008 DZ
	     dnsDomainIs(host, ".healthaffairs.org") ||            // 09-13-04 DK
	     dnsDomainIs(host, ".hebrew-bibliography.com") ||      // 07-24-07 DK
	     shExpMatch(url, "http://hebrew-treasures.huji.ac.il/*") ||    // 05-15-2008 DZ 
	     dnsDomainIs(host, "heinonline.org") ||
	     dnsDomainIs(host, ".heinonline.org") ||
	     dnsDomainIs(host, ".heldermann.de") ||                // 06-12-07 DK
             shExpMatch(url, "http://hematologylibrary.org/*") ||  // 03-21-07 JG
	     dnsDomainIs(host, ".heronpublishing.com") ||
             shExpMatch(url, "http://heronpublishing.com/*") ||    // 04-18-03 DK
             
	     dnsDomainIs(host, ".hepg.org")                  ||    // 01-07-11 JS
             shExpMatch(url, "http://her.hepg.org/*")        ||    // 01-07-11 JS

             shExpMatch(url, "http://www.math.uh.edu/~hjm/*") ||   // 12-15-03 DK Houston J of Math
             shExpMatch(url, "http://hjm.math.unizh.ch/*") ||      // 12-15-03 DK Houston J of Math mirror
	     dnsDomainIs(host, ".highwire.org") ||
	     dnsDomainIs(host, ".hindawi.com") ||                  // 01-31-07 DK
	     dnsDomainIs(host, ".historycoop.org") ||              // 09-24-03 DK
	     dnsDomainIs(host, ".historycooperative.org") ||       // 11-20-03 DK
	     dnsDomainIs(host, ".hoovers.com") ||
	     dnsDomainIs(host, ".hppmusicindex.com") ||            // 01-27-03 DK (Music Ind Online)
	     dnsDomainIs(host, ".humanapress.com") ||              // 07-01-03 DK 
	     dnsDomainIs(host, ".hwwilson.com") ||
	     dnsDomainIs(host, ".hwwilsonweb.com") ||
	     dnsDomainIs(host, "hwwilsonweb.com") ||
	     dnsDomainIs(host, ".iareporter.com")         ||       // 08-31-10  JS 
	     dnsDomainIs(host, ".ibfd.org")         ||             // 01-26-09  JS 
	     dnsDomainIs(host, ".ibisworld.com") ||                // 07-15-08 JS 
             shExpMatch(url, "http://ibisworld.com/*")||	   // 07-17-09 LK
	     dnsDomainIs(host, ".icevirtuallibrary.com") ||        // 03-29-10 JS 
	     shExpMatch(url, "http://icsd.fiz-karlsruhe.de/*") ||       // 06-27-07 DK  12-03-09 JS change icsdweb to icsd
             shExpMatch(url, "http://ref.idoican.com.cn/uc/*") ||  // 10-17-08 JS 
	     dnsDomainIs(host, ".iee.org") ||                      // 01-21-05 DK
	     dnsDomainIs(host, ".iee.org.uk") ||                   // 03-12-04 DK
	     dnsDomainIs(host, ".ieee.org") ||                     // 01-26-04 DK
             shExpMatch(url, "http://imfstatistics.org/*") ||      // 10-15-03 DK (Intl Finan Stats)
             shExpMatch(url, "http://ifs.apdi.net/imf/*") ||       // 10-14-03 DK (Intl Finan Stats)
	     dnsDomainIs(host, ".apdi.net") ||                     // 04-19-05 DK (Intl Finan Stats)
	     dnsDomainIs(host, ".imfstatistics.org") ||            // 04-20-05 DK (Intl Finan Stats)
	     dnsDomainIs(host, ".ieice.or.jp") ||                  // 09-23-03 DK (IEICE)
	     dnsDomainIs(host, ".ihs.com") ||
	     dnsDomainIs(host, ".ijdb.ehu.es") ||                  // 01-06-04 DK
	     dnsDomainIs(host, ".ijee.dit.ie") ||                  // 11-10-04 DK

	     dnsDomainIs(host, ".ijmr.com") ||                    // 05/25/11 JS 
             shExpMatch(url, "http://www.ijmr.com/*")  ||         // 05/25/11 JS      
	     dnsDomainIs(host, ".mrs.org.uk") ||                  // 05/25/11 JS 

	     dnsDomainIs(host, ".ijoeh.com") ||                  // 01-11-10 JS 
             shExpMatch(url, "http://ijsa.rsmjournals.com/*") ||   // 10-03-08 JS 
             shExpMatch(url, "http://jashm.press.illinois.edu/*") ||   // 06/08/11 JS 
	     dnsDomainIs(host, ".ilrweb.com") ||                   // 06-11-08 JS
	     dnsDomainIs(host, "ams.impa.br") || 
             shExpMatch(url, "http://imfareaer.org/*") ||          // 01-14-11 JS 
	     dnsDomainIs(host, ".immunity.com") ||                 // 01-12-04 DK
	     dnsDomainIs(host, ".inderscience.com") ||             // 04-24-03 DK
	     dnsDomainIs(host, ".industrialnetbase.com") ||        // 05-17-07 DK
	     dnsDomainIs(host, ".infosecuritynetbase.com") ||      // 09-16-02 DK
	     dnsDomainIs(host, ".infotechtrends.com") ||
	     dnsDomainIs(host, ".informaworld.com") ||             // 11-28-06 DK
	     dnsDomainIs(host, "informahealthcare.com")||	// 1-14-10 LK 
	     dnsDomainIs(host, ".informs.org") ||           // http://pubsonline.informs.org/library 2/6/01
	     dnsDomainIs(host, ".info-jola.de") ||           // 10-22-10 JS 
	     dnsDomainIs(host, ".ingenta.com") ||
	     dnsDomainIs(host, ".ingentaconnect.com") ||              // 10-20-04 DK
	     dnsDomainIs(host, ".ingentaselect.com") ||               //JG 12-02-02
	     dnsDomainIs(host, ".ingentaselect.co.uk")||	      //LK 11-12-09 
	     dnsDomainIs(host, ".ingenta.com") ||                     //08-02-12 DZ
	     dnsDomainIs(host, ".impan.gov.pl") ||                    // 04-18-05 DK
	     dnsDomainIs(host, ".insidetrade.com") ||                 // 12-10-03 DK
             shExpMatch(url, "http://institution.gallup.com/*") ||    // 09-11-03 JG
	     dnsDomainIs(host, ".int-res.com") ||                     // 04-15-04 DK
	     shExpMatch(url, "http://iopscience.iop.org/*") ||        // 03-18-10 JS
	     dnsDomainIs(host, ".iop.org") ||
	     dnsDomainIs(host, ".iovs.org") ||               // DK 10-25-01
	     dnsDomainIs(host, ".ipap.jp") ||                // DK 11-25-02 (Relates to J of Phys Soc Jap)
	     dnsDomainIs(host, ".ip-watch.org") ||           // 06-28-10 JS 
             shExpMatch(url, "http://wwwsoc.nii.ac.jp/jps/*") ||      // 09-23-03 DK (J of Phys Soc Jap)
	     dnsDomainIs(host, ".iranica.com") ||            // DK 03-04-03
	     dnsDomainIs(host, ".irere.net") ||              // 08-13-08 JS 
	     shExpMatch(url, "http://ir.uiowa.edu/*") ||     // 03-02-10 JS 
	     dnsDomainIs(host, ".isinolaw.com") ||           // DK 10-23-01
	     dnsDomainIs(host, ".istructe.org") ||           // JS 09-29-08 
	     shExpMatch(url, "http://bpc.iserver.net/*") ||  // 09-12-08 JS 
	     shExpMatch(url, "http://investmentclaims.com/*") ||     // 02-20-09 JS 
	     dnsDomainIs(host, ".investorstatelawguide.com") ||   // 04-19-11 JS
	     shExpMatch(url, "http://ipra.ua.ac.be/*") ||     // 11-10-10 JS 
	     shExpMatch(url, "http://isla.lmi.net/*") ||     // 02-12-09 JS 
	     dnsDomainIs(host, ".itergateway.org") ||        // 02-20-03 DK
	     dnsDomainIs(host, ".itknowledgebase.net") ||    // 09-24-02 DK
             dnsDomainIs(host, ".iucr.org") ||               // DK 7-30-01
             dnsDomainIs(host, ".iumj.indiana.edu") ||       // JS 01-25-11 
	     dnsDomainIs(host, ".iwaponline.com") ||
	     dnsDomainIs(host, ".jacn.org") ||               // 04-15-04 DK
	     dnsDomainIs(host, ".jap.org") ||
	     dnsDomainIs(host, ".jbc.org") ||
	     dnsDomainIs(host, ".jbjs.org.uk") ||            // 04-15-04 DK
	     dnsDomainIs(host, ".jbmr-online.org") ||        // 02-25-04 DK
	     dnsDomainIs(host, ".jbsdonline.com") ||         // 12-16-03 DK JBSD
	     dnsDomainIs(host, ".mountainmedia.com") ||      // 12-16-03 DK for JBSD
	     dnsDomainIs(host, ".mtcommerce.com") ||         // 12-22-05 DK for JBSD
	     dnsDomainIs(host, ".jcb.org") ||
             shExpMatch(url, "http://jcb.rupress.org/*") ||  //11-18-09 JS 
	     dnsDomainIs(host, ".jco.org") ||
	     dnsDomainIs(host, "jcrweb.com") ||
	     dnsDomainIs(host, ".jcrweb.com") ||
	     dnsDomainIs(host, ".jem.org") ||
             shExpMatch(url, "http://jem.rupress.org/*") ||             //07-15-09 LK - related to jem.org
	     dnsDomainIs(host, ".jgp.org") ||
             shExpMatch(url, "http://jgp.rupress.org/*") ||             //11-18-09 JS 
	     dnsDomainIs(host, ".jgburkepub.com") ||                    // DK 8-17-01
	     dnsDomainIs(host, ".jhc.org") ||
	     dnsDomainIs(host, ".jhetchem.com") ||                      // 05-06-05 DK
	     shExpMatch(url, "http://muse.jhu.edu/*") ||
	     dnsDomainIs(host, ".jimmunol.org") ||                      // 02-07-02 DK
	     dnsDomainIs(host, ".jkn21.com") ||                        // 04-29-09 JS 
	     dnsDomainIs(host, ".jleukbio.org") ||                      // 01-28-02 DK
	     dnsDomainIs(host, ".jlr.org") ||
	     dnsDomainIs(host, ".jn.org") ||
	     dnsDomainIs(host, ".jneurosci.org") ||
	     dnsDomainIs(host, ".jnrlse.org") ||                        // 01-20-05 DK
	     dnsDomainIs(host, ".journaldephysique.org") ||            // 01-20-10 JS
	     dnsDomainIs(host, ".journalhydraulicresearch.com/") ||     // 09-15-06 JG
	     dnsDomainIs(host, ".journalofdairyscience.org") ||         // 04-19-11 JS
	     dnsDomainIs(host, ".journalofpediatricophthalmology.com") ||   // 05-01-2008 DZ 
	     dnsDomainIs(host, ".journalofphilosophy.org") ||           // 04-19-07 DK
	     dnsDomainIs(host, ".journalofrefractivesurgery.com") ||    // 06-08-08 JS 
	     dnsDomainIs(host, ".jove.com") ||  			// 07-21-10 JS
	     dnsDomainIs(host, ".jpet.org") ||
	     dnsDomainIs(host, ".jphysiol.org") ||                      // 04-15-04 DK
	     dnsDomainIs(host, ".jrsm.org") ||                          // 12-21-05 DK
	     dnsDomainIs(host, ".jstor.org") ||
	     dnsDomainIs(host, ".jsad.com") ||                          // 03-19-08 DZ
             shExpMatch(url, "http://jsedres.sepmonline.org/*") ||      // 05-12-10 JS
	     dnsDomainIs(host, ".juris.de") ||                          // 09-26-06 DK
	     dnsDomainIs(host, ".justis.com") ||                        // 04-17-06 DK
	     dnsDomainIs(host, ".justicetribune.com") ||                // 05-16-05 DK
	     dnsDomainIs(host, ".jwildlifedis.org") ||                  // 02-25-11 JS
             shExpMatch(url, "http://karger.com/*") ||                  // 01-16-03 DK Karger
	     dnsDomainIs(host, ".karger.com") ||                        // 3-11-02 DK
             shExpMatch(url, "http://kluweronline.com/*") ||            // 08-10-04 DK
	     dnsDomainIs(host, ".kluweronline.com") ||                  // 07-02-03 DK
	     dnsDomainIs(host, ".kluwerlawonline.com") ||               // 05-17-06 DK
	     shExpMatch(url, "http://knovel.com/*") ||                  // 06-11-08 JS
	     shExpMatch(url, "http://ww0.knovel.com/*") ||                  // 06-11-08 JS
	     shExpMatch(url, "http://www.knovel.com/*") ||                  // 06-11-08 JS
	     shExpMatch(url, "http://www.knowledgemosaic.com/*") ||         // 06-28-11 JS
	     //dnsDomainIs(host, ".knovel.com") ||
	     dnsDomainIs(host, ".korea5000.com") ||                     // 10-07-04 DK
	     dnsDomainIs(host, ".kdatabase.com") ||                     // 10-07-04 DK
	     dnsDomainIs(host, ".kpjournal.com") ||                     // 10-07-04 DK
	     dnsDomainIs(host, ".koreaa2z.com") ||                      // 01-16-04 DK
	     dnsDomainIs(host, ".koreanstudies.net") ||                 // 01-16-04 DK
	     dnsDomainIs(host, ".krpia.co.kr") ||                       // 01-16-04 DK
	     dnsDomainIs(host, ".kssc.or.kr") ||                        // 07-29-02 DK
	     dnsDomainIs(host, ".kstudy.com") ||                        // 01-16-04 DK
	     dnsDomainIs(host, ".labmath.uqam.ca") ||                   // 05-25-07 DK
	     dnsDomainIs(host, ".landolt-boernstein.com") ||            // 10-24-02 DK
	     dnsDomainIs(host, ".latinamericapress.org") ||             // 06-15-11 JS 
	     dnsDomainIs(host, ".latinobarometro.org") ||               // 06-28-11 JS 
	     dnsDomainIs(host, ".lawinfochina.com") ||                  // 10-29-01 DK
	     dnsDomainIs(host, ".uwm.edu") ||                           // 06-05-02 DK (mod 07-30-07 DK)
	     dnsDomainIs(host, ".liebertonline.com") ||                 // 03-02-05 DK
	     dnsDomainIs(host, ".libraweb.net") ||                      // 11-10-10 JS 
	     dnsDomainIs(host, ".libraryissues.com") ||                 // 04-15-04 DK
	     dnsDomainIs(host, ".library.caltech.edu") ||               // 08-28-06 DK
             shExpMatch(url, "http://resolver.caltech.edu/*") ||        // 08-29-06 DK
	     dnsDomainIs(host, ".learnmem.org") ||
	     dnsDomainIs(host, ".leaonline.com") ||                     // 03-19-04 DK 
	     dnsDomainIs(host, ".lexis-nexis.com") ||
	     dnsDomainIs(host, ".conquest-leg-insight.com") ||          // 05-12-11 JS
	     dnsDomainIs(host, ".lexisnexis.com") ||                    // 08-03-07 DK
             shExpMatch(url, "https://www.lexisnexis.com*") ||           // 08-27-2008 DZ
	     dnsDomainIs(host, ".legalabbrevs.cardiff.ac.uk") ||        // 07-21-06 DK
	     dnsDomainIs(host, ".lms.ac.uk") ||
             shExpMatch(url, "http://libnet.ac.il/*") ||                // 10-04-06 DK
	     dnsDomainIs(host, ".libnet.ac.il") ||                      // 10-04-06 DK
	     dnsDomainIs(host, ".linguisticsabstracts.com") ||          // 04-28-06 DK
	     dnsDomainIs(host, ".literarymarketplace.com") ||
	     dnsDomainIs(host, ".litfinder.com") ||                     // 04-01-02 DK
             shExpMatch(url, "http://litguide.press.jhu.edu/*") ||      // 01-13-09 JS
	     dnsDomainIs(host, ".llmc-digital.org") ||                  // 03-06-09 JS 
	     dnsDomainIs(host, ".loislaw.com")      ||                  // 06-04-10 JS 
	     dnsDomainIs(host, "lugt.idcpublishers.info") ||            // 05-22-08 JS 
             dnsDomainIs(host, ".lyellcollection.org") ||		// 01-07-09 LK 
	     dnsDomainIs(host, ".mankindquartely.org") ||               // 08-01-15 DZ 
	     dnsDomainIs(host, ".manupatra.com") ||                     // 03-25-2008 DZ 
	     dnsDomainIs(host, ".mapress.com") ||                       // 11-30-05 DK
	     dnsDomainIs(host, ".marketresearch.com") ||                // 08-28-03 DK
	     dnsDomainIs(host, ".materialsnetbase.com") ||              // 05-17-07 DK
	     dnsDomainIs(host, ".massobservation.amdigital.co.uk") ||   // 02-19-08 DZ
	     dnsDomainIs(host, ".mathjournals.org") ||                  // 08-18-06 DK
	     dnsDomainIs(host, ".mathnetbase.com") ||                   // 09-16-02 DK
	     dnsDomainIs(host, ".mayoclinicproceedings.com") ||         // 05-10-05 DK
	     dnsDomainIs(host, ".marquiswhoswho.com") || 		// 06-10-11 LK
	     shExpMatch (url, "http://marquiswhoswho.com/*") ||		// 06-10-11 LK 
	     dnsDomainIs(host, ".mechanicalengineeringnetbase.com") ||  // 05-17-07 DK
	     dnsDomainIs(host, ".mergentonline.com") ||                 // 09-29-03 DK
	     shExpMatch(url, "http://mergent.com/*") || 			// 09-08-10 LK 
	     dnsDomainIs(host, ".mergent.com") ||			// 09-08-10 LK 
	     dnsDomainIs(host, ".metapress.com") ||                     // 04-15-03 DK
	     dnsDomainIs(host, ".mcc.ac.uk") ||                         // 06-03-03 DK Goth Stud
	     dnsDomainIs(host, ".mhmgonline.com") ||                    // 09-20-04 DK 
	     dnsDomainIs(host, ".micromedex.com") ||                    // 05-20-02 DK 
             shExpMatch(url, "http://micropress.org/*") ||              // 06-27-07 DK
	     dnsDomainIs(host, ".mideastwire.com") ||                   // 07-03-07 DK 
	     dnsDomainIs(host, ".militarynetbase.com") ||               // 05-17-07 DK
	     dnsDomainIs(host, ".minsocam.org") ||                      // 04-06-07 DK 
	     dnsDomainIs(host, ".mintel.com") ||                        // 03-28-05 DK 
	     dnsDomainIs(host, ".mitpressjournals.org") ||              // 10-13-06 DK 
	     dnsDomainIs(host, ".mla.org") ||
	     dnsDomainIs(host, ".mlajournals.org") ||                   // 08-02-01 DZ
	     dnsDomainIs(host, ".mlalrg.org") ||                        // 09-13-10 JS
	     dnsDomainIs(host, ".museum.upenn.edu") ||                  // 07-18-03 DK  Expedition
	     dnsDomainIs(host, ".molbiolcell.org") ||                   // 09-24-03 DK
	     dnsDomainIs(host, ".molecule.org") ||                      // 01-12-04 DK
             shExpMatch(url, "http://moneyline.cq.com/*") ||            // 08-30-07 DK
	     dnsDomainIs(host, ".morganclaypool.com") ||                // 07-25-07 DK
	     dnsDomainIs(host, ".mpepil.com")         ||                // 10-17-08 JS 
	     dnsDomainIs(host, ".mrs.org") ||                           // 11-19-04 DK
	     dnsDomainIs(host, ".mscand.dk") ||                         // 10-22-04 DK
	     dnsDomainIs(host, ".mxresearch.com") ||                    // New Multex 10-04-01 DK
	     dnsDomainIs(host, ".multexnet.com") ||                     // Newer Multex 06-10-04 DK
	     dnsDomainIs(host, ".multidataonline.com") ||               // 09-03-08 JS 
	     dnsDomainIs(host, ".multilingual-matters.net") ||          // 04-09-05 DK
	     shExpMatch(url, "http://municipalcodes.lexisnexis.com/*") || // 09-12-08 JS 
	     dnsDomainIs(host, ".mup.man.ac.uk") ||                     // 04-13-05 DK
	     dnsDomainIs(host, ".mycologia.org") ||                     // 04-15-04 DK
	     dnsDomainIs(host, ".myendnoteweb.com") ||                  // 12-21-2007 DZ 
	     dnsDomainIs(host, ".myilibrary.com") ||                    // 09-11-07 DK
	     dnsDomainIs(host, "klymene.mpim-bonn.mpg.de") ||
	     dnsDomainIs(host, ".tac.mta.ca") ||
	     dnsDomainIs(host, ".nanonetbase.com") ||                   // 05-17-07 DK
	     dnsDomainIs(host, ".naspa.org") ||                         // 03-13-03 DK
	     dnsDomainIs(host, "nationaljournal.com") ||
	     dnsDomainIs(host, ".nationaljournal.com") ||               // 11-30-01 DK
	     dnsDomainIs(host, ".natlaw.com") ||               // 01-26-07 DK
	     shExpMatch(url, "http://natlaw.com/*") ||               // 06-15-09 JS
	     dnsDomainIs(host, ".naturalstandard.com") ||               // 01-26-07 DK
	     dnsDomainIs(host, ".nature.com") ||                        // 11-15-01 DK
	     dnsDomainIs(host, ".naxosmusiclibrary.com") ||             // 11-17-06 DK
	     dnsDomainIs(host, ".nber.org") ||                          // 11-20-01 DK
	     dnsDomainIs(host, ".ncdc.noaa.gov") ||                     // 03-02-05 DK
	     dnsDomainIs(host, ".ncte.org") ||                          // 03-05-10 JS
	     dnsDomainIs(host, ".nejm.org") ||                          // 07-16-04 DK
	     dnsDomainIs(host, ".netlibrary.com") ||
	     dnsDomainIs(host, ".neurology.org") ||                     // 05-29-02 DK
	     dnsDomainIs(host, ".neuron.org") ||                        // 01-12-04 DK
	     dnsDomainIs(host, ".neurosciencenetbase.com") ||           // 05-17-07 DK
             shExpMatch(url, "http://newleftreview.net/*") ||           // 01-29-04 DK
             shExpMatch(url,"http://news.chinatimes.com/*") ||          // 03/11/08 DZ
             dnsDomainIs(host, ".newleftreview.net") ||                 // 04-21-05 DK
	     dnsDomainIs(host, ".newleftreview.org") ||                 // 03-21-07 JG
             shExpMatch(url, "http://nzes.org.nz/*") ||                 // 01-31-05 DK
	     dnsDomainIs(host, ".newsbank.com") ||
	     dnsDomainIs(host, ".newisiknowledge.com") ||               // 12-21-2007 DZ
	     dnsDomainIs(host, ".niehs.nih.gov") ||
	     dnsDomainIs(host, ".nii.ac.jp") ||                         // 03-27-07 DK
	     dnsDomainIs(host, ".nijhoffonline.nl") ||                  // 09-11-08 JS 

	     dnsDomainIs(host, ".nikkeiamerica.com") ||                  // 01-07-11 JS 
             shExpMatch(url, "https://t21.nikkei.co.jp/*") ||            // 01-07-11 JS 

	     //dnsDomainIs(host, ".ncbi.nlm.nih.gov") ||                  // 02-06-04 DK PubMed Stuff
	     dnsDomainIs(host, ".nmanet.org") ||                        // 04-07-05 DK
	     dnsDomainIs(host, ".nisc.com") ||
	     dnsDomainIs(host, ".nlx.com") ||
	     dnsDomainIs(host, ".nowpublishers.com") ||                  // 05-03-05 DK
	     dnsDomainIs(host, ".nrc-cnrc.gc.ca") ||                     // 03-26-03 DK Can. J. Zool.
             shExpMatch(url, "http://ntrl.ntis.gov/*") ||                // 09-24-09 JS 
	     dnsDomainIs(host, ".nutrition.org") ||                      // 08-07-02 DK
             shExpMatch(url, "http://nutritioncaremanual.org/*") ||      // 01-19-07 DK
	     dnsDomainIs(host, ".nutritionnetbase.com") ||               // 05-17-07 DK
	     dnsDomainIs(host, ".nybooks.com") ||                        // 05-03-05 DK
	     dnsDomainIs(host, ".nrc.ca") ||                             // 08-14-02 DK
	     dnsDomainIs(host, ".nrcresearchpress.com") ||               // 04-25-11 JS
	     dnsDomainIs(host, ".oas.services.bmj.com") ||		 // 09-11-08 JS
	     dnsDomainIs(host, ".obesityresearch.org") ||                // 12-22-03 DK
	     dnsDomainIs(host, ".occup-healthandsafetynetbase.com") ||   // 05-17-07 DK
	     dnsDomainIs(host, ".oceanalaw.com") ||                      // 10-22-03 DK
	     dnsDomainIs(host, ".oclc.org") ||
	     dnsDomainIs(host, ".odyssi.com") ||
             shExpMatch(url, "http://oeb.griffith.ox.ac.uk/*") ||        // 03-31-10 JS
	     //dnsDomainIs(host, ".oecdilibrary.org") ||                   // 04-27-10 JS
	     dnsDomainIs(host, ".oecd-ilibrary.org") ||                  // 10-14-10 JS
	     shExpMatch(url, "http://oed.com/*") ||			// 09-24-10 LK 
	     dnsDomainIs(host, ".oed.com") ||
	     dnsDomainIs(host, ".okstate.edu") ||                        // 08-10-04 DK

             //Orientalistische Literaturzeitung
	     dnsDomainIs(host, ".oldenbourg-link.com") ||                // 11-04-10 JS 
	     dnsDomainIs(host, ".akademie-verlag.de") ||                // 11-04-10 JS 

             //Old city publishing
	     dnsDomainIs(host, ".oldcitypublishing.com") ||             // 06-20-11 JS 
             shExpMatch(url, "http://journals.sfu.ca/*") ||             // 06-20-11 JS

             shExpMatch(url, "https://openaccess.leidenuniv.nl/*") ||    // 03-24-09 JS
	     dnsDomainIs(host, ".oxfordaasc.com") ||                     // 07-16-07 DK
	     dnsDomainIs(host, ".oxforddnb.com") ||                      // 10-14-04 DK
	     dnsDomainIs(host, ".oxfordjournals.org") ||                 // 06-16-05 DK
	     dnsDomainIs(host, ".oxfordlawreports.com") ||               // 11-02-06 DK
	     dnsDomainIs(host, ".oxfordislamicstudies.com") ||           // 11-02-06 DZ
	     dnsDomainIs(host, ".oxfordhandbooks.com") ||                // 01-11-10 JS 
	     dnsDomainIs(host, "oxfordlanguagedictionaries.com") ||     // 10-24-07 DK
	     dnsDomainIs(host, ".oxfordmusiconline.com") ||              // 05-22-08 JS
	     dnsDomainIs(host, ".oxfordartonline.com") ||                // 05-22-08 JS
	     dnsDomainIs(host, ".oxfordreference.com") ||                // 11-16-04 DK
	     dnsDomainIs(host, ".oxfordscholarship.com") ||              // 01-22-04 DK
	     dnsDomainIs(host, ".oxfordwesternmusic.com") ||             // 05-25-11 JS

	     dnsDomainIs(host, ".oxford-americanfoodanddrink.com") ||    // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-americanliterature.com") ||      // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-ancientegypt.com") ||            // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-britishliterature.com")||	 // 04-05-10 LK 
	     dnsDomainIs(host, ".oxford-byzantium.com")||	         // 09-13-10 JS
	     dnsDomainIs(host, ".oxford-economichistory.com") ||         // 08-24-10 JS
             dnsDomainIs(host, ".oxford-humanrights.com") ||             // 09-03-09 JS
	     dnsDomainIs(host, ".oxford-internationallaw.com") ||        // 11-04-09 JS
	     dnsDomainIs(host, ".oxford-legalhistory.com") ||            // 04-07-09 JS
	     dnsDomainIs(host, ".oxford-latinos.com") ||                 // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-maritimehistory.com") ||         // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-mesoamerican.com") ||            // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-modernworld.com") ||             // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-peace.com") ||                   // 04-26-10 JS 
	     dnsDomainIs(host, ".oxford-reformation.com") ||             // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-renaissance.com") ||             // 09-13-10 JS
	     dnsDomainIs(host, ".oxford-theatreandperformance.com") ||   // 08-24-10 JS
	     dnsDomainIs(host, ".oxford-womenworldhistory.com") ||       // 01-22-04 DZ

             shExpMatch(url, "http://safari.oreilly.com/*") ||           // 09-04-03 JG
	     dnsDomainIs(host, ".safaribooksonline.com") ||              // 10-14-03 DK
	     dnsDomainIs(host, ".oriprobe.com") ||                       // 12-09-10 JS
	     dnsDomainIs(host, ".orspub.com") ||                         // 10-07-02 DK
	     dnsDomainIs(host, ".osa.org") ||
	     dnsDomainIs(host, ".oup.com") ||                            // Corrected 02-06-04 DK
	     dnsDomainIs(host, ".oup.co.uk") ||
	     dnsDomainIs(host, ".oupjournals.org") ||
	     dnsDomainIs(host, ".ovid.com") ||                              // 12-10-01 DK

             //Ovid resource service urls:
	     shExpMatch(url, "http://ovidsp.tx.ovid.com/*") ||              // 08-19-09 JS 
	     shExpMatch(url, "http://ovidsp.uk.ovid.com/*") ||              // 08-19-09 JS 
	     shExpMatch(url, "http://ovidsp.ovid.com/*") ||                 // 08-19-09 JS 
	     shExpMatch(url, "https://ovidsp.ovid.com/*") ||                // 08-19-09 JS 
	     shExpMatch(url, "http://pt.wkhealth.com/*") ||                 // 08-19-09 JS 
	     shExpMatch(url, "https://pt.wkhealth.com/*") ||                // 08-19-09 JS 
	     shExpMatch(url, "http://gateway.ovid.com/*") ||                // 08-19-09 JS 
	     shExpMatch(url, "https://gateway.ovid.com/*") ||               // 08-19-09 JS 
	     shExpMatch(url, "http://ssolver.ovid.com/*") ||                // 08-19-09 JS 
	     shExpMatch(url, "http://clinicalresource.ovid.com/*") ||       // 08-19-09 JS 
	     shExpMatch(url, "http://stats.ovid.com/*") ||                  // 08-19-09 JS 
	     shExpMatch(url, "http://linksolver.ovid.com/*") ||             // 08-19-09 JS 
	     shExpMatch(url, "http://clineguide.ovid.com/*") ||             // 08-19-09 JS 
	     shExpMatch(url, "http://nursing.ovid.com/*") ||                // 08-19-09 JS 

             //Korean resources:
	     dnsDomainIs(host, ".e-koreanstudies.com") ||       	    // 09-16-09 JS
             dnsDomainIs(host, ".excavation.co.kr") ||  		    // 09-16-09 JS
             dnsDomainIs(host, ".hisculture.co.kr") ||  		    // 09-16-09 JS
             dnsDomainIs(host, ".lawnb.com") ||  			    // 09-16-09 JS 

	     dnsDomainIs(host, ".otzar.org") ||                             // 06-26-07 DK
	     shExpMatch(url, "http://pacificarchaeology.org/*") ||          // 08-13-10 JS
	     dnsDomainIs(host, ".palinet.org") ||
	     dnsDomainIs(host, ".palgrave-journals.com") ||                 // 08-02-01 DZ
	     dnsDomainIs(host, ".palgraveconnect.com") ||                   // 01-28-10 JS
	     shExpMatch(url, "http://pediatrics.org/*") ||                  // 05-25-04 DK
	     shExpMatch(url, "http://pediatrics.aappublications.org/*") ||  // 05-25-04 DK
	     dnsDomainIs(host, ".peeters-leuven.be") ||                     // 10-12-04 DK
	     dnsDomainIs(host, ".pharmaceuticalnetbase.com") ||             // 05-17-07 DK
	     dnsDomainIs(host, ".psychiatrist.com") ||                      // 04-08-11 DZ 
	     shExpMatch(url, "http://psycnet.apa.org/*") ||                 // 07-20-10 JS
	     dnsDomainIs(host, ".philosophynow.org")  ||                    // 03-11-11 JS
	     dnsDomainIs(host, ".physicsnetbase.com") ||                    // 05-17-07 DK
	     dnsDomainIs(host, ".physiology.org") ||
	     dnsDomainIs(host, ".pion.co.uk") ||                            // 06-13-02 DK (courtesy for Wei Luo)
	     dnsDomainIs(host, ".pierianpress.net") ||
	     shExpMatch(url, "http://pjm.math.berkeley.edu/*") ||           // 06-05-12 JG
	     dnsDomainIs(host, ".plantcell.org") ||                         // 10-22-01 DK
	     dnsDomainIs(host, ".plantphysiol.org") ||                      // 05-14-02 DK
	     dnsDomainIs(host, ".plantsciencenetbase.com") ||               // 05-17-07 DK
	     dnsDomainIs(host, ".pnas.org") ||
	     dnsDomainIs(host, ".poemfinder.com") ||
	     dnsDomainIs(host, ".policy.rutgers.edu") ||
	     dnsDomainIs(host, ".policyfile.com") ||                        // 12-07-09 JS
             dnsDomainIs(host, ".polymersdatabase.com") ||                  // DK 02-20-02
	     dnsDomainIs(host, ".polymersnetbase.com") ||                   // 05-17-07 DK
	     dnsDomainIs(host, ".portico.org") ||                           // 12-06-07 DZ 
	     dnsDomainIs(host, ".portlandpress.com") ||                     // 09-24-03 DK (Biotech & App Biochem)
	     dnsDomainIs(host, ".pro-and-con.org") ||                       // 07-07-04 DK
	     dnsDomainIs(host, ".projectmanagementnetbase.com") ||          // 05-17-07 DK

             //Primary Sources Hebrew Printing in India   
	     dnsDomainIs(host, ".primarysourcesonline.nl")      ||          // 03-17-11 JS
             shExpMatch(url, "http://opac.idc.nl/*")            ||          // 03-17-11 JS
            
	     dnsDomainIs(host, ".proquest.com") ||        // 07-15-03 DK
	     dnsDomainIs(host, ".ulrichsweb.com") ||        // 05-06-11 JS
	     dnsDomainIs(host, ".ulrichsweb.serialssolutions.com") ||        // 05-06-11 JS
	     dnsDomainIs(host, ".serialssolutions.com") ||        // 05-06-11 JS

	     dnsDomainIs(host, ".proteinscience.org") ||  // 06-18-02 DK
	     dnsDomainIs(host, ".proteome.com") ||        // 04-08-05 DK
	     dnsDomainIs(host, ".prsgroup.com") ||        // 12-17-10 JS 
	     dnsDomainIs(host, ".psmedia.com") ||
             dnsDomainIs(host, "tls.psmedia.com") ||
	     dnsDomainIs(host, ".psocommons.org") ||       // 01-21-11 JS 
	     dnsDomainIs(host, ".psychiatryonline.org") || // 11-28-05 DK
	     dnsDomainIs(host, ".psychiatryonline.com") || // 01-15-10 JS 
             shExpMatch(url, "http://app.psychonomic-journals.org/*") ||    // 05-06-09 JS    
             shExpMatch(url, "http://brm.psychonomic-journals.org/*") ||    // 05-06-09 JS    
             shExpMatch(url, "http://cabn.psychonomic-journals.org/*") ||    // 05-06-09 JS    
             shExpMatch(url, "http://lb.psychonomic-journals.org/*") ||    // 05-06-09 JS    
             shExpMatch(url, "http://mc.psychonomic-journals.org/*") ||    // 05-06-09 JS    
             shExpMatch(url, "http://pbr.psychonomic-journals.org/*") ||    // 05-06-09 JS    
	     dnsDomainIs(host, ".publicadministrationnetbase.com") ||       // 05-17-07 DK
	     dnsDomainIs(host, ".publichealthreports.org") ||               // 09-28-10 JS
	     dnsDomainIs(host, ".qjps.com") ||                              // 10-06-06 DK
	     dnsDomainIs(host, ".quinzaine-litteraire.net") ||              // 05-21-07 DK
	     dnsDomainIs(host, ".rand.org") ||
	     dnsDomainIs(host, ".rasc.ca")  ||                              // 10-27-10 JS
	     dnsDomainIs(host, ".ravmilim.co.il") ||       // 10-31-06 DK
	     shExpMatch(url, "http://rclweb.net/*") ||     // 03-27-07 DK
	     dnsDomainIs(host, ".rclinfo.net") ||          // 03-27-07 DK
	     dnsDomainIs(host, ".rcpsych.org") ||          // 09-18-01 DK
	     dnsDomainIs(host, ".rdsinc.com") ||
	     dnsDomainIs(host, ".reproduction-online.org") ||      // 05-21-04 DK
	     dnsDomainIs(host, ".reaxys.com") ||           // 12-17-10 JS 
	     dnsDomainIs(host, ".reference-global.com") ||         // 05-15-2008   JS 
	     shExpMatch(url, "http://refworks.reference-global.com/*") || // 06-15-2011 JS
	     dnsDomainIs(host, ".researchinformation.co.uk") ||    // 03-17-04 DK
	     dnsDomainIs(host, ".responsa.co.il") ||               // 07-02-07 DK
	     dnsDomainIs(host, ".rep.routledge.com") ||            // 09-24-01 DK
	     dnsDomainIs(host, ".referenceusa.com") ||             // 01-13-06 DK
	     dnsDomainIs(host, ".refworks.com") ||                 // 06-13-02 DK
	     dnsDomainIs(host, ".regesta-imperii.org") ||          // 04-21-03 DK
	     shExpMatch(url, "http://purl.org/reltech/*") ||       // 05-29-07 DK
	     dnsDomainIs(host, ".reltech.org") ||                  // 05-29-07 DK
	     dnsDomainIs(host, ".reutersresearchondemand.com") ||  // 10-03-05 DK
	     dnsDomainIs(host, ".reviews.com") ||                  // 03-19-08 DZ 
	     dnsDomainIs(host, ".revistadelibros.com") ||          // 09-16-09 JS 
	     dnsDomainIs(host, ".revistaprl.com") ||               // 01-15-08 DZ
	     dnsDomainIs(host, "ams.rice.edu") ||
	     dnsDomainIs(host, ".rintonpress.com") ||              // 10-18-02 DK
	     dnsDomainIs(host, ".ripm.org") ||                     // 07-19-10 JS
	     dnsDomainIs(host, ".ripmfulltext.org") ||             // 07-19-10 JS
	     dnsDomainIs(host, ".rlg.org")  ||
	     shExpMatch(url, "http://rmmc.eas.asu.edu/*") ||       // 04-30-07 DK
	     dnsDomainIs(host, ".rnajournal.org")  ||              // 04-15-04 DK
	     dnsDomainIs(host, ".ropercenter.uconn.edu") ||        // 04-06-06 DK
	     dnsDomainIs(host, ".routledgepoliticsonline.com") ||  // 01-21-11 JS
	     dnsDomainIs(host, ".royalsocietypublishing.org") ||   // 08-24-10 JS
	     shExpMatch(url, "http://rspb.royalsocietypublishing.org/*") ||   // 11-30-09 JS 
	     dnsDomainIs(host, ".rsc.org") ||
	     shExpMatch(url, "http://jrsm.rsmjournals.com/*") ||        // 07-01-08 JS  
	     dnsDomainIs(host, "rsmjournals.com") ||       // 10-06-08 JS 

             //SAE Journals 01-11-11 JS
	     shExpMatch(url, "http://saeaero.saejournals.org/*") ||        
	     shExpMatch(url, "http://saecomveh.saejournals.org/*") ||        
	     shExpMatch(url, "http://saeeng.saejournals.org/*") ||        
	     shExpMatch(url, "http://saefuel.saejournals.org/*") ||        
	     shExpMatch(url, "http://saematman.saejournals.org/*") ||        
	     shExpMatch(url, "http://saepcelec.saejournals.org/*") ||        
	     shExpMatch(url, "http://saepcmech.saejournals.org/*") ||        



	     dnsDomainIs(host, ".sagepub.com") ||          // 12-23-04 DK
	     dnsDomainIs(host, ".sage-ereference.com") ||  // 10-12-10 JS
	     dnsDomainIs(host, ".saur.de") ||              // 07-05-07 DK
	     dnsDomainIs(host, ".sbp-journal.com") ||      // 02-27-04 DK
	     dnsDomainIs(host, ".sbrnet.com") ||           // 11-04-10 JS 
	     dnsDomainIs(host, ".scbbs.com") ||            // 12-10-04 DK
	     dnsDomainIs(host, ".sci-technetbase.com") ||  // 10-18-07 DZ
	     dnsDomainIs(host, ".sciamarchive.org") ||     // 05-10-02 DK
	     dnsDomainIs(host, ".sciencedirect.com") ||
	     dnsDomainIs(host, ".sciencemag.org") ||
	     dnsDomainIs(host, ".scientific.net") ||       // 01-24-06 DK
	     shExpMatch(url, "https://scifinder.cas.org/*") ||        // 09-15-08 JS 
	     dnsDomainIs(host, ".scijournals.org") ||      // 08-22-01 DK
	     dnsDomainIs(host, ".sciverse.com") ||         // 08-31-10 JS
	     dnsDomainIs(host, ".scopus.com") ||           // 03-31-09 JS
	     shExpMatch(url, "http://scopus.com/*")||	   // 04-06-09 LK
	     dnsDomainIs(host, ".sdsc.edu") ||             // 01-12-05 DK
	     dnsDomainIs(host, ".sd-editions.com") ||      // 03-01-08 DZ
	     dnsDomainIs(host, ".searchlogic.com") ||      // 04-18-03 DK
	     dnsDomainIs(host, ".securities.com") ||
	     shExpMatch(url, "http://library.seg.org/*") ||   // 03-01-11 JS 
	     dnsDomainIs(host, ".sgmjournals.org") ||      // 08-31-01 DK
	     dnsDomainIs(host, ".setacjournals.org") ||    // 04-18-2008 DZ 
	     dnsDomainIs(host, ".siam.org") ||
	     dnsDomainIs(host, ".silverplatter.com") ||
	     dnsDomainIs(host, "stat.sinica.edu.tw") ||    // 12-19-07 DZ
	     dnsDomainIs(host, ".siku.ad.sdsc.edu") ||      // 04-16-2008 DZ 
	     dnsDomainIs(host, ".sinica.edu.tw") ||        // 04-25-03 DK
	     dnsDomainIs(host, ".journalsleep.org") ||     // 07-08-03 DK
	     dnsDomainIs(host, ".snk.sk") ||  		   // 05-26-05 JG
             
             //Bulletin of SMF
	     shExpMatch(url, "http://smf4.emath.fr/*")  ||   // 03-08-11 JS 
	     shExpMatch(url, "http://matexo.smai.emath.fr/*")  ||   // 03-08-11 JS 
	     shExpMatch(url, "http://postes.smai.emath.fr/*")  ||   // 03-08-11 JS 
	     shExpMatch(url, "http://smai.emath.fr/*")  ||      // 03-08-11 JS 
	     shExpMatch(url, "http://mathdoc.emath.fr/*")  ||   // 03-08-11 JS 
	     shExpMatch(url, "http://sfds.emath.fr/*")  ||      // 03-08-11 JS 
	     dnsDomainIs(host, ".emath.fr") ||                  // 03-08-11 JS



	     shExpMatch(url, "http://jnm.snmjournals.org/*")  ||	   // 10-27-10 JS 
	     dnsDomainIs(host, ".socio.com") ||            // 06-15-09 JS
	     shExpMatch(url, "https://www.soils.org/*") ||	// 08-10-10 JS 
	     dnsDomainIs(host, ".spie.org") ||                     // 07-07-04 DK
	     dnsDomainIs(host, ".spiedl.org") ||                   // 07-07-04 DK
	     shExpMatch(url, "http://spiedigitallibrary.org/*") ||	// 06-25-10 JS 
	     shExpMatch(url, "http://sso.springer.com/*") ||		// 12-15-09 LK
	     dnsDomainIs(host, ".springermaterials.com") || 		  // 12-15-09 LK 
	     dnsDomainIs(host, ".springer.de") ||
	     dnsDomainIs(host, ".springerlink.com") ||             // 07-01-03 DK
	     shExpMatch(url, "http://springerlink.com/*") ||      // 03-12-09 JS 
	     dnsDomainIs(host, ".springer-ny.com") ||
	     dnsDomainIs(host, ".springerprotocols.com") ||        // 01-28-08

	     dnsDomainIs(host, ".srds.com")              ||        // 03-30-11 JS
	     dnsDomainIs(host, ".claritas.com")          ||        // 03-30-11 JS

	     dnsDomainIs(host, ".ssireview.org") ||                // 06-28-06 DK
	     dnsDomainIs(host, ".standardandpoors.com") ||         // 01-07-11 JS
	     dnsDomainIs(host, "highwire.stanford.edu") ||
	     dnsDomainIs(host, "parkerweb.stanford.edu") ||        // 05-25-11 JS
	     dnsDomainIs(host, ".statindex.org") ||                // 02-09-05 DK
	     dnsDomainIs(host, ".statsnetbase.com") ||             // 09-16-02 DK
	     dnsDomainIs(host, ".stat-usa.gov") ||
	     dnsDomainIs(host, ".statref.com") ||                  // 04-24-03 DK
	     dnsDomainIs(host, ".stemcells.com") ||                // 10-05-10 JS 
	     dnsDomainIs(host, ".structure.org") ||                // 01-12-04 DK
	     dnsDomainIs(host, ".syria-report.com") ||             // 09-12-07 DK
	     dnsDomainIs(host, ".math.txstate.edu") ||             // 11-07-05 DK
	     dnsDomainIs(host, ".tandf.co.uk") ||                  // 04-11-05 DK
	     dnsDomainIs(host, ".taiwanclassic.com") ||            // 04-18-2008 DZ 
            
	     dnsDomainIs(host, ".taylorandfrancis.com") ||         // 02-13-07 DK
	     shExpMatch(url, "http://resources.tandfonline.com/*")    || // 06-22-11 JS

	     dnsDomainIs(host, ".tandfonline.com") ||		   // 06-28-11 LK
	     dnsDomainIs(host, ".tarweed.com") ||
	     dnsDomainIs(host, ".tbrc.org") ||                     // 08-11-10 JS
	     shExpMatch(url, "http://tbrc.org/*") ||               // 08-10-10 JS
	     shExpMatch(url, "http://blog.tbrc.org/*") ||          // 08-10-10 JS


             //Tbilisi Mathematical Journal                          
	     dnsDomainIs(host, ".tcms.org.ge")          ||          // 04-29-10 JS
	     dnsDomainIs(host, ".collegepublications.co.uk") ||     // 04-29-10 JS
	     shExpMatch(url, "http://tcms.org.ge/*")    ||          // 04-29-10 JS
	     shExpMatch(url, "http://rmi.acnet.ge/*")   ||          // 04-29-10 JS


	     dnsDomainIs(host, ".tcrecord.org") ||                 // 01-14-11 JS

	     dnsDomainIs(host, ".math.technion.ac.il") ||
	     dnsDomainIs(host, ".technologyreview.com") ||         // 06-21-02 DK
	     dnsDomainIs(host, ".techreview.com") ||
	     dnsDomainIs(host, ".techscience.com") ||                     // 05-10-05 DK
	     dnsDomainIs(host, ".telecommunicationsnetbase.com") ||       // 05-17-07 DK

             shExpMatch(url, "http://journal.telospress.com/*")  ||       // 10-25-10 JS
             dnsDomainIs(host, ".telospress.com")  ||                     // 10-25-10 JS
 
             dnsDomainIs(host, ".terrapub.co.jp") ||               // 03-03-04 DK
	     dnsDomainIs(host, ".textilenetbase.com") ||           // 05-17-07 DK
             dnsDomainIs(host, ".thedialogue.org") ||              // 03-05-10 JS
             dnsDomainIs(host, ".theses.com") ||                   // 03-22-04 DK
             dnsDomainIs(host, ".thejcdp.com") ||                  // 03-11-08 DZ 
             dnsDomainIs(host, ".thepppost.com") ||                // 08-10-10 JS
             dnsDomainIs(host, ".t-telford.co.uk") ||              // 03-21-03 DK
             dnsDomainIs(host, ".thomastelford.com") ||            // 03-21-03 DK
             dnsDomainIs(host, ".ttjournals.com") ||               // 01-19-05 DK
             dnsDomainIs(host, "theaidsreader.consultantlive.com") || //12-2-09 LK 
	     dnsDomainIs(host, ".thecochranelibrary.com") ||       // 01-27-05 DK
             dnsDomainIs(host, ".thieme-chemistry.com") ||         // 04-10-06 DK
             dnsDomainIs(host, ".thieme-connect.com") ||           // DK 7-30-01
             dnsDomainIs(host, ".thieme-connect.de") ||            // 11-26-03 DK
             dnsDomainIs(host, ".thomsonib.com") ||                // 01-13-03 DK Thompson Financ.
             dnsDomainIs(host, ".thomsonhc.com") ||                // 01-24-05 DK
	     dnsDomainIs(host, ".tlg.uci.edu") ||                  // 01-10-03 DK
	     dnsDomainIs(host, ".tol.cz") ||
	     dnsDomainIs(host, ".tomescps.com") ||
	     dnsDomainIs(host, ".toxicologynetbase.com") ||                 // 05-17-07 DK
	     dnsDomainIs(host, ".http://topics.igi-online.com") ||          // 05-05-2008 DZ
	     shExpMatch(url, "http://topics.igi-online.com/*") ||           // 05-05-2008 DZ 
	     shExpMatch(url, "http://tracfed.syr.edu/*") ||                 // 06-15-09 JS
	     dnsDomainIs(host, ".tracfed.syr.edu") ||                       // 05-01-2008 DZ
	     dnsDomainIs(host, ".tradelawguide.com") ||                     // 08-02-10 JS
	     dnsDomainIs(host, ".transnational-dispute-management.com") ||  //09-14-06 JG
	     shExpMatch(url, "http://ejour-fup.unifi.it/*") ||// 01-23-08 DZ
	     dnsDomainIs(host, ".tribologynetbase.com") ||                  // 05-17-07 DK
	     dnsDomainIs(host, ".tudelft.nl") ||
	     dnsDomainIs(host, ".turpion.org") ||
             shExpMatch(url, "http://www.u-bourgogne.fr/jpp/*") || //07-15-09 LK 
	     dnsDomainIs(host, ".ucl.ac.uk") ||                  // 01-06-03 DK Past
             dnsDomainIs(host, ".uchicago.edu") ||
	     dnsDomainIs(host, ".hapi.gseis.ucla.edu")||  	// 08-19-09 LK 
             shExpMatch(url, "http://hapi.gseis.ucla.edu/*")||	// 08-19-09 LK 
	     dnsDomainIs(host, ".hapi.ucla.edu") ||              // 01-25-05 DK
             shExpMatch(url, "http://hapi.ucla.edu/*") ||        // 06-05-06 DK
	     dnsDomainIs(host, "nui.ucop.edu") ||
	     dnsDomainIs(host, "merlin.ucop.edu") ||
	     dnsDomainIs(host, ".melvyl.ucop.edu") ||
	     dnsDomainIs(host, ".ceb.ucop.edu") ||                       // 06-29-07 DK
	     dnsDomainIs(host, ".ceb.com") ||                            // 06-29-07 DK
	     dnsDomainIs(host, ".uia.org") ||                            // 02-13-07 DK
             shExpMatch(url, "http://ucberkeley.classical.com/*") ||     // 11-01-06 DK
             shExpMatch(url, "http://ucberkeley2.classical.com/*") ||    // 11-01-06 DK
             shExpMatch(url, "http://ucberkeley4.classical.com/*") ||    // 11-01-06 DK
	     dnsDomainIs(host, ".ucberkeley.classical.com") ||           // 11-01-06 DK
	     dnsDomainIs(host, ".ucberkeley2.classical.com") ||          // 11-01-06 DK
	     dnsDomainIs(host, ".ucberkeley4.classical.com") ||          // 11-01-06 DK
	     dnsDomainIs(host, ".ucpress.net") ||                // 03-30-04 DK
	     dnsDomainIs(host, ".diversitas.org") ||             // 03-11-02 DK mod 11-07-05
             shExpMatch(url, "http://udndata.com/*") ||          // 11-14-06 DK
	     dnsDomainIs(host, ".udn.com") ||                    // 11-14-06 DK
	     dnsDomainIs(host, ".uiuc.edu") ||                   // 09-07-05 DK (all UIUC)
	     dnsDomainIs(host, ".ujf-grenoble.fr") ||            // 03-24-05 DK
	     dnsDomainIs(host, ".umi.com") ||
	     dnsDomainIs(host, ".hti.umich.edu") ||
  	     dnsDomainIs(host, ".icpsr.umich.edu") ||            // 02/11/03
  	     dnsDomainIs(host, ".umdl.umich.edu") ||             // 02/23/01
  	     dnsDomainIs(host, ".lib.umich.edu") ||              // 09/11/07
	     dnsDomainIs(host, "irmasrv1.u-strasbg.fr") ||
	     dnsDomainIs(host, "ams.mathematik.uni-bielefeld.de") ||
	     dnsDomainIs(host, ".uniworldbp.com") ||               // 08-02-10 JS
	     dnsDomainIs(host, ".unm.edu") ||                      // 01-26-05 DK (LABD)
	     dnsDomainIs(host, ".ulam.usm.edu") ||
	     dnsDomainIs(host, ".ulrichsweb.com") ||               // 11-02-01 DK
	     dnsDomainIs(host, ".serialssolutions.com") || 	   // 04-20-11 LK 
	     dnsDomainIs(host, ".urbdocs.com") ||                  // 04-17-06 DK
             shExpMatch(url, "http://comtrade.un.org/*") ||        // 08-10-07 DK
             shExpMatch(url, "http://unstats.un.org/unsd/*") ||    // 08-04-03 DK
             shExpMatch(url, "http://untreaty.un.org/*") ||        // 12-05-06 DK (UN Treaty)
             shExpMatch(url, "http://157.150.195.4/*") ||          // 01-23-07 DK (UN Treaty)
             shExpMatch(url, "http://www.ma.utexas.edu/cgi-bin/*") ||    // 04-08-04 DK
	     dnsDomainIs(host, ".library.utoronto.ca") ||
	     dnsDomainIs(host, ".valueline.com") ||                // 08-01-08 JS 
	     dnsDomainIs(host, "tvnews.vanderbilt.edu") ||               // 07-07-04 DK
	     dnsDomainIs(host, ".v-r.de") ||                       // 03/17/2008  DZ
	     dnsDomainIs(host, ".victoriandatabase.com") ||
	     dnsDomainIs(host, ".victorianperiodicals.com") ||     // 05-06-05 DK
	     shExpMatch (url, "http://virtualexplorer.com.au/*") ||    // 02-18-09 JS 
	     shExpMatch (url, "http://vlex.com/*") ||              // 02-12-2008 DZ 
	     dnsDomainIs(host, ".wanfangdata.com") ||              // 09-01-06 DK
	     dnsDomainIs(host, ".maths.warwick.ac.uk") ||          // 09-26-06 DK
	     dnsDomainIs(host, ".msp.warwick.ac.uk") || 	   // 07-14-10 LK
	     shExpMatch(url, "http://msp.warwick.ac.uk/*") ||      // 07-14-10 LK
	     dnsDomainIs(host, ".math.washington.edu") ||
	     dnsDomainIs(host, ".waternetbase.com") ||             // 10-18-07 DZ
	     dnsDomainIs(host, ".wbaonline.co.uk") ||              // 02-10-11 JS 
             shExpMatch (url, "https://www.wcl.american.edu/*") ||   // 11-04-09 JS
             dnsDomainIs(host, ".wcl.american.edu") ||             // 01-29-10 JS 
	     shExpMatch(url, "http://apps.webofknowledge.com/*") ||  // 04-19-11 JS 
	     dnsDomainIs(host, "webofscience.com") ||
	     dnsDomainIs(host, ".webofscience.com") ||
	     dnsDomainIs(host, ".westlaw.de") ||                   // 12-07-04 DK
	     dnsDomainIs(host, ".westlawchina.com") ||             // 01-26-09 JS 
	     dnsDomainIs(host, ".wharton.upenn.edu") ||            // 06-11-02 DK
	     dnsDomainIs(host, ".interscience.wiley.com") ||
	     shExpMatch(url, "http://onlinelibrary.wiley.com/*") || // 08-10-10 LK 
	     shExpMatch(url, "http://uca.wisenews.net/*") ||       // 10-02-09 JS 
	     shExpMatch(url, "http://wisenews.wisers.net/*") ||    // 01-27-10 JS 
	     dnsDomainIs(host, ".wkap.nl") ||
	     dnsDomainIs(host, ".wharton.upenn.edu") ||            // 07-21-06 DK
             dnsDomainIs(host, ".wspc.com.sg") ||
             dnsDomainIs(host, ".wspc.com") ||                     // 02-18-03 DK
             dnsDomainIs(host, ".worldbank.org") ||                // 05-09-02 DK
             dnsDomainIs(host, ".worlddialogue.org") ||            // 02-25-10 JS 
             dnsDomainIs(host, ".worldoflearning.com") ||          // 10-15-03 DK World of Learning
             shExpMatch(url, "http://www.worldcat.org/oclc/?page=feedback&instsymbol=CUY") ||  // 06-13-08 JS
             dnsDomainIs(host, ".worldscientific.com.sg") ||
             dnsDomainIs(host, ".worldscinet.com") ||              // 02-20-03 DK
             dnsDomainIs(host, ".worldshakesbib.com") ||           // 02-05-02 DK
             dnsDomainIs(host, ".worldshakesbib.org") ||           // 02-06-02 DK
             dnsDomainIs(host, ".worldtradelaw.net") ||            // 10-23-03 DK
             dnsDomainIs(host, ".wtt-pro.nist.gov/cgi-bin/wtt.cgi") ||       // 12-21-2007 DZ 
             dnsDomainIs(host, ".wwwords.co.uk") ||                // 09-21-04 DK
             dnsDomainIs(host, ".wwp.brown.edu") ||                // 07-25-07 DK
             dnsDomainIs(host, ".tanto.de") ||                     // 01-06-04 DK (Xipolis)
             dnsDomainIs(host, ".xipolis.net") ||                  // 02-11-02 DK
             shExpMatch (url, "https://pi.library.yorku.ca/*") ||   // 11-04-10 JS
             shExpMatch(url, "http://zassaku-plus.com/*")     ||   // 04-13-10 JS
             shExpMatch(url, "http://zb.msri.org/*")     ||        // 04-15-09 JS
             dnsDomainIs(host, ".zentralblatt-math.org") ||        // 08-17-07 DK
             dnsDomainIs(host, ".zfdphdigital.de") ||              // 01-12-10 JS 
             dnsDomainIs(host, ".znaturforsch.com") ||             // 05-06-05 DK
             //*********** Beginning of proxy.tail *********

	     dnsDomainIs(host, "wwwlib.umi.com")) {
		 return proxy_1;
	     }
	   return proxy_no;
}

