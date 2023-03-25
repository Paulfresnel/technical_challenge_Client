import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { MutatingDots } from "react-loader-spinner"
import './PhoneDetailPage.css'

const serverUrl = process.env.REACT_APP_SERVER_URL

function PhoneDetailPage(){
    const {phoneId} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [phoneDetail, setPhoneDetail] = useState({})

    useEffect(()=>{
        axios.get(`${serverUrl}/api/phones/${phoneId}`)
        .then(response=>{
            const phoneDetailReceived = response.data.data
            setPhoneDetail(phoneDetailReceived)
            setTimeout(()=>{
                setIsLoading(false)
            },1000)
        })
    },[phoneId])

    return(

        <div>

{isLoading ? <div className="centered"><MutatingDots 
                 height="100"
                 width="100"
                 color="#ff7f50"
                 secondaryColor= '#adff2f'
                 radius='12.5'
                 ariaLabel="mutating-dots-loading"
                 wrapperStyle={{}}
                 wrapperClass=""
                 visible={true}
                /></div> : 
                <div className="card big-width flex-c">
                <img alt={phoneDetail.description} class="card-img-top" src={phoneDetail.imageFileName}/>
                    <div class="card-body">
                    <p>By {phoneDetail.manufacturer}</p>
                      <h5 class="card-title colored">{phoneDetail.name}</h5>
                      <p class="card-text">{phoneDetail.description}</p>
                    </div>
                    <div className="div-block"/>
                    <div>
                    <h3 className="ta-left"><em>Specificities</em></h3>
                    <ul>
                        <li>Screen: {phoneDetail.screen}</li>
                        <li>Processor: {phoneDetail.processor}</li>
                        <li>RAM: {phoneDetail.ram}</li>
                        <li>Color: <strong>{phoneDetail.color}</strong></li>
                    </ul>
                    
                    </div>
                </div> }

        </div>
    )
}

export default PhoneDetailPage