

const StudentRow = ({ studentInfo, deleteStudent }) => {

    return (
        <div className="studentRow">
            <p>Student ID: {studentInfo.id}
                Student Name: <b>{studentInfo.assignee}</b>
                Student Work Status: {studentInfo.status}{studentInfo.status === "Done" ? '✅' : '❌'}
                Entry date: {studentInfo.createdDate}</p>
            <button className="btn-delete" onClick={() => deleteStudent(studentInfo.id)}> X </button>

        </div>
    )
}

export default StudentRow