import { useForm } from 'react-hook-form';

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styled, { ThemeContext } from "styled-components";

export default function FooterComponent(props) {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm();

    function handleSubmitForm(data) {

    }


    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);




    return (
        <div id={theme} className="section-hire-me-contents">
            <section ref={props.ref3} className='section-hire-me'>

                <div className='hire-me-content'>{language === "tr" ? "Bir sonraki projeniz için iletişime geçebilirsiniz" : "Let’s work together on your next product."}</div>
                {/* <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div>
                        <label htmlFor='fullName'>Full Name</label>
                        <input
                            {...register("fullName",{required: "Please enter your full name.", minLength: {
                                message: "Your full name should contain more than 6 characters",   
                                value: 6          
                            }})}
                            placeholder="Full Name"
                            id='fullName'
                            name='fullName'
                            className='inputs'
                            type="text"
                        />
                        {errors.fullName && (<span>{errors.fullName.message}</span>)}
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            {...register("email",{required: "Please enter email addres.", minLength: {
                                message: "Your email should contain more than 6 characters",     
                                value: 6        
                            }})}
                            placeholder="Email"
                            id='email'
                            name='email'
                            className='inputs'
                            type="text"
                        />
                        {errors.email && (<span>{errors.email.message}</span>)}
                    </div>

                    <div>
                        <label htmlFor='message'>message</label>
                        <input
                            {...register("message",{required: "Please enter your email.", minLength: {
                                message: "Your message name should contain more than 15 characters",
                                value: 15 
                                            
                            },maxLength: {
                                message: "Your message shouldn't be longer than 30 characters",
                                value: 30
                            }})}
                            placeholder="message"
                            id='message'
                            name='message'
                            className='inputs'
                            type="text"
                        />
                        {errors.message && (<span>{errors.message.message}</span>)}
                    </div>
                    <div>
                        <button type='submit' disabled={!isValid}>Send</button>
                    </div>
                </form> */}
                <div className='section-hire-me-container'>
                    <p className='hire-me-mail'>
                        erhnaydn1999@gmail.com
                    </p>

                    <div className='hire-me-buttons'>
                        <a id='youtube' target="_blank" href='https://www.youtube.com/@jamescryptoguruturkey7233'>YouTube</a>
                        <a id='github' target="_blank" href='https://github.com/erhanydin'>Github</a>
                        <a id='linkedin' target="_blank" href='https://www.upwork.com/freelancers/~01f4877ef5dfa28fb8'>Upwork</a>
                    </div>
                </div>


            </section>
        </div>
    );
}