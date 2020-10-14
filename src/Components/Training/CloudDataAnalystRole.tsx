import React from 'react'
import CardsTranning from '../CardsTranning';

function CloudDataAnalystRole() {
    return (
        <div>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Cloud Data Analyst Role`} certificate={`AWS Big Data Analyst`} examcode={`BDS-C00`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`AWSBigData.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Cloud Data Analyst Role`} certificate={`Data Science Analyst- Python`} examcode={`TP-DS-01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`DataSc-Phy.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Cloud Data Analyst Role`} certificate={`Data Science Analyst- R`} examcode={`TP-DS-02`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`Datascience-R.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`loud Data Analyst Role`} certificate={`Azure Database Architect`} examcode={`examcode`} tranhrs={`MS 70-473`} exmpre={`6 Hr`} price={`605`} pdfURL={`Azure-SQL.pdf`} />
                          </div>					 
                        </div>	
        
                      </div>  
                      <hr/>
                     
                  </div>
          </div>
     
     </section>
        </div>
    )
}

export default CloudDataAnalystRole