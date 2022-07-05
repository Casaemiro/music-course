import './CourseMusic.css'
import { useState } from 'react';
import Started from './Started';
import Introduction from './Introduction';

const Course = () => {
    const [topp,setTop] = useState("Getting Started")
    const [temp,setTemp] = useState("")
    const displayModule = (val) => {
        if (temp !== ""){
        document.querySelector(temp).style.display="none"

        }
        document.querySelector(val).style.display="contents"
        setTemp(val)
    }
    return (
        <div className="course-section">
            <div className="course-outline">
                <div className="course-module" onClick={(e)=>{setTop("Getting Started");displayModule(".strt-section");}}>Getting started</div>
                <div className="course-module" onClick={()=>{setTop("Introduction");displayModule(".introduction-section")}}>Introduction</div>
                <div className="course-module" onClick={()=>{setTop("Commonly used terms")}}>Commonly used terms</div>
                <div className="course-module" onClick={()=>{setTop("Classification of musical instruments")}}>Classification of musical instruments</div>
                <div className="course-module" onClick={()=>{setTop("The musical alphabet")}}>The musical alphabet</div>
                <div className="course-module" onClick={()=>{setTop("The piano")}}>The piano</div>
                <div className="course-module" onClick={()=>{setTop("Naming of white keys")}}>Naming of white keys</div>
                <div className="course-module" onClick={()=>{setTop("Naming of black keys")}}>Naming of black keys</div>
                <div className="course-module" onClick={()=>{setTop("Scales")}}>Scales</div>
                <div className="course-module" onClick={()=>{setTop("Fingering Charts")}}>Fingering Charts</div>
                <div className="course-module" onClick={()=>{setTop("The major scale")}}>The major scale</div>
                <div className="course-module" onClick={()=>{setTop("Chords")}}>Chords</div>
                <div className="course-module" onClick={()=>{setTop("Major chords")}}>Major chords</div>
                <div className="course-module" onClick={()=>{setTop("Minor chords")}}>Minor chords</div>
                <div className="course-module" onClick={()=>{setTop("Diminished chords")}}>Diminished chords</div>
                <div className="course-module" onClick={()=>{setTop("Chord inversions")}}>Chord inversions</div>
                <div className="course-module" onClick={()=>{setTop("Diatonic chord progression")}}>Diatonic chord progression</div>
                <div className='testing'></div>
            </div>
            <div className="course-material">
            <div className="topic-section">{topp}</div>
            <Started />
            <Introduction />
            </div>
        </div>
    );
}

export default Course;