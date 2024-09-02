import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'StyleWear',
        description: `
        • Engineered a full-stack eCommerce platform using the MERN stack, optimizing performance and scalability.
        • Designed a dynamic, user-friendly front-end for product browsing, cart management, and secure user authentication.
        • Developed RESTful APIs for efficient product management, cart operations, and streamlined user registration processes.
        • Implemented an admin panel that significantly improved product inventory control, streamlining management processes`,
        tools: [ 'HTML', 'CSS', 'React', 'Node.JS', 'Express', 'MongoDb'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'MusicPulse',
        description: `
• Designed and implemented a Music player system using C++ and linked lists, improving data organization and accessibility.
• Developed features for adding, deleting, searching, and playing songs, enhancing the user experience and reducing operation
time.
• Applied advanced data structures to optimize playlist management, creating a more intuitive and responsive user interface.`,
        tools: ['C++' , 'DSA'],
        role: '',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'HealthSync',
        description: `• Medicine Reminders: Implemented scheduled SMS alerts for medication schedules using Twilio.
• Appointment Calls: Developed automated phone call notifications for upcoming doctor appointments.
• Communication:
-> Patient to Doctor: Integrated voice-to-text transcription for efficient patient inquiries.
-> Doctor to Patient: Enabled lookup of patient contact information and queries.
• ML-powered Symptom Checker: Utilized machine learning for doctor consultation suggestions based on symptoms.
• Precautions Information: Provided tailored information on precautions, risk factors, and symptoms for specific health conditions.`,
        tools: ['HTML', 'CSS', 'JavaScript', 'GenAI', 'ReactJS', 'MongoDB'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },