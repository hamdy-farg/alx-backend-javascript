export default function getStudentsByLocation (students_list, city_name){
    let arr_obj_of_specific_city = [];
    return students_list.filter(element => {
       if(element.location === city_name){
     return   arr_obj_of_specific_city.push(element)
       }
        
    });

}
