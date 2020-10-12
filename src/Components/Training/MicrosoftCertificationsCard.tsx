import React from 'react'
import Cards from '../Cards';

function MicrosoftCertificationsCard() {
    return (
        <div>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                      <h4>Microsoft Productivity Certification</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Messaging`} certificate={`MCSA-Messaging`} examcode={`MS-70-345`} tranhrs={`36 Hr`} exmpre={` 6 Hr`} price={`288`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Teams`} certificate={`MCSA-0365 Teams`} examcode={`MS-700`} tranhrs={`26 Hr`} exmpre={`4 Hr`} price={`205`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft SharePoint`} certificate={`MCSA-SharePoint`} examcode={`MS-70-339`} tranhrs={`36 Hr`} exmpre={` 6 Hr`} price={`216`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <h4>Microsoft Platform Certification</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Server Admin`} certificate={`MCSA-Core Infra`} examcode={`MS-70-740/41`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`288`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft SQL DBA`} certificate={`MCSA-Database`} examcode={`MS-70-764`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`288`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Azure Admin`} certificate={`Azure Administrator`} examcode={`AZ-103/104`} tranhrs={`36 Hr`} exmpre={` 6 Hr`} price={`288`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr/>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Azure Architect-Infra`} certificate={`Azure Solutions Arch`} examcode={`AZ-300/301`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`305`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Developing Solutions Az`} certificate={`Azure Solutions Arch`} examcode={`AZ-203`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`305`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Azure Security Engineer`} certificate={`Azure Security Engineer`} examcode={`AZ-500`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`326`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={``} certificate={`Azure Data Solutions`} examcode={`Azure Data Solutions`} tranhrs={`DP-200`} exmpre={`36 Hr`} price={`6 Hr`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={``} certificate={`Azure Data Solutions`} examcode={`Azure Data Solutions`} tranhrs={`DP-201`} exmpre={`36 Hr`} price={`6 Hr`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                      </div>  
                      
                  </div>
          </div>
     
     </section>
        </div>
    )
}

export default MicrosoftCertificationsCard
