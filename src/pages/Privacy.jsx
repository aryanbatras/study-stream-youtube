import Section from '../components/reusable/Section';
import Text from '../components/reusable/Text';
import Button from '../components/reusable/Button';

export default function Privacy() {
    return (
        <Section className="min-h-screen">
            <div class="max-w-4xl mx-auto px-4 py-12">
                <Text as="h1" className="text-4xl font-bold text-center mb-12" animate={true}>
                    Privacy Policy
                </Text>
                
                <div class="space-y-12">
                    <section class="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                        <Text as="h2" className="text-2xl font-semibold mb-4" animate={true}>
                            1. Information We Collect
                        </Text>
                        <Text className="text-gray-300 leading-relaxed" animate={true}>
                            We collect information that you provide directly to us when you use our services. 
                            This includes information you provide when you create an account, subscribe to our 
                            newsletter, or communicate with us.
                        </Text>
                    </section>

                    <section class="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                        <Text as="h2" className="text-2xl font-semibold mb-4" animate={true}>
                            2. How We Use Your Information
                        </Text>
                        <Text className="text-gray-300 leading-relaxed" animate={true}>
                            We use the information we collect to provide, maintain, and improve our services. 
                            This includes using your information to personalize your experience, process transactions, 
                            and communicate with you about updates and offers.
                        </Text>
                    </section>

                    <section class="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                        <Text as="h2" className="text-2xl font-semibold mb-4" animate={true}>
                            3. Information Sharing
                        </Text>
                        <Text className="text-gray-300 leading-relaxed mb-6" animate={true}>
                            We do not share your personal information with third parties except as described 
                            in this Privacy Policy. We may share information with service providers who assist 
                            us in operating our services, conducting our business, or serving our users.
                        </Text>
                        
                        <div class="mt-8 text-center">
                            <Button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="px-8 py-3"
                                animate={true}
                            >
                                Back to Top
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </Section>
    );
}