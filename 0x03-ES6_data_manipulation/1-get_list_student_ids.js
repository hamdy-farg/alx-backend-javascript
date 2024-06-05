export default function getListStudentIds(arr_obj){
    let arr_id = [];
    if(!Array.isArray(arr_obj)){
        return []
    }else{ 
        arr_obj.forEach((element)=> arr_id.push(element.id));
        return arr_id
    }
    
}