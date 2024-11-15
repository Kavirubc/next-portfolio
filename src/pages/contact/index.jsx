import React, { useState } from 'react';
import Head from 'next/head';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';

function Index() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        services: []
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const serviceCategories = [
        "Project Management",
        "Research",
        "Content",
        "Other"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (service) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    message: '',
                    services: []
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Head>
                <title>KH | Contact</title>
            </Head>
            <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <div className='flex flex-row justify-center'>
                <Navbar />
            </div>
            <div className='' style={{ minHeight: 'calc(100vh - 100px)' }}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mt-[50px]">
                        <form onSubmit={handleSubmit} className='space-y-5 font-medium bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm'>
                            <div>
                                <label className='dark:text-white'>Full Name</label>
                                <Input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    aria-label='Full name'
                                    type='text'
                                    required
                                    className='mt-2 focus:border-blue-600 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-white'
                                />
                            </div>
                            <div>
                                <label className='dark:text-white'>Email</label>
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    aria-label='Email'
                                    type='email'
                                    required
                                    className='mt-2 focus:border-blue-600 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-white'
                                />
                            </div>
                            <div>
                                <label className='dark:text-white'>Phone</label>
                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    aria-label='Phone'
                                    type='text'
                                    required
                                    className='mt-2 focus:border-blue-600 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-white'
                                />
                            </div>
                            <div>
                                <label className='dark:text-white'>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    aria-label='Message'
                                    required
                                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-600 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-white shadow-sm rounded-lg'
                                    placeholder="Tell us about your project or requirements..."
                                ></textarea>
                            </div>
                            <div>
                                <label className='dark:text-white'>Reason</label>
                                <ul className='mt-3 grid grid-cols-2 gap-x-4 gap-y-3 font-normal'>
                                    {serviceCategories.map((item, idx) => (
                                        <li key={idx} className='flex gap-x-2 items-center'>
                                            <Checkbox
                                                id={`service-${idx}`}
                                                checked={formData.services.includes(item)}
                                                onChange={() => handleCheckboxChange(item)}
                                                className='dark:bg-gray-700 dark:border-gray-600'
                                            />
                                            <label htmlFor={`service-${idx}`} className='text-sm dark:text-white'>
                                                {item}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='pt-1'>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='w-full text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 ring-offset-2 ring-blue-600 focus:ring dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700'
                                >
                                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                                </Button>
                            </div>
                            {submitStatus === 'success' && (
                                <p className="text-green-600 dark:text-green-400 text-sm text-center">
                                    Thank you for your submission. We will be in touch soon.
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-600 dark:text-red-400 text-sm text-center">
                                    There was an error submitting the form. Please try again.
                                </p>
                            )}
                            {/* <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                By submitting this form, you agree to our{" "}
                                <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
                            </p> */}
                        </form>
                    </div>
                </div>
            </div>
        
            <Footer />
            </div>
        </>
    );
}

export default Index;
