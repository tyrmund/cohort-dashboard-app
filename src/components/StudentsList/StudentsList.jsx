import { useState } from "react"
import StudentRow from "../StudentRow/StudentRow"
import studentsdata from "../studentsdata.json"
import "./StudentList.css"


const StudentsList = () => {

    const deleteStudent = studentIDtoDelete => {

        const filteredStudents = students.filter(eachStudent => eachStudent.id !== studentIDtoDelete)
        setStudents(filteredStudents)
    }


    const [students, setStudents] = useState(studentsdata)

    return (
        <div className="StudentsList">
            <h1>Soy la lista de estudiantes</h1>
            <hr />


            {students.map(eachStudent => {
                return (<StudentRow studentInfo={eachStudent} deleteStudent={deleteStudent} key={eachStudent.id} />)

            })}



        </div>
    )
}

export default StudentsList