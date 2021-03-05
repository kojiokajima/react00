import React, {useState, useCallback} from 'react'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {TextInput} from "../index";

const ContactForm = (props) => {
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // Functions triggered by inputting text value
    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    },[setDescription]);

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[setEmail]);

    const inputName = useCallback((event) => {
        setName(event.target.value)
    },[setName]);

    const validateEmailFormat = (email) => {
        // const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(email)
    }

    const validateRequiredInput = (...args) => {
        let isBlank = false;
        for (let i = 0; i < args.length; i=(i+1)|0) {
            if (args[i] === "") {
                isBlank = true;
            }
        }
        return isBlank
    };

    // Send notification to slack
    const submitForm = () => {
        const isBlank = validateRequiredInput(name, email, description)
        const isValidEmail = validateEmailFormat(email)

        if (isBlank) {
            alert('All fields are required')
            return false
        } else if (!isValidEmail) {
            alert('Wrong input for email')
            return false
        } else {
            const payload = {
                text: 'Message Received\n'
                    + 'Name: ' + name + '\n'
                    + 'Email: ' + email + '\n'
                    + 'Message\n' + description
            };

            const url = `https://hooks.slack.com/services/${process.env.REACT_APP_DEV_URL}`


            fetch(url, {
                method: 'POST',
                body: JSON.stringify(payload)
            }).then(() => {
                alert('Message successfully sent!');
                setDescription("")
                setEmail("")
                setName("")
                return props.handleClose()
            })
        }
    };

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Contact Form</DialogTitle>
            <DialogContent>
                <TextInput
                    label={"Name"} multiline={false} rows={1}
                    value={name} type={"text"} onChange={inputName}
                />
                <TextInput
                    label={"Email"} multiline={false} rows={1}
                    value={email} type={"email"} onChange={inputEmail}
                />
                <TextInput
                    label={"Message"} multiline={true} rows={5}
                    value={description} type={"text"} onChange={inputDescription}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={submitForm} color="primary">
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ContactForm