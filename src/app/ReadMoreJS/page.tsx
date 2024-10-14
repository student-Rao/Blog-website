import js from "../ReadMoreJS/js.module.css"
import Image from "next/image"
import  blogJSpic from "../images/blogJSpic.jpeg"
export default function aboutJs(){
    return (
        <div className={js.jsblogcontainer}>

            <div className={js.jspic}><Image src={blogJSpic} alt="" className={js.pic}/></div>
            <div className={js.jsblogcontent}>
                <h1>Understanding JavaScript: The Language of the Web</h1>
                <p>JavaScript is one of the most popular and widely used programming languages in
                     the world today. It powers millions of websites, making them interactive and dynamic. 
                    But what makes JavaScript so special, and why should you consider learning it?</p>
                <h1>What is Javascript ?</h1>
                <p>JavaScript is a high-level, interpreted programming language that is primarily
                     used for client-side scripting. It was created in just ten days by Brendan Eich in 1995 
                    while working at Netscape Communications Corporation. Despite its name, JavaScript has no 
                    direct relation to Java. In fact, it was originally called Mocha, then renamed to LiveScript,
                     and finally to JavaScript to align with the popularity of Java at the time.</p>
                     <h1>Why JavaScript?</h1>
                     <p>JavaScript’s versatility makes it unique. It can be used for both front-end and back-end development, enabling developers to build a complete application using the same language. With the advent of frameworks and libraries like React, Angular, and Vue.js, building complex user interfaces has never been easier. On the server side, Node.js allows developers to create scalable network applications.</p>
                     <h2>Key Features of JavaScript:</h2>
                     <ol>
                        <li><h3>Interactivity: </h3> JavaScript can manipulate the DOM (Document Object Model), making it possible to create interactive elements such as sliders, dropdown menus, and modal popups.</li>
                        <li><h3>Event Handling:</h3>JavaScript can respond to user actions like clicks, hovers, and keyboard inputs, enhancing user experience.</li>
                        <li><h3>Asynchronous Programming:</h3>JavaScript supports asynchronous operations using callbacks, promises, and async/await, making it easy to handle tasks like data fetching and timers.</li>
                     </ol>
                     <h1>Final Thought</h1>
                     <p>JavaScript is a powerful language with a vast ecosystem and community support. Whether you’re interested in front-end development, back-end programming, or even mobile app development, JavaScript has something to offer. By mastering JavaScript, you unlock the ability to build almost anything on the web, from simple websites to complex web <br /> <br />
                     So, dive in, start coding, and see what you can create with JavaScript!
                     </p>

            </div>
        </div>
    )
}
