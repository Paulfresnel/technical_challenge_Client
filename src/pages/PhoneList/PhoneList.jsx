import { useEffect, useState } from "react"
import axios from "axios"
import { MutatingDots } from "react-loader-spinner"
import './PhoneList.css'

const serverUrl = process.env.REACT_APP_SERVER_URL

function PhoneList(){

    const [isLoading, setIsLoading] = useState(true)
    const [phoneData, setPhoneData] = useState([])
    const [phoneSelected, setPhoneSelected] = useState({})

    const showDetails = (e,index) =>{
        console.log(e.target.innerHTML)
        if (e.target.innerHTML.includes("Hide")){
            setPhoneSelected({})
        }
        else{
        let phoneArrayIndex = index
        phoneData[phoneArrayIndex].showDetails = true
        axios.get(`${serverUrl}/api/phones/${phoneArrayIndex}`)
        .then(response=>{
            const phoneInfo = response.data.data
            console.log(phoneInfo)
            setPhoneSelected(phoneInfo)
            
        })
    }
    }

    useEffect(()=>{
        axios.get(`${serverUrl}/api/phones`)
        .then(response=>{
            const phonesData = response.data.data
            setPhoneData(phonesData)
        
            console.log(phoneData)
            setTimeout(()=>{
                setIsLoading(false)
            }, 1000)
        })
    }, [])

    return(

        <div className="margined">
        {isLoading && <div className="centered"> <MutatingDots 
                 height="100"
                 width="100"
                 color="#ff7f50"
                 secondaryColor= '#adff2f'
                 radius='12.5'
                 ariaLabel="mutating-dots-loading"
                 wrapperStyle={{}}
                 wrapperClass=""
                 visible={true}
                /></div>}

 {!isLoading && <div className="flex-wrap">
    {phoneData.map((phone,index)=>{
        console.log("phone details to show?", phone.showDetails)
        return <div key={phone.id} className="card small-width">
        <img alt={phone.description} className="card-img-top" src={phone.imageFileName}/>
        <div className="card-body">
        <h5 className="card-title colored">{phone.name}</h5>
        <p>Price: $ {phone.price}</p>
        <p>Manufacturer: {phone.manufacturer}</p>
        <button className="btn btn-outline-primary" value={phone.id} onClick={(e)=>showDetails(e,index)}>{phoneSelected.name === phone.name ? "Hide Information" : "Show Information"}</button>

        </div>
        {phoneSelected.name === phone.name && <div className="margined">
        <p>{phoneSelected.description}</p>
        <div className="div-block"/>
        <h2 className="colored">Specificities</h2>
        <ul>
            <li>Processor: {phoneSelected.processor}</li>
            <li>RAM: {phoneSelected.ram}</li>
            <li>Color: {phoneSelected.color}</li>
            <li>Screen: {phoneSelected.screen}</li>
        </ul>
        
    </div>}


        </div>
    })}
    

 </div>}

        </div>
    )


}

export default PhoneList