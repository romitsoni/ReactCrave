const Contact = () => {
    return (
        <div className="contact-section p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
            <div className="contact-details text-center">
                <p className="text-lg font-medium text-gray-700 mb-2">Name: <span className="font-normal">Romit Soni</span></p>
                <p className="text-lg font-medium text-gray-700 mb-2">Personal ID: <span className="font-normal">romitsoni7717@gmail.com</span></p>
                <p className="text-lg font-medium text-gray-700 mb-2">College: <span className="font-normal">IIIT Allahabad</span></p>
            </div>
            <footer className="mt-6 text-center text-gray-500 text-sm">
                <p>Thank you for reaching out!</p>
            </footer>
        </div>
    );
}

export default Contact;
