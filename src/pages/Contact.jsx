import { createSignal } from 'solid-js';
import Section from '../components/reusable/Section';
import Text from '../components/reusable/Text';
import Button from '../components/reusable/Button';

export default function Contact() {
    const [formData, setFormData] = createSignal({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData());
    };

    return (
        <Section className="min-h-screen flex items-center">
            <div class="max-w-2xl mx-auto w-full p-6">
                <Text as="h1" className="text-4xl font-bold text-center mb-8" animate={true}>
                    Contact Us
                </Text>
                
                <form onSubmit={handleSubmit} class="space-y-6 bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                    <div>
                        <Text as="label" for="name" className="block text-sm font-medium mb-2" animate={true}>
                            Name
                        </Text>
                        <input
                            type="text"
                            id="name"
                            class="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-colors duration-200 text-white placeholder-gray-400"
                            onInput={(e) => setFormData({...formData(), name: e.target.value})}
                            required
                        />
                    </div>
                    
                    <div>
                        <Text as="label" for="email" className="block text-sm font-medium mb-2" animate={true}>
                            Email
                        </Text>
                        <input
                            type="email"
                            id="email"
                            class="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-colors duration-200 text-white placeholder-gray-400"
                            onInput={(e) => setFormData({...formData(), email: e.target.value})}
                            required
                        />
                    </div>
                    
                    <div>
                        <Text as="label" for="message" className="block text-sm font-medium mb-2" animate={true}>
                            Message
                        </Text>
                        <textarea
                            id="message"
                            rows="5"
                            class="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-colors duration-200 text-white placeholder-gray-400"
                            onInput={(e) => setFormData({...formData(), message: e.target.value})}
                            required
                        ></textarea>
                    </div>
                    
                    <div class="pt-2">
                        <Button 
                            type="submit"
                            className="w-full py-3 text-lg font-medium"
                            animate={true}
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </Section>
    );
}