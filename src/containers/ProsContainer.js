import React from 'react'
import ProCard from '../components/pro/ProCard'
import { connect } from 'react-redux'




const ProsContainer = (props) => {

        return (
            <div style={{
                width: '100%', 
                height: '100%',  
                backgroundImage: 'url("https://previews.123rf.com/images/backyardproduction/backyardproduction1510/backyardproduction151000192/47375068-aerial-or-top-down-view-of-the-detail-of-newly-mown-grass-in-well-tended-lawn.jpg")'
                }}>
                {props.pros.map( pro => 
                    <div key={pro.id}> 
                        <ProCard pro={pro}/>
                    </div>
                    )}
            </div>
        )

    }



const mapStateToProps = state => {
    
      return {
        pros: state.pros
      }
    }

export default connect(mapStateToProps)(ProsContainer)






