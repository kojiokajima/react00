import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonBasic, ContactForm } from '..';

const AboutContent = (props) => {
    const bgUrl = props.url
    const bgColor = props.bgColor
    const isButtonExist = props.isButtonExist
    const isUrl = /^https:*/.test(props.link)

    const [open, setOpen] = useState(false)

    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [setOpen])

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    return (
        <div className="about-content">
            <div className="about-content-title" style={{backgroundColor: bgColor}}>
                <p>{props.title}</p>
            </div>

            <div className="about-content-description" style={{
                backgroundImage: "url(" + bgUrl.default + ")"
            }}>
                <p>{props.text}</p>

                {isUrl ? (
                    <a href={props.link} target="_blank">
                        <ButtonBasic
                            name={props.name}
                            bgColor={props.bgColor}
                            onClick={handleOpen}
                        />
                    </a>
                 ) : (
                     props.isContact ? (
                             <ButtonBasic
                                 name={props.name}
                                 bgColor={props.bgColor}
                                 onClick={handleOpen}
                             />
                      ) : (
                          <Link
                              to={`${props.link}`}
                          >
                              <ButtonBasic
                                  name={props.name}
                                  bgColor={props.bgColor}
                                  onClick={handleOpen}
                              />
                          </Link>

                      )
                 )}
            </div>

            {props.isContact ? (
                <div className="form">
                        <ContactForm
                            open={open}
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                        />
                </div>
            ) : (
                <></>
            )}

        </div>
    )
}

export default AboutContent