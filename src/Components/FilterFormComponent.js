import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


function FilterFormComponent(props) { 

    const [loading, setLoading] = useState(false);
    const validateSchema = Yup.object().shape({
        transactionId: Yup.string().required("This field is required"),
        type: Yup.string().required("This field is required"),
        description: Yup.string().notRequired(),
        currency: Yup.string().notRequired(),
    });


    const formik = useFormik({
        initialValues: {
            transactionId: "",
            description: "",
            currency: "",
            type: "",
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            props.filterAction(values);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                resetForm();
            }, 1000 * 2);
        },
    });


    const handleClearAll = () => {
        formik.resetForm();
    };

 

    return (
        <div className="FilterFormComponent">
            <p className="filter-form-head">Filters</p>

            <form noValidate>
                <div className="form-row">

                    <TextField
                        className="textField"
                        error={formik.errors.transactionId ? true : false}
                        type="text"
                        name="transactionId"
                        id="transactionId"
                        label="Transaction ID"
                        value={formik.values.transactionId}
                        onChange={formik.handleChange}
                        variant="outlined"
                        helperText={formik.errors.transactionId ? formik.errors.transactionId : ''}
                    />

                    <FormControl className="selectField" sx={{ m: 1, minWidth: 120 }} error={formik.errors.type ? true : false}>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            labelId="type-label"
                            id="type"
                            name="type"
                            value={formik.values.type}
                            label="Type"
                            onChange={formik.handleChange}
                            renderValue={(value) => value}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Add'>Add</MenuItem>
                            <MenuItem value='Remove'>Use</MenuItem>
                        </Select>
                        {
                            formik.errors.type &&
                            <FormHelperText>{formik.errors.type}</FormHelperText>
                        }
                    </FormControl>
                </div>

                <div className="form-row">


                    <TextField
                        className="textField"
                        error={formik.errors.description ? true : false}
                        type="text"
                        name="description"
                        id="description"
                        label="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        variant="outlined"
                        helperText={formik.errors.description ? formik.errors.description : ''}
                    />
 
                    <FormControl className="selectField" sx={{ m: 1, minWidth: 120 }} error={formik.errors.currency ? true : false}>
                        <InputLabel id="currency-label">Currency</InputLabel>
                        <Select
                            labelId="currency-label"
                            id="currency"
                            name="currency"
                            value={formik.values.currency}
                            label="Currency"
                            onChange={formik.handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='INR'>INR</MenuItem>
                            <MenuItem value= 'EUR'>EUR</MenuItem>
                        </Select>
                        {
                            formik.errors.currency &&
                            <FormHelperText>{formik.errors.currency}</FormHelperText>
                        }
                    </FormControl>
                </div>

                <div className="filter-btns">
                    <p className='clear-all-btn' onClick={handleClearAll}>Clear All</p>
                    <p className='apply-btn' onClick={formik.handleSubmit}>Apply</p>
                </div>
            </form>
        </div>
    );
}

export default FilterFormComponent;