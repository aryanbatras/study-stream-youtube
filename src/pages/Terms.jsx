import Section from '../components/reusable/Section';
import Text from '../components/reusable/Text';
import Button from '../components/reusable/Button';

export default function Terms() {
    return (
        <Section className="min-h-screen">
            <div class="max-w-4xl mx-auto px-4 py-12">
                <Text as="h1" className="text-4xl font-bold text-center mb-12" animate={true}>
                    Terms of Service
                </Text>
                
                <div class="space-y-12">
                    <section class="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                        <Text as="h2" className="text-2xl font-semibold mb-4" animate={true}>
                            1. Acceptance of Terms
                        </Text>
                        <Text className="text-gray-300 leading-relaxed" animate={true}>
                            By accessing or using our services, you agree to be bound by these Terms of Service. 
                            If you do not agree with any part of these terms, you may not access the service.
                        </Text>
                    </section>

                    <section class="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                        <Text as="h2" className="text-2xl font-semibold mb-4" animate={true}>
                            2. User Responsibilities
                        </Text>
                        <Text className="text-gray-300 leading-relaxed" animate={true}>
                            You are responsible for maintaining the confidentiality of your account and password. 
                            You agree to accept responsibility for all activities that occur under your account.
                        </Text>
                    </section>

                    <section class="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                        <Text as="h2" className="text-2xl font-semibold mb-4" animate={true}>
                            3. Limitation of Liability
                        </Text>
                        <Text className="text-gray-300 leading-relaxed mb-6" animate={true}>
                            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                            including but not limited to loss of profits, data, use, goodwill, or other intangible losses.
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