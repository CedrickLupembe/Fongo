import React from 'react';
import styled from 'styled-components';
import students from './sections/Students';

const Details = () => {
  return <Container>
      
            {
                students.map(student => {
                    return <div key={student.id}>
                        <h1>{student.name}</h1>
                        <h2>{student.facult}</h2>
                        <h3>{student.promotion}</h3>
                        <span>{student.sexe}</span> <br /><br />
                        <span>{student.age}</span>
                    </div>
                })
            }

        </Container>
}



const Container = styled.section`

    width: 100%;
    height: auto;
    padding: 30px 0;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    div{
        width: 300px;
        height: auto;
        background-color: white;
        color: black;
        margin-left: 5px;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px 0;
        
    }

`

export default Details;
