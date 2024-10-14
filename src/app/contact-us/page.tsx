import style from "./style.module.css"
export default function ContactUs() {
    return (
        <div className={style.cotactform }>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
                rel="stylesheet"
            />

            <div className={style.formpart}>
                <h1>Contact Us</h1>
                <p>Name :</p>
                <label className={style.inputname}>
                    <input type="text" className={style.inputarea} id={style.name} />
                </label>

                <label className={style.inputphone} id={style.phone}>
                    <p>Phone Number :</p>
                    <input type="number" className={style.inputarea} />
                </label>
                <label className={style.inputemail} id={style.email}>
                    <p>Email :</p>
                    <input type="email" className={style.inputarea} />
                </label>
                <label className={style.inputmessage} >
                    <p>Message :</p>
                    <textarea name="" placeholder="MESSAGE" className={style.inputarea} id={style.message} ></textarea>
                </label><br />

                <button className={style.subbutton}><i className="ri-arrow-right-fill"></i>Submint</button>
            </div>
        </div>
    )
}