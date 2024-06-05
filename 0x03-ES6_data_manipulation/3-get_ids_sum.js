export default function getStudentIdsSum(students_list){
    function sum(){
        let sum = 0;
        students_list.forEach(element => {
        sum += element.id;
    });
        return sum
    };
    return students_list.reduce(sum)
}
