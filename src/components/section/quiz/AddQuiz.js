import React from 'react'

const AddQuiz = (props) => {
    const {item, status } = props
    // if(status){
    //     return (
    //         <div>
    //             <props.modifyTemplate
    //                 {...item}
    //             />
    //         </div>
    //     )
    // } else {
        return (
            <div>
                <props.template
                    {...item}
                />
            </div>
        )
    // }
}

export default AddQuiz