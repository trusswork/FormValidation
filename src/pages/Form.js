import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { FormControl } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { motion } from "framer-motion";

const transition = { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] };
const currencies = [
  {
    value: "I would describe my user as",
    label: "I would describe my user as",
  },
  {
    value: "Developer",
    label: "Developer",
  },
  {
    value: "Designer",
    label: "Designer",
  },
  {
    value: "Tester",
    label: "Tester",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    marginLeft: -250,
    display: "flex",
    flexDirection: "column",
    width: 500,
    alignItems: "center",
    justifyContent: "center",
    top: 30,
    height: "100vh",
    "& .MuiTextField-root": {
      margin: 10,
      width: 500,
      border: "none",
    },
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1rem",
    },
    "& .MuiInputBase-input": {
      border: "1px solid rgba(253, 253, 253, 0.7)",
      "& :Hover, &:focus": {
        outline: "none",
        borderColor: "none",
      },
    },
    " & .MuiOutlinedInput-notchedOutline": {
      padding: 5,
    },
    "& .MuiOutlinedInput-input": {
      padding: "14px",
    },
    "& .MuiInputLabel-outlined": {
      paddingTop: 3,
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: " translate(14px, -4px) scale(.75)",
      padding: "3px 0",
    },
  },

  passwordStyles: {
    margin: 15,
    width: 500,
  },
  textField: {
    width: 300,
  },
}));

function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    option: "",
    password: "",
    showPassword: false,
  });

  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [optionInValid, setOptionInvalid] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name) {
      setNameInvalid(true);
    } else {
      setNameInvalid(false);
    }
    if (!values.email) {
      setEmailInvalid(true);
    } else {
      if (!/\S+@\S+\.\S+/.test(values.email)) {
        setEmailInvalid(true);
      } else {
        setEmailInvalid(false);
      }
    }
    if (!values.password) {
      setPasswordInvalid(true);
    } else {
      if (values.password.length < 6) {
        setPasswordInvalid(true);
      } else {
        setPasswordInvalid(false);
      }
    }
    if (!values.option) {
      setOptionInvalid(true);
    } else {
      setOptionInvalid(false);
    }
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();
  return (
    <div className="container">
      <div className="form-container">
        <motion.form
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25, ...transition },
          }}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <h2>Let's set up your account</h2>
          <p className="link-text">
            Already have an account?&nbsp;
            <a className="links" href=" ">
              Sign up
            </a>
          </p>
          <FormControl>
            <TextField
              className={classes.textField}
              error={nameInvalid}
              value={values.name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              helperText={emailInvalid ? "please enter your name" : ""}
              onChange={handleChange}
              InputProps={{
                className: classes.input,
              }}
              InputLabelProps={{ className: "text_label" }}
            />
          </FormControl>
          <FormControl>
            <TextField
              InputLabelProps={{ className: "text_label" }}
              error={emailInvalid}
              value={values.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              helperText={emailInvalid ? "please enter valid emaild" : ""}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="outlined-select-currency"
              error={optionInValid}
              select
              label="Select"
              value={values.option}
              onChange={handleChange}
              helperText={optionInValid ? "Please select your currency " : ""}
              variant="outlined"
              InputLabelProps={{ className: "text_label" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              id="outlined-adornment-password"
              error={passwordInvalid}
              className={classes.textField}
              variant="outlined"
              type={values.showPassword ? "text" : "password"}
              helperText={passwordInvalid ? "Minimum 6 characters" : ""}
              label="Password"
              value={values.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOffIcon fontSize="small" />
                      ) : (
                        <VisibilityIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <motion.button
            transition={transition}
            className="inputContent-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Next
          </motion.button>
          <p className="link-text">
            By clicking the "Next" button, you agree to creating a free account
            and to &nbsp;
            <a className="links" href=" ">
              Terms of service
            </a>
            &nbsp;and&nbsp;
            <a className="links" href=" ">
              Privacy policy
            </a>{" "}
          </p>
        </motion.form>
      </div>
      <motion.div
        initial={{
          x: "-100%",
          width: "100vw",
          height: "100vh",
        }}
        animate={{
          x: 0,
          width: "40vw",
          transition: { delay: 0.2, ...transition },
        }}
        className="blue-container"
      >
        <motion.h1
          initial={{
            fontSize: "5rem",
          }}
          animate={{
            fontSize: "3rem",
            transition: { delay: 0.2, ...transition },
          }}
          className="blueLogo"
        >
          Incsub
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.9, ...transition },
          }}
          className="blue-container-desc"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          reiciendis vel nam doloribus sapiente sequi,
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Form;
