const buttons = document.querySelectorAll('.tab__btn');
const textContainer = document.querySelector('.tab__content');
console.log(textContainer);


function tabChanger(e) {
    reset();

    this.style.backgroundColor = '#fff';
    this.style.color = '#0984e3';

    if (this.innerText.toLowerCase() === 'consultation') {
        textContainer.innerHTML = `
        <p>
            Taj Visa Consultancy Center offers you the opportunity to visit Immigration Consultants
            having a profound knowledge of the
            Visa Application Processes in Saudi Arabia. Discuss your Visa applications in detail with
            our professionals
            over a phone call or in person.
        </p>

        <p>
            Consulting our expert will enable you to acquire an in-depth knowledge of the immigration
            process. Every individual is in
            a different situation and discussing the issues with the Immigration Consultants followed
            by their advices
            will increase the chances of success on your Visa Applications. Raise queries to the
            Immigration consultants
            to eliminate all your concerns and get a clear picture of the entire scenario lying ahead
            of you.
        </p>

        <p>
            At times, you may have a specific issue that requires a considerable amount of time to get
            resolved. WWICS appeals to you
            to register sooner and get in touch with our Immigration Consultants in order to get such
            issues resolved
            on or before time.
        </p>

        <p>
            Many clients have chosen to register with us during their Visa Application Process. This is
            because the procedures become
            tedious and clients are rendered clueless. We help you understand the different stages of
            the Visa Application
            Process and the flow of data during that process. The knowledge and experience shared by
            our experts
            is invaluable and can help you avoid re-submissions or voiding your application.
        </p>
        `
    }
    else if (this.innerText.toLowerCase() === 'client assistance') {
        textContainer.innerHTML = `
        <p>
            Client Assistance Program provides a direct one-on-one comprehensive information and referral assistance on basic needs and safety net services.
        </p>
        <p>
            WWICS assists eligible legal permanent residents and citizens in applying for a broad range of immigration services including guiding the clients though the citizenship process.
        </p>
        <p>
            WWICS has been providing information and referral client assistance since 1993. Our experienced attorneys assist with obtaining temporary or permanent immigration status for executive, managerial and professional employees, as well
            as with other immigration-related matters. Our comprehensive business immigration legal services include
            assistance with:
        </p>

        <ul>
            <li>
                Determining and applying for the most appropriate visa categories for individuals who intend to stay temporarily in different countries for employment or other business-related reasons
            </li>
            <li>
                Preparing and processing permanent resident visas for executives and other professional employees
            </li>
            <li>
                Providing counsel regarding compliance with immigration laws to avoid civil and criminal penalties
            </li>
            <li>
                Resolving State Department matters in embassies and consulates around the world
            </li>
            <li>
                Providing counsel with regard to immigration needs—directly and/or through our network of attorneys licensed in other countries
            </li>
        </ul>`
    } 
    else if (this.innerText.toLowerCase() === 'application proccessing') {
        textContainer.innerHTML = `<div class="tab__content--left">
        <ul>
            <li>
                <h3>
                    Assess your Canadian immigration eligibility for free
                </h3>
                <ol>
                    <li>
                        Determine your immigration category based on your credentials for free.
                    </li>
                </ol>
            </li>

            <li>
                <h3>
                    WWICS will facilitate your Application Process. Once you retain our services,
                    we will:
                </h3>
                <ol>
                    <li>Prepare, perfect and submit your application</li>
                    <li>Communicate with the Immigration Visa Office</li>
                    <li>Prepare you for your personal interview wherever applicable</li>
                    <li>Handle all correspondence with the Processing Centre until your Visa is
                        issued</li>
                </ol>
            </li>
        </ul>
    </div>
    <div class="tab__content--right">
        <ul>
            <li>
                <h3>
                    Address your Concerns and Provide Solutions
                </h3>
                <ol>
                    <li>Address your Concerns and Provide Solutions</li>
                    <li>Immigration Process</li>
                    <li>Proving Work Experience</li>
                    <li>Proving English Language Ability</li>
                </ol>
            </li>

            <li>
                <h3>
                    Help and guide you with any Immigration Problems
                </h3>
                <ol>
                    <li>Medical Inadmissibility</li>
                    <li>Criminal Inadmissibility</li>
                    <li>Application Refusal</li>
                    <li>Long Delays</li>
                </ol>
            </li>
        </ul>
    </div>`
    }
    else{
        textContainer.innerHTML = ``;
    }



    e.preventDefault();
}

function reset() {
    buttons.forEach(button => {
        button.style.backgroundColor = '#0984e3';
        button.style.color = '#fff';
    });
}

buttons.forEach(button => {
    button.addEventListener('click', tabChanger);
});