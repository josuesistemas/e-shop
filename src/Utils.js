import {useAuth} from './AuthContext'

const GetPlural =(unit)=> {
    switch (unit) {
        case "unidad": return  "unidades"
        case "par":  return "pares"
        case "metro": return  "metros"
        default : return ""
    }
}

const VerifyContains =(data,item)=>{
    if (data.find(act => act.id == item.id) !== undefined){
        return true
    }else{
        return false
    }
}

const Acumulator = (acc, obj)=> { return acc + obj.data.price * obj.count };

const GetFeeValue =(total,count) => {return (total/GetCountFeesValue(count)).toFixed(2)}

const GetCountFeesValue =(count) => {
    switch (count) {
        case "one":
            return 1
        case "three":
            return 3
        case "six":
            return 6
        case "nine":
            return 9
        case "twelve":
            return 12
        default:
            return 1
    }
}

const GetSubtotalItem=(item)=>{
    return(
        (item.count*item.data.price).toFixed(2)
    )
}


export {GetPlural, VerifyContains,Acumulator,GetFeeValue,GetCountFeesValue,GetSubtotalItem};