import { useState } from "react";

const EmpFormValidationComponent=()=>{
    const [emp,setEmp] = useState({
        EmpNo:0,EmpName:''
    });
    const [isEmpNoValid,setEmpNoValidation] = useState(true);
    const [isEmpNameValid,setEmpNameValidation] = useState(true);
    const [isFormValid,setFormValidation] = useState(true);

    const save=()=>{
        setEmp(emp);
    }
    // Listen to the Change Event
    const handleOnChange=(evt)=>{
        if(evt.target.name === 'EmpNo'){
            setEmp({...emp,EmpNo:parseInt(evt.target.value)});
        }
        if(evt.target.name === 'EmpName'){
            setEmp({...emp,EmpName:evt.target.value});
        }
        validateForm(evt.target.name, evt.target.value);
    };

    // Validate the form
    const validateForm=(name,value)=>{
        if(name === 'EmpNo') {
            if(parseInt(value) < 0) {
                setEmpNoValidation(false);
                setFormValidation(false);
            } else {
                setEmpNoValidation(true);
                setFormValidation(true);
            }
        }

        if(name === 'EmpName') {
            if(value.length < 2) {
                setEmpNameValidation(false);
                setFormValidation(false);
            } else {
                setEmpNameValidation(true);
                setFormValidation(true);
            }
        }
        if(!isEmpNameValid || !isEmpNoValid) {
            setFormValidation(false);
        } else {
            setFormValidation(true);
        }
    }


    return(
        <div className="container">
            <form name="frmEmp">
                <div className="form-group">
                    <label>EmpNo</label>
                    <input type="text" value={emp.EmpNo} className="form-control"
                    name="EmpNo"
                     onChange={handleOnChange}/>
                     <div className="alert alert-danger"
                      hidden={isEmpNoValid}>
                        EmpNo is must
                     </div>
                </div>
                <div className="form-group">
                    <label>EmpName</label>
                    <input type="text" value={emp.EmpName} className="form-control"
                     name="EmpName"
                     onChange={handleOnChange}/>
                        <div className="alert alert-danger"
                          hidden={isEmpNameValid}>
                        EmpName is must
                     </div>
                </div>
                <div>
                     <input type="reset" value="Reset" className="btn btn-warning"/>
                     <input type="submit" value="Submit"
                       disabled={!isFormValid} className="btn btn-success"
                       onClick={save}/>
                </div>
            </form>
        </div>
    );
};

export default EmpFormValidationComponent;