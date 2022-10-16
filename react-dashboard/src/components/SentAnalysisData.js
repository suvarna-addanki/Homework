export default function SentAnalysisData () {
    const data= ["960","122", "321"]
    const dataList = data.map((oneItem, index) =>{
        return (<h4 key={index}>{oneItem}</h4>)
        
        
    }
    )
    
    return(
        <div className="datalist">
            {dataList}
        </div>
    )
}